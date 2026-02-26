"use client";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useRef } from "react";
import { useTranslation } from "@/lib/useTranslation";

function WarrantyPage() {

  const { t } = useTranslation();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status) {
        alert("Registration successful ✅");
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
            alt="Mechnova Machines Warranty Registration"
            className="w-full h-72 md:h-[22rem] lg:h-[26rem] object-cover"
          />
        </section>

        {/* Paragraph Section */}
        <div className="container mx-auto px-4 max-w-4xl mb-12 mt-12 md:mt-0">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#0072ce] drop-shadow-lg mb-3">
            Warranty Registration 
          </h1>
          <p className="text-center text-xl text-gray-800 font-semibold mb-4">
            {t("dealer.tagline")}
          </p>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
            {t("dealer.intro")}
          </p>
        </div>

        {/* Form Section */}
        <section className="container mx-auto px-4 max-w-2xl pb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-6">
              Warranty Registration Form
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

              {/* Address */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter full address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* Product Code */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Product Code *
                </label>
                <select
                  name="product_code"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select product code
                  </option>
                  <option value="MBC37SC">MBC37SC Brush Cutter</option>
                  <option value="MBC37SBC">MBC37SBC Back Pack Brushcutter</option>
                  <option value="MCS58A-22SN">MCS58A-22SN Chainsaw</option>
                  <option value="MWP1.5X1.5SA">MWP1.5X1.5SA Water Pump</option>
                  <option value="MWP3X3SA">MWP3X3SA Water Pump</option>
                  <option value="ME30A">ME30A Petrol Engine</option>
                  <option value="ME70A">ME70A Petrol Engine</option>
                  <option value="MT900GA-208CC">MT900GA-208CC Power Weeder</option>
                  <option value="MT900GA1-208CC">MT900GA1-208CC Power Weeder</option>
                </select>
              </div>

              {/* Product Serial Number */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Product Serial Number *
                </label>
                <input
                  type="text"
                  name="product_serial_number"
                  placeholder="Enter product serial number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Purchase Proof / Invoice *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#0072ce] transition cursor-pointer">
                  <input
                    type="file"
                    name="invoice"
                    accept=".jpg,.jpeg,.png,.webp,.pdf"
                    required
                    className="hidden"
                    id="fileUpload"
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer block">
                    <p className="text-gray-700 font-medium">
                      Drop your file here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      JPEG, PNG, WEBP, PDF (max 5MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1" />
                <p className="text-sm text-gray-700">
                  I agree to the Terms and Conditions *
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg"
              >
                Submit Registration
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

export default WarrantyPage;
