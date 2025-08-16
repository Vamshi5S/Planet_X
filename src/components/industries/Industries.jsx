// src/components/industries/Industries.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Industries() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <h1 className="text-[64px] md:text-[84px] font-extrabold -tracking-[0.02em]">Industries</h1>
          <p className="max-w-2xl text-[18px] text-gray-700 mt-4">
            As industries converge and new industries emerge, we are re-imagining our{" "}
            <span className="font-semibold">strategy, solutions,</span> and{" "}
            <span className="font-semibold">platforms</span> as well.
          </p>
        </div>

        {/* Straight video band (use your own file in /public) */}
        <div className="relative mt-12">
          <div className="relative h-[420px] md:h-[560px] overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/v.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/18 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Cards you asked to keep */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <IndustryCard key={c.title} {...c} aosDelay={i * 40} />
          ))}
        </div>
      </section>
    </main>
  );
}

function IndustryCard({ title, img, href = null, aosDelay = 0 }) {
  const container =
    "group relative rounded-xl border border-gray-200 overflow-hidden bg-[#f6f7f8] hover:bg-[#0f0f10] hover:text-white transition-colors flex flex-col justify-between";

  const content = (
    <>
      <div className="p-10">
        <div className="mx-auto h-[168px] w-[168px] rounded-full overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
            draggable={false}
          />
        </div>
      </div>
      <div className="px-8 pb-8 pt-2 flex items-center justify-between">
        <h4 className="text-[20px] font-medium leading-snug">{title}</h4>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/70 group-hover:border-white/70 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" className="group-hover:translate-x-[2px] transition-transform">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </span>
      </div>
    </>
  );

  return href ? (
    <Link to={href} className={container} data-aos="fade-up" data-aos-delay={aosDelay}>
      {content}
    </Link>
  ) : (
    <div className={container} data-aos="fade-up" data-aos-delay={aosDelay}>
      {content}
    </div>
  );
}

/* Only the cards you wanted */
const cards = [
  {
    title: "Banking and Financial Services",
    img: "/o.jpg",                 // your existing image
    href: "/industries/banking-financial-services", // ✅ clickable
  },
  { title: "Healthcare and Life Sciences", img: "/healthcare.jpg", href: "/industries/healthcare-life-sciences", },
  { title: "Hi Tech", img: "/hi_tech.jpg", href: "/industries/high-tech", },
  { title: "Insurance Technology and Services", img: "/insur.jpg", href: "/industries/insurance-technology-services", },
  { title: "Retail and Consumer Goods", img: "/cons.jpg", href: "/industries/retail-consumer-goods", },
  {
    title: "Travel, Transportation, Logistics, and Hospitality",
    img: "/logisticssmall.jpg", href: "/industries/travel-transportation-logistics-hospitality",
  },
];
