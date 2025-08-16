// src/components/Insights.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ------------------------------------------------------------
   Featured content
-------------------------------------------------------------*/
const FEATURED_NEWS = [
  { tag: "News", title: "PlanetX unveils lightweight GenAI accelerators for small teams", blurb: "Built to help early-stage businesses test, iterate, and ship AI features without heavy infra.", img: "/th.png" },
  { tag: "News", title: "Partnership program for local SMBs to modernize customer portals", blurb: "Template-driven portals, secure auth, and analytics packaged for fast time-to-value.", img: "/bar.png" },
  { tag: "News", title: "Starter cloud blueprints released for HIPAA- and PCI-aware apps", blurb: "Pragmatic guardrails and IaC samples so startups can launch with confidence.", img: "/thumb.png" },
];

const FEATURED_VIEWS = [
  { tag: "Views", title: "Making Cloud Costs Boring (and Predictable) for Startups", blurb: "FinOps basics you can implement in a week—budgets, alerts, and a 3-tier environment plan.", img: "/sj.png" },
  { tag: "Views", title: "From Idea to Demo: A 4-Sprint Playbook for Service Startups", blurb: "Scope thin, deliver weekly, and validate with real users—what actually works in practice.", img: "/hx.png" },
  { tag: "Views", title: "Shipping GenAI Features Responsibly (without a Research Team)", blurb: "Data boundaries, evaluation, and safe-defaults that keep you fast and compliant.", img: "/red.png" },
];
const today = new Date();

// Example: set event time to 3:00 PM today in UTC
today.setHours(15, 0, 0, 0); 
/* ------------------------------------------------------------
   EVENTS with typed actions (form/link/calendar)
-------------------------------------------------------------*/
const EVENTS = [
  {
    id: "px-ev-001",
    title: "Founder Office Hours: Finding Product Market-Fit",
    when: today.toISOString(),  // 👈 dynamic date
    where: "Virtual · Zoom",
    format: "Virtual",
    image: "/two.png",
    actions: [
      { label: "Book a 1:1", type: "form", kind: "primary", slug: "book-001" },
      { label: "Get agenda (PDF)", type: "link", kind: "quiet", url: "/pmf-agenda.pdf" },
      { label: "Add to Calendar", type: "calendar", kind: "ghost" },
    ],
    note: "Live teardown of your discovery & validation plan.",
    durationMins: 45,
    location: "Zoom (link on confirmation)",
    description:
      "A focused 1:1 on your hypothesis, ICP, and validation plan. Bring notes and open questions.",
  },
  {
    id: "px-ev-002",
    title: "Demo Day: PlanetX Startup Showcase",
    when: "2025-10-08T23:00:00Z",
    where: "Cape Girardeau, MO · In person",
    format: "In person",
    image: "/bridge.png",
    actions: [
      { label: "Request an Invite", type: "form", kind: "primary", slug: "invite-002" },
      { label: "Venue Map", type: "link", kind: "quiet", url: "https://maps.google.com/?q=Cape+Girardeau+MO" },
      { label: "Add to Calendar", type: "calendar", kind: "ghost" },
    ],
    note: "Hands-on demos with live Q&A and investor networking.",
    durationMins: 90,
    location: "Downtown Cape Girardeau, MO",
    description:
      "Live product demos from PlanetX with Q&A, followed by networking with founders and guests.",
  },
  {
    id: "px-ev-003",
    title: "Designing AI Features Users Actually Trust",
    when: "2025-11-21T18:30:00Z",
    where: "Online · Live Q&A",
    format: "Hybrid",
    image: "/multicolor.png",
    actions: [
      { label: "Reserve Seat", type: "form", kind: "primary", slug: "seat-003" },
      { label: "Speaker Deck", type: "link", kind: "quiet", url: "/ai-trust-deck.pdf" },
      { label: "Add to Calendar", type: "calendar", kind: "ghost" },
    ],
    note: "A compact masterclass on evaluators, guardrails, and UX for GenAI.",
    durationMins: 60,
    location: "Online (link on confirmation)",
    description:
      "We’ll cover practical evaluators, failure modes, and UX patterns that keep AI features trustworthy.",
  },
];

