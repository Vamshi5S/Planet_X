import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RetailConsumerGoods() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);

  /* ---------- Our Services (simple grid, no buttons) ---------- */
  const services = useMemo(
    () => [
      {
        title: "Store of the Future",
        text:
          "Adoption of IoT, computer vision, video analytics and RFID to reshape in-store operations and experiences.",
      },
      {
        title: "Customer Experience",
        text:
          "UX overhauls, omnichannel journeys, and hyper-personalization that boost engagement and loyalty.",
      },
      {
        title: "Sustainability",
        text:
          "Operational eco-efficiency and circular practices that reduce waste while improving profitability.",
      },
      {
        title: "Digital Supply Chain",
        text:
          "AI/ML demand sensing, forecasting, and control-tower visibility for resilient, data-driven supply chains.",
      },
      {
        title: "Direct to Customer",
        text:
          "E-commerce, last-mile delivery, and service models that reduce friction across the customer journey.",
      },
      {
        title: "Legacy Modernization",
        text:
          "Modernize ERP cores and migrate from legacy apps to cloud-ready, composable architectures.",
      },
      {
        title: "Data Analytics",
        text:
          "Data advisory, lifecycle governance, migration, and advanced analytics to unlock enterprise value.",
      },
      {
        title: "Business Process Operations",
        text:
          "AI/RPA-led front/back-office transformation and conversational AI that elevate service and reduce cost.",
      },
      {
        title: "Industry 4.0",
        text:
          "Integrated view of factory, supply chain, and support functions with smart monitoring and automation.",
      },
    ],
    []
  );

  /* ---------- Industries We Serve (tabs/slider) ---------- */
  const serve = useMemo(
    () => [
      {
        title: "Consumer Healthcare",
        text:
          "Solutions that match evolving patient needs—from digital engagement to analytics-driven product recommendations—helping brands grow offerings and outcomes.",
      },
      {
        title: "Fashion & Lifestyle",
        text:
          "Metaverse pilots, omnichannel marketplaces, immersive tech, and micro-fulfillment to drive efficiency and new experiences across the value chain.",
      },
      {
        title: "Food & Beverage",
        text:
          "Address supply shocks and cost pressures with intelligent fulfillment, demand planning, and warehouse automation for seamless phygital experiences.",
      },
      {
        title: "Personal Care",
        text:
          "Sustainable design, multi-channel reach, and personalized journeys that reflect transparency and new buying behaviors.",
      },
      {
        title: "E-Retailer",
        text:
          "Maximize lifetime value with E2E D2C: acquisition, e-commerce, hyper-personalization, delivery, and returns orchestration.",
      },
      {
        title: "Consumer Electronics",
        text:
          "Connected products, service platforms, and analytics to improve quality, reduce returns, and grow subscription revenue.",
      },
    ],
    []
  );

  const [start, setStart] = useState(0);
  const VISIBLE = 3; // 3 cards on desktop
  const maxStart = Math.max(0, serve.length - VISIBLE);
  const go = (dir) =>
    setStart((p) => (dir === "next" ? (p >= maxStart ? 0 : p + 1) : p <= 0 ? maxStart : p - 1));
  const progress = ((Math.min(start + VISIBLE, serve.length)) / serve.length) * 100;

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <p className="text-sm tracking-wide text-rose-500 font-semibold" data-aos="fade-up">
            Industries
          </p>
          <h1
            className="text-[56px] leading-[1.08] md:text-[88px] font-extrabold -tracking-[0.02em] mt-3"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Retail and Consumer <br className="hidden md:block" /> Goods
          </h1>
          <p
            className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Staying ahead of ever-changing consumer demand.
          </p>
        </div>

        {/* angled hero image */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/cons.jpg')", // place your hero image in /public
              clipPath: "polygon(0 44%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ================= INTRO SPLIT ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6" data-aos="fade-up">
            <h2 className="text-3xl md:text-[44px] font-extrabold -tracking-[0.01em]">
              Driving Retail Transformation
            </h2>
          </div>
          <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              We help global retailers and CPG companies transform at scale—modernizing digital
              supply chains, elevating customer experience, enabling omnichannel retail, and
              simplifying legacy estates so you can move faster with confidence.
            </p>
          </div>
        </div>
      </section>
      {/* ================= FULL-WIDTH IMAGE BAND ================= */}
      <section className="bg-white">
        <div
          className="h-[360px] md:h-[520px] bg-center bg-cover"
          style={{ backgroundImage: "url('/kl.png')" }} // replace
          aria-hidden
        />
      </section>
      {/* ================= OUR SERVICES (no Learn More) ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10" data-aos="fade-up">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((c, i) => (
              <article
                key={c.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <h4 className="text-[18px] font-semibold">{c.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO BAND (optional) ================= */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="relative mt-14 overflow-hidden rounded-2xl">
            <video
              className="w-full h-[420px] md:h-[540px] object-cover"
              src="/rctl.mp4"
              poster="/rctl.mp4"
              autoPlay
        muted
        loop
        playsInline
            />
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE (slider) ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">
              Industries We Serve
            </h3>
            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => go("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => go("next")} dir="next" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="grid grid-cols-[repeat(12,minmax(260px,1fr))] gap-6 lg:gap-8 transition-transform duration-500"
              style={{ transform: `translateX(-${(start * 100) / VISIBLE}%)` }}
            >
              {serve.map((c, i) => (
                <article key={`${c.title}-${i}`} className="rounded-xl border border-gray-200 bg-[#f6f7f8] p-6">
                  <h4 className="text-[18px] font-semibold">{c.title}</h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 h-[4px] bg-gray-200/80 rounded-full overflow-hidden">
            <div className="h-full bg-rose-600 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>

      <div className="h-6 md:h-10" />
    </main>
  );
}

/* ---------- small reusable circle arrow button ---------- */
function CircleBtn({ ariaLabel, onClick, dir }) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="h-12 w-12 rounded-full border border-gray-300 text-[#0b0b0b] bg-white hover:bg-gray-50 grid place-items-center transition"
    >
      <svg width="18" height="18" viewBox="0 0 24 24">
        {dir === "next" ? (
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
        ) : (
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" />
        )}
      </svg>
    </button>
  );
}
