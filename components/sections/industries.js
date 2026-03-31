import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

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
	

		<section className="w-full py-32 relative bg-[#f2f4f7]"> 
  <h2 className="text-5xl font-extrabold text-center mb-20 text-gray-900">
    {t("home.industries.title")}
  </h2>

  <div className="flex flex-col gap-16 max-w-6xl mx-auto">

    {industries.map((ind, i) => (
      <div
        key={i}
        className={`relative flex flex-col md:flex-row ${
          i % 2 === 0 ? "" : "md:flex-row-reverse"
        } items-center rounded-3xl overflow-hidden shadow-xl bg-white`}
     
      style={{
      background:
        i === 0 ? "linear-gradient(135deg, #fafbff, #dfe4ff)" :      // Light Indigo Tint
        i === 1 ? "linear-gradient(135deg, #f0f9ff, #d8eeff)" :      // Light Sky Blue
        i === 2 ? "linear-gradient(135deg, #fff7f0, #ffe9d6)" :      // Soft Warm Peach
        i === 3 ? "linear-gradient(135deg, #f7f9f8, #e4e7e6)" :      // Neutral Light Grey
        i === 4 ? "linear-gradient(135deg, #f8f5ff, #e8e0ff)" :      // Light Lavender
        "#ffffff",

      }}
      >


        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-80 md:h-96 relative overflow-hidden">
          <Image
            src={ind.image}
            alt={ind.title}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-gray-900">
          <h3 className="text-3xl font-bold mb-3">{ind.title}</h3>
          <p className="text-lg">{ind.desc}</p>
        </div>

      </div>
    ))}

  </div>
</section>
	);
}

export default Industries;
