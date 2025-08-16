// src/components/industries/BankingFinancialServices.jsx
import React, { useState } from "react";

export default function BankingFinancialServices() {
  const [tab, setTab] = useState("banking"); // "banking" | "fs" | "digital"

  return (
    <div className="bg-white text-[#0b0b0b]">
      {/* HERO */}
      <section className="px-6 lg:px-8 pt-10 max-w-[1200px] mx-auto">
        <p className="text-sm font-semibold text-rose-600">Industries</p>
        <h1 className="mt-2 text-[56px] md:text-[84px] leading-[1.05] font-extrabold -tracking-[0.02em]">
          Banking and Financial
          <br className="hidden md:block" />
          Services
        </h1>
        <p className="mt-4 max-w-3xl text-[18px] text-gray-700">
          Reimagining the future of banking with digital transformations.
        </p>
      </section>

      {/* Slanted hero image (replace src as needed) */}
      <section className="relative mt-10">
        <div
          className="h-[360px] md:h-[460px] bg-center bg-cover"
          style={{
            backgroundImage: "url('/bankingbig.jpg')", // put your image in /public
            clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      </section>

      {/* Intro copy */}
      <section className="px-6 lg:px-8 py-16 max-w-[1200px] mx-auto grid md:grid-cols-12 gap-10">
        <h2 className="md:col-span-5 text-[40px] md:text-[48px] font-extrabold -tracking-[0.01em]">
          Directing the Winds of
          <br /> Change
        </h2>
        <p className="md:col-span-7 text-gray-700 leading-relaxed">
          With over two decades of experience in offering innovative solutions for retail banking,
          lending and leasing, cards and payments, asset and wealth management, investment banks, and
          stock exchanges, we help direct these changes in the right direction by providing opportunities
          for offering better products, services, and a superior customer experience.
        </p>
      </section>

      {/* OUR SERVICES with Tabs */}
      <section className="px-6 lg:px-8 pb-8 max-w-[1200px] mx-auto">
        <h3 className="text-[36px] font-extrabold -tracking-[0.01em]">Our Services</h3>

        {/* Tabs */}
        <div className="mt-6 flex gap-10 text-[18px]">
          <TabBtn active={tab === "banking"} onClick={() => setTab("banking")} label="Banking" />
          <TabBtn active={tab === "fs"} onClick={() => setTab("fs")} label="Financial Services" />
          <TabBtn active={tab === "digital"} onClick={() => setTab("digital")} label="Digital Banking" />
        </div>

        {/* Panels */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
          {tab === "banking" &&
            bankingCards.map((c) => <ServiceCard key={c.title} {...c} />)}

          {tab === "fs" &&
            fsCards.map((c) => <ServiceCard key={c.title} {...c} />)}

          {tab === "digital" &&
            digitalCards.map((c) => <ServiceCard key={c.title} {...c} />)}
        </div>
      </section>

      {/* TECHNOLOGY OFFERINGS (no Learn More) */}
      <section className="px-6 lg:px-8 py-16 max-w-[1200px] mx-auto">
        <h3 className="text-[36px] font-extrabold -tracking-[0.01em]">Technology Offerings</h3>

        <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
          {techCards.map((c) => (
            <article key={c.title} className="bg-[#f6f7f8] rounded-xl p-6">
              <h4 className="text-[18px] font-semibold">{c.title}</h4>
              <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* --- small bits --- */
function TabBtn({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={[
        "relative pb-2 transition-colors",
        active ? "text-rose-600 font-semibold" : "text-gray-500 hover:text-rose-600",
      ].join(" ")}
    >
      {label}
      <span
        className={[
          "absolute left-0 -bottom-[6px] h-[3px] rounded",
          active ? "w-full bg-rose-600" : "w-0 bg-transparent",
        ].join(" ")}
      />
    </button>
  );
}

function ServiceCard({ title, body }) {
  return (
    <article className="bg-[#f6f7f8] rounded-xl p-6">
      <h4 className="text-[18px] font-semibold">{title}</h4>
      <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">{body}</p>
      {/* No Learn More per your requirement */}
    </article>
  );
}

/* --- data --- */
const bankingCards = [
  {
    title: "Banking Products",
    body:
      "Transform operations, drive innovation and profitability, optimize resources, and build future-ready processes.",
  },
  {
    title: "Lending and Leasing",
    body:
      "Specialized solutions across the lending lifecycle, powered by modern technology and digital prowess.",
  },
  {
    title: "Payments and Transaction Banking",
    body:
      "End-to-end consulting, platform transformation, implementation, customization, and managed services.",
  },
];

const fsCards = [
  {
    title: "Retirement and Pensions",
    body:
      "Automated operational models, digital platforms, and personalized experiences to drive better outcomes.",
  },
  {
    title: "Wealth and Asset Management",
    body:
      "Innovative solutions for client experience, end-to-end wealth platforms, digital asset classes, and ESG.",
  },
  {
    title: "GRC",
    body:
      "Risk and compliance services for corporate governance, enterprise risk mitigation, and regulatory requirements.",
  },
];

const digitalCards = [
  {
    title: "Customer Engagement & Digital Experience",
    body:
      "Create lasting experiences across customer, services, ops, physical spaces, and data with modern journeys.",
  },
  {
    title: "Enterprise Tech Transformations",
    body:
      "Cutting-edge enterprise tech transformation to optimize efficiency and propel your bank into the digital future.",
  },
];

const techCards = [
  {
    title: "Legacy Modernization",
    body:
      "Transform outdated systems into future-ready digital platforms that enhance performance, security, and scalability.",
  },
  {
    title: "Cloud and Infrastructure",
    body:
      "Migrate and optimize for resilience and compliance with secure, agile cloud solutions for seamless transformation.",
  },
  {
    title: "Data-Driven Banking",
    body:
      "Use data, analytics, AI, and real-time insights to improve decisions, efficiency, and customer experiences.",
  },
  {
    title: "TechMVerse Financial Services",
    body:
      "Hyper-personalized, immersive, and interactive digital journeys for next-gen customer experience.",
  },
  {
    title: "Reimagining BFSI with AI",
    body:
      "Advanced and generative AI for hyper-personalized experiences and transformative innovation across BFS.",
  },
];
