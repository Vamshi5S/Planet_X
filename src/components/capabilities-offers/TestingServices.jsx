// src/components/capabilities-offers/TestingServices.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestingServices() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  /* ---------------- THOUGHT LEADERSHIP SLIDER ---------------- */
  const tlSlides = [
    {
      tag: "Views",
      title: "Leverage Docker Capabilities in Test Execution",
      blurb:
        "Containerize your test workloads for faster parallelism, reproducibility, and clean environments across CI.",
      more:
        "Use ephemeral runners, cache layers for browser/SDK binaries, and service containers (DB/queues) to make suites deterministic. Include seeded datasets and health checks in compose files so tests fail fast and consistently.",
      img: "/bg.png",
    },
    {
      tag: "Views",
      title: "Revolutionizing DevOps Automation with Generative AI",
      blurb:
        "Small teams can speed up release quality with AI-assisted scripts, stubs, and data generation.",
      more:
        "Start with low-risk helpers like test case drafts, fixtures, and stubbed responses. Keep prompts in repo, add golden answers for unit checks, and require manual review on security-sensitive or customer-visible paths.",
      img: "/bq.png",
    },
    {
      tag: "Whitepaper",
      title: "Testing IoT Applications in a Hyperconnected World",
      blurb:
        "A practical approach to validate device fleets, data pipelines, and edge/cloud handoffs.",
      more:
        "Covers device simulation at scale, contract tests for telemetry messages, chaos testing for flaky networks, and a lab-to-cloud blueprint for gating releases with real signals instead of best-guess coverage.",
      img: "/iot.jpg",
    },
  ];

  const [tlIdx, setTlIdx] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState(null); // which slide is expanded

  const tlGo = (dir) =>
    setTlIdx((p) =>
      dir === "next" ? (p + 1) % tlSlides.length : (p - 1 + tlSlides.length) % tlSlides.length
    );

  const tlProgress = ((tlIdx + 1) / tlSlides.length) * 100;

  /* ---------------- RELATED TESTING (formerly Explore More) ---------------- */
  const related = [
    { title: "Performance Engineering", img: "/pe.png" },
    { title: "Intelligent Test Automation", img: "/intel.png" },
    { title: "BIDW Test Automation", img: "/s.png" },
    { title: "Test Data Management", img: "/test.png" },
    { title: "Extract Transform Load Testing", img: "/testing.png" },
    { title: "API Contract Testing", img: "/api-banner.png" },
  ];
  const [exIdx, setExIdx] = useState(0); // index of first visible card
  const visible = 3.5;
  const exGo = (dir) =>
    setExIdx((p) => {
      const max = Math.max(0, related.length - visible);
      if (dir === "next") return p >= max ? 0 : p + 1;
      return p <= 0 ? max : p - 1;
    });
  const exProgress = ((exIdx + visible) / related.length) * 100;

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <p className="text-sm tracking-wide text-rose-500 font-semibold" data-aos="fade-up">
            Capabilities
          </p>
          <h1
            className="text-[60px] leading-[1.08] sm:text-[56px] md:text-[70px] lg:text-[88px] font-extrabold -tracking-[0.02em] mt-3"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Testing Services
          </h1>
          <p
            className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Accelerating the development of end-to-end operations with pragmatic quality engineering,
            automation, and rock-solid delivery.
          </p>
        </div>

        {/* Angled image band */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/testing.png')",
              clipPath: "polygon(0 64%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(336deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.28) 26%, rgba(0,0,0,0.12) 46%, rgba(0,0,0,0.00) 60%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6" data-aos="fade-up">
            <h2 className="text-3xl md:text-[44px] font-extrabold -tracking-[0.01em]">
              Expansive Portfolio of Testing Solutions
            </h2>
          </div>
          <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              We bring lean, automation-first testing across the lifecycle—CI-friendly patterns,
              ML-assisted analytics, risk-based coverage, and dashboards that stakeholders actually
              use. The goal: higher confidence, lower cycle time.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (cards) ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10" data-aos="fade-up">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {serviceCards.map((c, i) => (
              <ServiceCard key={c.title} {...c} aosDelay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= THOUGHT LEADERSHIP ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Thought Leadership</h3>

            {/* Arrows */}
            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => { setExpandedIdx(null); tlGo("prev"); }} />
              <CircleBtn ariaLabel="Next" onClick={() => { setExpandedIdx(null); tlGo("next"); }} dir="next" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Text */}
            <div className="md:col-span-6" data-aos="fade-up" key={tlSlides[tlIdx].title}>
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">
                {tlSlides[tlIdx].tag}
              </p>
              <h4 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">
                {tlSlides[tlIdx].title}
              </h4>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {tlSlides[tlIdx].blurb}
                {expandedIdx === tlIdx && tlSlides[tlIdx].more ? (
                  <> {" "}{tlSlides[tlIdx].more}</>
                ) : null}
              </p>

              <button
                type="button"
                onClick={() =>
                  setExpandedIdx((prev) => (prev === tlIdx ? null : tlIdx))
                }
                aria-expanded={expandedIdx === tlIdx}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-900"
              >
                {expandedIdx === tlIdx ? "READ LESS" : "READ MORE"}
                <svg width="14" height="14" viewBox="0 0 24 24" className="-mb-[1px]">
                  {expandedIdx === tlIdx ? (
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" />
                  ) : (
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                  )}
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60" key={tlSlides[tlIdx].img}>
              <img
                src={tlSlides[tlIdx].img}
                alt={tlSlides[tlIdx].title}
                className="w-full h-[340px] md:h-[420px] object-cover rounded-xl"
                draggable={false}
              />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10 h-[4px] bg-gray-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-600 transition-all duration-500"
              style={{ width: `${tlProgress}%` }}
            />
          </div>
        </div>
      </section>

      {/* ================= RELATED TESTING (non-clickable cards) ================= */}
      <section className="bg-[#0b0b0b] text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">
              Related Testing Services
            </h3>

            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => exGo("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => exGo("next")} dir="next" />
            </div>
          </div>

          {/* slider window */}
          <div className="overflow-hidden">
            <div
              className="grid grid-cols-[repeat(6,minmax(260px,1fr))] gap-6 lg:gap-8 transition-transform duration-500"
              style={{ transform: `translateX(-${(exIdx * 100) / 3}%)` }}
            >
              {related.map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-xl overflow-hidden group cursor-default select-none"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-120 h-[320px] object-cover opacity-90 group-hover:opacity-100 transition"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-white text-[18px] font-medium">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* progress bar */}
          <div className="mt-10 h-[4px] bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-500 transition-all duration-500"
              style={{ width: `${exProgress}%` }}
            />
          </div>
        </div>
      </section>

      <div className="h-6 md:h-10" />
    </main>
  );
}

