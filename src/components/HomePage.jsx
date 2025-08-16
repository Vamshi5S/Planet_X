// src/components/HomePage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";

/* ------------------------------ Header ------------------------------ */
export const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    [
      "text-[13px] tracking-wide font-semibold transition-colors",
      "hover:text-red-600",
      isActive ? "text-red-600" : "text-gray-700",
    ].join(" ");

  // "/" opens, "Esc" closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && !openSearch) {
        e.preventDefault();
        setOpenSearch(true);
      } else if (e.key === "Escape" && openSearch) {
        setOpenSearch(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSearch]);

  // autofocus input when search opens
  useEffect(() => {
    if (openSearch) inputRef.current?.focus();
  }, [openSearch]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim();
    if (!q) return;
    setOpenSearch(false);
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <header className="w-full border-b sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo - Left aligned */}
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-sm bg-red-600 text-white font-black">
              PX
            </span>
            <span className="text-xl font-extrabold leading-none">
              <span className="text-black">Planet</span>{" "}
              <span className="text-red-600">X</span>
            </span>
          </Link>

          {/* Nav + Search */}
          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-7">
              <NavLink to="/about" className={linkClass}>ABOUT US</NavLink>
              <NavLink to="/capabilities" className={linkClass}>CAPABILITIES</NavLink>
              <NavLink to="/industries" className={linkClass}>INDUSTRIES</NavLink>
              <NavLink to="/insights" className={linkClass}>INSIGHTS</NavLink>
              <NavLink to="/careers" className={linkClass}>CAREERS</NavLink>
              <NavLink to="/contact-us" className={linkClass}>CONTACT US</NavLink>
            </nav>

            {/* Search icon (opens overlay) */}
            <button
              type="button"
              aria-label="Open search (press /)"
              onClick={() => setOpenSearch(true)}
              className="ml-4 grid h-9 w-9 place-items-center rounded-full hover:bg-gray-100"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {openSearch && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <button
            aria-label="Close search"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenSearch(false)}
          />
          {/* Dialog */}
          <div className="relative z-[101] mx-auto mt-24 max-w-xl px-6">
            <form
              onSubmit={onSearchSubmit}
              className="rounded-xl bg-white shadow-xl ring-1 ring-gray-200 p-4"
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-500">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                <input
                  ref={inputRef}
                  name="q"
                  type="search"
                  placeholder="Search… then Enter (Esc to close)"
                  className="flex-1 outline-none text-[15px] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setOpenSearch(false)}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

/* ------------------------------ Home ------------------------------ */
export default function HomePage() {
  return (
    <main className="bg-white text-[#0b0b0b]">
      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden">
        <div className="relative h-[520px] md:h-[640px]">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/shoes.png')" }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 pt-16 md:pt-24">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider text-white bg-red-600 px-3 py-1 rounded-sm">
                RESEARCH REPORT
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-white/90 bg-black/40 px-3 py-1 rounded-sm">
                RETAIL
              </span>
            </div>

            <h1 className="mt-4 text-white text-[36px] leading-[1.1] md:text-[58px] md:leading-[1.05] font-extrabold max-w-3xl drop-shadow">
              Reimagining Retail Through{" "}
              <span className="block">Store of the Future</span>
            </h1>

            <p className="mt-4 text-white/90 max-w-2xl text-[16px] md:text-[18px]">
              Discover how global brands are using store intelligence to optimize
              operations, boost ROI, and deliver seamless customer journeys.
            </p>

            <Link
              to="/insights"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-white text-[#0b0b0b] px-5 py-3 font-semibold shadow-sm hover:bg-gray-100"
            >
              LEARN MORE
              <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= SCALE AT SPEED ======= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-14 md:py-20">
          <h2 className="text-[38px] md:text-[60px] font-extrabold leading-tight -tracking-[0.01em] text-center md:text-left">
            <span className="text-black">Scale at Speed</span>{" "}
            <span className="text-red-600">with PlanetX</span>
          </h2>
          <p className="mt-4 max-w-3xl text-[16px] md:text-[18px] text-gray-700 text-center md:text-left mx-auto md:mx-0">
            Thriving in the current dynamic landscape demands technological
            solutions that enable both transformative scale and unparalleled
            speed.
          </p>

          {/* Grid: image left / card right */}
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left image */}
            <div
              className="h-[280px] md:h-[360px] rounded-2xl bg-center bg-cover shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
              style={{ backgroundImage: "url('/th.png')" }}
            />
            {/* Right card */}
            <div className="rounded-2xl bg-black text-white p-7 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
              <span className="uppercase text-[11px] tracking-widest text-white/60">
                Scale at Speed
              </span>
              <h3 className="mt-2 text-2xl md:text-[28px] font-extrabold leading-snug">
                True Scalability, <br /> Agility, and Responsiveness
              </h3>
              <Link
                to="/capabilities"
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 border border-white/40 rounded hover:bg-white/10"
              >
                Know more
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======= RISE ======= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <div
              className="h-[280px] md:h-[360px] rounded-2xl overflow-hidden bg-center bg-cover shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: "url('/grp.png')" }}
            />
          </div>
          <div className="md:col-span-6">
            <h3 className="text-[34px] md:text-[40px] font-extrabold mb-3">RISE</h3>
            <p className="text-gray-700 leading-relaxed">
              At PlanetX, ‘Rise’ is our core brand pillar that goes beyond business. It
              underscores our entire organization’s culture and how we inspire our
              employees, stakeholders, and communities to uphold the three core tenets of
              this philosophy — Rise for an equal world, to be future-ready, and to
              create value.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-sm border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-50"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ======= Careers / Contact ======= */}
      <section className="bg-[#121212] text-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-12 items-center gap-12">
          <div className="md:col-span-5">
            <h4 className="text-[34px] md:text-[40px] font-extrabold">Careers</h4>
            <p className="mt-2 text-white/80">Gain a heritage. Leave a legacy.</p>
            <Link
              to="/careers"
              className="mt-6 inline-flex items-center justify-center h-12 px-7 rounded-sm border border-white/30 hover:bg-white hover:text-black font-semibold"
            >
              JOIN US
            </Link>
          </div>
          <div className="hidden md:block md:col-span-2">
            <div className="h-px w-full bg-white/10 md:h-40 md:w-px md:mx-auto" />
          </div>
          <div className="md:col-span-5">
            <h4 className="text-[34px] md:text-[40px] font-extrabold">Contact Us</h4>
            <p className="mt-2 text-white/80">What can we help you achieve.</p>
            <Link
              to="/contact-us"
              className="mt-6 inline-flex items-center justify-center h-12 px-7 rounded-sm border border-white/30 hover:bg-white hover:text-black font-semibold"
            >
              SPEAK WITH US
            </Link>
          </div>
        </div>
      </section>

      {/* ======= Footer ======= */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Planet X. All rights reserved.
      </footer>

      {/* Back to top */}
      <Link
        to="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-black text-white shadow-lg hover:bg-red-600"
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M12 5l7 7M12 5L5 12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </Link>
    </main>
  );
}

/* ------------------------ Simple Search Results ------------------------ */
// Add a route for this component in your router, e.g.:
// <Route path="/search" element={<SearchResults />} />
export function SearchResults() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  // Tiny in-memory index; replace with your API or larger index anytime
  const INDEX = useMemo(
    () => [
      { title: "About Us", path: "/about", text: "Who we are, mission, leadership", tags: ["about", "company", "mission"] },
      { title: "Capabilities", path: "/capabilities", text: "Engineering, cloud, data, AI services", tags: ["services", "capabilities"] },
      { title: "Industries", path: "/industries", text: "Retail, healthcare, finance and more", tags: ["verticals", "sectors"] },
      { title: "Insights", path: "/insights", text: "Research reports and thought leadership", tags: ["blog", "reports"] },
      { title: "Careers", path: "/careers", text: "Open roles, culture, and hiring", tags: ["jobs", "hiring"] },
      { title: "Contact Us", path: "/contact-us", text: "Talk to sales and support", tags: ["contact", "sales"] },
      { title: "Store of the Future", path: "/insights#store-of-the-future", text: "Reimagining retail through store intelligence", tags: ["retail", "report"] },
      { title: "Scale at Speed", path: "/capabilities#scale", text: "True scalability, agility, and responsiveness", tags: ["scale", "agility"] },
    ],
    []
  );

  const results = useMemo(() => {
    if (!q) return [];
    return INDEX.filter((item) => {
      const hay = (item.title + " " + item.text + " " + item.tags.join(" ")).toLowerCase();
      return q.split(/\s+/).every((term) => hay.includes(term));
    });
  }, [q, INDEX]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Search</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const q2 = new FormData(e.currentTarget).get("q")?.toString().trim();
          if (q2) window.location.assign(`/search?q=${encodeURIComponent(q2)}`);
        }}
        className="flex gap-2 mb-8"
      >
        <input
          name="q"
          defaultValue={q}
          placeholder="Search again…"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-red-600"
        />
        <button className="px-4 rounded-md bg-black text-white hover:bg-red-600">Search</button>
      </form>

      {!q && <p className="text-gray-600">Type a query to see results.</p>}

      {q && results.length === 0 && (
        <p className="text-gray-600">
          No results for <span className="font-semibold">“{q}”</span>.
        </p>
      )}

      <ul className="space-y-4">
        {results.map((r) => (
          <li key={r.path} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300">
            <Link to={r.path} className="text-lg font-semibold text-black hover:text-red-600">
              {r.title}
            </Link>
            <p className="text-gray-600 mt-1">{r.text}</p>
            <div className="mt-2 text-xs text-gray-500">#{r.tags.join("  #")}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
