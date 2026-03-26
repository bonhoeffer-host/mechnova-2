import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "@/lib/useTranslation";


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#E6F2FB] text-gray-900 py-10 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between sm:items-center items-start gap-8">
        <div className="text-center md:text-left">

            <Link href="/" className="flex sm:items-center items-start space-x-2 mb-4">
                <Image src="/logo.png" alt="MechNova Logo" width={280} height={40} />
            </Link>
            {/* <h2 className="text-2xl font-bold mb-2">MechNova</h2> */}
            <p className="text-gray-800 sm:items-center items-start max-w-xs mb-6">{t('footer.tagline') || 'Empowering innovation in mechanical engineering. Join us in shaping the future.'}</p>
            
            {/* Download Catalog Button */}
            <div className="flex sm:justify-start justify-center">
                <Link 
                    href="https://catalog.mechnovamachines.com" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#0072ce] hover:bg-[#005FA3] text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('footer.downloadCatalog') || 'Download Catalog'}
                </Link>
            </div>
        </div>
        <div>
            <nav className="flex flex-col sm:flex-row gap-4 md:gap-8 text-lg">
                <Link href="/about" className="hover:text-[#005FA3] transition">{t('header.about')}</Link>
                <Link href="/products" className="hover:text-[#005FA3] transition">{t('header.products')}</Link>
                <Link href="https://blog.mechnovamachines.in" target="_blank" className="hover:text-[#005FA3] transition">{t('header.blog')}</Link>
                <Link href="/dealer" className="hover:text-[#005FA3] transition">{t('header.dealer')}</Link>
                  <Link href="/warranty" className="hover:text-[#005FA3] transition">Warranty Registration</Link>
                <Link href="/contact" className="hover:text-[#005FA3] transition">{t('header.contact')}</Link>
            </nav>
            <div className="flex flex-row gap-4 mt-10 justify-center">
                <Link href="https://www.facebook.com/mechnovamachinesindia" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
                    <FaFacebook className="w-10 h-10" />
                </Link>
                <Link href="https://www.instagram.com/mechnovamachinesindia" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
                    <FaInstagram className="w-10 h-10" />
                </Link>
                <Link href="https://www.youtube.com/@Mechnova_Machines" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.12C19.88 3.5 12 3.5 12 3.5s-7.88 0-9.388.566a2.998 2.998 0 00-2.11 2.12A31.24 31.24 0 000 12a31.24 31.24 0 00.502 5.814 2.998 2.998 0 002.11 2.12C4.12 20.5 12 20.5 12 20.5s 7.88 0 9.388-.566a2.998 2.998 0 002.11-2.12A31.24 31.24 0 0024 12a31.24 31.24 0 00-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3z"/>
                    </svg>
                </Link>
            </div>
        </div>
        <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-2">{t('footer.contact')}</h3>
            <p className="text-gray-700">{t('footer.phone') || 'Phone'}: <Link href="tel:+917428642333" className="hover:text-[#005FA3]">+91 7428642333</Link></p>
            <p className="text-gray-700">{t('footer.email') || 'Email'}: <Link href="mailto:info@mechnovamachines.com" className="hover:text-[#005FA3]">info@mechnovamachines.com</Link></p>
            <p className="text-gray-700">{t('footer.address') || 'Address'}: 2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122015</p>
        </div>
      </div>
        <div className="border-t border-gray-300 mt-8 pt-4 px-4 mx-10 flex flex-col md:flex-row justify-between items-center md:px-0">
            <div className="hidden md:block"/>
            <div className="hidden md:block"/>
            <div className="text-center md:text-left text-gray-700 text-base mb-4 md:mb-0">
                <div>© {new Date().getFullYear()} Mechnova Machines. {t('footer.allRightsReserved')}</div>
            </div>
            <div className="flex flex-row gap-2 sm:gap-4 text-sm text-gray-600">
                <Link href="/privacy" className="hover:text-[#005FA3] transition">
                    {t('footer.privacy') || 'Política de Privacidad'}
                </Link>
                <Link href="/terms" className="hover:text-[#005FA3] transition">
                    {t('footer.terms') || 'Términos y Condiciones'}
                </Link>
                <Link href="/cookie" className="hover:text-[#005FA3] transition">
                    {t('footer.cookies') || 'Política de Cookies'}
                </Link>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
