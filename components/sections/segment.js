

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

function Segment() {
  const { t } = useTranslation();

  const segments = [
    {
      title: t("home.segments.gardeningForestry.title"),
      image: "/segment/brush-cutter-grass-cutting-machine.webp",
      link: "/products/",
      desc: t("home.segments.gardeningForestry.description"),
    },
    {
      title: t("home.segments.fumigation.title"),
      image: "/segment/chainsaw.webp",
      link: "/products/",
      desc: t("home.segments.fumigation.description"),
    },
    {
      title: t("home.segments.diesel.title"),
      image: "/segment/petrol-water-pump.webp",
      link: "/products/",
      desc: t("home.segments.diesel.description"),
    },
    {
      title: t("home.segments.domestic.title"),
      image: "/segment/petrol-engine.webp",
      link: "/products/",
      desc: t("home.segments.domestic.description"),
    },
    {
      title: t("home.segments.agroIndustrial.title"),
      image: "/segment/power-weeder.webp",
      link: "/products/",
      desc: t("home.segments.agroIndustrial.description"),
    },
  ];

  return (
    <section
      id="segments"
      className="relative overflow-hidden bg-[#f5f5f2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-gray-900" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gray-500">
                Mechnova Solutions
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              {t("home.segments.title")}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-base">
            {t("home.segments.subpara")}
          </p>

        </div>


        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative">

          {/* CENTER LINE */}

          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gray-300 lg:block" />

          <div className="space-y-20 md:space-y-28">

            {segments.map((segment, i) => {

              const reverse = i % 2 !== 0;

              return (
                <div
                  key={i}
                  className="relative grid items-center lg:grid-cols-2"
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className={`${
                      reverse
                        ? "lg:order-2 lg:pl-20"
                        : "lg:pr-20"
                    }`}
                  >

                    <Link
                      href={segment.link}
                      className="group relative block"
                    >

                      {/* OUTER FRAME */}

                      <div className="relative rounded-[34px] border border-gray-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]">

                        {/* IMAGE */}

                        <div className="relative overflow-hidden rounded-[26px] bg-[#eeeeeb]">

                          <Image
                            src={segment.image}
                            alt={segment.title}
                            width={1400}
                            height={950}
                            priority={i < 2}
                            className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />

                          {/* subtle overlay */}

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        </div>


                        {/* NUMBER */}

                        <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-900 shadow-md">
                          {String(i + 1).padStart(2, "0")}
                        </div>


                        {/* ARROW */}

                        <div className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 group-hover:scale-110">
                          <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:rotate-45"
                          />
                        </div>

                      </div>

                    </Link>

                  </div>


                  {/* =================================================
                      CENTER DOT
                  ================================================= */}

                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">

                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-[5px] border-[#f5f5f2] bg-gray-900">
                      <div className="h-1 w-1 rounded-full bg-white" />
                    </div>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className={`mt-8 lg:mt-0 ${
                      reverse
                        ? "lg:order-1 lg:pr-20 lg:text-right"
                        : "lg:pl-20"
                    }`}
                  >

                    <div
                      className={`max-w-xl ${
                        reverse ? "lg:ml-auto" : ""
                      }`}
                    >

                      {/* SMALL LABEL */}

                      <div
                        className={`flex items-center gap-3 ${
                          reverse ? "lg:justify-end" : ""
                        }`}
                      >

                        <span className="font-mono text-xs text-gray-400">
                          0{i + 1}
                        </span>

                        <span className="h-px w-8 bg-gray-300" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                          Segment
                        </span>

                      </div>


                      {/* TITLE */}

                      <h3 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
                        {segment.title}
                      </h3>


                      {/* DESCRIPTION */}

                      <p className="mt-6 max-w-lg text-base leading-7 text-gray-500">
                        {segment.desc}
                      </p>


                      {/* LINK */}

                      <Link
                        href={segment.link}
                        className={`group/link mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-900 ${
                          reverse ? "lg:flex-row-reverse" : ""
                        }`}
                      >

                        Explore Products

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 group-hover/link:border-gray-900 group-hover/link:bg-gray-900 group-hover/link:text-white">

                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover/link:rotate-45"
                          />

                        </span>

                      </Link>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>


        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-24 border-t border-gray-200 pt-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                Built for Performance
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Explore the complete Mechnova product range.
              </p>
            </div>

            <Link
              href="/products/"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-gray-900 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-gray-800"
            >
              View All Products

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Segment;