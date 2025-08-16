// src/components/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IconBadge, RocketPro, StopwatchShieldPro, GlobeDotsPro } from "./icons";
import RequestForm from "./RequestForm";


export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: "ease-out" });
  }, []);

  const missionSlides = [
    {
      title: "How will a mature industry benefit software engineering teams?",
      content:
        "A mature software engineering industry will let teams work more productively. Engineers will not need to spend time establishing and supporting processes unique to each team. They'll spend time building software.",
    },
    {
      title: "How will it benefit software engineering teams?",
      content:
        "Mature processes reduce inefficiencies, letting teams focus on real engineering instead of firefighting.",
    },
    {
      title: "Why do we need to advance the software engineering industry?",
      content:
        "Ultimately, a mature industry will advance businesses, technology, and the quality of everyone's lives.",
    },
    {
      title: "How does PlanetX achieve its goal?",
      content:
        "We’ve created an internal platform dedicated to improving processes across the organization, accumulating team experience and creating scalable practices to implement company-wide.",
    },
    {
      title: "How will a mature industry benefit its clients?",
      content:
        "Clients get affordable, reliable custom software more quickly. Businesses will see custom software as a wise investment for growth.",
    },
  ];

  return (
    <div className="font-sans text-white bg-[#0d0c1d]">
      {/* ============ HERO ============ */}
      <section className="relative grid md:grid-cols-2 items-center bg-gradient-to-br from-[#561f66] via-[#742f7e] to-[#a02ea5] overflow-hidden">
        {/* HERO – left copy */}
<div className="relative z-10 px-6 py-20 md:py-32 md:px-16" data-aos="fade-right">
  <p className="mb-3 text-[19px] tracking-[0.18em] text-green-400/90 font-semibold uppercase">
    About&nbsp;Us
  </p>

  <h1 className="text-4xl md:text-5xl font-semibold leading-[1.08] text-white">
    From idea to impact,
    <br />
    your software product
    <br />
    launched within <span className="inline-block relative">
      <span className="relative z-[1]">6–12 months</span>
      {/* thin accent underline */}
      <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-400 opacity-80" />
    </span>
  </h1>

  <p className="text-gray-200/90 mt-5 max-w-[40ch] text-[15.5px] leading-relaxed">
            PlanetX is a leading software product development company, specializing in building
            innovative digital solutions.
          </p>
        </div>

        <div className="relative w-full h-full">
          <img src="/3.webp" alt="Team" className="w-full h-full object-cover opacity-90" />
          <img src="/7.svg" alt="Cube" className="absolute top-[35%] right-[2%] w-44 md:w-52 z-30 hidden md:block" />
          <img src="/7.svg" alt="Cube" className="absolute top-[66%] right-[66%] w-24 md:w-28 z-20 hidden md:block" />
          <img src="/7.svg" alt="Cube" className="absolute bottom-[6%] left-[-25%] w-12 md:w-14 z-10 hidden md:block" />
        </div>
      </section>

      {/* ============ ABOUT 2-COL ============ */}
      <section className="px-8 py-20 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-up">
            <h4 className="uppercase text-green-400 text-sm mb-2">About</h4>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">
              Our Journey Towards <br /> Excellence and Innovation
            </h2>
          </div>

          <div className="text-gray-300 text-base space-y-6 leading-relaxed" data-aos="fade-left">
            <p>
              PlanetX is a leading{" "}
              <span className="text-green-400 italic">software development outsourcing company</span>{" "}
              with a rich history of delivering innovative solutions. We are driven by our core
              values of quality, collaboration, and customer satisfaction.
            </p>
            <p>
              We have a separate division responsible for building software products from A to Z,
              adding value on each of the elements in this process. We help transform businesses
              with <span className="text-green-400 italic">software product development</span>{" "}
              services.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MISSION + CARDS SLIDER ============ */}
      <section className="px-6 md:px-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div data-aos="zoom-in">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="/10.png" alt="Mission" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-purple-600/10" />
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <h4 className="uppercase text-green-400 text-sm">Mission</h4>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 max-w-2xl">
              Our mission is to accelerate the maturity of the software engineering industry
            </h2>
            <p className="text-gray-300 mb-6">
              We believe that the industry is yet immature because its products’ quality depends on
              people’s performance, not processes.
            </p>

            <div className="relative pt-2">
              <button
                className="mission-prev absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 hover:bg-black/50 transition"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                  <path d="M15 19l-7-7 7-7" fill="none" stroke="#fff" strokeWidth="2" />
                </svg>
              </button>
              <button
                className="mission-next absolute -right-10 md:-right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 hover:bg-black/50 transition"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                  <path d="M9 5l7 7-7 7" fill="none" stroke="#fff" strokeWidth="2" />
                </svg>
              </button>

              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{ nextEl: ".mission-next", prevEl: ".mission-prev" }}
                pagination={{ clickable: true, el: ".mission-dots" }}
                spaceBetween={24}
                slidesPerView={2}
                breakpoints={{ 0: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }}
                className="mission-swiper"
              >
                {missionSlides.map((s, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-[#121122] rounded-2xl border border-white/10 p-6 h-full">
                      <h3 className="text-pink-400 font-semibold mb-3">{s.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{s.content}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mission-dots mt-3 flex gap-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ “A word from our CTO” ============ */}
      <section className="bg-gray-100 text-black px-6 md:px-20 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto rounded-2xl bg-white shadow-md p-6 md:p-10">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="rounded-lg overflow-hidden">
                <img src="/2.jpg" alt="CTO" className="w-full h-[260px] object-cover" />
              </div>
              <div className="text-center mt-4">
                <p className="font-semibold">Vamshi Krishna</p>
                <p className="text-sm text-gray-500">CEO/Founder/CTO</p>
              </div>
            </div>

            <div>
              <p className="tracking-widest text-xs font-semibold text-purple-700 mb-3">
                A WORD FROM OUR CTO
              </p>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                  Thank you for considering PlanetX as your technology partner. For business leaders
                  like you, time is the ultimate currency, and success is measured in terms of
                  quantifiable ROI. My role is to ensure we bring your custom software to market in
                  the shortest timeline and with the greatest ROI possible.
                </p>
                <p>
                  More than a developer, we strive to be a trusted business partner. We reinvest a
                  portion of our profits into process analysis and improvement. This allows us to
                  provide every client with the highest quality experience and end result possible,
                  empowering you to meet your business goals and strengthen your impact on your
                  audience and your industry.
                </p>
                <p>We can’t wait to embark on this journey with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5 CARDS + SIDE IMAGE ============ */}
      <section className="px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard
            icon="diamond"
            title="Pricing Predictability"
            text="Everything PlanetX does is process-driven, and that starts with creating price estimates for our clients. We work closely with prospects to understand their goals in detail, creating a scope of work in alignment with that vision. And, because we maintain detailed data on everything we do — time and resources required, probable risks or obstacles, and much more — we can use that data, all drawn from our extensive experience in custom software product development, to develop transparent and accurate cost estimates for the agreed-upon scope of work."
            aos="fade-up"
          />
          <GlassCard
            icon="cubes"
            title="Commitment to Quality"
            text="At PlanetX, we are dedicated to constant process improvement. Over the years, we've used what we've learned from every successful project (and every obstacle we've overcome) to build and refine a set of processes that enable us to communicate with clients, allocate resources, mitigate risks, and ultimately develop custom software products in a way that puts quality at the forefront in every step of the process. With these processes in place, we approach every project with a success mindset, committed to delivering the value and business outcomes our customers are looking for."
            aos="fade-up"
            delay={100}
          />
          <GlassCard
            icon="grid"
            title="Established Expertise"
            text="While some software developers have expertise in certain kinds of projects or certain technologies, what sets Syberry apart is that the framework we've built—not to mention our world-class team—enables us to build a staggering variety of projects. Whether a client approaches us with a vision similar to something we've already built or completely new, time and again, our finely tuned processes have enabled us to help customers achieve their loftiest software goals. We have the right processes, the right people, and the right attitude—and more than 150 success stories to back it up."
            aos="fade-up"
          />
          <GlassCard
            icon="columns"
            title="Broad Industry Experience"
            text="We've built custom software products for businesses in many different industries, including healthcare, energy, finance, construction, automotive, and more. We believe we can be most helpful to our clients if we consider ourselves true business partners as well as developers. That's why we include business experts on every project team, so we can fully understand our clients' industry-specific challenges and opportunities in order to drive better outcomes with every engagement."
            aos="fade-up"
            delay={100}
          />
          <GlassCard
            icon="globe"
            title="Highly Qualified Engineers"
            text="Every custom software product development project starts with a custom team, built with the engagement's specific needs in mind. We hire more engineers with computer science degrees than our competitors, and we are proud that our pool of more than 250 software experts are the best in the industry."
            aos="fade-up"
          />
          <div className="relative rounded-2xl overflow-hidden min-h-[360px]" data-aos="fade-left">
            <img src="/3.webp" alt="Team at work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0c1d]/30 via-transparent to-purple-600/20" />
          </div>
        </div>
      </section>

      {/* ============ 3 PROMO CARDS WITH PRO ICONS ============ */}
      <section className="px-6 md:px-20 pb-24">
        <h4 className="uppercase text-green-400 text-sm tracking-wide">
          Engineered for the Next Billion Users
        </h4>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="relative rounded-2xl bg-gradient-to-br from-violet-600/70 to-fuchsia-500/70 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-30px_rgba(139,92,246,0.75)]"
            data-aos="fade-up"
          >
            <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-white/15 blur-3xl" />
            <div className="flex items-start gap-4">
              <IconBadge><RocketPro /></IconBadge>
              <div>
                <h3 className="text-white/95 font-semibold italic text-lg">Built for Scale</h3>
                <p className="text-white/80 text-sm mt-2">
                  From MVPs to global platforms, we design software that grows with your vision.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative rounded-2xl bg-gradient-to-br from-violet-600/70 to-fuchsia-500/70 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-30px_rgba(139,92,246,0.75)]"
            data-aos="fade-up" data-aos-delay="80"
          >
            <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-white/15 blur-3xl" />
            <div className="flex items-start gap-4">
              <IconBadge><StopwatchShieldPro /></IconBadge>
              <div>
                <h3 className="text-white/95 font-semibold italic text-lg">Rapid Development, Rigid Standards</h3>
                <p className="text-white/80 text-sm mt-2">
                  Agile delivery without compromise. Get to market faster—with confidence.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative rounded-2xl bg-gradient-to-br from-violet-600/70 to-fuchsia-500/70 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-30px_rgba(139,92,246,0.75)]"
            data-aos="fade-up" data-aos-delay="160"
          >
            <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-white/15 blur-3xl" />
            <div className="flex items-start gap-4">
              <IconBadge><GlobeDotsPro /></IconBadge>
              <div>
                <h3 className="text-white/95 font-semibold italic text-lg">Truly Borderless</h3>
                <p className="text-white/80 text-sm mt-2">
                  Seamless collaboration across time zones. Trusted by global teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA / FORM ============ */}
      <RequestForm />

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#0d0c1d] text-white px-6 py-10 md:px-20">
        {/* ...footer content unchanged... */}
        <p className="text-center text-xs mt-10 text-gray-500">
          © 2025 PlanetX. All rights reserved.
        </p>
      </footer>

      <style>{`
        .mission-swiper .swiper-pagination-bullet { width: 6px; height: 6px; background: #6b7280; opacity: .6; }
        .mission-swiper .swiper-pagination-bullet-active { background: #60a5fa; opacity: 1; }
        .mission-dots { align-items:center; }
      `}</style>
    </div>
  );
}

