
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
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
  {
    name: "Power Weeders",
    href: "https://shop.mechnovamachines.in/power-weeder",
  },
  {
    name: "Brush Cutters",
    href: "https://shop.mechnovamachines.in/brush-cutter",
  },
  {
    name: "Chainsaws",
    href: "https://shop.mechnovamachines.in/chainsaw",
  },
  {
    name: "Water Pumps",
    href: "https://shop.mechnovamachines.in/gasoline-water-pump",
  },
  {
    name: "Gasoline Engines",
    href: "https://shop.mechnovamachines.in/gasoline-engine",
  },
  {
    name: "Sprayers",
    href: "https://shop.mechnovamachines.in/sprayer",
  },
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

      {/* TOP IMAGE BANNER */}
      <section className="relative min-h-[300px] overflow-hidden border-b border-[#36B5F5]/50 md:min-h-[330px]">
        <Image
          src="/mechnova/banner/Landscaping.webp"
          alt="Mechnova Agricultural Machinery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/75 via-[#071629]/10 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-full items-center px-5 py-10 sm:px-10 md:min-h-[330px] lg:px-16">
          <div className="max-w-[780px] border-l-[5px] border-[#36B5F5] pl-5 sm:pl-8">

            <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-white drop-shadow-lg sm:text-sm">
              Powerful Machines. Reliable Performance.
            </p>

            <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-[54px]">
              Power Your Work with
              <span className="block text-[#36B5F5]">
                Mechnova
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white drop-shadow-lg sm:text-base md:text-lg">
              Reliable machines for farms, fields and everyday applications.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0072ce] px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#168FE5] sm:text-base"
              >
                <Tractor size={20} />
                Explore Products
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/dealer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-[#071629]/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-[#36B5F5] hover:bg-[#0072ce] sm:text-base"
              >
                <Handshake size={21} />
                Become a Dealer
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071629] via-[#0A2038] to-[#061729]">

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0072ce]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#168FE5]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-full px-5 py-11 sm:px-10 lg:px-16 lg:py-13">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.9fr_1.15fr] lg:gap-0">

            {/* BRAND COLUMN */}
            <div className="lg:pr-8">

              <Link href="/" className="mb-4 inline-flex">
                <Image
                  src="/logo.png"
                  alt="Mechnova Machines"
                  width={300}
                  height={85}
                  className="h-auto w-[210px] object-contain object-left sm:w-[225px]"
                />
              </Link>

              <p className="mb-5 max-w-sm text-sm leading-6 text-slate-200 sm:text-[15px]">
                Mechnova offers a comprehensive range of reliable agricultural
                and outdoor machinery designed to simplify everyday farming
                operations and improve productivity.
              </p>

              <div className="mb-5 h-1 w-14 rounded-full bg-[#36B5F5]" />

              <p className="mb-4 text-sm font-bold text-white">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#36B5F5] hover:bg-[#0072ce]"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>

           {/* PRODUCTS COLUMN */}
          <div className="border-t border-white/20 pt-7 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/20 lg:px-7">

            <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-white">
              Products
            </h3>

            <div className="mb-5 h-1 w-14 rounded-full bg-[#36B5F5]" />

            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-[#36B5F5] sm:text-[15px]"
                  >
                    <ChevronRight
                      size={17}
                      className="shrink-0 text-[#36B5F5] transition-transform group-hover:translate-x-1"
                    />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            {/* QUICK LINKS COLUMN */}
            <div className="border-t border-white/20 pt-7 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/20 lg:px-7">

              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-white">
                Quick Links
              </h3>

              <div className="mb-5 h-1 w-14 rounded-full bg-[#36B5F5]" />

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-[#36B5F5] sm:text-[15px]"
                    >
                      <ChevronRight
                        size={17}
                        className="shrink-0 text-[#36B5F5] transition-transform group-hover:translate-x-1"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CUSTOMER SUPPORT COLUMN */}
            <div className="border-t border-white/20 pt-7 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:border-white/20 lg:pl-7">

              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-white">
                Customer Support
              </h3>

              <div className="mb-5 h-1 w-14 rounded-full bg-[#36B5F5]" />

              <ul className="mb-6 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-[#36B5F5] sm:text-[15px]"
                    >
                      <ChevronRight
                        size={17}
                        className="shrink-0 text-[#36B5F5] transition-transform group-hover:translate-x-1"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mb-5 h-px w-full bg-white/30" />

              {/* CONTACT DETAILS */}
              <div className="space-y-4">

                <Link
                  href="tel:+917428642333"
                  className="group flex items-start gap-3"
                >
                  <Phone size={19} className="mt-0.5 shrink-0 text-[#36B5F5]" />
                  <span className="text-sm font-medium text-white transition-colors group-hover:text-[#36B5F5] sm:text-[15px]">
                    +91 7428642333
                  </span>
                </Link>

                <Link
                  href="mailto:info@mechnovamachines.com"
                  className="group flex items-start gap-3"
                >
                  <Mail size={19} className="mt-0.5 shrink-0 text-[#36B5F5]" />
                  <span className="break-all text-sm font-medium text-white transition-colors group-hover:text-[#36B5F5] sm:text-[15px]">
                    info@mechnovamachines.com
                  </span>
                </Link>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-[#36B5F5]" />
                  <p className="text-sm leading-6 text-white sm:text-[15px]">
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

      {/* COPYRIGHT BAR */}
      <section className="border-t border-white/15 bg-[#050F1D]">

        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:px-10 md:flex-row md:text-left lg:px-16">

          <p className="text-xs text-slate-300 sm:text-sm">
            © {new Date().getFullYear()} Mechnova Machines.{" "}
            {t("footer.allRightsReserved") || "All Rights Reserved."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-300 sm:text-sm">

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#36B5F5]"
            >
              {t("footer.privacy") || "Privacy Policy"}
            </Link>

            <span className="hidden h-4 w-px bg-white/40 sm:block" />

            <Link
              href="/terms"
              className="transition-colors hover:text-[#36B5F5]"
            >
              {t("footer.terms") || "Terms & Conditions"}
            </Link>

            <span className="hidden h-4 w-px bg-white/40 sm:block" />

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