/* ---------- Clients (brand-colored, clickable chips) ---------- */
const CLIENTS = [
  {
    name: "Midwest Organics",
    url: "https://midwestorganicsllc.com",
    // deep green like their brand
    bg: "from-[#0b7d47] to-[#1fb86a]",
    emoji: "🌿",
  },
  {
    name: "CatSpot Litter",
    url: "https://catspotlitter.com",
    // CatSpot blue
    bg: "from-[#2b82b8] to-[#66b9ff]",
    emoji: "🐱",
  },
  {
    name: "Magic Dry US (Lola Products)",
    url: "https://lolaproducts.com",
    // orange/amber accent used in a lot of Lola/Magic Dry art
    bg: "from-[#f97316] to-[#f59e0b]",
    emoji: "✨",
  },
  {
    name: "OMI Astrology (Mobile)",
    url: "https://play.google.com/store", // or your store link
    // app-like orange tile
    bg: "from-[#ff7a00] to-[#ffb357]",
    emoji: "🔮",
  },
  {
    name: "Buttheadz",
    url: "https://buttheadzgrowshop.com",
    // their green palette
    bg: "from-[#0ea34a] to-[#50d571]",
    emoji: "🌱",
  },
  {
    name: "Reptile Prime",
    url: "https://reptileprime.com",
    // earthy orange/green
    bg: "from-[#ff7d32] to-[#fbbf24]",
    emoji: "🦎",
  },
  {
    name: "Shop Online New York",
    url: null, // site still in development—show chip without link
    // navy/red nod to the bridge logo
    bg: "from-[#0f2c59] to-[#2b4a86]",
    emoji: "🏙️",
  },
];

/* Small, animated badge */
function ClientBadge({ name, url, bg, emoji }) {
  const inner = (
    <div
      className={`group relative select-none whitespace-nowrap rounded-2xl
                  px-5 py-3 text-white font-semibold shadow-md
                  bg-gradient-to-r ${bg}
                  transition transform hover:-translate-y-0.5 hover:shadow-lg`}
    >
      {/* subtle glossy sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
        <span className="absolute -top-10 left-0 right-0 h-1/2
                         bg-white/15 blur-2xl" />
      </span>

      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center
                       rounded-full bg-black/10 text-base">
        {emoji}
      </span>
      <span className="tracking-tight">{name}</span>

      {/* arrow on hover (only if linkable) */}
      {url && (
        <span className="ml-2 inline-block opacity-0 translate-x-[-4px]
                         group-hover:opacity-100 group-hover:translate-x-0
                         transition">
          ➜
        </span>
      )}
    </div>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      className="inline-block"
    >
      {inner}
    </a>
  ) : (
    <div title={`${name} (coming soon)`}>{inner}</div>
  );
}