/* ============ Small glass card component ============ */
function GlassCard({ icon, title, text, aos = "fade-up", delay = 0 }) {
  return (
    <div
      data-aos={aos}
      data-aos-delay={delay}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f0f1a] to-[#151527] ring-1 ring-white/10 p-8"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="mb-4">{getIcon(icon)}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm md:text-[15px]">{text}</p>
    </div>
  );
}

function getIcon(name) {
  const stroke = "#f472b6";
  switch (name) {
    case "diamond":
      return (<svg width="56" height="56" viewBox="0 0 24 24" fill="none"><path d="M12 3l4 4-4 14-4-14 4-4z" stroke={stroke} strokeWidth="1.5"/><path d="M8 7h8" stroke={stroke} strokeWidth="1.5"/></svg>);
    case "cubes":
      return (<svg width="56" height="56" viewBox="0 0 24 24" fill="none"><path d="M4 12l6-3 6 3-6 3-6-3z" stroke={stroke} strokeWidth="1.6"/><path d="M10 9V5l6 3v4" stroke={stroke} strokeWidth="1.6"/></svg>);
    case "grid":
      return (<svg width="56" height="56" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="6" height="6" rx="1" stroke={stroke} strokeWidth="1.6"/><rect x="14" y="4" width="6" height="6" rx="1" stroke={stroke} strokeWidth="1.6"/><rect x="4" y="14" width="6" height="6" rx="1" stroke={stroke} strokeWidth="1.6"/><rect x="14" y="14" width="6" height="6" rx="1" stroke={stroke} strokeWidth="1.6"/></svg>);
    case "columns":
      return (<svg width="56" height="56" viewBox="0 0 24 24" fill="none"><path d="M6 4v16M12 4v16M18 4v16" stroke={stroke} strokeWidth="1.6"/><path d="M3 20h18" stroke={stroke} strokeWidth="1.6"/></svg>);
    case "globe":
      return (<svg width="56" height="56" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.6"/><path d="M4 12h16M12 4c2.5 2.7 2.5 12.3 0 16M12 4c-2.5 2.7-2.5 12.3 0 16" stroke={stroke} strokeWidth="1.2"/></svg>);
    default:
      return null;
  }
}
