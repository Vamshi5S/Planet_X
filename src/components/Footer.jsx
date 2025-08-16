// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-[#0d1117] border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          
          {/* Left side */}
          <div>
            <h3 className="text-white text-lg font-semibold">PlanetX</h3>
            <p className="text-gray-400 text-sm">Cape Girardeau, MO</p>
          </div>
  
          {/* Center */}
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">📧 vamshis954@gmail.com</p>
          </div>
  
          {/* Right side */}
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PlanetX. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  