/* ---------------- Small building blocks ---------------- */

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

function ServiceCard({ title, body, aosDelay = 0 }) {
  return (
    <article
      className="group relative rounded-xl border border-gray-200 bg-white p-6"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* bottom accent like TM */}
      <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-[3px] bg-rose-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      <h4 className="text-[18px] font-semibold">{title}</h4>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{body}</p>
    </article>
  );
}

/* ---------------- Page content ---------------- */

const serviceCards = [
  {
    title: "AI for Quality Engineering",
    body:
      "Use AI to accelerate test design, stabilize flaky suites, and spot regressions earlier with predictive insights.",
  },
  {
    title: "Intelligent Test Automation",
    body:
      "Pipeline-native automation for test execution, reporting, and defect tracking across microservices and UIs.",
  },
  {
    title: "BIDW Test Automation",
    body:
      "Automated validation for data warehouses and analytics—schema checks, lineage, and end-to-end data integrity.",
  },
  {
    title: "Test Data Management",
    body:
      "On-demand, compliant data for realistic testing. Masking, subsetting, and synthetic data when you need it.",
  },
  {
    title: "Intelligent Test Design Automation",
    body:
      "Model-based, risk-driven design to maximize critical paths and keep coverage honest as systems evolve.",
  },
  {
    title: "Test Environment Management",
    body:
      "Centralized env control built on open tooling. Bookable lower-envs, telemetry, and cost visibility.",
  },
  {
    title: "Ubiquitous Reporting Automation",
    body:
      "Roll-up dashboards, executive views, and living specs that make quality trends obvious to everyone.",
  },
  {
    title: "Service Virtualization",
    body:
      "Remove external dependencies with virtual services; ship confidently even when partners aren’t ready.",
  },
];
