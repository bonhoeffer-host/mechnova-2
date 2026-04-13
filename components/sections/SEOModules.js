import { useTranslation } from '@/lib/useTranslation'

export const ChainsawSEOIntro = () => (
  <section className="bg-slate-50 py-12 md:py-16 font-sans leading-relaxed text-slate-900 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="absolute top-0 left-0 w-32 h-1 bg-[#0072ce]"></div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight pt-8">
          Chainsaw Machine: <span className="text-[#0072ce]">Powerful Wood Cutting Solution</span> for Modern Farming
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-[1.6]">
              As there is a shift towards modern agriculture, implementing new-age modern machinery is necessary, and that is when a chainsaw comes into the picture.
            </p>
            <p className="text-lg text-slate-700">
              It is a powerful machine mastered by new technology that makes it suitable for cutting trees, preparing firewood, or maintaining farms and orchards. This machine offers speed, precision, and efficiency.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center">
             <p className="text-lg text-slate-700 mb-6 italic border-l-4 border-[#0072ce] pl-6 font-medium">
               &quot;Chainsaws help in saving time and manual effort, making it a valuable purchase and investment for anyone who is involved in farming and agricultural activities.&quot;
             </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ChainsawSEOFeatures = () => (
  <section className="bg-white py-16 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h3 className="text-3xl font-extrabold text-[#0072ce] mb-12 flex items-center gap-4">
          <span className="p-2 bg-blue-100 rounded-lg">
            <svg className="w-8 h-8 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          Key Features of a Petrol Chainsaw
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "High-Performance Petrol Engine",
              text: "Petrol chainsaws are powered by petrol engines, which makes them capable of working in tough conditions. Heavy tasks including tree cutting and log processing are easily handled by machines having an engine of 50-60 cc."
            },
            {
              title: "Long-Lasting and Durable Built",
              text: "The build of modern chainsaws is made from strong and good-quality components, making them suitable for continuous use. This ensures long life and reliability in demanding tasks."
            },
            {
              title: "Efficient Wood Cutting Capability",
              text: "With the help of a tree-cutting machine like a chainsaw, they are equipped with a sharp rotating chain that enables precise and fast cutting."
            },
            {
              title: "Easy to Operate",
              text: "Designed with user-friendly features like recoil start, ergonomic handle, and anti-vibration system. This helps in reducing operator fatigue and improving comfort."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-slate-50 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-blue-200 border border-slate-100 transition-all duration-300 group">
              <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#0072ce] transition-colors">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const ChainsawSEOUses = () => (
  <section className="bg-slate-100 py-16 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden">
          <h3 className="text-3xl md:text-5xl font-bold mb-16 text-center">Uses of Chainsaw Machines</h3>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {[
              {
                title: "Firewood Preparation",
                text: "Chainsaws are a highly useful machine for preparing firewood for commercial or domestic use. Uniformly sized logs can be quickly and easily obtained through it."
              },
              {
                title: "Farm Use and Garden Maintenance",
                text: "Farmers use a chainsaw in clearing the unwanted bushes, branches, and weeds from their farms, making it easier for them to maintain healthy and clean farms and gardens."
              },
              {
                title: "Tree Cutting and Pruning",
                text: "Chainsaws are widely used for cutting trees and trimming branches in farms, orchards, and forests. They provide clean and quick cuts, improving efficiency."
              }
            ].map((use, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="text-6xl font-black text-blue-500/20">0{i+1}</div>
                <h4 className="text-2xl font-bold">{use.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed">{use.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ChainsawSEOConclusion = () => (
  <section className="bg-white py-16 font-sans border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
        <div className="bg-gradient-to-br from-[#0072ce] to-blue-800 text-white p-12 rounded-[2.5rem] shadow-xl">
           <h3 className="text-3xl font-bold mb-8">Why Choose Mechnova?</h3>
           <p className="text-lg text-blue-50 leading-relaxed">
             By choosing the best chainsaw brand in India, farmers can easily rely on the durability of the products, performance of the machines, and after-sales support. Brands like <span className="underline decoration-2 underline-offset-4 font-black">Mechnova</span> can be trusted.
           </p>
        </div>
        
        <div className="bg-blue-50 p-12 rounded-[2.5rem] border-2 border-dashed border-blue-200 flex flex-col justify-center">
           <p className="text-xl text-slate-700 leading-relaxed font-medium">
             Petrol chainsaws are highly recommendable as they are compact, portable, and powerful in nature, making them suitable for working longer working hours.
           </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center py-12">
         <h3 className="text-3xl font-bold text-slate-900 mb-8 italic">&quot;A chainsaw machine is a non-compromisable machine...&quot;</h3>
         <p className="text-xl text-slate-600 leading-[1.8] mb-12">
           A chainsaw machine is a non-compromisable machine for anyone who is involved in farming activities, forestry, and cutting work. It is a time saver as well as decreases the labor dependency.
         </p>
      </div>
    </div>
  </section>
);

export const BrushCutterSEOTop = () => (
  <section className="bg-slate-50 py-12 font-sans leading-relaxed text-slate-900 border-b border-slate-200 mb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative mb-16">
        <div className="absolute top-0 left-0 w-32 h-1 bg-[#0072ce]"></div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight pt-8 leading-tight">
          Brush Cutter Machine: <span className="text-[#0072ce]">A Reliable Grass Cutting Tool</span> for Every Farm
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              One of the major problems which gets raised in farms and fields are the unwanted weeds which get grown, and removing them becomes an essential task as they can hamper the growth of the crop by competing with them in terms of sunlight, water, and minerals.
            </p>
            <p className="text-lg text-slate-700">
              With the help of a brush cutter farmers and gardeners can keep their fields clean and well maintained. This machine is also known as a grass cutting machine which can tackle everything from light grass trimming to cutting heavy bushes. 
            </p>
            <p className="text-lg font-medium text-[#0072ce]">
              Unless like manual tilling, a brush cutter saves time and manual labor. It is widely used by farmers, gardeners for effective farming and results.
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#0072ce] pl-4">Types of Brush Cutter Machines</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0072ce] mb-2">Back Pack Brush Cutter</h4>
                <p className="text-slate-600 text-sm">A back pack brush cutter is designed for farmers who are involved in activities which require long and continuous work. The engine is mounted on the back of the user reducing the wait on hands. This type of brush cutter is ideal for those farmers who prefer comfort and work for extended periods in large fields.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0072ce] mb-2">Side Pack Brush Cutter</h4>
                <p className="text-slate-600 text-sm">In this brush cutter the engine is attached to the side of the machine. This machine is suitable for small and medium sized farms as it is easy to handle and provides better balance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const BrushCutterSEOBottom = () => (
  <section className="bg-slate-50 py-16 font-sans leading-relaxed text-slate-900 mt-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20">
        <h3 className="text-3xl font-extrabold text-[#0072ce] mb-12 flex items-center gap-4">
          <span className="p-2 bg-blue-100 rounded-lg">
            <svg className="w-8 h-8 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          Key Features of Brush Cutter
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Powerful Petrol Engine",
              text: "The machine is powered by a petrol engine which performs consistent performance throughout. A petrol brush cutter is designed to perform heavy duty tasks and in rural areas where electricity cannot be found easily."
            },
            {
              title: "Multiple Attachments",
              text: "A brush cutter is a versatile machine and can perform various tasks. Different attachments like nylon head and metal blades are supported by the machinery making it capable to work in different situations with different requirements."
            },
            {
              title: "Ergonomic Design",
              text: "While working in farms, users get fatigued easily and comfort is required when working on a brush cutter. Thus a brush cutter is enabled with adjustable handles and anti-vibration systems to make it easier to use."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 text-slate-900 underline decoration-[#0072ce] decoration-2 underline-offset-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center relative z-10">Benefits of Using a Grass Cutter Machine</h3>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Saves Time and Effort",
              text: "Cutting grass manually from tools like sickles, a lot of time is wasted. But with the help of a brush cutter one can cover larger fields in a shorter duration. It also reduces physical strain on the user and allows the work to get done quickly."
            },
            {
              title: "Improves Farm Productivity",
              text: "Removal of weeds and unwanted grass is necessary for crops to grow better as they compete with plants for nutrients. By switching to a grass cutter machine, farmers can maintain their fields efficiently and quickly, which ultimately leads to better crop growth and overall productivity of the farm."
            },
            {
              title: "Suitable for All Terrains",
              text: "A brush cutter machine is designed to perform and work effectively on uneven land, and slope. Its portability and strong performance make it ideal for different farming conditions, including rough and hard-to-reach locations."
            }
          ].map((benefit, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl font-black text-blue-500/20">0{i+1}</div>
              <h4 className="text-xl font-bold">{benefit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center py-12 border-t border-slate-200">
        <h3 className="text-3xl font-bold text-slate-900 mb-8 italic">Conclusion</h3>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          A brush cutter machine is a must-have tool for farming and land maintenance today. These machines help a lot with cutting grass. You can pick a back pack brush cutter or a side pack brush cutter. Both types are efficient, convenient and work well. Farmers can benefit a lot from using a petrol brush cutter. It reduces the work of cutting, saves time and helps keep fields in good shape.
        </p>
        <div className="bg-gradient-to-br from-[#0072ce] to-blue-700 text-white p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-transform">
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            A brush cutter machine is really helpful for farming. With care a brush cutter can greatly improve how farms are run and how much is produced.
          </p>
          <p className="text-lg opacity-90 leading-relaxed">
            Farmers can manage their farms better with a brush cutter. It is an investment, for any farmer. A brush cutter machine makes farming easier.
          </p>
        </div>
      </div>
    </div>
  </section>
);
