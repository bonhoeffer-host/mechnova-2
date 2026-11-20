// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { useTranslation } from "@/lib/useTranslation";


// function Footer() {
//   const { t } = useTranslation();
//   return (
//     <footer className="bg-[#E6F2FB] text-gray-900 py-10 ">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between sm:items-center items-start gap-8">
//         <div className="text-center md:text-left">

//             <Link href="/" className="flex sm:items-center items-start space-x-2 mb-4">
//                 <Image src="/logo.png" alt="MechNova Logo" width={280} height={40} />
//             </Link>
//             {/* <h2 className="text-2xl font-bold mb-2">MechNova</h2> */}
//             <p className="text-gray-800 sm:items-center items-start max-w-xs mb-6">{t('footer.tagline') || 'Empowering innovation in mechanical engineering. Join us in shaping the future.'}</p>
            
//             {/* Download Catalog Button */}
//             <div className="flex sm:justify-start justify-center">
//                 <Link 
//                     href="https://catalog.mechnovamachines.in" 
//                     target="_blank"
//                     className="inline-flex items-center gap-2 bg-[#0072ce] hover:bg-[#005FA3] text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
//                 >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                     {t('footer.downloadCatalog') || 'Download Catalog'}
//                 </Link>
//             </div>
//         </div>
//         <div>
//             <nav className="flex flex-col sm:flex-row gap-4 md:gap-8 text-lg">
//                 <Link href="/about" className="hover:text-[#005FA3] transition">{t('header.about')}</Link>
//                 <Link href="/products" className="hover:text-[#005FA3] transition">{t('header.products')}</Link>
//                 <Link href="https://blog.mechnovamachines.in" target="_blank" className="hover:text-[#005FA3] transition">{t('header.blog')}</Link>
//                 <Link href="/dealer" className="hover:text-[#005FA3] transition">{t('header.dealer')}</Link>
//                   <Link href="/warranty" className="hover:text-[#005FA3] transition">Warranty Registration</Link>
               
//             </nav>
//             <div className="flex flex-row gap-4 mt-10 justify-center">
//                 <Link href="https://www.facebook.com/officialmechnova/" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
//                     <FaFacebook className="w-10 h-10" />
//                 </Link>
//                 <Link href="https://www.instagram.com/mechnovamachinesindia" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
//                     <FaInstagram className="w-10 h-10" />
//                 </Link>
//                 <Link href="https://www.youtube.com/@Mechnova_Machines" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
//                     <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.12C19.88 3.5 12 3.5 12 3.5s-7.88 0-9.388.566a2.998 2.998 0 00-2.11 2.12A31.24 31.24 0 000 12a31.24 31.24 0 00.502 5.814 2.998 2.998 0 002.11 2.12C4.12 20.5 12 20.5 12 20.5s 7.88 0 9.388-.566a2.998 2.998 0 002.11-2.12A31.24 31.24 0 0024 12a31.24 31.24 0 00-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3z"/>
//                     </svg>
//                 </Link>
//             </div>
//         </div>
//         <div className="max-w-xs">
//             <h3 className="text-lg font-semibold mb-2">{t('footer.contact')}</h3>
//             <p className="text-gray-700">{t('footer.phone') || 'Phone'}: <Link href="tel:+917428642333" className="hover:text-[#005FA3]">+91 7428642333</Link></p>
//             <p className="text-gray-700">{t('footer.email') || 'Email'}: <Link href="mailto:info@mechnovamachines.com" className="hover:text-[#005FA3]">info@mechnovamachines.com</Link></p>
//             <p className="text-gray-700">{t('footer.address') || 'Address'}: 2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122016</p>
//         </div>
//       </div>
//         <div className="border-t border-gray-300 mt-8 pt-4 px-4 mx-10 flex flex-col md:flex-row justify-between items-center md:px-0">
//             <div className="hidden md:block"/>
//             <div className="hidden md:block"/>
//             <div className="text-center md:text-left text-gray-700 text-base mb-4 md:mb-0">
//                 <div>© {new Date().getFullYear()} Mechnova Machines. {t('footer.allRightsReserved')}</div>
//             </div>
//             <div className="flex flex-row gap-2 sm:gap-4 text-sm text-gray-600">
//                 <Link href="/privacy" className="hover:text-[#005FA3] transition">
//                     {t('footer.privacy') || 'Política de Privacidad'}
//                 </Link>
//                 <Link href="/terms" className="hover:text-[#005FA3] transition">
//                     {t('footer.terms') || 'Términos y Condiciones'}
//                 </Link>
//                 <Link href="/cookie" className="hover:text-[#005FA3] transition">
//                     {t('footer.cookies') || 'Política de Cookies'}
//                 </Link>
//             </div>
//         </div>
//     </footer>
//   );
// }

