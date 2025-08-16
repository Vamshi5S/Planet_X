import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Cloud & Infrastructure — PlanetX
 * --------------------------------------------------------------------
 * - Matches TM’s layout/feel (hero + diagonal image, big headings).
 * - Startup-friendly copy (no “hyperscaler partnerships”; we focus on value).
 * - “Leading the Way” is a carousel: image left, content right, arrows top-right,
 *   red progress bar bottom.
 * - Replace any `/assets/...` src with your local images.
 *
 * Tailwind helpers used:
 * - Add this to your global CSS once (so native scrollbars hide for carousels):
 *   .hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
 */

export default function CloudInfrastructure() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  // ------- Carousel state -------
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);

  const slides = useMemo(
    () => [
      {
        tag: "Video",
        title: "Power of Partnership (Inside the Team)",
        blurb:
          "How small, focused teams out-ship larger orgs: platform thinking, clean SLOs, and ruthless automation.",
       
        img: "/partner.jpg", // replace
      },
      {
        tag: "White Paper",
        title:
          "Build a Next-Gen IT Cost Office to Tame Cloud Spend Without Slowing Teams",
        blurb:
          "A lightweight FinOps practice that blends chargeback, error budgets, and Paved Roads—designed for startups that move fast.",
    
        img: "/build-next.jpg", // replace
      },
      {
        tag: "Case Study",
        title:
          "Modernizing Business Apps for a High-Growth Telco-Style Startup",
        blurb:
          "From monolith to modular: APIs, event meshes, and pipelines that ship value faster with fewer regressions.",
    
        img: "/modern.jpg", // replace
      },
      {
        tag: "Press Release",
        title:
          "PlanetX Launches BlazeOps to Maximize Infra ROI for Cloud-Native Teams",
        blurb:
          "A single pane for assessment, migration, and day-2 operations—crafted for lean teams scaling globally.",
        
        img: "/blaze.jpg", // replace
      },
      {
        tag: "White Paper",
        title:
          "A Practical Roadmap to Cloud Excellence with SRE & Platform Engineering",
        blurb:
          "How to start small: golden paths, self-serve environments, and policy-as-code—without heavyweight platforms.",
        
        img: "/roadmap.jpg", // replace
      },
    ],
    []
  );

  const go = (dir) => {
    setIdx((p) =>
      dir === "next" ? (p + 1) % slides.length : (p - 1 + slides.length) % slides.length
    );
  };

  // Progress value (0..1)
  const progress = (idx + 1) / slides.length;

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-12">
          <p className="text-sm tracking-wide text-rose-500 font-semibold" data-aos="fade-up">
            Capabilities
          </p>
          <h1
            className="text-[54px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[1.05] font-extrabold -tracking-[.5px] mt-3"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Cloud and Infrastructure
            <br className="hidden md:block" /> Services
          </h1>
        </div>

        {/* Diagonal image under the hero text */}
        <div className="relative mt-10">
          <div
            className="relative h-[360px] md:h-[520px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/cloud.jpg')", // replace
              clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {/* Subtle darkening at the top-left like TM */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(335deg, rgba(0,0,0,.60) 0%, rgba(0,0,0,.25) 30%, rgba(0,0,0,0) 56%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10">
          <div data-aos="fade-up">
            <h2 className="text-[36px] md:text-[44px] font-extrabold leading-tight">
              Powering the NXT Innovation in Cloud and Infrastructure Services
            </h2>
          </div>
          <div className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="80">
            <p>
              Our cloud and infrastructure practice spans the entire stack—from
              network to platform to workload. We design with SRE at the core,
              so your systems are observable, resilient, and economical from day one.
              Instead of leaning on “big partner” badges, we focus on <strong>repeatable
              engineering patterns</strong>: paved developer paths, self-service
              environments, policy-as-code, and cost guardrails that let teams
              move fast without burn.
            </p>
            
             
            
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="bg-[#f5f6f7] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-10" data-aos="fade-up">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <ServiceCard
              title="Cloud Services"
              intro="Advisory, landing zones, migration, and FinOps for cloud-native teams. We prioritize paved roads, automation, and runtime SLOs so your builders stay fast and safe."
              aosDelay={0}
            />
            {/* Card 2 */}
            <ServiceCard
              title="FLEX Digital Workplace"
              intro="A modern workplace built around the developer: device onboarding, zero-touch provisioning, secure access, and collaboration that simply works everywhere."
              
              aosDelay={80}
            />
            {/* Card 3 */}
            <ServiceCard
              title="Data Center & Edge"
              intro="Hybrid done right: consistent build/run pipelines for on-prem and edge, with observability and cost controls that mirror cloud."
              
              aosDelay={140}
            />
          </div>
        </div>
      </section>

      {/* ================= LEADING THE WAY (Carousel) ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold">Leading the Way</h3>

            <div className="hidden md:flex gap-3">
              <CircleBtn ariaLabel="Previous" onClick={() => go("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => go("next")} dir="next" />
            </div>
          </div>

          {/* Slide */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
          <img
  key={slides[idx].img}
  src={slides[idx].img} 
  alt={slides[idx].title}
  className="w-full h-[440px] md:h-[520px] object-cover"
/>


            {/* Content */}
            <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">{slides[idx].tag}</p>
              <h4 className="mt-3 text-[28px] md:text-[32px] font-semibold leading-snug">
                {slides[idx].title}
              </h4>
              <p className="mt-4 text-gray-700 leading-relaxed">{slides[idx].blurb}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-12 h-[6px] bg-gray-200 relative rounded-full">
            <div
              className="absolute left-0 top-0 h-[6px] rounded-full bg-[#e11b22] transition-[width] duration-500"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ========= Small subcomponents ========= */

function CircleBtn({ dir = "prev", onClick, ariaLabel }) {
  const isNext = dir === "next";
  return (
    <button
      type="button"
      aria-label={ariaLabel || (isNext ? "Next" : "Previous")}
      onClick={onClick}
      className="h-12 w-12 rounded-full border border-gray-300 hover:border-gray-400 bg-white flex items-center justify-center shadow-sm"
    >
      {isNext ? (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )}
    </button>
  );
}

function ServiceCard({ title, intro, link, aosDelay = 0 }) {
  return (
    <article
      className="rounded-xl border border-gray-200 bg-white p-6 md:p-7"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <h4 className="text-[18px] font-semibold">{title}</h4>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{intro}</p>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold"
      >
        {link}
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>
    </article>
  );
}
