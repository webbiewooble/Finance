import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Percent } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100">
              <Zap className="w-4 h-4" />
              Instant Approval Process
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Empowering Your <br className="hidden md:block" />
              <span className="text-blue-700">
                Financial Future
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience seamless borrowing with Thakan Finance. We offer tailored loan solutions with competitive interest rates and flexible repayment options.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-3.5 rounded font-medium hover:bg-blue-800 transition-colors">
                Apply for a Loan
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#emi-calculator" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                Calculate EMI
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <Percent className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">Low Interest</p>
                  <p className="text-sm text-slate-500">Starting at 9.9%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">Secure & Safe</p>
                  <p className="text-sm text-slate-500">100% Encrypted</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative rounded overflow-hidden aspect-[4/3] shadow-lg border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Happy family planning finances" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded p-4 shadow-lg flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Loan Approved</p>
                  <p className="font-bold text-slate-900 text-lg">₹5,00,000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
