// src/components/capabilities-offers/AiDeliveredRight.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Visual notes
 * - Hero keeps the 56% diagonal cut (clipPath), with a TM-style darkening sweep.
 * - Images are referenced from /public. If a file is missing, you’ll still get a soft gradient.
 *   Put your assets like /public/ai-ldr-hero.png (or change the names below).
 */

export default function AiDeliveredRight() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  // “MORE +” expander in section 2
  const [moreOpen, setMoreOpen] = useState(false);

  // Accordion (dark section)
  const [open, setOpen] = useState([true, false, false, false]);
  const toggle = (idx) =>
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : false)));

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <p className="text-sm tracking-wide text-rose-500 font-semibold" data-aos="fade-up">
            Capabilities
          </p>

          <h1
            className="text-[60px] leading-[1.1] sm:text-[56px] md:text-[70px] lg:text-[88px] font-extrabold -tracking-[0.02em] mt-3"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            AI Delivered Right
          </h1>

          <p
            className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Experience innovation with PlanetX’s{' '}
            <span className="italic">AI Delivered Right</span>—tailored, secure and efficient
            AI solutions from strategy to scale.
          </p>
        </div>

        {/* Hero image with 56% diagonal cut and dark sweep (like TM) */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              // Two backgrounds (image first, gradient second) prevents “refresh disappears” issues.
              backgroundImage: `
                url('/artifical-banner.png'),
                linear-gradient(336deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.38) 28%, rgba(0,0,0,0.18) 46%, rgba(0,0,0,0.00) 60%)
              `,
              clipPath: "polygon(0 56%, 100% 0, 100% 100%, 0% 100%)",
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
            }}
          />
        </div>
      </section>

      {/* ================= “Pioneering the Future of Technology” ================= */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <h2
            className="text-[40px] md:text-[56px] leading-[1.05] font-extrabold -tracking-[0.02em]"
            data-aos="fade-up"
          >
            Pioneering the Future of Technology
          </h2>

          <div className="max-w-[640px]" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[16px] md:text-[17px] text-gray-700">
              Discover the future of business with PlanetX’s cutting-edge AI solutions.
              Our expertise transforms industries, driving efficiency and innovation.
              We deliver AI that understands your unique needs—from predictive analytics
              to intelligent automation—and integrates with your existing systems to enhance
              decision-making and customer experiences.
            </p>

            {/* “MORE +” link to reveal a bit more content (like TM) */}
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[#111] hover:opacity-80"
            >
              MORE
              <span className="inline-block text-xl leading-none">{moreOpen ? "–" : "+"}</span>
            </button>

            {moreOpen && (
              <p className="mt-4 text-[16px] md:text-[17px] text-gray-700">
                With secure MLOps, robust governance, and human-centered design, we make
                AI practical and production-ready—fast. Our teams partner with you across
                discovery, experimentation, and enterprise scale-out.
              </p>
            )}
          </div>
        </div>

        {/* Big banner image with subtle play overlay (static visual, no external deps) */}
        <div
          className="mt-12 md:mt-16 h-[54vw] max-h-[520px] rounded-lg overflow-hidden bg-center bg-cover relative"
          style={{
            backgroundImage: `url('/ai-ldr-banner.jpg')`,
          }}
          data-aos="zoom-in"
        >
          {/* Video block */}
          <div className="relative w-screen left-1/2 -translate-x-1/2">
    {/* 16:9 by default, fixed 540px on md+ to match TM */}
    <div className="relative h-[56.25vw] max-h-[540px] md:h-[540px]">
      <video
        ref={(el) => {
          // small helper: if the browser still blocks, try playing on mount
          if (!el) return;
          const tryPlay = () =>
            el.play().catch(() => {
              /* ignore (mobile will play after first tap) */
            });
          el.muted = true; // required for autoplay
          tryPlay();
        }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/aideleveredright-preview.mp4"   /* put the file in /public */
       // poster="/aideleveredright-thumbnail.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      </div>

      {/* subtle top gradient like TM */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

      {/* centered play indicator (shows if paused; hidden while playing) */}
      <button
        type="button"
        aria-label="Toggle play"
        onClick={(e) => {
          const v = e.currentTarget.previousSibling; // the <video/>
          if (v.paused) v.play();
          else v.pause();
          // show/hide the icon based on paused state
          e.currentTarget.classList.toggle('opacity-0', !v.paused);
        }}
        className="absolute inset-0 grid place-items-center transition-opacity duration-200 opacity-0"
      >
        <span className="h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
      </button>
    </div>
  </div>
        
      </section>

      {/* ================= Interlude: big “Proven / AI Delivered Right” ================= */}
      <section className="relative py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="text-[#2b2b2b]/85 text-[64px] md:text-[96px] font-extrabold leading-none">
              Proven
            </div>
            <div className="-mt-3 md:-mt-6 text-[#e11b22] text-[56px] md:text-[88px] font-extrabold leading-none">
              AI Delivered Right
            </div>
          </div>
        </div>
      </section>

      {/* ================= Pillars of Excellence (dark accordion) ================= */}
      <section className="bg-[#171717] text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 md:mb-12" data-aos="fade-up">
            Pillars of Excellence
          </h2>

          {/* 4 accordion rows */}
          <div className="divide-y divide-white/15 border-y border-white/15">
            {PILLARS.map((p, idx) => (
              <div key={p.title} className="py-7 md:py-9" data-aos="fade-up" data-aos-delay={idx * 60}>
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold">{p.title}</span>
                  <span className="shrink-0 text-2xl">{open[idx] ? "–" : "+"}</span>
                </button>

                {/* content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    open[idx] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 mt-5 leading-relaxed max-w-[980px]">
                      {p.body}
                    </p>
                    <div className="mt-6 h-px bg-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Leader Perspective ================= */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_minmax(0,1px)_1fr] gap-8 md:gap-12 items-start">
          <h3
            className="text-[36px] md:text-[48px] leading-[1.05] font-extrabold -tracking-[0.01em]"
            data-aos="fade-up"
          >
            A Leader Perspective
          </h3>

          <div className="hidden md:block h-full w-px bg-gray-200" aria-hidden />

          <div className="max-w-[700px]" data-aos="fade-up" data-aos-delay="60">
            <p className="text-[16px] md:text-[17px] text-gray-700">
              The AI world moves fast. PlanetX focuses on practical, high-impact use cases
              and an uncompromising approach to safety, governance, and quality—so your teams
              can innovate confidently. With clear value tracks and production-ready
              architectures, we help you realize{' '}
              <em>AI Delivered Right</em>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- page content ---------------- */

const PILLARS = [
  {
    title: "Productivity Delivered",
    body:
      "We build and deliver agentic AI systems that drive measurable value. From autonomous decisioning to real-time execution, our solutions streamline operations, eliminate inefficiencies, and accelerate performance. With robust MLOps and baked-in governance, we integrate AI safely across your business processes.",
  },
  {
    title: "Transformation Delivered",
    body:
      "We lead end-to-end AI transformations tailored to industry needs—finance, healthcare, manufacturing, retail, and beyond. From strategy and roadmaps to custom model creation and enterprise deployment, we ensure scalable, sustainable, future-ready AI that delivers business outcomes.",
  },
  {
    title: "Innovation Delivered",
    body:
      "Our teams bring cutting-edge techniques into production: generative AI for content and customer experiences, advanced analytics for deeper insights, and modern data platforms (lakes, pipelines, governance) for durable advantage—all designed to scale responsibly.",
  },
  {
    title: "Assurance Delivered",
    body:
      "Trust, security, and responsibility are built in—not bolted on. We embed privacy, safety, and compliance into every solution. Continuous monitoring, drift and bias checks, and controls for responsible adoption help you unlock AI’s full potential—ethically and sustainably.",
  },
];
