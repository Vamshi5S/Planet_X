// src/pages/Careers.jsx
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- provider badge helper for Resume Link ---------------- */
function providerFromUrl(url = "") {
  try {
    const u = new URL(url);
    const h = u.hostname.replace("www.", "");
    if (h.includes("drive.google")) return { name: "Google Drive", tag: "bg-emerald-50 text-emerald-700 border-emerald-200" };
    if (h.includes("dropbox"))       return { name: "Dropbox",      tag: "bg-sky-50 text-sky-700 border-sky-200" };
    if (h.includes("onedrive") || h.includes("live.com"))
                                     return { name: "OneDrive",     tag: "bg-blue-50 text-blue-700 border-blue-200" };
    if (h.includes("notion"))        return { name: "Notion",       tag: "bg-neutral-100 text-neutral-800 border-neutral-200" };
    if (h.includes("github"))        return { name: "GitHub",       tag: "bg-gray-100 text-gray-800 border-gray-200" };
    return { name: h, tag: "bg-gray-50 text-gray-700 border-gray-200" };
  } catch {
    return { name: "", tag: "bg-gray-50 text-gray-700 border-gray-200" };
  }
}

/* ---------------- nice Resume Link field (matches other boxes) ---------------- */
function ResumeLinkField({ value, onChange }) {
  const provider = useMemo(() => providerFromUrl(value), [value]);
  const isUrl =
    !!value &&
    /^https?:\/\/[\w.-]+(?:\.[\w\.-]+)+(?:[\/\w\.-]*)*\/?(\?.*)?(#.*)?$/i.test(value);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Resume Link <span className="text-gray-400 font-normal">(Drive / Dropbox / OneDrive)</span>
      </label>

      {/* same visual as other inputs */}
      <div className="mt-1 relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-70">
            <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 10-7.07-7.07L9 6" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M14 11a5 5 0 00-7.07 0L5.5 12.43a5 5 0 107.07 7.07L15 18" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        <input
          type="url"
          name="resumeLink"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="https://drive.google.com/... or https://dropbox.com/s/..."
          className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <div className="mt-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {isUrl ? (
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 ${provider.tag}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current/60 mr-1.5" />
              {provider.name}
            </span>
          ) : (
            <span className="text-gray-500">Paste a shareable link (any file host).</span>
          )}
        </div>
        <a
          href="https://support.google.com/drive/answer/2494822?hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-800 underline underline-offset-2"
        >
          Make link public
        </a>
      </div>
    </div>
  );
}

/* ---------------- Join Us Modal — Formspree ---------------- */
function JoinUsModal({ open, onClose }) {
  const [resumeLink, setResumeLink] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  // Read from .env.local (must be VITE_*). Do NOT use import.meta.env.local
  const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const ENDPOINT = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!ENDPOINT) {
      setStatus("error");
      setError("Form ID missing. Add VITE_FORMSPREE_FORM_ID to .env.local and restart dev server.");
      return;
    }

    setStatus("submitting");
    setError("");

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));
    // Helpful metadata for your inbox
    data._subject = "PlanetX Careers – Join Us";
    if (data.email) data._replyto = data.email;

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        formEl.reset();
        setResumeLink("");
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setError((body?.errors?.[0]?.message) || "Submission failed. Check your Form ID.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Join Us</h3>
              <p className="text-sm text-gray-500">
                Share your profile and resume link. We’ll get back to you if there’s a fit.
              </p>
            </div>
            <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>

          {/* Also sets action for no-JS fallback */}
          <form action={ENDPOINT || undefined} method="POST" onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role / Area</label>
                <input name="role" placeholder="e.g., Frontend Engineer, PM, Designer" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                <input name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Portfolio / GitHub</label>
                <input name="portfolio" type="url" placeholder="https://…" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
            </div>

            {/* Resume link (styled like the rest) */}
            <ResumeLinkField value={resumeLink} onChange={setResumeLink} />
            <input type="hidden" name="resumeLink" value={resumeLink} />

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Briefly tell us why you’d like to join PlanetX…"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* status */}
            {status === "error" && <p className="text-sm text-rose-600">{error}</p>}
            {status === "success" && (
              <div className="rounded-md bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm text-emerald-700">
                Thanks! We’ve received your submission.
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">We’ll only use your info for hiring purposes.</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-[#0b0b0b] text-white px-5 py-2 font-semibold disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting…" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Careers page (TM-style) ---------------- */
export default function Careers() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }, []);

  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10">
          <h1 className="text-[58px] md:text-[90px] font-extrabold -tracking-[0.02em]" data-aos="fade-up">
            Careers
          </h1>
          <p className="max-w-3xl text-[17px] md:text-[18px] text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="60">
            Explore human-centered, technology-led work that creates moments that matter. Join a
            small, ambitious team shipping real products with craft and care.
          </p>
        </div>

        {/* angled hero image */}
        <div className="relative mt-10">
          <div
            className="relative h-[420px] md:h-[560px] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop')",
              clipPath: "polygon(0 44%, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.01em] mb-4">Why PlanetX</h2>
            <p className="text-gray-700 leading-relaxed">
              Seek new frontiers in your craft. Explore opportunities across product, design, and
              engineering—and help us prototype the future with pragmatic, human-centered work.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b0b0b] text-white px-6 py-3 font-semibold"
            >
              Join Us
              <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
          <div className="md:col-span-6">
            <div
              className="h-[320px] rounded-2xl bg-center bg-cover shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
              style={{
                backgroundImage:
                  "url('/grp.png')",
              }}
            />
          </div>
        </div>
      </section>

      {/* D&I */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div
              className="h-[320px] rounded-2xl bg-center bg-cover shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Diversity & Inclusion</h3>
            <p className="text-gray-700">
              We celebrate differences and build with empathy. Our team welcomes varied
              perspectives—because they make the work better and the outcomes stronger.
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Reconnect, Rediscover, and Inspire</h3>
            <p className="text-gray-700">
              We’re building a community of makers and mentors. Whether you’re returning, referring,
              or just saying hi—there’s room at the table.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Join Us
            </button>
          </div>
          <div className="md:col-span-6">
            <div
              className="h-[320px] rounded-2xl bg-center bg-cover shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA over angled image */}
      <section className="relative mt-10">
        <div
          className="h-[440px] bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop')",
            clipPath: "polygon(0 0, 100% 22%, 100% 100%, 0 78%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 -mt-[280px] relative">
          <div className="w-full max-w-xl rounded-2xl bg-black text-white p-8 shadow-2xl">
            <h3 className="text-3xl font-extrabold">Connect and Grow</h3>
            <p className="mt-3 text-gray-200">Today’s a good day to Rise. What are you waiting for?</p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#0b0b0b] px-6 py-3 font-semibold"
            >
              Join Us
              <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <JoinUsModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
