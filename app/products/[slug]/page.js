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
  GasolineWaterPumpSEOIntro,
  GasolineEngineSEOIntro, 
} from '@/components/sections/SEOModules'

function ModelCard({ slug, model }) {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
      <img 
        src={model.image} 
        alt={model.name} 
        className="w-full object-contain mb-4 rounded" 
        onError={e => e.target.src='/about.webp'} 
      />
      <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">{model.code}</h3>
      <div className="mt-auto">
        <Link 
          href={`/products/${slug}/${model.code}`} 
          className="w-full inline-block bg-[#0072ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition text-center"
        >
          {t('home.productsPage.exploreModels')}
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
            {slug === 'gasoline-water-pump' && locale === 'en' && <GasolineWaterPumpSEOIntro />}
            {slug === 'gasoline-engine' && locale === 'en' && <GasolineEngineSEOIntro />}
            <div className="max-w-5xl mx-auto flex flex-col gap-12 mt-10">
              {oldProductData.models && oldProductData.models.length > 0 ? (
                oldProductData.models
                  .sort((a, b) => Number(a.id) - Number(b.id))
                  .map((model, idx) => (
                    <div key={model.code} className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-full h-full md:w-2/5 flex justify-center items-center relative">
                        <div ref={(el) => (sliderRefs.current[idx] = el)} style={{ display: "flex", overflowX: "auto", scrollBehavior: "smooth", scrollbarWidth: "none" }} className="h-full">
                          {Array.isArray(model.images) && model.images.length > 0 ? (
                            model.images.map((image, i) => (
                              <div key={i} className="w-full flex-shrink-0 h-full relative snap-center">
                                <img src={image} alt={`${model.name} Image ${i + 1}`} className="rounded-lg shadow-lg bg-white w-full h-full object-cover" onError={(e) => { e.target.src = oldProductData.error_image || '/about.webp'; }} />
                              </div>
                            ))
                          ) : (
                            <div className="w-full flex-shrink-0 h-full relative snap-center">
                              <img src={model.image} alt={model.name} className="rounded-lg shadow-lg bg-white w-full h-full object-cover" onError={(e) => { e.target.src = oldProductData.error_image || '/about.webp'; }} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center bg-gray-50 rounded-lg p-6 shadow">
                        <h3 className="text-xl font-semibold text-[#0072ce] mb-2">{model.name}</h3>
                        <p className="mb-1"><span className="font-bold">{t('home.productsPage.code')}</span> {model.code}</p>
                        <p className="mb-1"><span className="font-bold">{t('home.productsPage.warranty')}</span> {model.warranty}</p>
                        <p className="whitespace-pre-line"><span className="font-bold">{t('home.productsPage.specificationsLabel')}</span> <br /> {model.specifications}</p>
                        <span className="flex flex-col md:flex-row items-start md:items-center mt-4 gap-4">
                          <Link href="/contact"><button className="p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">{t('home.productsPage.requestQuote')}</button></Link>
                          <Link href="tel:+917428642333"><button className="md:ml-4 p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">{t('home.productsPage.callUs')}</button></Link>
                        </span>
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

            <div className="mt-16 flex justify-center">
              <Link href="/products">
                <button className="bg-[#0072ce] text-white text-xl font-medium p-4 rounded-xl cursor-pointer hover:scale-110 transition-all">{t('home.productsPage.backToProductsButton')}</button>
              </Link>
            </div>
            {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOBottom />}
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
            {slug === 'power-weeder' && locale === 'en' && <PowerWeederSEOIntro />}
            <div className="mt-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] text-center mb-2">{t('home.productsPage.availableModels')}</h2>
                <p className="text-gray-600 text-center">{t('home.productsPage.chooseFromSelection')}</p>
              </div>

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

              <div className="mt-12 text-center">
                <Link href="/products" className="inline-flex items-center gap-2 text-[#0072ce] hover:text-blue-700 font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  {t('home.productsPage.backToProducts')}
                </Link>
              </div>
              {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOBottom />}
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return null
}