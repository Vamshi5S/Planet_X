// src/pages/ContactUs.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

/* --------------------------------- helpers -------------------------------- */
const SECTIONS = [
  "Request for Service",
  "Join Planet X",
  "Vendor Registration",
  "Investor Information",
  "Other Requests",
];

const COUNTRIES = [
  "United States","Canada","United Kingdom","India","Germany","France","Australia","Singapore","United Arab Emirates",
  "Saudi Arabia","South Africa","Brazil","Mexico","Japan","South Korea","China","Italy","Spain","Netherlands","Sweden","Switzerland"
];

const ENQUIRY_TYPES = [
  "Business Enquiries / Request For Service",
  "Submit an RFP",
  "Vendor Registration",
  "Other",
];

const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID; // <- REQUIRED

/* --------------------------------- page ----------------------------------- */
export default function ContactUs() {
  const [open, setOpen] = useState(SECTIONS[0]);
  const [enquiry, setEnquiry] = useState(ENQUIRY_TYPES[0]);
  const formRef = useRef(null);

  const scrollToForm = (preset) => {
    if (preset) setEnquiry(preset);
    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-[56px] md:text-[80px] leading-[1.05] font-extrabold tracking-[-0.02em]">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 text-lg">We would love to hear from you!</p>
      </section>

      {/* ACCORDION STRIP */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
          {/* Request for Service */}
          <AccordionItem
            title="Request for Service"
            open={open === "Request for Service"}
            onToggle={() =>
              setOpen((s) => (s === "Request for Service" ? "" : "Request for Service"))
            }
          >
            <p className="text-gray-600 max-w-3xl">
              Get in touch to learn more about our solutions and services tailored to help enterprises Scale at Speed.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonGhost onClick={() => scrollToForm("Business Enquiries / Request For Service")}>
                REQUEST FOR SERVICES
              </ButtonGhost>
              <ButtonGhost onClick={() => scrollToForm("Submit an RFP")}>
                SUBMIT AN RFP
              </ButtonGhost>
            </div>
          </AccordionItem>

          {/* Join */}
          <AccordionItem
            title="Join PlanetX"
            open={open === "Join Planet X"}
            onToggle={() => setOpen((s) => (s === "Join Planet X" ? "" : "Join Planet X"))}
          >
            <p className="text-gray-600">Looking for careers at PlanetX? Visit our Careers page.</p>
            <div className="mt-5">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-[13px] font-semibold hover:bg-gray-50"
              >
                EXPLORE CAREERS
              </Link>
            </div>
          </AccordionItem>

          {/* Vendor Registration */}
          <AccordionItem
            title="Vendor Registration"
            open={open === "Vendor Registration"}
            onToggle={() => setOpen((s) => (s === "Vendor Registration" ? "" : "Vendor Registration"))}
          >
            <p className="text-gray-600">Be part of our expansive and trusted supplier network.</p>
            <div className="mt-5">
              <ButtonGhost onClick={() => scrollToForm("Vendor Registration")}>
                SUBMIT A PROPOSAL
              </ButtonGhost>
            </div>
          </AccordionItem>

          {/* Investor info */}
          <AccordionItem
            title="Investor Information"
            open={open === "Investor Information"}
            onToggle={() => setOpen((s) => (s === "Investor Information" ? "" : "Investor Information"))}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <InfoLine label="Name" value="Vamshi Krishna" />
              <InfoLine label="Email" value="contact@planetxsolutions.com" />
              <InfoLine label="Address" value="6 Village Dr, Cape Girardeau, MO, United States, 63701" />
            </div>
          </AccordionItem>

          {/* Other */}
          <AccordionItem
            title="Other Requests"
            open={open === "Other Requests"}
            onToggle={() => setOpen((s) => (s === "Other Requests" ? "" : "Other Requests"))}
          >
            <p className="text-gray-600">Have something else? Use the form below and select “Other”.</p>
            <div className="mt-5">
              <ButtonGhost onClick={() => scrollToForm("Other")}>GO TO FORM</ButtonGhost>
            </div>
          </AccordionItem>
        </div>
      </section>

      {/* FORM (dark section) */}
      <GetInTouchForm ref={formRef} enquiry={enquiry} setEnquiry={setEnquiry} />
    </main>
  );
}

/* ----------------------------- accordion item ----------------------------- */
function AccordionItem({ title, open, onToggle, children }) {
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <h3 className="text-[26px] md:text-[28px] font-semibold">{title}</h3>
        <span className="text-2xl leading-none select-none">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="pb-8">{children}</div>}
    </div>
  );
}

function ButtonGhost({ children, ...props }) {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-[13px] font-semibold hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="text-[12px] uppercase tracking-wider text-gray-500">{label}</div>
      <div className="mt-1 font-medium break-words">{value}</div>
    </div>
  );
}

/* ----------------------------- form component ---------------------------- */
const initialForm = {
  type: ENQUIRY_TYPES[0],
  firstName: "",
  lastName: "",
  email: "",
  organisation: "",
  jobTitle: "",
  phone: "",
  country: "",
  message: "",
  newsletter: false,
};

