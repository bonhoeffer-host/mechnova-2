"use client";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useRef } from "react";
import { useTranslation } from "@/lib/useTranslation";
import Image from "next/image";

function SparePartsPage() {

  const { t } = useTranslation();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://blog.mechnovamachines.in/warranty_save/warranty_save.php", {
        method: "POST",
        body: formData,
      });

        const text = await res.text(); // read raw response

    console.log("Server Response:", text);

    const data = JSON.parse(text);

      if (data.status) {
        alert("Spare parts request submitted successfully ✅");
        if (formRef.current) formRef.current.reset();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error");
    }
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff]">
        <div className="block" style={{ height: "4.5em" }} aria-hidden="true" />

        {/* Banner */}
        <section className="relative w-full flex items-center justify-center overflow-hidden mb-14 hidden md:block">
          <img
            src="/mechnova/banner/product-banner.webp"
            alt="Mechnova Machines Spare Parts Request"
            className="w-full h-72 md:h-[22rem] lg:h-[26rem] object-cover"
          />
        </section>

        {/* Paragraph Section with Image */}
        <div className="container mx-auto px-4 max-w-5xl mb-12 mt-12 md:mt-0">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Text Content */}
            <div className="w-full text-center">
              <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#0072ce] drop-shadow-lg mb-3">
                Spare Parts Request
              </h1>
              <p className="text-center text-xl text-gray-800 font-semibold mb-4">
                {t("dealer.tagline")}
              </p>
              <p className="text-center text-gray-700 text-lg">
                Request genuine spare parts for your Mechnova machines. Fill out the form below and our team will get back to you with availability and pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <section className="container mx-auto px-4 max-w-2xl pb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-6">
              Spare Parts Request Form
            </h2>

            <form
              ref={formRef}
              className="flex flex-col gap-6 w-full"
              onSubmit={handleSubmit}
            >
              {/* Customer Name */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  name="customer_name"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Contact Number *
                </label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg whitespace-nowrap">
                    <span className="mr-1">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    name="contact_number"
                    placeholder="Enter your contact number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email_id"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Product Name / Model */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Product Name / Model *
                </label>
                <input
                  type="text"
                  name="product_model"
                  placeholder="Enter product name or model"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Spare Part Required */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Spare Part *
                </label>
                <input
                  type="text"
                  name="spare_part"
                  placeholder="Enter spare part name/number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity required"
                  min="1"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  placeholder="Enter complete address with pincode"
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Remarks (if any) */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Remarks (if any)
                </label>
                <textarea
                  name="remarks"
                  placeholder="Any additional details or special instructions"
                  rows="2"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1" />
                <p className="text-sm text-gray-700">
                  I confirm that the information provided is accurate and I agree to the Terms and Conditions *
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg"
              >
                Submit Spare Parts Request
              </button>
            </form>

          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SparePartsPage;
