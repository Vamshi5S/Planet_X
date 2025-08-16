// src/components/industries/TravelTransportation.jsx
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TravelTransportation() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  /* ---------------- HERO ---------------- */
  const heroImg = "/ttl-hero.jpg"; // put a wide image in /public (e.g. parcels on conveyor)

  /* ---------------- WHAT WE OFFER / SERVICES ---------------- */
  const services = useMemo(
    () => [
      {
        title: "Travel",
        text:
          "Mission-critical solutions across airlines, airports and OTAs—distribution, in-flight catering, passenger experience, airport ops, MRO, and SMART airports.",
      },
      {
        title: "Transportation & Logistics",
        text:
          "GenAI, IoT, mobility, cloud and AI/ML to power autonomous systems for 3PLs, LSPs and shippers—elevating CX, operational efficiency and growth.",
      },
      {
        title: "Hospitality",
        text:
          "End-to-end digital stack for hotels, QSRs and leisure—guest experience, CRM, core operations, revenue management and corporate IT/back office.",
      },
      {
        title: "Maritime",
        text:
          "Port/terminal/transport digitalization: equipment & resource utilization, cargo visibility, safety & sustainability KPIs, and real-time financial metrics.",
      },
      {
        title: "Rail",
        text:
          "Freight & passenger rail solutions—planning, rolling-stock analytics, predictive maintenance, ticketing, station ops and digital twins.",
      },
      {
        title: "Urban Mobility",
        text:
          "Smart mobility platforms for micro-mobility, EV fleets and last-mile orchestration—routing, dispatch, charging, and demand forecasting.",
      },
    ],
    []
  );

  /* ---------------- LEADING THE WAY (slider) ---------------- */
  const ltwSlides = [
    {
      tag: "View",
      title: "The Role of AI in Developing a Sustainable Hospitality Industry",
      img: "/lead.png",
      summary:
        "Operators are shifting from reactive to predictive operations. AI helps optimize energy usage per occupied room, forecast demand at property level, and automate revenue management while maintaining brand-standard guest experiences.",
      bullets: [
        "15–25% energy savings via predictive HVAC + occupancy signals",
        "Personalized upsell journeys with dynamic pricing",
        "Automated QA for brand standards across properties",
      ],
    },
    {
      tag: "Insights",
      title: "Logistics Control Towers: From Visibility to Autonomy",
      img: "/yel.jpg",
      summary:
        "Modern control towers blend data fabric, event streaming, and LLM copilots to recommend actions, not just show status. The outcome: lower expedites and higher OTIF.",
      bullets: [
        "Unified ETA from carrier + IoT + weather feeds",
        "GenAI copilots to suggest re-routing and mode shifts",
        "5–8 pt OTIF improvement within 2 quarters (typical)",
      ],
    },
    {
      tag: "Whitepaper",
      title: "Airline Irregular Ops (IROPs) Recovery with GenAI",
      img: "/api-banner.png",
      summary:
        "LLM-assisted disruption management coordinates crew, aircraft and passenger re-accommodation in minutes—reducing misconnections and compensation costs.",
      bullets: [
        "Real-time constraint solving across crew & fleet",
        "Proactive rebook + notify with conversational bots",
        "Lower EU261/DoT compensation exposure",
      ],
    },
  ];
  const [ltwIdx, setLtwIdx] = useState(0);
  const ltwGo = (dir) =>
    setLtwIdx((p) => (dir === "next" ? (p + 1) % ltwSlides.length : (p - 1 + ltwSlides.length) % ltwSlides.length));
  const ltwProgress = ((ltwIdx + 1) / ltwSlides.length) * 100;

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <p className="text-sm tracking-wide text-rose-500 font-semibold" data-aos="fade-up">
            Industries
          </p>
          <h1
            className="text-[54px] leading-[1.08] md:text-[84px] font-extrabold -tracking-[0.02em] mt-3"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Travel, Transportation, Logistics, and Hospitality
          </h1>
          <p className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="100">
            Navigating the future of travel and logistics.
          </p>
        </div>

        {/* angled banner */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/logisticssmall.jpg')",
              clipPath: "polygon(0 44%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ============== INTRO SPLIT ============== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6" data-aos="fade-up">
            <h2 className="text-3xl md:text-[44px] font-extrabold -tracking-[0.01em]">
              Fostering the Shift in the Industry
            </h2>
          </div>
          <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              TTLH is undergoing a paradigm shift fuelled by digitization, new customer expectations and modern business
              models. With 20+ years of domain experience, we realign processes and technology—bringing GenAI,
              automation, data fabric, and platform modernization to deliver resilient operations, better experiences,
              and measurable outcomes.
            </p>
          </div>
        </div>
      </section>
      {/* ============== OUR SERVICES (no buttons) ============== */}
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
                data-aos-delay={i * 60}
              >
                <h4 className="text-[18px] font-semibold">{c.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VIDEO (autoplay) ============== */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="relative mt-14 overflow-hidden rounded-2xl">
            <video
              className="w-full h-[420px] md:h-[540px] object-cover"
              src="/rctl.mp4"     // place in /public
             
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* ============== LEADING THE WAY (no Read More) ============== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Leading the Way</h3>
            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => ltwGo("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => ltwGo("next")} dir="next" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6" key={ltwSlides[ltwIdx].img}>
              <img
                src={ltwSlides[ltwIdx].img}
                alt={ltwSlides[ltwIdx].title}
                className="w-full h-[320px] md:h-[420px] object-cover rounded-xl"
                draggable={false}
              />
            </div>

            <div className="md:col-span-6" key={ltwSlides[ltwIdx].title}>
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">{ltwSlides[ltwIdx].tag}</p>
              <h4 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">
                {ltwSlides[ltwIdx].title}
              </h4>
              <p className="mt-4 text-gray-700 leading-relaxed">{ltwSlides[ltwIdx].summary}</p>
              <ul className="mt-4 space-y-2">
                {ltwSlides[ltwIdx].bullets.map((b, i) => (
                  <li key={i} className="text-[15px] text-gray-800 flex gap-2">
                    <span className="mt-[7px] inline-block h-[6px] w-[6px] rounded-full bg-rose-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 h-[4px] bg-gray-200/80 rounded-full overflow-hidden">
            <div className="h-full bg-rose-600 transition-all duration-500" style={{ width: `${ltwProgress}%` }} />
          </div>
        </div>
      </section>

      <div className="h-6 md:h-10" />
    </main>
  );
}

/* ---------- tiny UI piece for arrow buttons ---------- */
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
