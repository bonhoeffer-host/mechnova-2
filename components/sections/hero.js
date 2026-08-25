import HeroSlider from "./HeroSlider";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";
import { ArrowRight, Play, ShieldCheck, Zap, Award } from "lucide-react";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute top-[45%] -right-40 w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0072ce 1px, transparent 1px), linear-gradient(90deg, #0072ce 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative z-10">
        <HeroSlider />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0072ce] opacity-50" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0072ce]" />
              </span>

              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0072ce] uppercase">
                Powering Progress
              </span>
            </div>

           <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-950 leading-[1.08] tracking-tight">
            <span className="block">
              <span className="text-[#0072ce]">Mechnova</span>
            </span>

            <span className="block mt-2">
              {t("home.welcome")}
            </span>
          </h1>

            {/* Accent */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-7 mb-6">
              <span className="w-14 h-1 rounded-full bg-[#0072ce]" />
              <span className="w-3 h-1 rounded-full bg-cyan-400" />
              <span className="w-2 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Description */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-8 text-gray-600">
              {t("home.heroDescription")}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-9">

              <Link
                href="/dealer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#0072ce] text-white font-bold shadow-[0_12px_30px_rgba(0,114,206,0.25)] hover:bg-[#005fae] hover:shadow-[0_18px_40px_rgba(0,114,206,0.32)] hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => window.open("https://www.youtube.com/watch?v=a30H8pk1cOg", "_blank")}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 font-bold shadow-sm hover:border-[#0072ce] hover:text-[#0072ce] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-[#0072ce] group-hover:bg-[#0072ce] group-hover:text-white transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>

                Watch Video
              </button>

            </div>

            {/* Trust Items */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-7 gap-y-4 mt-10">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-[#0072ce]" />
                <span>Reliable</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Zap className="w-5 h-5 text-[#0072ce]" />
                <span>Powerful</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="w-5 h-5 text-[#0072ce]" />
                <span>Trusted Quality</span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT VIDEO ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Decorative Circle */}
            <div className="absolute -top-12 -right-8 w-28 h-28 rounded-full border-[18px] border-blue-100 opacity-70" />

            {/* Video Wrapper */}
            <div className="relative w-full max-w-[540px]">

              {/* Blue Back Frame */}
              <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[#0072ce] to-cyan-400 opacity-20 blur-sm" />

              {/* Video */}
              <div className="relative overflow-hidden rounded-[30px] bg-gray-900 border border-white shadow-[0_30px_80px_rgba(0,70,140,0.25)] group">

                <video
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/hero_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                {/* Play Button */}
                <button
                  onClick={() => window.open("https://www.youtube.com/watch?v=a30H8pk1cOg", "_blank")}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#0072ce] shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300"
                  aria-label="Watch video"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>

                {/* Video Labels */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

                  <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                    MECHNOVA MACHINES
                  </div>

                  <div className="px-4 py-2 rounded-full bg-white/90 text-[#0072ce] text-xs font-bold">
                    WATCH
                  </div>

                </div>

              </div>

              {/* Floating Performance Card - Hidden on Mobile */}
              <div className="hidden sm:flex absolute -bottom-8 -left-6 sm:-left-10 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#0072ce]">
                  <Zap className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Built For
                  </p>

                  <p className="font-bold text-gray-900">
                    Performance
                  </p>
                </div>

              </div>

              {/* Floating Number - Hidden on Mobile */}
              <div className="hidden sm:flex absolute -top-7 -left-7 sm:-left-12 w-20 h-20 rounded-2xl bg-[#0072ce] text-white flex-col items-center justify-center shadow-xl rotate-[-8deg]">

                <span className="text-2xl font-bold">
                  01
                </span>

                <span className="text-[9px] tracking-widest uppercase opacity-80">
                  Power
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50/70 to-transparent pointer-events-none" />

    </section>


  );
}

export default Hero;





