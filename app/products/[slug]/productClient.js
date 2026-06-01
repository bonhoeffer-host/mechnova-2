"use client"
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'
import categoryDataEs from '../category-es.json'
import categoryDataEn from '../category-en.json'
import categoryDataBn from '../category-bn.json'
import categoryDataMr from '../category-mr.json'
import categoryDataTe from '../category-te.json'
import categoryDataGj from '../category-gj.json'
import detailedModelData from './detailedModelData.json'
import modelDataEn from './modelData-en.json'
import modelDataEs from './modelData-es.json'
import modelDataHi from './modelData-hi.json'
import modelDataBn from './modelData-bn.json'
import modelDataMr from './modelData-mr.json'
import modelDataTe from './modelData-te.json'
import modelDataGj from './modelData-gj.json'
import { 
  ChainsawSEOIntro, 
  ChainsawSEOFeatures, 
  ChainsawSEOUses, 
  ChainsawSEOConclusion,
  BrushCutterSEOTop, 
  BrushCutterSEOBottom,
  PowerWeederSEOIntro,
  PowerWeederSEOBottom,
  GasolineWaterPumpSEOIntro,
  GasolineWaterPumpSEOBottom,
  GasolineEngineSEOIntro, 
  GasolineEngineSEOBottom, 
  GasolineTillerSEOIntro,
  GasolineTillerSEOBottom,
  SprayerSEOTop, 
  SprayerSEOBottom,
} from '@/components/sections/SEOModules'

function ModelCard({ slug, model }) {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,114,206,0.15)] transition-all duration-500 p-6 flex flex-col group relative overflow-hidden border border-gray-100">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10 pointer-events-none"></div>
      
      <div className="flex-grow flex items-center justify-center mb-8 relative z-10 bg-gray-50/80 rounded-2xl p-6 transition-colors duration-500 group-hover:bg-transparent border border-gray-50/50 group-hover:border-transparent">
        <img 
          src={model.image} 
          alt={model.name} 
          className="w-full max-h-[180px] object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700 ease-out" 
          onError={e => e.target.src='/about.webp'} 
        />
      </div>
      <div className="text-center mt-auto relative z-10">
        <div className="inline-block bg-[#0072ce]/10 px-4 py-1.5 rounded-full mb-4">
          <h3 className="font-bold text-sm text-[#0072ce] tracking-widest uppercase">{model.code}</h3>
        </div>
        <Link 
          href={`/products/${slug}/${model.code}`} 
          className="w-full group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 w-full h-full bg-[#0072ce] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">{t('home.productsPage.exploreModels')}</span>
          <svg className="w-5 h-5 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  )
}

