import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/lib/useTranslation'

function House() {
  const { t } = useTranslation()
  
  const companies = [
    {
      name: "Bonhoeffer Machines",
      description: t('home.house.parentCompany'),
      url: "https://bonhoeffermachines.com",
      logo: "/logos/bonhoeffer_logo.png",
      logoColor: "text-[#7A852D]",
      buttonFrom: "from-[#00C46A]",
      buttonTo: "to-[#00A656]"
    },
    {
      name: "Stevron Tools", 
      description: t('home.house.hardwareDivision'),
      url: "https://stevrontools.com",
      logo: "/logos/stevron_black_logo.png",
       logoColor: "text-black",
      buttonFrom: "from-[#777]",
      buttonTo: "to-[#000]"
    },
    {
      name: "Mechnova Machines",
      description: t('home.house.selfDivision'),
      url: "https://mechnovamachines.com",
      logo: "/logo.png",
       logoColor: "text-[#1E73BE]",
      buttonFrom: "from-[#3A7CFF]",
      buttonTo: "to-[#A020F0]"
    }
  ]

  const hard = [
    {
      name: "Stevron Tools", 
      description: t('home.house.hardwareDivision'),
      url: "https://stevrontools.com",
      logo: "/logos/stevron_black_logo.png",
       logoColor: "text-black",
      buttonFrom: "from-[#777]",
      buttonTo: "to-[#000]"
    }
  ]

  return (

    <section className="relative w-full py-24 
 bg-gradient-to-br from-blue-700 via-blue-400 to-blue-700">

  {/* ⭐ Main Heading */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-extrabold text-white">
      {t('home.house.heading')}
    </h2>
    <p className="text-lg text-white animate-slideInLeft delay-200 mt-3">
    Bonhoeffer launched 3 New Brands in 2024 after the immense success of Bonhoeffer in Latin America, including Mechnova, Stronwell and Stevron.</p>
  </div>

  {/* Company Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 px-6">

    {companies.map((company, index) => (
      <Link key={index} href={company.url} target="_blank" rel="noopener noreferrer">

        <div className="bg-white rounded-[22px] p-12 shadow-[0_10px_50px_rgba(0,0,0,0.15)]
            text-center transition-all hover:scale-105">

          {/* Logo Box with your old img + fallback support */}
          <div className="w-full bg-[#E9ECEF] rounded-xl py-5 mb-6 
            shadow-inner flex justify-center items-center relative">

            <img 
              src={company.logo} 
              alt={`${company.name} Logo`}
              className="h-24 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />

            {/* Fallback initials */}
            <div 
              style={{ display: "none" }}
              className="text-4xl font-extrabold text-gray-700"
            >
              {company.name.split(" ").map((w) => w[0]).join("")}
            </div>
          </div>

          {/* Description */}
          <p className="text-[#333] text-lg font-medium">
            {company.description}
          </p>

          {/* Button */}
          <div className="mt-7 flex justify-center">
           <div className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl 
  font-semibold text-lg text-white bg-gradient-to-r 
  ${company.buttonFrom} ${company.buttonTo}`}>


              {company.name} <ExternalLink className="w-4 h-4" />
            </div>
          </div>

        </div>
      </Link>
    ))}

  </div>

  {/* Hardware Division Heading */}
 {/* <div className="text-center mt-24 mb-12">
    <h2 className="text-5xl font-extrabold text-white">
      {t('home.house.hardHeading')}
    </h2>
  </div>
  <div className="max-w-xl mx-auto">

    {hard.map((company, index) => (
      <Link key={index} href={company.url} target="_blank" rel="noopener noreferrer">

        <div className="bg-white rounded-[22px] p-12 shadow-[0_10px_50px_rgba(0,0,0,0.15)]
          text-center hover:scale-105 transition-all">

          <div className="w-full bg-[#E9ECEF] rounded-xl py-5 mb-6 shadow-inner flex justify-center">

            <img 
              src={company.logo} 
              alt={`${company.name} Logo`}
              className="h-24 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />

       
            <div 
              style={{ display: "none" }}
              className="text-4xl font-extrabold text-gray-700"
            >
              {company.name.split(" ").map((w) => w[0]).join("")}
            </div>
          </div>

          <p className="text-[#333] text-lg font-medium">
            {company.description}
          </p>

          <div className="mt-7 flex justify-center">
            <div className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-xl 
              font-semibold text-lg bg-gradient-to-r from-blue-500 to-blue-700">
              {company.name} <ExternalLink className="w-4 h-4" />
            </div>
          </div>

        </div>
      </Link>
    ))}

  </div>*/}

</section>

  )
}

export default House
