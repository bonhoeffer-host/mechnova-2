"use client";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useRef } from "react";
import { useTranslation } from "@/lib/useTranslation";

function WarrantyPage() {
  const { t } = useTranslation();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) formRef.current.reset();
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff]">
        <div className="block" style={{ height: "4.5em" }} aria-hidden="true" />

        {/* Banner */}
        <section className="relative w-full flex items-center justify-center overflow-hidden mb-14">
          <img
            src="/mechnova/banner/banner-m.webp"
            alt="Become a Dealer Hero"
            className="w-full h-72 md:h-[22rem] lg:h-[26rem] object-cover"
          />
        </section>

        {/* Paragraph Section */}
        <div className="container mx-auto px-4 max-w-4xl mb-12">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#0072ce] drop-shadow-lg mb-3">
            {t("dealer.title")}
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
              {t("dealer.formTitle")}
            </h2>

            <form
              ref={formRef}
              className="flex flex-col gap-5 w-full"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <input
                  type="text"
                  name="company"
                  placeholder={t("dealer.companyName")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("dealer.email")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("dealer.phoneNumber")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="text"
                  name="address"
                  placeholder={t("dealer.address")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="text"
                  name="postal"
                  placeholder={t("dealer.postalCode")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="text"
                  name="city"
                  placeholder={t("dealer.city")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="text"
                  name="country"
                  placeholder={t("dealer.country")}
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
                <input
                  type="text"
                  name="brands"
                  placeholder={t("dealer.currentBrands")}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" name="consent" required className="mt-1" />
                <span className="text-sm text-gray-700">
                  {t("dealer.consentText")}
                </span>
              </div>

              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg"
              >
                {t("dealer.submit")}
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
