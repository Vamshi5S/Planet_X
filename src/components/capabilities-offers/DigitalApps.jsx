// src/components/capabilities-offers/DigitalApps.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DigitalApps() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  // simple “+ MORE” expanders (mimics TM)
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [tlOpen, setTlOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);

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
            Digital Enterprise
            <br className="hidden md:block" /> Applications
          </h1>
          <p
            className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Spearheading new paths—PlanetX modernizes core platforms and apps with pragmatic,
            high-impact delivery.
          </p>
        </div>

        {/* Angled image band */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/digitalenterprise.jpg')", // put image in /public
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

      {/* ================= OVERVIEW (no counters) ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5" data-aos="fade-up">
            <h2 className="text-3xl md:text-[44px] font-extrabold -tracking-[0.01em]">Overview</h2>
          </div>

          <div className="md:col-span-7" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700">
              PlanetX’s Digital Enterprise Applications practice helps teams streamline core business
              processes—not with massive, risky rewrites, but through targeted modernization,
              clean interfaces, and automation where it matters. We blend product thinking,
              platform fluency, and ruthless simplification to make enterprise apps faster to
              change, easier to run, and nicer to use.
            </p>

            {/* collapsible extra */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                overviewOpen ? "max-h-[320px] mt-4" : "max-h-0"
              }`}
            >
              <p className="text-[16px] leading-relaxed text-gray-700">
                Our approach favors composable services, clean contracts, and evolutionary
                architecture. We reduce brittle point-to-point links, improve observability, and
                enable teams to ship smaller changes more often—with confidence.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOverviewOpen((v) => !v)}
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-900"
            >
              {overviewOpen ? "LESS" : "MORE"}
              <span className="-mb-[1px]">{overviewOpen ? "–" : "+"}</span>
            </button>
          </div>
        </div>

        {/* optional supporting image */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mt-10" data-aos="fade-up" data-aos-delay="100">
          <img
            src="/artifical-banner.png"
            alt="Overview visual"
            className="w-full rounded-xl object-cover h-[300px] md:h-[420px]"
          />
        </div>
      </section>

      {/* ================= OUR PRACTICES ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3
            className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10"
            data-aos="fade-up"
          >
            Our Practices
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {practiceCards.map((c, i) => (
              <PracticeCard key={c.title} {...c} aosDelay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= THOUGHT LEADERSHIP ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3
            className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10"
            data-aos="fade-up"
          >
            Thought Leadership
          </h3>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="40">
              <img
                src="/sustainability.jpg"
                alt="Thought leadership"
                className="w-full h-[340px] md:h-[420px] object-cover rounded-xl"
              />
            </div>
            <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="100">
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">Views</p>
              <h4 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">
                Enterprise Platforms and the Future of Sustainable Business Growth
              </h4>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Modern platforms aren’t just cost centers—they’re growth systems. We share how
                to evolve your application estate with small, steady changes that compound:
                better data flows, clean interfaces, and event-driven automation.
              </p>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  tlOpen ? "max-h-[320px] mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  Learn a pragmatic path that aligns architecture with business outcomes while
                  preserving delivery velocity and developer experience.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setTlOpen((v) => !v)}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-900"
              >
                {tlOpen ? "READ LESS" : "READ MORE"}
                <span className="-mb-[1px]">{tlOpen ? "–" : "+"}</span>
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* ================= “LEADING THE WAY” ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h3
            className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10"
            data-aos="fade-up"
          >
            Leading the Way
          </h3>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="40">
              <img
                src="/adobestock.png"
                alt="Leading the way"
                className="w-full h-[340px] md:h-[420px] object-cover rounded-xl"
              />
            </div>
            <div className="md:col-span-6" data-aos="fade-up" data-aos-delay="100">
              <p className="text-rose-500 text-[13px] tracking-wide font-semibold">White Paper</p>
              <h4 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">
                A Lightweight Roadmap to App Modernization
              </h4>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A practical guide for small teams: carve interfaces, stabilize data, automate
                what’s predictable, and measure what matters.
              </p>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  leadOpen ? "max-h-[320px] mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  No vendor hype—just moves you can ship this quarter and extend over time:
                  event streams, background jobs, and clean contracts between systems.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLeadOpen((v) => !v)}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-900"
              >
                {leadOpen ? "READ LESS" : "READ MORE"}
                <span className="-mb-[1px]">{leadOpen ? "–" : "+"}</span>
              </button>
           
{/* ================== Scaling with Best of Breed App Ecosystem ================== */}
{/* Scaling with Best of Breed App Ecosystem */}
{/* Scaling with Best of Breed App Ecosystem */}

            </div>
            
          </div>
          {/* Scaling with Best of Breed App Ecosystem */}
<section className="bg-white py-20 md:py-28">
  {/* reset any previous grid/float context */}
  <div className="block w-full clear-both">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-left">
      {/* Heading */}
      <h2 className="max-w-[720px] text-[38px] leading-[1.08] md:text-[54px] font-extrabold -tracking-[0.01em]">
        Scaling with Best of
        <br className="hidden md:block" />
        Breed App Ecosystem
      </h2>

      {/* Logos — single left-aligned row (SAP..Oracle) */}
      <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-start gap-x-16 gap-y-10">
        <img
          src="/sap.png"
          alt="SAP"
          className="h-12 md:h-14 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
        />
        <img
          src="/salesforce.png"
          alt="Salesforce"
          className="h-12 md:h-14 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
        />
        <img
          src="/servicenow.png"
          alt="ServiceNow"
          className="h-10 md:h-12 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
        />
        <img
          src="/pegalogo_new.png"
          alt="PEGA"
          className="h-10 md:h-12 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
        />
        <img
          src="/oracle.png"
          alt="Oracle"
          className="h-8 md:h-10 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
        />
      </div>
      {/* Microsoft — its own left-aligned row */}
      <div className="mt-14">
        <img
          src="/microsoft.png"
          alt="Microsoft"
          className="h-10 md:h-12 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
        />
      </div>
    </div>
  </div>
</section>
        </div>
      </section>

    </main>
  );
}

/* ---------- Small components ---------- */

function PracticeCard({ title, body, aosDelay = 0, href = "#" }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all
                 hover:bg-[#0b0b0b] hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,.12)]"
    >
      {/* title + copy */}
      <h4 className="text-[18px] font-semibold">{title}</h4>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-700 transition-colors group-hover:text-gray-300">
        {body}
      </p>

      {/* bottom action rail (TM-like) */}
      <a
        href={href}
        className="mt-6 inline-flex items-center text-[13px] font-semibold tracking-wide"
        onClick={(e) => {
          // prevent “#” from jumping to top if you didn't wire a real URL yet
          if (href === "#") e.preventDefault();
        }}
      >
          {/* animated underline bar */}
          <span
            className="absolute left-0 -bottom-2 block h-[3px] w-0 bg-[#e11b22] transition-all duration-300
                       group-hover:w-full"
          />
      </a>

      {/* subtle focus ring on hover (like TM’s polish) */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-rose-500/0
                   group-hover:ring-4 group-hover:ring-rose-500/10 transition-[ring-width,ring-color] duration-200"
      />
    </article>
  );
}

/* ---------- Page content ---------- */

const practiceCards = [
  {
    title: "ERP Platforms (SAP/Oracle) — Advisory & Build",
    body:
      "Blueprint pragmatic ERP roadmaps, modularize custom logic, and expose clean APIs for finance, supply chain, and operations. We focus on upgrades and integrations you can actually maintain.",
  },
  {
    title: "CRM & Customer Experience",
    body:
      "Streamline sales, service, and marketing journeys with thoughtful automation and low-friction UX. We prioritize clean data, faster response paths, and measurable uplift in CSAT.",
  },
  {
    title: "Service Management & ITSM",
    body:
      "Modernize service workflows across IT and business ops. From request to resolution, we remove toil, add observability, and wire in AI assistance where it’s safe and useful.",
  },
  {
    title: "Enterprise Digital Solutions",
    body:
      "Integration, content services, collaboration, and mobile—one platform at a time. We reduce brittle point-to-point links and move toward events, queues, and contracts.",
  },
  {
    title: "Digital Process Solutions",
    body:
      "Optimize critical processes with process mining, targeted automation, and guardrails. Ship value quickly, then scale what works—without locking into heavyweight tooling.",
  },
  {
    title: "Emerging Apps",
    body:
      "From HR to finance to field ops, we prototype small, production-ready apps that fill gaps fast. Built with secure patterns and a bias for reuse across teams.",
  },
];

