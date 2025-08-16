// src/components/industries/InsuranceTechnologyServices.jsx
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InsuranceTechnologyServices() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  /* ---------------- OUR SERVICES (simple accordions) ---------------- */
  const accordions = useMemo(
    () => [
      {
        title: "Smarter Engagement with Agents and Customers",
        items: [
          {
            h: "Insight-Driven Experience Transformation with GenAI",
            p: "Design intuitive, data-informed journeys for customers and agents using GenAI across the policy lifecycle.",
          },
          {
            h: "Modern Solutions for New Business and Agent Enablement",
            p: "Digital onboarding, guided selling and intelligent quoting tools to enhance productivity and conversions.",
          },
        ],
      },
      {
        title: "Increasing Revenue and Wallet Share",
        items: [
          {
            h: "GenAI and Data Transformation in Insurance",
            p: "Modernize data estates and embed GenAI across the value chain to unlock new revenue and hyper-personalization.",
          },
          {
            h: "Insurance Product Engineering & Next-Gen Development",
            p: "Co-develop next-gen insurance products using modular architectures, digital twins and emerging tech accelerators.",
          },
        ],
      },
      {
        title: "Cost Optimization in Hybrid Cloud Infrastructure",
        items: [
          {
            h: "Hybrid Cloud Infrastructure Transformation",
            p: "Reduce IT costs through modernization, software rationalization and workload optimization.",
          },
          {
            h: "Insurance AMS.NXT with GenAI",
            p: "Transform application management with our GenAI-powered AMS platform for agility and operational savings.",
          },
        ],
      },
      {
        title: "GenAI-enabled Insurance Business Process Services",
        items: [
          {
            h: "Next-Gen Insurance BPO & Contact Centers",
            p: "LLM-powered agents, intelligent workflows and conversational automation for CX and back-office.",
          },
          {
            h: "TPA Services for Retirement & Pensions",
            p: "Digital-first, AI-enhanced TPA stack tailored for retirement and pension plans.",
          },
        ],
      },
      {
        title: "Enabling the Next-Gen Insurance Enterprise",
        items: [
          {
            h: "Operating Model & Value-Chain Digitization",
            p: "Digitally re-platform underwriting, policy, billing and claims with data fabric, APIs and event streams.",
          },
          {
            h: "Security, Risk & Compliance",
            p: "Zero-trust, secure SDLC, and regulatory automation for resilient operations.",
          },
        ],
      },
    ],
    []
  );

  /* ---------------- LEADING THE WAY (slider – no 'Read more') ---------------- */
  const slides = [
    {
      tag: "Whitepaper",
      title: "Breakthrough Cloud Technology Simplifies Core Banking System Migration",
      img: "/think-thumbnail.jpg",
    },
    {
      tag: "White Paper",
      title: "Maximizing the Value of Data in Insurance",
      img: "/yel.jpg",
    },
    {
      tag: "White Paper",
      title: "A Perspective on Guidewire ClaimCenter Data Migration",
      img: "/al.jpg",
    },
  ];
  const [idx, setIdx] = useState(0);
  const go = (d) =>
    setIdx((p) => (d === "next" ? (p + 1) % slides.length : (p - 1 + slides.length) % slides.length));
  const progress = ((idx + 1) / slides.length) * 100;

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
            data-aos-delay="40"
          >
            Insurance Technology and Services
          </h1>
          <p className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="80">
            Digital change agents for next-gen insurance carriers.
          </p>
        </div>

        {/* angled banner image */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/insurancefinal.jpg')",
              clipPath: "polygon(0 46%, 100% 0, 100% 100%, 0% 100%)",
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
              Revolutionizing the Insurance Industry
            </h2>
          </div>
          <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              Insurers and reinsurers are undergoing rapid transformation driven by technology-led
              innovation. Digital operating models unlock agility, flexibility and scalability, while
              modular value-chains enable firms to reconfigure capabilities, improve efficiency and
              accelerate innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR VISION (3 columns with bullets) ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10" data-aos="fade-up">
            Our Vision for the Future of Insurance
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <VisionCard
              title="Life and Annuities"
              bullets={[
                "AI-powered, cost-efficient transformation via cloud optimization and scalable TPA & operations.",
                "GenAI-powered digital experiences to enhance engagement.",
                "High-performance integration for real-time processing.",
              ]}
            />
            <VisionCard
              title="General Insurance (Property & Casualty)"
              bullets={[
                "Reduce data costs with cloud migration and modern core.",
                "Fraud analytics with AI/ML for measurable savings.",
                "Faster policy issuance via process re-engineering.",
              ]}
              delay={60}
            />
            <VisionCard
              title="Reinsurance"
              bullets={[
                "AI-led underwriting and legacy modernization.",
                "Sustainability reporting platforms and automation.",
                "Global adoption through modern, modular solutions.",
              ]}
              delay={120}
            />
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (Accordions) ================= */}

      <section className="bg-white py-16 md:py-24">
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-8">Our Services</h3>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {accordions.map((acc, i) => (
              <Accordion key={acc.title} title={acc.title} defaultOpen={i === 0}>
                <ul className="space-y-5 py-6">
                  {acc.items.map((it) => (
                    <li key={it.h} className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-[6px] w-[6px] rounded-sm bg-rose-600" />
                      <p className="font-semibold">{it.h}</p>
                      <p className="text-gray-700 mt-1">{it.p}</p>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADING THE WAY (slider) ================= */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Leading the Way</h3>
            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => go("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => go("next")} dir="next" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6" key={slides[idx].img}>
              <img
                src={slides[idx].img}
                alt={slides[idx].title}
                className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"
                draggable={false}
              />
            </div>
            <div className="md:col-span-6" key={slides[idx].title}>
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">{slides[idx].tag}</p>
              <h4 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">
                {slides[idx].title}
              </h4>
        
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

/* ---------------- small pieces ---------------- */

function VisionCard({ title, bullets, delay = 0 }) {
  return (
    <article
      className="rounded-xl border border-gray-200 bg-white p-6"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h4 className="text-[18px] font-semibold">{title}</h4>
      <ul className="mt-4 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[10px] h-[6px] w-[6px] rounded-sm bg-rose-600 shrink-0" />
            <p className="text-[15px] leading-relaxed text-gray-700">{b}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
      <div className="group">
        <button
          className={`w-full py-6 flex items-center justify-between text-left transition-all duration-300 
            ${open ? "bg-[#E0F2FE]" : "hover:bg-[#F8FAFC]"}`}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`text-xl md:text-[22px] font-semibold transition-colors duration-300
              ${open ? "text-[#0369A1]" : "text-gray-900 group-hover:text-[#0369A1]"}`}
          >
            {title}
          </span>
          <span
            className={`h-9 w-9 rounded-full border border-[#7DD3FC] grid place-items-center 
              transition-colors duration-300 ${open ? "bg-[#38BDF8] border-[#38BDF8] text-white" : "bg-white text-[#0369A1]"}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              {open ? (
                <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </span>
        </button>
        {open && (
          <div className="pb-6 px-2 md:px-4 animate-fadeIn">
            {children}
          </div>
        )}
      </div>
    );
  }
  
  

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
