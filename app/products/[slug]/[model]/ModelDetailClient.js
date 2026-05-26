"use client"
import { useEffect, useState } from 'react'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'
import detailedModelData from '../detailedModelData.json'

export default function ModelDetailClient({ slug, model }) {
  const { t, locale } = useTranslation()
  const [productData, setProductData] = useState(null)
  const [currentModel, setCurrentModel] = useState(null)

  useEffect(() => {
    if (slug && detailedModelData[slug]) {
      const product = detailedModelData[slug]
      const modelData = product.models.find(m => m.code === model)
      setProductData(product)
      setCurrentModel(modelData)
    }
  }, [slug, model])

  if (!productData || !currentModel) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-800">
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const productName = locale === 'en' ? (productData.nameEn || productData.name) : productData.name
  const modelName = locale === 'en' ? (currentModel.nameEn || currentModel.name) : currentModel.name
  const specifications = locale === 'en' ? (currentModel.specificationsEn || currentModel.specifications) : currentModel.specifications
  const features = locale === 'en' ? (currentModel.featuresEn || currentModel.features) : currentModel.features
  const applications = locale === 'en' ? (currentModel.applicationsEn || currentModel.applications) : currentModel.applications
  const warranty = locale === 'en' ? (productData.warrantyEn || productData.warranty) : productData.warranty

  return (
    <>
      <Header />
      <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
      <main className="min-h-screen bg-gray-50">
        {/* Banner */}
        <div className="relative w-full mb-8">
          <img
            src={productData.banner_image}
            alt={productName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {productName}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {currentModel.code}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
          <div className="mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {currentModel.heading}
            </h2>
            <p className="text-base text-gray-600 mb-4 whitespace-pre-line">
              {currentModel.subHeading}
            </p>
          </div>

          {/* Model Leaflet Images */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-4 md:p-8 mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LEFT — YOUTUBE VIDEO */}
              <div className="w-full">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/dR8Go5A0gtI?si=65WWiwTbxRnWtrUn&rel=0&modestbranding=1"
                    title="Product Video"
                    className="absolute top-0 left-0 w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="flex justify-center items-center p-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
                  <img
                    src={currentModel.image}
                    alt={modelName}
                    className="max-h-[600px] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] drop-shadow-sm"
                    onError={(e) => (e.target.src = '/about.webp')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto text-center mb-16">
            {currentModel.nextSubHeading && (
              <p className="text-base text-gray-600 mb-6 max-w-3xl mx-auto whitespace-pre-line">
                {currentModel.nextSubHeading}
              </p>
            )}
            <div className="inline-flex items-center justify-center gap-3 bg-white px-6 py-2.5 rounded-full border border-gray-200/80 shadow-sm">
              <span className="text-gray-500 font-medium">Model</span>
              <div className="w-px h-4 bg-gray-300"></div>
              <span className="text-[#0072ce] font-semibold text-xl tracking-wide">{currentModel.code}</span>
            </div>
          </div>

          {/* Product Leaflet Section — dynamic per model */}
          {(currentModel.leaflet_image_1 || currentModel.leaflet_image_2) && (
            <div className="mb-16">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200 max-w-[120px]"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800 tracking-tight">Product Leaflet</h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200 max-w-[120px]"></div>
              </div>

              {/* Leaflet Images Grid */}
              <div className={`grid grid-cols-1 gap-6 ${currentModel.leaflet_image_1 && currentModel.leaflet_image_2 ? 'md:grid-cols-2' : ''}`}>
                {/* Leaflet Page 1 */}
                {currentModel.leaflet_image_1 && (
                  <div
                    className="group relative rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100/60 overflow-hidden cursor-zoom-in"
                    onClick={() => { const w = window.open(); w.document.write(`<img src="${currentModel.leaflet_image_1}" style="max-width:100%;height:auto;display:block;margin:auto;" />`); w.document.close(); }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 z-10 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                        <svg className="w-4 h-4 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">View Full</span>
                      </div>
                    </div>
                    <img
                      src={currentModel.leaflet_image_1}
                      alt="Product Leaflet Page 1"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      onError={e => e.target.src = '/about.webp'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072ce] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Leaflet Page 2 */}
                {currentModel.leaflet_image_2 && (
                  <div
                    className="group relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100/60 overflow-hidden cursor-zoom-in"
                    onClick={() => { const w = window.open(); w.document.write(`<img src="${currentModel.leaflet_image_2}" style="max-width:100%;height:auto;display:block;margin:auto;" />`); w.document.close(); }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 z-10 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                        <svg className="w-4 h-4 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">View Full</span>
                      </div>
                    </div>
                    <img
                      src={currentModel.leaflet_image_2}
                      alt="Product Leaflet Page 2"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      onError={e => e.target.src = '/about.webp'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072ce] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
              </div>

              {/* Hint */}
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Click on any image to view full size
              </p>
            </div>
          )}

          {/* Product Image and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
            {/* Product Image */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-8 relative overflow-hidden group flex-grow flex items-center justify-center">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-blue-50/50 rounded-full blur-3xl"></div>
                </div>
                <img
                  src={currentModel.image}
                  alt={modelName}
                  className="w-full h-auto max-h-[400px] object-contain transition-transform duration-700 ease-out group-hover:scale-105 relative z-10"
                  onError={e => e.target.src = '/about.webp'}
                />
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/contact" className='bg-[#0072ce] hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,114,206,0.39)] hover:shadow-[0_6px_20px_rgba(0,114,206,0.23)] hover:-translate-y-0.5'>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t('home.productsPage.requestQuote')}
                </Link>
                <Link href="tel:+917428642333" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(5,150,105,0.39)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.23)] hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('home.productsPage.callUs')}
                </Link>
              </div>
            </div>

            {/* Product Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Specifications */}
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-8 flex-grow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/30 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-1.5 h-6 bg-[#0072ce] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                    {t('home.productsPage.specifications')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {specifications.split('\n').filter(Boolean).map((spec, index) => (
                    <div key={index} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0 sm:border-0 sm:py-1">
                      <svg className="w-4 h-4 text-[#0072ce]/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm md:text-base">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-8 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                    {t('home.productsPage.keyFeatures')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0 sm:border-0 sm:py-1">
                      <div className="mt-0.5 bg-emerald-50 rounded-full p-0.5 flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-8 md:p-10 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {t('home.productsPage.frequentlyAskedQuestions')}
            </h3>
            <div className="space-y-3 max-w-4xl mx-auto">
              {productData.faqs.map((faq, index) => (
                <details key={index} className="group bg-white border border-gray-100 rounded-xl [&_summary::-webkit-details-marker]:hidden hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-200">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-5 font-medium text-gray-800 hover:text-[#0072ce] transition-colors select-none">
                    <span className="pr-6 text-sm md:text-base">
                      {locale === 'en' ? faq.questionEn : faq.question}
                    </span>
                    <span className="flex-shrink-0 ml-4 relative w-5 h-5 flex items-center justify-center">
                      <span className="absolute w-4 h-0.5 bg-gray-400 group-open:bg-[#0072ce] transition-colors rounded-full"></span>
                      <span className="absolute w-0.5 h-4 bg-gray-400 group-open:bg-[#0072ce] group-open:rotate-90 group-open:opacity-0 transition-all duration-300 rounded-full"></span>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50/50 pt-3">
                    {locale === 'en' ? faq.answerEn : faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center pb-4">
            <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0072ce] font-medium transition-colors duration-200 px-6 py-2 rounded-lg hover:bg-blue-50/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('home.productsPage.backToProducts')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
