// src/components/RequestForm.jsx
import { useMemo, useState } from "react";

// Minimal country list (easy to extend)
const COUNTRIES = [
  { code: "US", dial: "+1",  name: "United States", flag: "🇺🇸" },
  { code: "CA", dial: "+1",  name: "Canada",        flag: "🇨🇦" },
  { code: "GB", dial: "+44", name: "United Kingdom",flag: "🇬🇧" },
  { code: "IN", dial: "+91", name: "India",         flag: "🇮🇳" },
  { code: "AU", dial: "+61", name: "Australia",     flag: "🇦🇺" },
  { code: "DE", dial: "+49", name: "Germany",       flag: "🇩🇪" },
  { code: "FR", dial: "+33", name: "France",        flag: "🇫🇷" },
  { code: "SG", dial: "+65", name: "Singapore",     flag: "🇸🇬" },
  { code: "AE", dial: "+971",name: "U.A.E.",        flag: "🇦🇪" },
  { code: "SA", dial: "+966",name: "Saudi Arabia",  flag: "🇸🇦" },
  { code: "ZA", dial: "+27", name: "South Africa",  flag: "🇿🇦" },
  { code: "BR", dial: "+55", name: "Brazil",        flag: "🇧🇷" },
  { code: "MX", dial: "+52", name: "Mexico",        flag: "🇲🇽" },
  { code: "JP", dial: "+81", name: "Japan",         flag: "🇯🇵" },
  { code: "KR", dial: "+82", name: "South Korea",   flag: "🇰🇷" },
  { code: "CN", dial: "+86", name: "China",         flag: "🇨🇳" },
  { code: "IT", dial: "+39", name: "Italy",         flag: "🇮🇹" },
  { code: "ES", dial: "+34", name: "Spain",         flag: "🇪🇸" },
  { code: "NL", dial: "+31", name: "Netherlands",   flag: "🇳🇱" },
  { code: "SE", dial: "+46", name: "Sweden",        flag: "🇸🇪" },
  { code: "CH", dial: "+41", name: "Switzerland",   flag: "🇨🇭" },
  { code: "NZ", dial: "+64", name: "New Zealand",   flag: "🇳🇿" },
];

const ROLES = [
  "Founder",
  "CTO / VP Engineering",
  "Product Manager",
  "Engineering Manager",
  "Operations",
  "Other",
];

export default function RequestForm() {
  const [country, setCountry] = useState("US");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const dial = useMemo(
    () => COUNTRIES.find((c) => c.code === country)?.dial ?? "+1",
    [country]
  );
  const flag = useMemo(
    () => COUNTRIES.find((c) => c.code === country)?.flag ?? "🇺🇸",
    [country]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
  
    const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
    const ENDPOINT = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null;
  
    if (!ENDPOINT) {
      setStatus("error");
      setError("Form ID missing. Add VITE_FORMSPREE_FORM_ID to .env.local and restart the dev server.");
      return;
    }
  
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
  
    // combine country dial + phone
    const rawPhone = (fd.get("phoneRaw") || "").toString().trim();
    const country = (fd.get("country") || "").toString();
    const phone = `${COUNTRIES.find(c => c.code === country)?.dial ?? ""} ${rawPhone}`.trim();
  
    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      role: fd.get("role"),
      company: fd.get("company"),
      message: fd.get("message"),
      phone,
      country,
      _subject: "PlanetX — New Request",
      _replyto: fd.get("email"),
    };
  
    if ((payload.message || "").trim().length < 10) {
      setStatus("error");
      setError("Please add a short message (10+ characters).");
      return;
    }
  
    setStatus("submitting");
  
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const body = await res.json().catch(() => ({}));
      console.debug("Formspree response:", body);
  
      if (res.ok) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setError(body?.errors?.[0]?.message || "Submission failed. Please check form settings.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }
  
  return (
    <section className="relative py-20 px-6 md:px-20 bg-[#0f1220]">
      {/* headline */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-white">
          Succeed <span className="text-pink-400 italic">faster</span> with PlanetX
        </h2>
        <p className="text-gray-400 mt-3">
          If you submit a request today, your MVP could be ready as early as{" "}
          <span className="text-emerald-400 font-medium underline decoration-emerald-400/40">
            February 10, 2026
          </span>
        </p>
      </div>

      {/* card */}
      <div className="max-w-5xl mx-auto rounded-2xl bg-[rgba(12,14,26,0.7)] ring-1 ring-white/10 shadow-[0_60px_160px_-40px_rgba(88,28,135,0.35)] p-6 md:p-8">
        {status === "success" ? (
          <div className="text-center py-10">
            <div className="rounded-md border border-emerald-400/30 bg-emerald-500/10 text-emerald-200 px-4 py-6 text-lg font-medium">
              ✅ Thanks! We’ve received your request.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* First & Last name */}
            <Input name="firstName" placeholder="First name" required />
            <Input name="lastName" placeholder="Last name" required />

            {/* Email */}
            <Input name="email" type="email" placeholder="you@company.com" required />

            {/* Phone: country + number */}
            <div className="flex gap-3">
              <div className="relative">
                <select
                  name="country"
                  aria-label="Country code"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="h-[46px] rounded-lg bg-[#171a2b] text-white/95 pl-10 pr-8 outline-none border border-transparent focus:border-purple-500"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.dial})
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                  {flag}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-1">
                <span className="text-white/70 text-sm">{dial}</span>
                <Input
                  name="phoneRaw"
                  placeholder="555 123 4567"
                  className="flex-1"
                  inputMode="tel"
                />
              </div>
            </div>

            {/* Role & Company */}
            <Select name="role" placeholder="I am a…" options={ROLES} required />
            <Input name="company" placeholder="Company" />

            {/* Message */}
            <Textarea
              name="message"
              placeholder="Type your message..."
              className="md:col-span-2"
              required
            />

            {/* status banners */}
            {status === "error" && (
              <div className="md:col-span-2 rounded-md border border-rose-400/30 bg-rose-500/10 text-rose-200 px-3 py-2 text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="submit-btn disabled:opacity-60"
                disabled={status === "submitting"}
              >
                <span className="bg"></span>
                <span className="label">
                  {status === "submitting" ? "Submitting…" : "Submit"}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- tiny UI atoms ---------- */

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={
        "h-[46px] w-full rounded-lg bg-[#171a2b] text-white/95 px-4 outline-none border border-transparent focus:border-purple-500 " +
        className
      }
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      rows={5}
      {...props}
      className={
        "w-full rounded-lg bg-[#171a2b] text-white/95 px-4 py-3 outline-none border border-transparent focus:border-purple-500 " +
        className
      }
    />
  );
}

function Select({ name, placeholder, options = [], className = "", required = false }) {
  const [value, setValue] = useState("");
  return (
    <div className={"relative " + className}>
      <select
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        className="h-[46px] w-full appearance-none rounded-lg bg-[#171a2b] text-white/90 px-4 pr-9 outline-none border border-transparent focus:border-purple-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
