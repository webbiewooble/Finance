import { Landmark, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-700 p-2 rounded">
                <Landmark className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Thakan Finance
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering your dreams with transparent, reliable, and accessible financial solutions tailored for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Personal Loan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home Loan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Vehicle Loan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Education Loan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about-us" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#emi-calculator" className="text-slate-400 hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Disclaimers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Thakan Finance. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <span>ISO 9001:2015 Certified</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Made with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
