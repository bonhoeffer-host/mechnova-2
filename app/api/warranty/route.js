// app/api/warranty/route.js
import { NextResponse } from "next/server";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getDb } from "@/lib/db";
import { r2, R2_BUCKET, R2_PUBLIC_URL } from "@/lib/r2";

export const runtime = "nodejs";           // mysql2 needs Node runtime, not Edge
export const dynamic = "force-dynamic";

const ALLOWED_MIME = {
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "application/pdf": "pdf",
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req) {
  let uploadedKey = null;

  try {
    const formData = await req.formData();

    const customerName  = String(formData.get("customer_name")  || "").trim();
    const contactNumber = String(formData.get("contact_number") || "").trim();
    const address       = String(formData.get("address")        || "").trim();
    const productCode   = String(formData.get("product_code")   || "").trim();
    const serialNumber  = String(formData.get("product_serial_number") || "").trim();
    const termsAccepted = formData.get("terms_accepted");

    // ---- validation ----
    if (!customerName || !contactNumber || !address || !productCode || !serialNumber) {
      return NextResponse.json({ status: false, message: "All required fields must be filled" }, { status: 400 });
    }
    if (!/^\d{10,15}$/.test(contactNumber.replace(/\s/g, ""))) {
      return NextResponse.json({ status: false, message: "Invalid contact number" }, { status: 400 });
    }
    if (!termsAccepted) {
      return NextResponse.json({ status: false, message: "You must accept the terms and conditions" }, { status: 400 });
    }

    // ---- file ----
    const file = formData.get("invoice");
    if (!file || typeof file === "string" || file.size === 0) {
      return NextResponse.json({ status: false, message: "Purchase proof file is required" }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ status: false, message: "File size must not exceed 5MB" }, { status: 400 });
    }
    if (!ALLOWED_MIME[file.type]) {
      return NextResponse.json({ status: false, message: "Only JPEG, PNG, WEBP and PDF files are allowed" }, { status: 400 });
    }

    const ext = ALLOWED_MIME[file.type];
    const buffer = Buffer.from(await file.arrayBuffer());

    // ---- upload to R2 ----
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm   = String(now.getMonth() + 1).padStart(2, "0");
    const uid  = crypto.randomUUID().replace(/-/g, "").slice(0, 16);
    const safeName = (file.name || `invoice.${ext}`).replace(/[^A-Za-z0-9._-]/g, "_");
    uploadedKey = `uploads/invoice/${yyyy}/${mm}/${uid}_${safeName}`;

    await r2.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: uploadedKey,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const invoiceUrl = `${R2_PUBLIC_URL}/${uploadedKey}`;

    // ---- insert into MySQL ----

    const db = getDb();
    const [result] = await db.execute(
      `INSERT INTO warranty_registrations
         (customer_name, contact_number, address, product_code,
          product_serial_number, invoice_url, invoice_key)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [customerName, contactNumber, address, productCode, serialNumber, invoiceUrl, uploadedKey]
    );

    return NextResponse.json({
      status: true,
      message: "Registration successful",
      id: result.insertId,
      invoice_url: invoiceUrl,
    });
  } catch (err) {
    console.error("[WARRANTY] error:", err);

    // cleanup orphan R2 file if DB failed
    if (uploadedKey) {
      try {
        await r2.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: uploadedKey }));
      } catch (e) {
        console.error("[WARRANTY] R2 cleanup failed:", e);
      }
    }

//     return NextResponse.json(
//       { status: false, message: "Server error. Please try again." },
//       { status: 500 }
//     );
//   }

    const detail = {
      name: err?.name || "Error",
      code: err?.code || null,          // e.g. ER_DUP_ENTRY, ER_BAD_FIELD_ERROR
      errno: err?.errno || null,        // MySQL error number
      sqlState: err?.sqlState || null,  // MySQL SQLSTATE
      sqlMessage: err?.sqlMessage || null,
      message: err?.message || "Unknown error",
    };

    return NextResponse.json(
      {
        status: false,
        message: detail.sqlMessage,
        message: detail.message,
        error: detail,
      },
      { status: 500 }
    );
  }
}