// export default Footer;




"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  ArrowRight,
  Handshake,
  Tractor,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

function Footer() {
  const { t } = useTranslation();

  const products = [
    "Power Weeders",
    "Brush Cutters",
    "Chainsaws",
    "Water Pumps",
    "Gasoline Engines",
    "Sprayers",
  ];

  const quickLinks = [
    { name: "About Mechnova", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    {
      name: "Blog",
      href: "https://blog.mechnovamachines.in",
      external: true,
    },
    { name: "Become a Dealer", href: "/dealer" },
    {
      name: "Download Catalog",
      href: "https://catalog.mechnovamachines.in",
      external: true,
    },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Warranty Registration", href: "/warranty" },
    // { name: "Service & Spare Parts", href: "/contact" },
    // { name: "FAQs", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/officialmechnova/",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/mechnovamachinesindia",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@Mechnova_Machines",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071629] text-white">

      {/* ================= TOP IMAGE BANNER ================= */}

  
<section className="relative min-h-[340px] overflow-hidden border-b border-[#36B5F5]/50 md:min-h-[370px]">

  {/* Background Image */}
  <Image
    src="/mechnova/banner/Landscaping.webp"
    alt="Mechnova Agricultural Machinery"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  {/* Very Light Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/75 via-[#071629]/10 to-transparent" />

  {/* Blue Decorative Shape */}
  {/* <div className="absolute -right-10 top-0 h-full w-[24%] skew-x-[-20deg] border-l-[3px] border-[#36B5F5]/60 bg-[#0072ce]/10" /> */}

  {/* Banner Content */}
  <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1450px] items-center px-5 py-12 sm:px-10 md:min-h-[370px] lg:px-16">

    <div className="max-w-[850px] border-l-[7px] border-[#36B5F5] pl-6 sm:pl-10">

      <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-white drop-shadow-lg sm:text-base">
        Powerful Machines. Reliable Performance.
      </p>

      <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-[62px]">
        Power Your Work with
        <span className="block text-[#36B5F5]">
          Mechnova
        </span>
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-white drop-shadow-lg sm:text-lg md:text-[22px]">
        Reliable machines for farms, fields and everyday applications.
      </p>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row">

        <Link
          href="/products"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0072ce] px-7 py-4 text-base font-extrabold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#168FE5] sm:text-lg"
        >
          <Tractor size={25} />
          Explore Products
          <ArrowRight size={23} className="transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/dealer"
          className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-[#071629]/20 px-7 py-4 text-base font-extrabold text-white backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-[#36B5F5] hover:bg-[#0072ce] sm:text-lg"
        >
          <Handshake size={26} />
          Become a Dealer
          <ArrowRight size={23} className="transition-transform group-hover:translate-x-1" />
        </Link>

      </div>
    </div>
  </div>
</section>


      {/* ================= MAIN FOOTER ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071629] via-[#0A2038] to-[#061729]">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0072ce]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#168FE5]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1450px] px-5 py-14 sm:px-10 lg:px-16 lg:py-16">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.9fr_1.15fr] lg:gap-0">

            {/* BRAND COLUMN */}

            <div className="lg:pr-9">

              <Link href="/" className="mb-5 inline-flex">
                <Image
                  src="/logo.png"
                  alt="Mechnova Machines"
                  width={300}
                  height={85}
                  className="h-auto w-[250px] object-contain object-left"
                />
              </Link>

              <p className="mb-5 max-w-sm text-base leading-7 text-slate-200 sm:text-[17px]">
                {t("footer.tagline") ||
                  "Mechnova offers a range of dependable agricultural and outdoor machinery designed to make farming and field operations easier, efficient and more productive."}
              </p>

         <p className="mb-4 max-w-sm text-base leading-7 text-slate-200 sm:text-[17px]">
  Mechnova offers a comprehensive range of reliable agricultural
  and outdoor machinery designed to simplify everyday farming
  operations and improve productivity.
</p>


<div className="mb-6 h-[5px] w-[68px] rounded-full bg-[#36B5F5]" />

<p className="mb-5 text-base font-bold text-white">
  Connect With Us
</p>
              <div className="flex items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#36B5F5] hover:bg-[#0072ce]"
                    >
                      <Icon size={21} />
                    </Link>
                  );
                })}

              </div>
            </div>

            {/* PRODUCTS COLUMN */}

            <div className="border-t border-white/20 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/20 lg:px-8">

              <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-white">
                Products
              </h3>

              <div className="mb-6 h-[5px] w-16 rounded-full bg-[#36B5F5]" />

              <ul className="space-y-4">

                {products.map((product) => (
                  <li key={product}>
                    <Link
                      href="/products"
                      className="group flex items-center gap-3 text-base text-slate-200 transition-colors hover:text-[#36B5F5] sm:text-[18px]"
                    >
                      <ChevronRight
                        size={21}
                        className="shrink-0 text-[#36B5F5] transition-transform group-hover:translate-x-1"
                      />
                      {product}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* QUICK LINKS COLUMN */}

            <div className="border-t border-white/20 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/20 lg:px-8">

              <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-white">
                Quick Links
              </h3>

              <div className="mb-6 h-[5px] w-16 rounded-full bg-[#36B5F5]" />

              <ul className="space-y-4">

                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-base text-slate-200 transition-colors hover:text-[#36B5F5] sm:text-[18px]"
                    >
                      <ChevronRight
                        size={21}
                        className="shrink-0 text-[#36B5F5] transition-transform group-hover:translate-x-1"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* CUSTOMER SUPPORT COLUMN */}

            <div className="border-t border-white/20 pt-8 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:border-white/20 lg:pl-8">

              <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-white">
                Customer Support
              </h3>

              <div className="mb-6 h-[5px] w-16 rounded-full bg-[#36B5F5]" />

              <ul className="mb-7 space-y-4">

                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-base text-slate-200 transition-colors hover:text-[#36B5F5] sm:text-[18px]"
                    >
                      <ChevronRight
                        size={21}
                        className="shrink-0 text-[#36B5F5] transition-transform group-hover:translate-x-1"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}

              </ul>

              <div className="mb-6 h-px w-full bg-white/30" />

              {/* CONTACT DETAILS */}

              <div className="space-y-5">

                <Link
                  href="tel:+917428642333"
                  className="group flex items-start gap-4"
                >
                  <Phone
                    size={23}
                    className="mt-1 shrink-0 text-[#36B5F5]"
                  />
                  <span className="text-base font-medium text-white transition-colors group-hover:text-[#36B5F5] sm:text-[18px]">
                    +91 7428642333
                  </span>
                </Link>

                <Link
                  href="mailto:info@mechnovamachines.com"
                  className="group flex items-start gap-4"
                >
                  <Mail
                    size={23}
                    className="mt-1 shrink-0 text-[#36B5F5]"
                  />
                  <span className="break-all text-base font-medium text-white transition-colors group-hover:text-[#36B5F5] sm:text-[18px]">
                    info@mechnovamachines.com
                  </span>
                </Link>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={25}
                    className="mt-1 shrink-0 text-[#36B5F5]"
                  />
                  <p className="text-base leading-7 text-white sm:text-[18px]">
                    2nd Floor, Plot No. 756,
                    <br />
                    Udyog Vihar Phase V,
                    <br />
                    Gurugram, Haryana 122016
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM DECORATIVE LINE */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#0072ce] to-transparent" />

      </section>

      {/* ================= COPYRIGHT BAR ================= */}

      <section className="border-t border-white/15 bg-[#050F1D]">

        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-5 px-5 py-6 text-center sm:px-10 md:flex-row md:text-left lg:px-16">

          <p className="text-sm text-slate-300 sm:text-base">
            © {new Date().getFullYear()} Mechnova Machines.{" "}
            {t("footer.allRightsReserved") || "All Rights Reserved."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-slate-300 sm:text-base">

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#36B5F5]"
            >
              {t("footer.privacy") || "Privacy Policy"}
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="/terms"
              className="transition-colors hover:text-[#36B5F5]"
            >
              {t("footer.terms") || "Terms & Conditions"}
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="/cookie"
              className="transition-colors hover:text-[#36B5F5]"
            >
              {t("footer.cookies") || "Cookie Policy"}
            </Link>

          </div>

        </div>
      </section>

    </footer> 
  );
}

export default Footer;