const GetInTouchForm = React.forwardRef(function FormBlock({ enquiry, setEnquiry }, ref) {
  const [formData, setFormData] = useState({ ...initialForm, type: enquiry });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  // Keep parent's enquiry selection in sync with the select
  React.useEffect(() => {
    setFormData((d) => ({ ...d, type: enquiry }));
  }, [enquiry]);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((d) => ({ ...d, [name]: type === "checkbox" ? checked : value }));
    if (name === "type") setEnquiry(value);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!FORM_ID) {
      setStatus("error");
      setError("Form ID missing. Add VITE_FORMSPREE_FORM_ID to .env.local and restart dev server.");
      return;
    }

    setStatus("submitting");
    setError("");

    // Build payload for Formspree
    const payload = {
      ...formData,
      _subject: "PlanetX — New Request (Contact Us)",
      _replyto: formData.email || undefined,
    };

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          (body && body.errors && body.errors[0] && body.errors[0].message) ||
            "Submission failed. Please try again."
        );
      }

      // Success: clear everything
      setStatus("success");
      setFormData({ ...initialForm, type: enquiry }); // preserve selected enquiry
    } catch (err) {
      setStatus("error");
      setError(err.message || "Submission failed. Please try again.");
    }
  };

  return (
    <section ref={ref} className="bg-[#1f2021] text-white">
      {/* Autofill + focus styling reset for dark inputs */}
      <style>{`
        .dark-input:-webkit-autofill,
        .dark-input:-webkit-autofill:hover,
        .dark-input:-webkit-autofill:focus {
          -webkit-text-fill-color: #fff;
          transition: background-color 5000s ease-in-out 0s;
          box-shadow: 0 0 0px 1000px transparent inset !important;
          caret-color: #fff;
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <h2 className="text-[36px] md:text-[44px] leading-tight font-extrabold">Get In Touch</h2>
          <p className="text-white/80">
            Need more information? We will take approximately 3–5 working days to respond to your enquiry.
          </p>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off">
          {/* Type of enquiry */}
          <div className="md:col-span-2">
            <Label>* Type of enquiry</Label>
            <Select
              name="type"
              value={formData.type}
              onChange={onChange}
              options={ENQUIRY_TYPES}
              dark
            />
          </div>

          {/* Names */}
          <div>
            <Label>* First Name</Label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              required
              autoComplete="off"
              dark
            />
          </div>
          <div>
            <Label>* Last Name</Label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
              required
              autoComplete="off"
              dark
            />
          </div>

          {/* Email / Org */}
          <div>
            <Label>* Email Address</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              required
              autoComplete="off"
              dark
            />
          </div>
          <div>
            <Label>* Organisation</Label>
            <Input
              name="organisation"
              value={formData.organisation}
              onChange={onChange}
              required
              autoComplete="off"
              dark
            />
          </div>

          {/* Job / Phone */}
          <div>
            <Label>Job Title</Label>
            <Input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={onChange}
              autoComplete="off"
              dark
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              name="phone"
              inputMode="tel"
              value={formData.phone}
              onChange={onChange}
              autoComplete="off"
              dark
            />
          </div>

          {/* Country */}
          <div className="md:col-span-2 md:max-w-md">
            <Label>* Country</Label>
            <Select
              name="country"
              value={formData.country}
              onChange={onChange}
              required
              options={COUNTRIES}
              placeholder="-Select-"
              dark
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <Label>* Message</Label>
            <Textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={onChange}
              required
              autoComplete="off"
              dark
            />
          </div>

          {/* Policy + opt-in */}
          <div className="md:col-span-2 space-y-4">
            <label className="flex items-start gap-3 text-sm text-white/80">
              <input type="checkbox" required className="mt-1" />
              <span>
                By clicking on the submit button, you agree with the{" "}
                <a href="/privacy" className="underline">Privacy Policy</a>.
              </span>
            </label>

            <label className="flex items-start gap-3 text-sm text-white/80">
              <input
                type="checkbox"
                name="newsletter"
                className="mt-1"
                checked={formData.newsletter}
                onChange={onChange}
              />
              <span>Subscribe me to the latest updates on events, news and thought leadership from PlanetX.</span>
            </label>
          </div>

          {/* Status */}
          {status === "error" && (
            <div className="md:col-span-2 rounded-md bg-rose-500/10 border border-rose-400/40 text-rose-200 px-4 py-3">
              {error}
            </div>
          )}
          {status === "success" && (
            <div className="md:col-span-2 rounded-md bg-emerald-500/10 border border-emerald-400/40 text-emerald-200 px-4 py-3">
              Thanks! We’ve received your submission.
            </div>
          )}

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center rounded-md bg-white text-black px-6 py-2 font-semibold hover:bg-white/90 disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});

/* --------------------------------- atoms ---------------------------------- */
function Label({ children }) {
  return <div className="text-sm mb-2 text-white/80">{children}</div>;
}

function Input({ dark, className = "", ...props }) {
  return (
    <input
      {...props}
      className={
        (dark
          ? "dark-input w-full rounded-none bg-transparent border-b border-white/30 focus:border-white outline-none text-white placeholder-white/40 py-2"
          : "w-full rounded-md border border-gray-300 px-3 py-2 ") + className
      }
    />
  );
}

function Textarea({ dark, className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={
        (dark
          ? "dark-input w-full rounded-none bg-transparent border-b border-white/30 focus:border-white outline-none text-white placeholder-white/40 py-2"
          : "w-full rounded-md border border-gray-300 px-3 py-2 ") + className
      }
    />
  );
}

function Select({ options = [], placeholder, dark, className = "", ...props }) {
  return (
    <div className={"relative " + className}>
      <select
        {...props}
        className={
          (dark
            ? "dark-input w-full appearance-none bg-transparent border-b border-white/30 focus:border-white text-white outline-none py-2 pr-8"
            : "w-full appearance-none rounded-md border border-gray-300 px-3 py-2 ")
        }
      >
        {placeholder && (
          <option value="" disabled className={dark ? "bg-[#1f2021]" : ""}>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt} className={dark ? "bg-[#1f2021]" : ""}>
            {opt}
          </option>
        ))}
      </select>
      {/* chevron */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
