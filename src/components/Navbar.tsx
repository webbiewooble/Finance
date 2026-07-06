import { motion } from 'motion/react';
import { Landmark, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 p-2 rounded">
              <Landmark className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Thakan Finance
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Services', 'EMI Calculator', 'About Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate-600 hover:text-blue-700 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-700 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
              Apply Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-xl"
        >
          {['Home', 'Services', 'EMI Calculator', 'About Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 font-medium hover:text-blue-700"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-blue-700 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
            Apply Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
