"use client"
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import categoryDataEs from './category-es.json'
import categoryDataEn from './category-en.json'
import categoryDataHi from './category-hi.json'
import categoryDataBn from './category-bn.json'
import categoryDataMr from './category-mr.json'
import categoryDataTe from './category-te.json'
import categoryDataGj from './category-gj.json'

import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'
import { useState } from 'react'

export default function ProdPage() {
  const { t, locale } = useTranslation()
  
  const categoryData = locale === 'en'
    ? categoryDataEn
    : locale === 'es'
      ? categoryDataEs
      : locale === 'bn'
        ? categoryDataBn
        : locale === 'mr' 
            ? categoryDataMr
          : locale === 'te' 
            ? categoryDataTe
            : locale === 'gj' 
            ? categoryDataGj
        : categoryDataHi;

  
  // Flatten all products across categories into a single array
  const allProducts = Object.entries(categoryData)
    .sort((a, b) => Number(a[1].id) - Number(b[1].id))
    .flatMap(([catKey, category]) => {
      return Object.entries(category.products || {})
        .map(([prodKey, value]) => ({ key: prodKey, categoryKey: catKey, categoryName: category.name, ...value }))
        .sort((a, b) => Number(a.id) - Number(b.id))
        .filter(p => p.key !== "gasoline-tiller")
    });

  const [activeProductKey, setActiveProductKey] = useState(allProducts[0]?.key);
  const activeProduct = allProducts.find(p => p.key === activeProductKey) || allProducts[0];

  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="bg-white min-h-screen pb-12">
        <div className="block min-h-[20em] sm:min-h-auto pt-[76px]" aria-hidden="true">
        {/* Hero Banner */}
        <div className="relative min-h-[20em] sm:min-h-auto w-full mb-10">
          <img src="/mechnova/banner/product-banner.webp" alt="mechnova machines products" className="sm:w-full h-[20em] sm:h-full w-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-4xl md:text-5xl font-bold text-white my-2">{t('home.productsPage.title')} <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"></span></h1>
            </div>
          </div>
        </div>
        </div>
        
        {/* Products Tab Section */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-6">
          
          {/* Image-based Horizontal Product Selection Line */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
            {allProducts.map(product => (
              <button
                key={product.key}
                onClick={() => setActiveProductKey(product.key)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 w-28 h-28 md:w-40 md:h-40 border-2 ${
                  activeProductKey === product.key 
                    ? 'border-[#00994d] bg-[#eaf5ef] shadow-md scale-105' 
                    : 'border-transparent bg-white shadow-sm hover:border-gray-200 hover:shadow-md hover:scale-105'
                }`}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 mb-3 flex items-center justify-center transition-transform duration-300">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain drop-shadow-sm"
                    onError={e => e.target.src='/about.webp'} 
                  />
                </div>
                <span className={`text-xs md:text-sm text-center leading-tight font-semibold ${
                  activeProductKey === product.key ? 'text-[#00994d]' : 'text-gray-600'
                }`}>
                  {product.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Product Display */}
          {activeProduct && (
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Left: Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.name} 
                    className="w-full max-w-lg h-auto object-contain hover:scale-[1.02] transition-transform duration-700 ease-out drop-shadow-lg" 
                    onError={e => e.target.src='/about.webp'} 
                  />
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-left relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-1.5 rounded-full border border-green-100 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00994d]"></span>
                  <span className="text-[#00994d] text-sm font-semibold uppercase tracking-wider">{activeProduct.categoryName}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{activeProduct.name}</h3>
                
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                  {activeProduct.description || `Mechnova brings you a diverse selection of premium ${activeProduct.name.toLowerCase()}, engineered to deliver outstanding durability and dependability. Designed with advanced techniques, these products ensure optimal performance and longevity while adhering to eco-friendly practices.`}
                </p>
                
                {/* Details list */}
                <div className="space-y-4 mb-10 w-full bg-gray-50/80 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00994d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <p className="text-gray-700"><strong className="font-semibold text-gray-900">Performance:</strong> Optimal power with low emissions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00994d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <p className="text-gray-700"><strong className="font-semibold text-gray-900">Applications:</strong> Agriculture, Gardening, and Industrial tasks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00994d] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <p className="text-gray-700"><strong className="font-semibold text-gray-900">Quality:</strong> Premium built for heavy-duty usage</p>
                  </div>
                </div>

                <Link 
                  href={`/products/${activeProduct.key}`} 
                  className="inline-flex items-center justify-center gap-2 bg-[#00994d] hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,153,77,0.39)] hover:shadow-[0_6px_20px_rgba(0,153,77,0.23)] hover:-translate-y-0.5"
                >
                  Explore Models
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
