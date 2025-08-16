// src/components/industries/HighTech.jsx
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HighTech() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  /* ---------------- Expandable intro paragraph ---------------- */
  const [more, setMore] = useState(false);

  /* ---------------- Industry Trends (cards) ---------------- */
  const trends = [
    {
      t: "As-a-Service Revolution",
      d:
        "Subscription-first revenue models create recurring streams and improve operational efficiency. Customers get scalable, flexible, cost-effective solutions on demand.",
    },
    {
      t: "Hyper Personalization: Surge in Machine Generated Content",
      d:
        "Rapidly evolving demand for personalized content requires targeted recommendations and marketing fueled by AI-generated content.",
    },
    {
      t: "GenAI, AI and ML Integration Everywhere",
      d:
        "Hi-tech leaders embed advanced AI into products and operations to improve efficiency and customer experiences.",
    },
    {
      t: "Increasing Scrutiny on Privacy and Data Security",
      d:
        "Compliance pressure is rising. Organizations invest in robust cybersecurity and redesign processes to prioritize privacy.",
    },
    {
      t: "Convergence of HW, SW, and Services",
      d:
        "Hardware, software, and services are blending to accelerate innovation and deliver user-friendly, end-to-end solutions.",
    },
    {
      t: "Intelligent Products and Process Automation",
      d:
        "AI-assisted devices, AR/VR and automation streamline operations and enable rapid, cost-effective service delivery.",
    },
    {
      t: "Advanced Connectivity",
      d:
        "5G/Wi-Fi 6 enable new use cases across IoT and smart cities, driving growth with higher speed, lower latency and new services.",
    },
  ];

  /* ---------------- Our Services (tabs) ---------------- */
  const tabs = ["Product Engineering", "IT Transformation", "Digital Operations"];
  const services = useMemo(
    () => ({
      "Product Engineering": [
        { t: "Silicon Engineering", d: "Advanced semiconductor solutions tailored to industry needs." },
        { t: "Advanced Hardware Development", d: "Cutting-edge components that raise infrastructure performance." },
        { t: "Platform Engineering", d: "Comprehensive platform solutions across the product/service lifecycle." },
        { t: "Product Experience Engineering", d: "User-centric design, rapid iteration and feedback integration." },
      ],
      "IT Transformation": [
        { t: "IT-as-a-Service", d: "Flexible, scalable IT so you can focus on core objectives." },
        { t: "Cognitive IT", d: "AI/ML to create intelligent IT systems and enhance efficiency." },
        { t: "IT Modernization", d: "Evolve legacy estates to modern, agile, efficient ecosystems." },
        { t: "Cloud Migration Services", d: "Move to cloud with minimal disruption and maximum benefit." },
      ],
      "Digital Operations": [
        { t: "Product & Platform Operations", d: "End-to-end lifecycle support—from strategy to run." },
        { t: "Cognitive Service Desk", d: "AI-assisted support that boosts satisfaction and productivity." },
        { t: "Customer Experience Workflows", d: "Optimize interactions to improve the overall experience." },
        { t: "Data Services and Content Operations", d: "Manage data/content for accuracy, consistency, accessibility." },
      ],
    }),
    []
  );
  const [tab, setTab] = useState(tabs[0]);

  /* ---------------- Who We Serve ---------------- */
  const serve = [
    {
      t: "Semicon",
      d:
        "Chip design, pre-silicon verification, physical design, post-silicon validation, embedded/platform software, foundry equipment engineering, board design & validation, and market-ready solutions.",
    },
    {
      t: "Software",
      d:
        "Product & platform consulting, dev acceleration, legacy simplification, IV&V, product operations, customer success and experience design.",
    },
    {
      t: "Hardware",
      d:
        "Board design & derivatives, validation, mechanical/experience design, compliance & quality engineering, globalization, environmental testing, firmware and application software.",
    },
    {
      t: "Networking",
      d:
        "5G device engineering/certification, O-RAN, core network, OSS/BSS, product/platform development and professional services.",
    },
    {
      t: "Security",
      d:
        "End-point, firewalls, cloud security, information and data security—end-to-end coverage.",
    },
    {
      t: "Cloud",
      d:
        "Platform development/support, DevSecOps, migration/validation, cloud security/compliance, consulting, marketplace, and FinOps.",
    },
  ];

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
            data-aos-delay="60"
          >
            Hi Tech
          </h1>
          <p className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="100">
            Powering the Future of Digital Enterprises
          </p>
        </div>

        {/* Angled hero banner */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              /* put a wide banner image in /public and point to it here */
              backgroundImage: "url('/hi_tech.jpg')",
              clipPath: "polygon(0 64%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ================= INTRO (split + Read more) ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6" data-aos="fade-up">
            <h2 className="text-3xl md:text-[44px] font-extrabold -tracking-[0.01em]">
              Unlocking Scale at Speed for Hi Tech
            </h2>
          </div>
          <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              We leverage digital capabilities to build solutions and scalable products for global Hi Tech
              clients. By combining product engineering expertise, scaling new businesses, and driving
              customer-centric experiences, we help enterprises prosper in the digital era.
              {more && (
                <>
                  {" "}
                  Our teams modernize platforms, accelerate time-to-market, and apply AI to improve quality,
                  efficiency, and resilience across product and operations value chains.
                </>
              )}
            </p>
            <button
              type="button"
              onClick={() => setMore((v) => !v)}
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide"
            >
              {more ? "READ LESS" : "READ MORE"}
              <svg width="14" height="14" viewBox="0 0 24 24" className="-mb-[1px]">
                <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY TRENDS ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10" data-aos="fade-up">
            Industry Trends
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {trends.map((c, i) => (
              <article
                key={c.t}
                className="rounded-xl border border-gray-200 bg-white p-6"
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <h4 className="text-[18px] font-semibold">{c.t}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (tabs) ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-8">Our Services</h3>

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

          <p className="max-w-4xl text-gray-700 mb-8">
            Our expertise spans product engineering, transformation, and digital operations to design,
            build, and scale strategic platforms that drive meaningful business outcomes.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {(services[tab] || []).map((c) => (
              <article key={`${tab}-${c.t}`} className="rounded-xl border border-gray-200 bg-[#f6f7f8] p-6">
                <h4 className="text-[18px] font-semibold">{c.t}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10">Who We Serve</h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {serve.map((c, i) => (
              <article
                key={c.t}
                className="rounded-xl border border-gray-200 bg-white p-6"
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <h4 className="text-[18px] font-semibold">{c.t}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-6 md:h-10" />
    </main>
  );
}