export default function ProductSlugPage() {
  const { slug } = useParams()
  const { t, locale } = useTranslation()
  const [productData, setProductData] = useState(null)
  const [categoryInfo, setCategoryInfo] = useState(null)
  const [isDetailedProduct, setIsDetailedProduct] = useState(false)
  const [oldProductData, setOldProductData] = useState(null)
  const sliderRefs = useRef([]);

  useEffect(() => {
    if (slug) {
      const categoryData =
        locale === 'en' ? categoryDataEn :
        locale === 'es' ? categoryDataEs :
        locale === 'bn' ? categoryDataBn :
        locale === 'mr' ? categoryDataMr :
        locale === 'te' ? categoryDataTe :
        locale === 'gj' ? categoryDataGj :
        categoryDataEn;

      let foundProduct = null
      let foundCategory = null
        
      Object.entries(categoryData).forEach(([categoryKey, category]) => {
        if (category.products && category.products[slug]) {
          foundProduct = { key: slug, ...category.products[slug] }
          foundCategory = { key: categoryKey, ...category }
        }
      })
    
      setCategoryInfo(foundCategory)
      
      if (foundProduct && foundProduct.detail === "yes" && detailedModelData[slug]) {
        
        setProductData(detailedModelData[slug])
        setIsDetailedProduct(true)
        setOldProductData(null)
      } else {
        const modelDataMap = {
          en: modelDataEn,
          es: modelDataEs,
          hi: modelDataHi || modelDataEn,
          bn: modelDataBn || modelDataEn, 
          mr: modelDataMr, 
          te: modelDataTe,
          gj: modelDataGj,
        };

        const modelData = modelDataMap[locale] || modelDataEn;
        const oldProduct = modelData[slug]
        if (oldProduct) {
          if (oldProduct.detail === "yes" && detailedModelData[slug]) {
            setProductData(detailedModelData[slug])
            setIsDetailedProduct(true)
            setOldProductData(null)
          } else {
            setOldProductData(oldProduct)
            setIsDetailedProduct(false)
            setProductData(null)
          }
        } else {
          setOldProductData(null)
          setProductData(null)
          setIsDetailedProduct(false)
        }
      }
    }
  }, [slug, locale])

  useEffect(() => {
    if (!oldProductData || !oldProductData.models) return;
    const intervals = [];
    oldProductData.models.forEach((model, index) => {
      const slider = sliderRefs.current[index];
      if (!slider) return;
      const images = Array.isArray(model.images) && model.images.length > 0 ? model.images : [model.image];
      const totalImages = images.length;
      if (totalImages <= 1) return;
      let slideIndex = 0;
      const interval = setInterval(() => {
        slideIndex = (slideIndex + 1) % totalImages;
        slider.scrollTo({
          left: slider.clientWidth * slideIndex,
          behavior: "smooth",
        });
      }, 3000);
      intervals.push(interval);
    });
    return () => intervals.forEach(clearInterval);
  }, [oldProductData]);

  if (!productData && !oldProductData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('home.productsPage.productNotFound')}</h2>
            <p className="text-gray-600 mb-6">{t('home.productsPage.productNotAvailable')}</p>
            <Link href="/products" className="text-[#0072ce] hover:text-blue-700 font-medium">
              ← {t('home.productsPage.backToProducts')}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Non-detailed View
  if (!isDetailedProduct && oldProductData) {
    
    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-12">
          <div className="relative w-full mb-10">
            <img src="/mechnova/banner/banner-m.webp" alt="Productos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="px-8 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{oldProductData.name}</h1>
                <p className="text-lg md:text-2xl text-blue-100">{oldProductData.description}</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {slug === 'chainsaw' && locale === 'en' && <ChainsawSEOIntro />}
            {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOTop />}
            {slug === 'sprayer' && locale === 'en' && <SprayerSEOTop />}
            <div className="max-w-5xl mx-auto flex flex-col gap-12 mt-10">
              {oldProductData.models && oldProductData.models.length > 0 ? (
                oldProductData.models
                  .sort((a, b) => Number(a.id) - Number(b.id))
                  .map((model, idx) => (
                    <div key={model.code} className={`flex flex-col md:flex-row items-stretch bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-all duration-500 border border-gray-100/80 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      
                      {/* Image Side - Distinct Background */}
                      <div className="w-full md:w-2/5 flex justify-center items-center relative bg-gradient-to-br from-gray-50 to-gray-100/80 p-8 min-h-[300px]">
                        <div ref={(el) => (sliderRefs.current[idx] = el)} style={{ display: "flex", overflowX: "auto", scrollBehavior: "smooth", scrollbarWidth: "none" }} className="w-full relative z-10">
                          {Array.isArray(model.images) && model.images.length > 0 ? (
                            model.images.map((image, i) => (
                              <div key={i} className="w-full flex-shrink-0 relative snap-center flex justify-center items-center">
                                <img src={image} alt={`${model.name} Image ${i + 1}`} className="w-full max-h-[320px] object-contain drop-shadow-xl hover:scale-110 transition-transform duration-700 ease-out" onError={(e) => { e.target.src = oldProductData.error_image || '/about.webp'; }} />
                              </div>
                            ))
                          ) : (
                            <div className="w-full flex-shrink-0 relative snap-center flex justify-center items-center">
                              <img src={model.image} alt={model.name} className="w-full max-h-[320px] object-contain drop-shadow-xl hover:scale-110 transition-transform duration-700 ease-out" onError={(e) => { e.target.src = oldProductData.error_image || '/about.webp'; }} />
                            </div>
                          )}
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                          <div className="w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                          <h2 className="text-8xl font-black text-gray-900 tracking-tighter hidden lg:block">{String(idx + 1).padStart(2, '0')}</h2>
                        </div>
                        
                        <div className="inline-flex items-center gap-2 bg-[#0072ce]/10 px-4 py-1.5 rounded-full mb-6 self-start relative z-10">
                          <span className="w-2 h-2 rounded-full bg-[#0072ce] animate-pulse"></span>
                          <span className="text-[#0072ce] text-sm font-bold uppercase tracking-widest">{model.code}</span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight relative z-10">{model.name}</h3>
                        
                        <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 mb-8 relative z-10 hover:bg-gray-50 transition-colors duration-300">
                          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200/60">
                            <div className="bg-white p-2.5 rounded-xl shadow-sm text-[#0072ce]">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 block text-sm mb-0.5">{t('home.productsPage.warranty')}</span>
                              <span className="text-gray-600 font-medium">{model.warranty}</span>
                            </div>
                          </div>
                          
                          <div className="pt-2">
                            <span className="font-bold text-gray-900 block mb-3 text-lg flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#0072ce]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                              {t('home.productsPage.specificationsLabel')}
                            </span>
                            <div className="text-gray-600 text-[15px] md:text-base leading-relaxed whitespace-pre-line pl-7 relative font-medium">
                              <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#0072ce]/50 to-transparent rounded-full"></div>
                              {model.specifications}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto relative z-10">
                          <Link href="/contact" className="w-full sm:w-auto flex-1">
                            <button className="w-full group relative overflow-hidden flex items-center justify-center gap-2 bg-[#0072ce] hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,114,206,0.39)] hover:shadow-[0_6px_20px_rgba(0,114,206,0.23)] hover:-translate-y-0.5">
                              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                              <span className="relative z-10">{t('home.productsPage.requestQuote')}</span>
                            </button>
                          </Link>
                          <Link href="tel:+917428642333" className="w-full sm:w-auto flex-1">
                            <button className="w-full group relative overflow-hidden flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(5,150,105,0.39)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.23)] hover:-translate-y-0.5">
                              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                              <span className="relative z-10">{t('home.productsPage.callUs')}</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center text-gray-500">{t('home.productsPage.noModelsAvailable')}</div>
              )}
            </div>

            {slug === 'chainsaw' && locale === 'en' && (
              <div className="mt-16 space-y-4">
                <ChainsawSEOFeatures />
                <ChainsawSEOUses />
                <ChainsawSEOConclusion />
              </div>
            )}

            <div className="mt-20 flex justify-center pb-8">
              <Link href="/products" className="group inline-flex items-center gap-3 bg-white border-2 border-gray-100 hover:border-[#0072ce] hover:bg-blue-50/20 text-gray-700 hover:text-[#0072ce] font-bold text-lg py-4 px-10 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <svg className="w-6 h-6 transform group-hover:-translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                {t('home.productsPage.backToProductsButton')}
              </Link>
            </div>
            {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOBottom />}
            {slug === 'sprayer' && locale === 'en' && <SprayerSEOBottom />}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Detailed View
  if (isDetailedProduct && productData) {
   
    const productName = locale === 'en' ? (productData.nameEn || productData.name) : productData.name
    const productDescription = locale === 'en' ? (productData.descriptionEn || productData.description) : productData.description

    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen pb-12">
          <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
          <div className="relative w-full mb-10">
            <img src={productData.banner_image || productData.hero_image} alt={productName} className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="px-8 md:px-20">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{productName}</h1>
                <p className="text-lg md:text-xl text-blue-100">{productDescription}</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {slug === 'chainsaw' && locale === 'en' && <ChainsawSEOIntro />}
            {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOTop />}
            { slug === 'sprayer' && locale === 'en' && <SprayerSEOTop />}
            {slug === 'gasoline-water-pump' && locale === 'en' && <GasolineWaterPumpSEOIntro />}
            {slug === 'power-weeder' && locale === 'en' && <PowerWeederSEOIntro />}
            {slug === 'gasoline-tiller' && locale === 'en' && <GasolineTillerSEOIntro />}
            {slug === 'gasoline-engine' && locale === 'en' && <GasolineEngineSEOIntro />}
            <div className="mt-10">
              {!(slug === 'gasoline-tiller' && locale === 'en') && (
              <div className="mb-12 text-center relative">
                <div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#0072ce] px-5 py-2 rounded-full mb-6 border border-blue-100/50 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0072ce] animate-pulse"></span>
                  <span className="text-sm font-bold tracking-widest uppercase">Premium Collection</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{t('home.productsPage.availableModels')}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-medium">{t('home.productsPage.chooseFromSelection')}</p>
              </div>
             )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productData.models.map((model, index) => (
                  <ModelCard key={model.code || index} slug={slug} model={model} />
                ))}
              </div>

              {slug === 'chainsaw' && locale === 'en' && (
                <div className="mt-16 space-y-4">
                  <ChainsawSEOFeatures />
                  <ChainsawSEOUses />
                  <ChainsawSEOConclusion />
                </div>
              )}
              {!(slug === 'gasoline-tiller' && locale === 'en') && (
              <div className="mt-20 text-center pb-8">
                <Link href="/products" className="group inline-flex items-center gap-3 bg-white border-2 border-gray-100 hover:border-[#0072ce] hover:bg-blue-50/20 text-gray-700 hover:text-[#0072ce] font-bold text-lg py-4 px-10 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <svg className="w-6 h-6 transform group-hover:-translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  {t('home.productsPage.backToProducts')}
                </Link>
              </div>
              )}
              {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOBottom />}
              {slug === 'sprayer' && locale === 'en' && <SprayerSEOBottom />}
              {slug === 'gasoline-water-pump' && locale === 'en' && <GasolineWaterPumpSEOBottom />}
              {slug === 'power-weeder' && locale === 'en' && <PowerWeederSEOBottom />}
              {slug === 'gasoline-tiller' && locale === 'en' && <GasolineTillerSEOBottom />}
              {slug === 'gasoline-engine' && locale === 'en' && <GasolineEngineSEOBottom />}
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return null
}