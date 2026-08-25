"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import { ArrowUpRight } from "lucide-react";
function Industries() {
	const { t } = useTranslation();
	const industries = [
		{
			title: t("home.industries.agriculture.title"),
			desc: t("home.industries.agriculture.description"),
			image: "/mechnova/banner/Agriculture.webp",
		},
		{
			title: t("home.industries.forestry.title"),
			desc: t("home.industries.forestry.description"),
			image: "/mechnova/banner/Industrial.webp",
		},
		{
			title: t("home.industries.agroindustrial.title"),
			desc: t("home.industries.agroindustrial.description"),
			image: "/mechnova/banner/Agroindustrial.webp",
		},
		{
			title: t("home.industries.domestic.title"),
			desc: t("home.industries.domestic.description"),
			image: "/mechnova/banner/Landscaping.webp",
		},
		{
			title: t("home.industries.greenhouses.title"),
			desc: t("home.industries.greenhouses.description"),
			image: "/mechnova/banner/Forestry.webp",
		}
	];

  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] py-24 md:py-32">

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gray-900" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Our Industries
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              {t("home.industries.title")}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-base">
            Powerful and dependable machinery solutions designed for
            agriculture, industry, landscaping and professional applications.
          </p>

        </div>


        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">

          {/* =====================================================
              FEATURED INDUSTRY
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[28px] bg-gray-900 md:col-span-2 lg:col-span-7 lg:row-span-2">

            <div className="relative h-[520px] md:h-[600px] lg:h-[680px]">

              <Image
                src={industries[0].image}
                alt={industries[0].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Number */}
              <div className="absolute left-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-semibold text-white backdrop-blur-md">
                01
              </div>

              {/* Arrow */}
              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Featured Industry
                </span>

                <h3 className="mt-3 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  {industries[0].title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 md:text-base">
                  {industries[0].desc}
                </p>

              </div>

            </div>
          </div>


          {/* =====================================================
              SECOND INDUSTRY
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[28px] bg-white md:col-span-1 lg:col-span-5">

            <div className="relative h-[330px]">

              <Image
                src={industries[1].image}
                alt={industries[1].title}
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 text-xs font-mono text-white/80">
                02
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {industries[1].title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/70">
                      {industries[1].desc}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-900">
                    <ArrowUpRight size={17} />
                  </div>

                </div>

              </div>

            </div>
          </div>


          {/* =====================================================
              THIRD INDUSTRY
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[28px] bg-white md:col-span-1 lg:col-span-5">

            <div className="relative h-[330px]">

              <Image
                src={industries[2].image}
                alt={industries[2].title}
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 text-xs font-mono text-white/80">
                03
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {industries[2].title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/70">
                      {industries[2].desc}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-900">
                    <ArrowUpRight size={17} />
                  </div>

                </div>

              </div>

            </div>
          </div>


                  {/* =====================================================
              BOTTOM CARD 1 - DOMESTIC
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[28px] bg-white lg:col-span-6">

            <div className="relative h-[320px]">

              <Image
                src={industries[3].image}
                alt={industries[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Number */}
              <div className="absolute left-6 top-6 text-xs font-mono font-medium text-white/80">
                04
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

                <div className="flex items-end justify-between gap-6">

                  <div className="max-w-xl">

                    <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                      {industries[3].title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/70 md:text-base">
                      {industries[3].desc}
                    </p>

                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>

                </div>

              </div>

            </div>
          </div>


          {/* =====================================================
              BOTTOM CARD 2 - GREENHOUSES
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[28px] bg-white lg:col-span-6">

            <div className="relative h-[320px]">

              <Image
                src={industries[4].image}
                alt={industries[4].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Number */}
              <div className="absolute left-6 top-6 text-xs font-mono font-medium text-white/80">
                05
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

                <div className="flex items-end justify-between gap-6">

                  <div className="max-w-xl">

                    <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                      {industries[4].title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/70 md:text-base">
                      {industries[4].desc}
                    </p>

                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
	

  );
}

export default Industries;
