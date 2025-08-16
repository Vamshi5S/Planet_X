// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage, { Header, SearchResults } from "./components/HomePage";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
import Ai from "./components/capabilities-offers/Ai";
import AiDelivered from "./components/capabilities-offers/AiDelivered";
import CloudInfrastructure from "./components/capabilities-offers/CloudInfrastructure";
import DigitalApps from "./components/capabilities-offers/DigitalApps";
import TestingServices from "./components/capabilities-offers/TestingServices";
import Industries from "./components/industries/Industries";
import BankingFinancialServices from "./components/industries/BankingFinancialServices"; 
import HealthcareLifeSciences from "./components/industries/HealthcareLifeSciences";
import HighTech from "./components/industries/HighTech";
import InsuranceTechnologyServices from "./components/industries/InsuranceTechnologyServices";
import RetailConsumerGoods from "./components/industries/RetailConsumerGoods";
import TravelTransportation from "./components/industries/TravelTransportation";
import InsightsPage from "./components/InsightsPage";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  useEffect(() => { AOS.init({ duration: 800, easing: "ease-out", once: true }); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/capabilities" element={<Capabilities />} />
  <Route path="/insights" element={<InsightsPage />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/contact-us" element={<ContactUs />} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/capabilities/artificial-intelligence" element={<Ai />} />
  <Route path="/capabilities/ai-delivered" element={<AiDelivered />} />
  <Route path="/capabilities/cloud-infrastructure" element={<CloudInfrastructure />} />
  <Route path="/capabilities/digital-apps" element={<DigitalApps />} />
  <Route path="/capabilities/testing" element={<TestingServices />} />

  <Route path="/industries" element={<Industries />} />
  <Route
    path="/industries/banking-financial-services"
    element={<BankingFinancialServices />}
  />
  <Route
    path="/industries/healthcare-life-sciences"
    element={<HealthcareLifeSciences />}
  />
  <Route path="/industries/high-tech" element={<HighTech />} />
  <Route
  path="/industries/insurance-technology-services"
  element={<InsuranceTechnologyServices />}
/>
<Route
    path="/industries/retail-consumer-goods"
    element={<RetailConsumerGoods />}
  />
  <Route
  path="/industries/travel-transportation-logistics-hospitality"
  element={<TravelTransportation />}
/>
</Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppShell />
    </>
  );
}
