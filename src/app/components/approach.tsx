export default function Approach() {
  const steps = [
    {
      title: "Planning",
      subtitle: "Strategic Vision & Coordination",
    },
    {
      title: "Production",
      subtitle: "Seamless Execution Management",
    },
    {
      title: "Design",
      subtitle: "Creative Direction & Styling",
    },
    {
      title: "Execution",
      subtitle: "Flawless Event Delivery",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#101011] mb-14">
          Our Approach
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Top Accent Line */}
              <div className="w-10 h-[2px] bg-[#bfa34a] mb-6 mx-auto transition-all duration-300 group-hover:w-16"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#101011] mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.subtitle}
              </p>

              {/* Bottom Glow Effect */}
              <div className="mt-6 h-[2px] w-0 bg-[#bfa34a] mx-auto transition-all duration-300 group-hover:w-12"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}