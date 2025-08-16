// src/components/industries/HealthcareLifeSciences.jsx
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HealthcareLifeSciences() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  /* ---------------- OUR SERVICES (tabs + slider) ---------------- */
  const tabs = [
    "Pharmaceuticals",
    "Healthcare Payers",
    "Healthcare Provider",
    "MedTech",
    "Boosting Our Capabilities",
  ];

  // Content per tab (no buttons)
  const servicesByTab = useMemo(
    () => ({
      Pharmaceuticals: [
        { title: "IDMP Compliance", text: "The ultimate compliance solution – unifying the product journey." },
        { title: "Prediction of Antimicrobial Resistance", text: "AI-based AMR tool that predicts resistant strains and suggests effective treatments without conducting clinical tests." },
        { title: "Computational Drug Discovery", text: "AI-based solution predicting success of new molecules and helping revolutionize drug development." },
        { title: "GenAI for Medical Writing", text: "Scans multiple data sources to extract and analyze relevant regulatory information." },
        { title: "Pharmacovigilance Agentic LLM", text: "Reimagining safety with LLMs while meeting regulatory requirements." },
        { title: "Discovery Research Platform", text: "Unified request and fulfillment platform for scientific reagents and research workflows." },
      ],
      "Healthcare Payers": [
        { title: "Provider Onboarding", text: "Slash onboarding timelines and reduce administrative expenses; minimize fraud." },
        { title: "CMS Interoperability Compliance", text: "Interoperability suite that assists health plans at any compliance stage." },
        { title: "Care Management ROI Calculator", text: "Determine program effectiveness and identify improvement areas." },
        { title: "Provider Network Management", text: "Reduce enrollment time/costs and improve provider relations." },
      ],
      "Healthcare Provider": [
        { title: "AI-led Command Center Operations", text: "Decrease unscheduled downtime, optimize ticket timing, and maintain clinical communication assets." },
        { title: "Remote Patient Monitoring", text: "Address clinical expert shortage; continuous monitoring improves outcomes." },
        { title: "Emergency Management & Public Safety Platform", text: "Integrated Emergency Response IT across regions; population impact at scale." },
        { title: "Virtual Care Solutions", text: "Support government health programs and large digital health networks." },
      ],
      MedTech: [
        { title: "Health ATM", text: "Smart kiosks for automated screening, tele-consultations, and report delivery." },
        { title: "Remote Patient Monitoring (RPM)", text: "External cardiac monitor + platform for remote arrhythmia tracking." },
        { title: "Anti–Counterfeit", text: "Encrypted authentication for genuine medical accessories and devices." },
        { title: "PERS", text: "Design/development of personal emergency response devices." },
      ],
      "Boosting Our Capabilities": [
        { title: "Contract Lifecycle Digitization", text: "Digitize and automate clinical & commercial contract lifecycles." },
        { title: "Data Fabric for Life Sciences", text: "Unify data estates for governed analytics and faster insights." },
        { title: "Clinical Trial Intelligence", text: "AI to optimize site selection, enrollment, and protocol adherence." },
        { title: "Quality & Regulatory Ops", text: "Digitized QMS and regulatory submissions with automation." },
      ],
    }),
    []
  );

  const [tab, setTab] = useState(tabs[0]);
  const [start, setStart] = useState(0); // first visible card
  const VISIBLE = 4; // cards visible on desktop

  const items = servicesByTab[tab] ?? [];
  const maxStart = Math.max(0, items.length - VISIBLE);
  const progress = items.length
    ? (Math.min(start + VISIBLE, items.length) / items.length) * 100
    : 0;

  const go = (dir) => {
    setStart((p) => {
      if (dir === "next") return p >= maxStart ? 0 : p + 1;
      return p <= 0 ? maxStart : p - 1;
    });
  };

  // Reset slider when tab changes
  useEffect(() => setStart(0), [tab]);

  /* ---------------- THOUGHT LEADERSHIP ---------------- */
  const tlSlides = [
    {
      tag: "Views",
      title: "Data-Driven Healthcare: How MDM Improves Patient Outcomes",
      blurb:
        "Master data enables longitudinal patient context, better care coordination, and analytics that matter.",
      img: "/s.jpg",
    },
    {
      tag: "Views",
      title: "AI for MedTech: From Sensing to Insight",
      blurb:
        "Lower latency, better accuracy, and explainable decisions across perioperative workflows.",
      img: "/yui.jpg",
    },
    {
      tag: "Whitepaper",
      title: "GenAI in Pharma: Accelerating the Molecule to Market Journey",
      blurb:
        "From literature mining to writing regulatory narratives with quality and speed.",
      img: "/hh.jpg",
    },
  ];
  const [tlIdx, setTlIdx] = useState(0);
  const tlGo = (d) =>
    setTlIdx((p) =>
      d === "next" ? (p + 1) % tlSlides.length : (p - 1 + tlSlides.length) % tlSlides.length
    );
  const tlProgress = ((tlIdx + 1) / tlSlides.length) * 100;

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <p className="text-sm tracking-wide text-rose-500 font-semibold" data-aos="fade-up">
            Industries
          </p>
          <h1
            className="text-[60px] leading-[1.08] md:text-[88px] font-extrabold -tracking-[0.02em] mt-3"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Healthcare and Life Sciences
          </h1>
          <p
            className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Combining science, technology and innovative thinking to redefine the future of care.
          </p>
        </div>

        {/* Angled hero image */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/healthcare.jpg')",
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
              Delivering Nxt.Gen Healthcare
            </h2>
          </div>
          <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              As a trusted digital transformation partner, we deliver Nxt.Gen solutions across the
              patient care continuum. Our future-forward offerings align transformation with
              business strategy, assure compliance, drive continuous improvement, and prioritize
              extraordinary patient experiences and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER (NO buttons) ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10" data-aos="fade-up">
            What We Offer
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Healthcare",
                text:
                  "End-to-end integrated solutions for providers and public health: efficiency, access, and outcomes.",
              },
              {
                title: "MedTech",
                text:
                  "Partner to global majors building next-gen products with strong domain and engineering capabilities.",
              },
              {
                title: "Pharma",
                text:
                  "Domain expertise, R&D heritage, and global partnerships enabling seamless digital transformation.",
              },
            ].map((c, i) => (
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

      {/* ================= OUR SERVICES (tabs + arrows; NO buttons) ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Our Services</h3>

            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => go("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => go("next")} dir="next" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-8 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={[
                  "relative text-[16px] font-semibold",
                  tab === t ? "text-[#0b0b0b]" : "text-gray-500",
                ].join(" ")}
              >
                {t}
                <span
                  className={[
                    "block h-[3px] mt-2 rounded-full",
                    tab === t ? "bg-rose-600 w-full" : "bg-transparent w-0",
                    "transition-all",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>

          {/* Slider window */}
          <div className="overflow-hidden">
            <div
              className="grid grid-cols-[repeat(12,minmax(220px,1fr))] gap-6 lg:gap-8 transition-transform duration-500"
              style={{ transform: `translateX(-${(start * 100) / VISIBLE}%)` }}
            >
              {items.map((c, i) => (
                <article
                  key={`${tab}-${c.title}-${i}`}
                  className="rounded-xl border border-gray-200 bg-[#f6f7f8] p-6"
                >
                  <h4 className="text-[18px] font-semibold">{c.title}</h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10 h-[4px] bg-gray-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* ================= THOUGHT LEADERSHIP ================= */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Thought Leadership</h3>
            <div className="hidden md:flex gap-4">
              <CircleBtn ariaLabel="Previous" onClick={() => tlGo("prev")} />
              <CircleBtn ariaLabel="Next" onClick={() => tlGo("next")} dir="next" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Text */}
            <div className="md:col-span-6" key={tlSlides[tlIdx].title}>
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">
                {tlSlides[tlIdx].tag}
              </p>
              <h4 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">
                {tlSlides[tlIdx].title}
              </h4>
              <p className="mt-4 text-gray-700 leading-relaxed">{tlSlides[tlIdx].blurb}</p>
            </div>

            {/* Image */}
            <div className="md:col-span-6" key={tlSlides[tlIdx].img}>
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
