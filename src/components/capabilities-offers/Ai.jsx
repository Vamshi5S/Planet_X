// src/components/capabilities-offers/Ai.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- tiny hook to build a TM-like horizontal scroller ---------------- */
function useHScroller() {
  const ref = useRef(null);
  const holdTimer = useRef(null);
  const [progress, setProgress] = useState(0);

  // update progress bar on scroll/resize
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const p = el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const pageAmount = () => {
    const el = ref.current;
    if (!el) return 0;
    // TM feels like “almost a page” each click
    return Math.round(el.clientWidth * 0.9);
  };
  const nudgeAmount = () => {
    const el = ref.current;
    if (!el) return 0;
    // per-tick step when holding the button
    return Math.max(12, Math.round(el.clientWidth * 0.015));
  };

  const scrollOnce = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "next" ? pageAmount() : -pageAmount(),
      behavior: "smooth",
    });
  };

  const startHold = (dir) => {
    const el = ref.current;
    if (!el) return;
    stopHold();
    holdTimer.current = setInterval(() => {
      el.scrollLeft += dir === "next" ? nudgeAmount() : -nudgeAmount();
    }, 16); // ~60fps
  };
  const stopHold = () => {
    if (holdTimer.current) {
      clearInterval(holdTimer.current);
      holdTimer.current = null;
    }
  };

  return { ref, progress, scrollOnce, startHold, stopHold };
}

/* ---------------- buttons ---------------- */
function ArrowBtn({ dir = "prev", ariaLabel, onClick, onHoldStart, onHoldEnd }) {
  const isNext = dir === "next";
  return (
    <button
      type="button"
      aria-label={ariaLabel || (isNext ? "Next" : "Previous")}
      onClick={onClick}
      onMouseDown={onHoldStart}
      onMouseUp={onHoldEnd}
      onMouseLeave={onHoldEnd}
      onTouchStart={onHoldStart}
      onTouchEnd={onHoldEnd}
      className="h-12 w-12 rounded-full border border-gray-300 hover:border-gray-400 bg-white flex items-center justify-center select-none"
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

/* ---------------- page ---------------- */
export default function Ai() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  // two independent carousels (services + solutions)
  const svc = useHScroller();
  const sol = useHScroller();

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
            Artificial Intelligence
          </h1>
          <p
            className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Experience the future with PlanetX’s “AI Delivered Right” — secure, pragmatic AI
            solutions from strategy to implementation.
          </p>
        </div>

        {/* Hero image with your exact 56% diagonal cut + angled darkening overlay */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage: "url('/ai-right-banner.png')",
              clipPath: "polygon(0 56%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                // tuned to echo TM's top-left vignette flowing across the diagonal
                background:
                  "linear-gradient(336deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.38) 28%, rgba(0,0,0,0.18) 46%, rgba(0,0,0,0.00) 60%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (carousel) ================= */}
      <section className="bg-[#f5f6f7] py-14 md:py-18">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-start justify-between gap-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]" data-aos="fade-up">
              Our Services
            </h2>

            <div className="hidden md:flex items-center gap-3" data-aos="fade-up" data-aos-delay="80">
              <ArrowBtn
                ariaLabel="Previous"
                onClick={() => svc.scrollOnce("prev")}
                onHoldStart={() => svc.startHold("prev")}
                onHoldEnd={svc.stopHold}
              />
              <ArrowBtn
                dir="next"
                ariaLabel="Next"
                onClick={() => svc.scrollOnce("next")}
                onHoldStart={() => svc.startHold("next")}
                onHoldEnd={svc.stopHold}
              />
            </div>
          </div>

          {/* Scroll row (native bar hidden) */}
          <div
            ref={svc.ref}
            className="hide-scroll flex gap-6 md:gap-7 overflow-x-auto pb-6 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {services.map((card, i) => (
              <article
                key={card.title}
                className="min-w-[320px] md:min-w-[360px] lg:min-w-[380px] snap-start rounded-lg border border-gray-200 bg-white p-6 md:p-7"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">{card.intro}</p>
                <ul className="mt-5 space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-rose-500 inline-block" />
                      <span className="text-[15px] text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* single TM-like red progress bar */}
          <div className="mt-6 h-[2px] bg-gray-300/60 relative">
            <div
              className="absolute left-0 top-0 h-[2px] bg-[#e11b22] transition-[width] duration-200"
              style={{ width: `${svc.progress * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* ================= AI SOLUTIONS / OFFERINGS (carousel) ================= */}
      <section className="bg-[#f5f6f7] py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]" data-aos="fade-up">
              AI Solutions, Offerings <br className="hidden md:block" /> and Platforms
            </h2>

            <div className="hidden md:flex gap-3" data-aos="fade-up" data-aos-delay="80">
              <ArrowBtn
                ariaLabel="Previous"
                onClick={() => sol.scrollOnce("prev")}
                onHoldStart={() => sol.startHold("prev")}
                onHoldEnd={sol.stopHold}
              />
              <ArrowBtn
                dir="next"
                ariaLabel="Next"
                onClick={() => sol.scrollOnce("next")}
                onHoldStart={() => sol.startHold("next")}
                onHoldEnd={sol.stopHold}
              />
            </div>
          </div>

          {/* second row scroller */}
          <div
            ref={sol.ref}
            className="hide-scroll flex gap-6 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {solutions.map((s, i) => (
              <article
                key={s.title}
                className="min-w-[360px] md:min-w-[420px] lg:min-w-[440px] snap-start rounded-xl border border-gray-200 bg-white p-6 hover:bg-[#111] hover:text-white transition-colors"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <h4 className="text-[18px] font-semibold">{s.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700 group-hover:text-gray-300">
                  {s.text}
                </p>
                {/* No "Learn more" button, per your request */}
              </article>
            ))}
          </div>

          {/* progress bar for solutions */}
          <div className="mt-6 h-[2px] bg-gray-300/60 relative">
            <div
              className="absolute left-0 top-0 h-[2px] bg-[#e11b22] transition-[width] duration-200"
              style={{ width: `${sol.progress * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* ================= Narrative overlay block ================= */}
      <section className="relative">
      <div
  className="relative h-[620px] md:h-[680px] bg-center bg-cover"
  style={{ backgroundImage: "url('/artifical-banner.png')" }}
>
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(1000px 500px at 20% 70%, rgba(59,130,246,.30), transparent 60%)," +
        "radial-gradient(900px 500px at 70% 40%, rgba(168,85,247,.28), transparent 60%)," +
        "radial-gradient(700px 360px at 90% 80%, rgba(236,72,153,.25), transparent 60%)",
    }}
  />
</div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div
            className="bg-black text-white p-8 md:p-12 rounded-md shadow-xl w-full max-w-[520px] -mt-[420px] md:-mt-[520px]"
            data-aos="fade-up"
          >
            <p className="text-sm uppercase tracking-widest text-gray-300">Our Narrative</p>
            <h3 className="text-3xl md:text-[34px] font-bold mt-3">AI Delivered Right</h3>
            <p className="text-gray-300 mt-5 leading-relaxed">
              Discover the future of business with PlanetX’s cutting-edge AI solutions. Our
              expertise transforms industries, driving efficiency and innovation—securely and
              responsibly.
            </p>

            <Link
              to="/capabilities/ai-delivered"
              className="inline-flex items-center gap-3 mt-7 rounded-md px-5 py-3 bg-white text-black font-medium hover:bg-gray-100 transition"
            >
              Know More
              <svg width="18" height="18" viewBox="0 0 24 24" className="-mr-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="h-16 md:h-28" />
      </section>

      {/* Hide native scrollbars for the custom rows (keeps only the red progress lines visible) */}
      <style>{`
        .hide-scroll {
          scrollbar-width: none;       /* Firefox */
          -ms-overflow-style: none;    /* IE/Edge */
        }
        .hide-scroll::-webkit-scrollbar { display: none; } /* Chrome/Safari */
      `}</style>
    </main>
  );
}

