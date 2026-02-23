"use client";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

function WarrantyPage() {
  const { t } = useTranslation();
  const whyReasons = ["why1", "why2", "why3", "why4", "why5", "why6", "why7"];
  const idealReasons = ["ideal1", "ideal2", "ideal3", "ideal4", "ideal5"];
  const offerReasons = ["offer1", "offer2", "offer3", "offer4", "offer5", "offer6"];
  const [showModal, setShowModal] = useState(false);
  const timerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      timerRef.current = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) formRef.current.reset();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff]">
        <div className="block" style={{ height: "4.5em" }} aria-hidden="true" />
        <section className="relative w-full flex items-center justify-center overflow-hidden mb-14">
          <img
            src="/mechnova/banner/banner-m.webp"
            alt="Become a Dealer Hero"
            className="w-full h-72 md:h-[22rem] lg:h-[26rem] object-cover"
          />
        </section>

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

        {/* Why Become a MECHNOVA Dealer */}
        <section className="container mx-auto px-4 py-14 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] mb-6">
            {t("dealer.whyTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((key) => (
              <div
                key={key}
                className="bg-white rounded-3xl shadow-lg border border-blue-100 px-7 py-8 flex flex-col gap-3 hover:-translate-y-1.5 hover:shadow-2xl transition-all min-h-[220px]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-[#0072ce] text-xl">
                    ✓
                  </span>
                  <p className="font-semibold text-gray-900 text-base md:text-lg">
                    {t(`dealer.${key}`)}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0072ce] text-white text-sm font-semibold shadow hover:bg-[#005bb5] transition self-start"
                  onClick={() => {
                    const el = document.getElementById("dealer-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("dealer.submitFormBtn")}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal For */}
        <section className="container mx-auto px-4 py-14 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] mb-6">
            🏭 {t("dealer.idealForTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealReasons.map((key) => (
              <div
                key={key}
                className="bg-white rounded-3xl shadow-md border border-blue-100 px-6 py-7 flex items-start gap-3 hover:-translate-y-1 hover:shadow-xl transition-all min-h-[170px]"
              >
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#0072ce]">
                  •
                </span>
                <p className="text-gray-900 text-base md:text-lg font-medium">
                  {t(`dealer.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="container mx-auto px-4 py-14 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] mb-6">
            📦 {t("dealer.offerTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerReasons.map((key) => (
              <div
                key={key}
                className="bg-white rounded-3xl shadow-md border border-blue-100 px-6 py-7 flex items-start gap-3 hover:-translate-y-1 hover:shadow-xl transition-all min-h-[170px]"
              >
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#0072ce]">
                  🔹
                </span>
                <p className="text-gray-900 text-base md:text-lg font-medium">
                  {t(`dealer.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dealer Inquiry Form */}
        <section className="container mx-auto px-4 max-w-2xl pb-10" id="dealer-form">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-start">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-2">
              {t("dealer.formTitle")}
            </h2>
            <form
              ref={formRef}
              className="flex flex-col gap-5 w-full"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.companyName")}*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.email")}*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.phoneNumber")}*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.address")}*
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="postal" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.postalCode")}*
                  </label>
                  <input
                    type="text"
                    id="postal"
                    name="postal"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="city" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.city")}*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.country")}*
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="brands" className="block text-gray-700 font-semibold mb-1">
                    {t("dealer.currentBrands")}
                  </label>
                  <input
                    type="text"
                    id="brands"
                    name="brands"
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" id="consent" name="consent" required className="mt-1" />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  {t("dealer.consentText")}
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer"
              >
                {t("dealer.submit")}
              </button>
            </form>
          </div>
        </section>

        {/* Dealer Onboarding Process */}
        <section className="container mx-auto px-4 py-14 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] mb-6">
            {t("dealer.onboardingTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className="bg-white rounded-3xl shadow-md border border-blue-100 px-5 py-7 flex flex-col items-start gap-3"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0072ce] text-white font-bold">
                  {step}
                </span>
                <p className="text-gray-900 text-sm md:text-base font-medium">
                  {t(`dealer.step${step}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Grow With Confidence */}
        <section className="container mx-auto px-4 py-14 max-w-4xl">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-blue-100 px-10 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] mb-4">
              {t("dealer.growTitle")}
            </h2>
            <p className="text-gray-700 text-lg">
              {t("dealer.growPara")}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-10 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] mb-2 text-center">
            {t("dealer.ctaTitle")}
          </h2>
          <p className="text-center text-gray-700 text-lg mb-6">
            {t("dealer.ctaSub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#dealer-form"
              className="px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg"
            >
              {t("dealer.submitFormBtn")}
            </a>
            <Link
              href="tel:+917428642333"
              className="px-6 py-3 bg-white border-2 border-[#0072ce] text-[#0072ce] font-semibold rounded-full hover:bg-[#0072ce] hover:text-white transition-all text-lg"
            >
              {t("dealer.callUs")}
            </Link>
          </div>
        </section>

        {/* Thank You Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#0072ce] mb-4">
                {t("dealer.thankYou")}
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                {t("dealer.thankYouMessage")}
                <br />
                {t("dealer.redirectMessage")}
              </p>
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-[#0072ce] text-white rounded-full font-semibold hover:scale-105 transition"
              >
                {t("dealer.close")}
              </button>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default WarrantyPage;
