// src/components/Capabilities.jsx
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Capabilities() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  const navigate = useNavigate();

  // Edit, reorder, or add items freely.
  const items = [
    {
      slug: "artificial-intelligence",
      title: "Artificial Intelligence",
      img: "/ai.jpg", 
      darkInitially: false,
    },
    {
      slug: "cloud-infrastructure",
      title: "Cloud and Infrastructure Services",
      img: "/cloud.jpg",
      darkInitially: false,
    },
    {
      slug: "digital-apps",
      title: "Digital Enterprise Applications",
      img: "/digitalenterprise.jpg",
      darkInitially: false,
    },
    {
      slug: "testing",
      title: "Testing Services",
      img: "/testing_services.jpg",
      darkInitially: false,
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
      {/* Background video under the slanted hero */}
      <div className="fixed inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src="/Cap.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* HERO with diagonal cut */}
      <section className="relative bg-white">
        {/* slanted bottom edge */}
        <div className="clip-hero-btm relative z-10 px-6 py-16 md:py-24 md:px-12 lg:px-20">
          <h1
            className="text-[44px] leading-[1.05] md:text-[72px] md:leading-[1.02] font-extrabold tracking-tight"
            data-aos="fade-up"
          >
            Our Capabilities
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg md:text-xl text-neutral-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our portfolio of offerings spans competencies, specialisms, and
            application services that align with our customers’ changing worlds.
          </p>
        </div>

        {/* The diagonal shape itself – sits behind the hero content */}
        <div
          className="absolute inset-x-0 bottom-[-1px] h-24 md:h-28 lg:h-32 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          }}
        />
      </section>

      {/* WHAT WE DO */}
      <section className="relative z-10 bg-white px-6 md:px-12 lg:px-20 pt-10 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, idx) => (
            <Card
              key={it.slug}
              title={it.title}
              img={it.img}
              darkInitially={it.darkInitially}
              onClick={() => navigate(`/capabilities/${it.slug}`)}
              aosDelay={idx * 70}
            />
          ))}
        </div>
      </section>

      {/* Small helper styles just for the diagonal hero */}
      <style>{`
        .clip-hero-btm {
          position: relative;
        }
        /* keep hero content above the diagonal */
        .clip-hero-btm::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 110px;
          background: white;
          clip-path: polygon(0 0, 100% 100%, 0 100%);
          z-index: -1;
        }

        @media (min-width: 768px) {
          .clip-hero-btm::after { height: 140px; }
        }
        @media (min-width: 1024px) {
          .clip-hero-btm::after { height: 160px; }
        }
      `}</style>
    </main>
  );
}

/* ====== Card ====== */
function Card({ title, img, onClick, darkInitially = false, aosDelay = 0 }) {
  return (
    <button
      onClick={onClick}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={[
        "group relative overflow-hidden rounded-sm border border-neutral-200 text-left",
        darkInitially ? "bg-neutral-900 text-white" : "bg-neutral-50",
        "transition-colors duration-300 ease-out hover:bg-neutral-900 hover:text-white",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
      ].join(" ")}
    >
      {/* content wrapper to mimic the card spacing from the reference */}
      <div className="p-10 md:p-12 h-full flex flex-col">
        {/* circular media */}
        <div className="mx-auto mb-10 h-52 w-52 rounded-full overflow-hidden ring-1 ring-black/10 group-hover:ring-white/20 transition">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* title + arrow */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-medium">{title}</h3>

          {/* arrow – animates slightly on hover */}
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/40 transition group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </div>
      </div>

      {/* subtle overlay to make hover go deeper black */}
      <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
    </button>
  );
}

/* ====== Icons ====== */
function ArrowRight(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}
