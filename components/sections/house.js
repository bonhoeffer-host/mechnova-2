import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

function House() {
  const { t } = useTranslation();

  const companies = [
    {
      name: "Bonhoeffer Machines",
      description: t("home.house.parentCompany"),
      url: "https://bonhoeffermachines.com",
      logo: "/logos/bonhoeffer_logo.png",
      number: "01",
      accent: "from-emerald-400 to-green-600",
    },
    {
      name: "Stevron Tools",
      description: t("home.house.hardwareDivision"),
      url: "https://stevrontools.com",
      logo: "/logos/stevron_black_logo.png",
      number: "02",
      accent: "from-gray-500 to-black",
    },
    {
      name: "Mechnova Machines",
      description: t("home.house.selfDivision"),
      url: "https://mechnovamachines.com",
      logo: "/logo.png",
      number: "03",
      accent: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 bg-gradient-to-br from-blue-700 via-blue-400 to-blue-700">

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-14">

        <div className="inline-flex items-center gap-2 px-5 py-2 mb-5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-white uppercase">
            Our Brand Family
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          {t("home.house.heading")}
        </h2>

        <div className="flex justify-center items-center gap-3 my-6">
          <span className="w-14 h-[2px] bg-white/40 rounded-full" />
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="w-14 h-[2px] bg-white/40 rounded-full" />
        </div>

        <p className="text-base md:text-lg leading-8 text-white/90">
          Bonhoeffer launched 3 New Brands in 2024 after the immense success of
          Bonhoeffer in Latin America, including Mechnova, Stronwell and Stevron.
        </p>

      </div>

      {/* Company Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 px-6">

        {companies.map((company) => (
          <Link
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >

            <div className="relative h-full min-h-[440px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]">

              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${company.accent}`} />

              {/* Background Number */}
              <div className="absolute top-4 right-6 text-[80px] leading-none font-black text-gray-100 select-none">
                {company.number}
              </div>

              {/* Logo */}
              <div className="relative mx-6 mt-7 h-40 rounded-2xl bg-[#E9ECEF] border border-gray-200 shadow-inner flex items-center justify-center overflow-hidden">

                <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-br ${company.accent} opacity-[0.08] blur-2xl`} />

                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="relative z-10 max-h-24 max-w-[78%] object-contain transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                <div
                  style={{ display: "none" }}
                  className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${company.accent} items-center justify-center text-white text-2xl font-black`}
                >
                  {company.number}
                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-8 h-1 rounded-full bg-gradient-to-r ${company.accent}`} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Brand {company.number}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-[#0072ce]">
                  {company.name}
                </h3>

                <p className="mt-3 text-gray-500 text-sm md:text-base leading-7">
                  {company.description}
                </p>

                {/* Bottom CTA */}
                <div className="mt-7 pt-5 border-t border-gray-100 flex items-center justify-between">

                  <span className="text-sm font-bold text-gray-700 group-hover:text-[#0072ce] transition-colors">
                    Explore Brand
                  </span>

                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${company.accent} text-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:rotate-45 group-hover:scale-110`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-14 flex justify-center items-center gap-4 px-6">
        <span className="hidden sm:block w-14 h-px bg-white/30" />
        <p className="text-sm text-white/70 text-center">
          One vision • Multiple brands • One growing legacy
        </p>
        <span className="hidden sm:block w-14 h-px bg-white/30" />
      </div>

    </section>
  );
}

export default House;
 





