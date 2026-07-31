import HeroSlider from "./HeroSlider";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

function Hero() {
  const { t } = useTranslation();
  return (

    <section className="relative w-full bg-white overflow-hidden pb-20">

      {/* Hero Slider at top */}
      <HeroSlider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16 pt-20">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-slideInLeft">
            <span className="text-[#0072ce]">Mechnova</span> {t('home.welcome')}
          </h1>
          <p className="text-base text-gray-700 animate-slideInLeft delay-200">
            {t('home.heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 animate-slideInLeft delay-400">
            <Link href="/dealer" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#0072ce] to-[#00c3ff] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Get Started
            </Link>
            <button
              onClick={() => window.open('https://www.youtube.com/embed/a30H8pk1cOg', '_blank')}
              className="px-8 py-3 rounded-full border border-[#0072ce] text-[#0072ce] font-semibold shadow-lg hover:bg-[#0072ce] hover:text-white transition-all flex items-center gap-2 justify-center"
            >
              Watch Video
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT - Video Card */}
        <div className="lg:w-1/2 relative flex justify-center w-full max-w-full">
          <div className="relative w-full max-w-[480px] sm:max-w-[420px] md:max-w-[480px] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <video
              className="w-full h-auto object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Floating Play Button */}
            <div
              onClick={() => window.open('https://www.youtube.com/watch?v=a30H8pk1cOg', '_blank')}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-5 shadow-lg transition">
                <svg className="w-12 h-12 text-[#0072ce]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating abstract shapes */}
      <div className="absolute top-10 left-0 w-60 h-60 bg-blue-100/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>


    </section>
  );
}

export default Hero;