/* ---------------- page content ---------------- */

const services = [
  {
    title: "Discover",
    intro:
      "Design-thinking approach and frameworks help identify AI opportunities lurking in your organization. We map the right strategy and roadmap.",
    items: [
      "Strategy and Roadmap",
      "Discovery",
      "Process Mining and Task Mining",
      "AI Maturity Assessment",
      "COE Setup",
      "Enterprise IA and AI Architecture evaluation",
      "Platform/Technology Evaluation",
      "Evangelize AI Pair Programming",
    ],
  },
  {
    title: "Experiment",
    intro:
      "Our principle of ‘fail fast to learn faster’ is enabled by an ecosystem of experimentation with partners/clients to co-innovate.",
    items: [
      "Gen AI Experiment as a Service (XaaS)",
      "AI Labs",
      "Sandbox Setup",
      "PoT and Fast Experiment",
      "Partner/Client Co-Innovation",
    ],
  },
  {
    title: "Scale",
    intro:
      "Leverage your data and AI assets across the org and scale your AI journey. Enablement programs accelerate democratization of AI.",
    items: [
      "Model Factory",
      "AI Ops and ML Ops",
      "Digital Workforce Management",
      "AI and Bot Performance Management",
      "AI Store",
      "AI Enablement",
      "Data Annotation",
      "Enterprise AI Platform Build",
      "Responsible Adoption",
      "Enterprise Knowledge Search",
      "Synthetic Data Generation",
    ],
  },
  {
    title: "Sustain",
    intro:
      "Realize the benefits of AI with the right ecosystem and sustain an ethical, reliable framework with robust AI governance.",
    items: ["Digital Workforce Monitoring", "AI and Bot Governance", "DevOps – CD2 Model", "Bot Command Center"],
  },
];

const solutions = [
  {
    title: "Ops amplifAIer 4.0",
    text:
      "Boost productivity and customer satisfaction with autonomous + conversational AI Ops. End-to-end visibility and actioning.",
  },
  {
    title: "Email amplifAIer",
    text:
      "Unified visualization and automation for email operations using GenAI. Faster triage, auto-summaries, actionable insights.",
  },
  {
    title: "SDLC amplifAIer",
    text:
      "Cutting-edge solution that augments the SDLC with AI—requirements, code, tests, and operations—securely integrated.",
  },
  {
    title: "AftEAZE",
    text:
      "One-stop solution for warranty and aftermarket across industries via intelligent automation and real-time intelligence.",
  },
  {
    title: "AI Maturity Assessment",
    text:
      "Assess and define AI strategy and dimensions for responsible enterprise adoption with clear roadmaps and KPIs.",
  },
  {
    title: "Generative AI Studio",
    text:
      "Experimentation space to bootstrap GenAI with multi-model support and 50+ prebuilt use cases across text, code, and media.",
  },
  {
    title: "Vision amplifAIer",
    text:
      "Computer-vision solution covering use cases by de-skilling data-science work and empowering analysts.",
  },
  {
    title: "Document amplifAIer",
    text:
      "Unlock the full value of documents with training-less extraction, summarization, and intelligent operations.",
  },
];