/* ------------------- small helpers ------------------- */
function dateBits(iso) {
  const d = new Date(iso);
  const day = d.toLocaleString("en-US", { day: "2-digit", timeZone: "UTC" });
  const mon = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const yr = d.toLocaleString("en-US", { year: "numeric", timeZone: "UTC" });
  return { day, mon, yr };
}
function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      {children}
    </span>
  );
}
function CircleBtn({ onClick, dir = "prev", ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel || (dir === "next" ? "Next" : "Previous")}
      onClick={onClick}
      className="h-12 w-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center transition"
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

/* ------------------- CTA button ------------------- */
function CTA({ label, kind = "primary", onClick }) {
  const base =
    "inline-flex items-center gap-2 rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    kind === "primary"
      ? "bg-[#0b0b0b] text-white px-4 py-2 hover:bg-black focus:ring-black"
      : kind === "quiet"
      ? "bg-white text-[#0b0b0b] px-4 py-2 border border-gray-200 hover:border-gray-300 focus:ring-gray-300"
      : "px-3 py-2 text-gray-600 hover:text-[#0b0b0b] focus:ring-gray-300";

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      {label}
      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
        <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
}

/* ------------------- Modal form (Web3Forms) ------------------- */
function EventFormModal({ open, onClose, actionLabel, eventTitle }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setError("Missing VITE_WEB3FORMS_KEY. Add it to .env and restart the dev server.");
      return;
    }

    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // required by Web3Forms
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `[PlanetX] ${actionLabel} – ${eventTitle}`);
    data.append("from_name", "PlanetX Website");
    data.append("botcheck", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((r) => r.json());

      if (res.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(res.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* modal */}
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-[#0b0b0b]">{actionLabel}</h4>
              <p className="text-sm text-gray-500">Event: {eventTitle}</p>
            </div>
            <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input name="name" type="text" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input name="company" type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder={`I'd like to ${actionLabel.toLowerCase()} for "${eventTitle}".`}
              />
            </div>

            {status === "error" && <p className="text-sm text-rose-600">{error}</p>}
            {status === "success" && (
              <div className="rounded-md bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm text-emerald-700">
                Thanks! We’ve received your request. You’ll get a confirmation email soon.
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">We’ll only use your info to coordinate this event.</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-[#0b0b0b] text-white px-5 py-2 font-semibold disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ======================= MAIN PAGE ======================= */
export default function InsightsPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  // sliders
  const [newsIdx, setNewsIdx] = useState(0);
  const [viewsIdx, setViewsIdx] = useState(0);

  const nextNews = () => setNewsIdx((p) => (p + 1) % FEATURED_NEWS.length);
  const prevNews = () => setNewsIdx((p) => (p - 1 + FEATURED_NEWS.length) % FEATURED_NEWS.length);
  const nextViews = () => setViewsIdx((p) => (p + 1) % FEATURED_VIEWS.length);
  const prevViews = () => setViewsIdx((p) => (p - 1 + FEATURED_VIEWS.length) % FEATURED_VIEWS.length);

  // clients marquee
  const clients = [
    "OMI Astrology",
    "Midwest Organics",
    "CatSpot Litter",
    "Magic Dry US",
    "Buttheadz",
    "Reptile Prime",
    "Shop Online New York",
  ];

  // modal state
  const [formOpen, setFormOpen] = useState(false);
  const [formAction, setFormAction] = useState("Contact");
  const [formEvent, setFormEvent] = useState("");

  function openForm(label, eventTitle) {
    setFormAction(label);
    setFormEvent(eventTitle);
    setFormOpen(true);
  }

  /* ---------- action handlers for events ---------- */
  const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const downloadICS = (ev) => {
    const start = new Date(ev.when);
    const end = new Date(start.getTime() + (ev.durationMins || 60) * 60000);
    const pad = (n) => String(n).padStart(2, "0");
    const toICS = (d) =>
      `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
        d.getUTCHours()
      )}${pad(d.getUTCMinutes())}00Z`;

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//PlanetX//Events//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${ev.id}@planetx.local`,
      `DTSTAMP:${toICS(new Date())}`,
      `DTSTART:${toICS(start)}`,
      `DTEND:${toICS(end)}`,
      `SUMMARY:${ev.title.replace(/\n/g, " ")}`,
      `LOCATION:${(ev.location || ev.where || "").replace(/\n/g, " ")}`,
      `DESCRIPTION:${(ev.description || ev.note || "").replace(/\n/g, " ")}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ev.title.replace(/\s+/g, "-").slice(0, 40)}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleAction = (action, ev) => {
    if (action.type === "form") return openForm(action.label, ev.title);
    if (action.type === "link" && action.url) return openLink(action.url);
    if (action.type === "calendar") return downloadICS(ev);
  };

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* Marquee CSS */}
      <style>{`
        @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-mask { mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%); }
        .marquee-track { display: flex; width: 200%; animation: marqueeLeft 22s linear infinite; }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <h1 className="text-[60px] leading-[1.08] md:text-[88px] font-extrabold -tracking-[0.02em]" data-aos="fade-up">Insights</h1>
          <p className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="60">
            Quick, practical updates from a startup’s perspective—press notes, short essays, and upcoming sessions.
          </p>
        </div>
        <div className="relative mt-10">
          <div className="relative h-[420px] md:h-[560px] bg-center bg-cover" style={{ backgroundImage: "url('/insights.jpg')", clipPath: "polygon(0 44%, 100% 0, 100% 100%, 0% 100%)" }}>
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* ================= FEATURED NEWS ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Featured News</h2>
            <div className="hidden md:flex gap-4">
              <CircleBtn onClick={prevNews} ariaLabel="Previous news" />
              <CircleBtn dir="next" onClick={nextNews} ariaLabel="Next news" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7" key={FEATURED_NEWS[newsIdx].img}>
              <img src={FEATURED_NEWS[newsIdx].img} alt={FEATURED_NEWS[newsIdx].title} className="w-full h-[340px] md:h-[440px] object-cover rounded-2xl" draggable={false} />
            </div>
            <div className="md:col-span-5" key={FEATURED_NEWS[newsIdx].title}>
              <p className="text-rose-600 text-[13px] tracking-wide font-semibold">{FEATURED_NEWS[newsIdx].tag}</p>
              <h3 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">{FEATURED_NEWS[newsIdx].title}</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">{FEATURED_NEWS[newsIdx].blurb}</p>
            </div>
          </div>

          <div className="mt-10 h-[4px] bg-gray-200/80 rounded-full overflow-hidden">
            <div className="h-full bg-rose-600 transition-all duration-500" style={{ width: `${((newsIdx + 1) / FEATURED_NEWS.length) * 100}%` }} />
          </div>
        </div>
      </section>

      {/* ================= FEATURED VIEWS ================= */}
      <section className="bg-white pt-6 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em]">Featured Views</h2>
            <div className="hidden md:flex gap-4">
              <CircleBtn onClick={prevViews} ariaLabel="Previous view" />
              <CircleBtn dir="next" onClick={nextViews} ariaLabel="Next view" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5" key={FEATURED_VIEWS[viewsIdx].title}>
              <p className="text-rose-600 text-[13px] tracking-wide font-semibold">{FEATURED_VIEWS[viewsIdx].tag}</p>
              <h3 className="mt-3 text-[28px] md:text-[34px] font-semibold leading-snug">{FEATURED_VIEWS[viewsIdx].title}</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">{FEATURED_VIEWS[viewsIdx].blurb}</p>
            </div>
            <div className="md:col-span-7" key={FEATURED_VIEWS[viewsIdx].img}>
              <img src={FEATURED_VIEWS[viewsIdx].img} alt={FEATURED_VIEWS[viewsIdx].title} className="w-full h-[340px] md:h-[440px] object-cover rounded-2xl" draggable={false} />
            </div>
          </div>

          <div className="mt-10 h-[4px] bg-gray-200/80 rounded-full overflow-hidden">
            <div className="h-full bg-rose-600 transition-all duration-500" style={{ width: `${((viewsIdx + 1) / FEATURED_VIEWS.length) * 100}%` }} />
          </div>
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="bg-[#f6f7f8] py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-10">Events</h2>

          <div className="rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.05)] overflow-hidden">
            <ul role="list" className="divide-y divide-gray-100">
              {EVENTS.map((ev) => {
                const { day, mon, yr } = dateBits(ev.when);
                return (
                  <li key={ev.id} className="p-5 md:p-6">
                    <div className="grid grid-cols-12 items-center gap-4 md:gap-6">
                      {/* Media circle + date */}
                      <div className="col-span-12 md:col-span-2 flex items-center gap-4">
                        <div className="h-16 w-16 shrink-0 rounded-full ring-4 ring-white shadow-md bg-center bg-cover" style={{ backgroundImage: `url('${ev.image}')` }} aria-hidden="true" />
                        <div className="leading-none">
                          <div className="text-4xl md:text-5xl font-extrabold -tracking-[0.02em] text-[#0b0b0b]">{day}</div>
                          <div className="text-xs text-gray-500 mt-1">{mon}, {yr}</div>
                        </div>
                      </div>

                      {/* Title & meta */}
                      <div className="col-span-12 md:col-span-7">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <Chip>{ev.format}</Chip>
                          <span className="text-sm text-gray-500">{ev.where}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#0b0b0b]">{ev.title}</h3>
                        {ev.note && <p className="mt-2 text-sm text-gray-600 max-w-2xl">{ev.note}</p>}
                      </div>

                      {/* Actions */}
                      <div className="col-span-12 md:col-span-3 md:justify-self-end">
                        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3">
                          {ev.actions.map((a) => (
                            <CTA
                              key={`${ev.id}-${a.label}`}
                              label={a.label}
                              kind={a.kind}
                              onClick={() => handleAction(a, ev)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          
        </div>
      </section>

      {/* ================= TRUSTED BY (clients marquee) ================= */}
      {/* ================= TRUSTED BY (brand chips marquee) ================= */}
<section className="bg-white py-16 md:py-24">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] text-center mb-8">
      Trusted By
    </h2>

    {/* marquee CSS is already in your page; this reuses it */}
    <div className="relative overflow-hidden marquee-mask rounded-2xl border border-gray-200">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-6 md:gap-8 px-8 py-6">
            {CLIENTS.map((c) => (
              <ClientBadge
                key={`${c.name}-${dup}`}
                name={c.name}
                url={c.url}
                bg={c.bg}
                emoji={c.emoji}
              />
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* optional small note */}
    <p className="text-center text-xs text-gray-500 mt-4">
      Logos and names are property of their respective owners.
    </p>
  </div>
</section>


      {/* Modal form */}
      <EventFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        actionLabel={formAction}
        eventTitle={formEvent}
      />

      <div className="h-6 md:h-10" />
    </main>
  );
}
