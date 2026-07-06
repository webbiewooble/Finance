import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { IndianRupee } from 'lucide-react';

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState<number>(500000);
  const [rate, setRate] = useState<number>(10.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const calculateEMI = (p: number, r: number, t: number) => {
    const monthlyRate = r / 12 / 100;
    const months = t * 12;
    if (monthlyRate === 0) return p / months;
    
    const emi =
      (p * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    
    return Math.round(emi);
  };

  const { emi, totalAmount, totalInterest } = useMemo(() => {
    const emiValue = calculateEMI(principal, rate, tenureYears);
    const total = emiValue * (tenureYears * 12);
    const interest = total - principal;
    
    return {
      emi: emiValue,
      totalAmount: total,
      totalInterest: interest,
    };
  }, [principal, rate, tenureYears]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="emi-calculator" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            EMI Calculator
          </h2>
          <p className="text-lg text-slate-600">
            Plan your loan repayment with our easy-to-use EMI calculator.
          </p>
        </div>

        <div className="bg-white rounded shadow-md overflow-hidden border border-slate-200">
          <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Controls */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="space-y-10">
                {/* Principal Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold text-slate-700">Loan Amount</label>
                    <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded font-bold flex items-center">
                      {formatCurrency(principal)}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                    <span>50K</span>
                    <span>1Cr</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold text-slate-700">Interest Rate (p.a)</label>
                    <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded font-bold">
                      {rate}%
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                    <span>5%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold text-slate-700">Loan Tenure</label>
                    <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded font-bold">
                      {tenureYears} {tenureYears === 1 ? 'Year' : 'Years'}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                    <span>1 Yr</span>
                    <span>30 Yrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 bg-blue-900 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="relative">
                <div className="mb-8">
                  <p className="text-slate-300 text-sm font-medium mb-2 uppercase tracking-wider">Monthly EMI</p>
                  <h3 className="text-5xl font-bold text-white flex items-center">
                    <IndianRupee className="w-10 h-10 mr-1 text-blue-300" />
                    {emi.toLocaleString('en-IN')}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-blue-800 pb-4">
                    <div>
                      <p className="text-slate-300 text-sm mb-1">Principal Amount</p>
                      <p className="font-semibold text-white text-lg">{formatCurrency(principal)}</p>
                    </div>
                    <div className="w-1/3 h-1.5 bg-blue-950 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-blue-800 pb-4">
                    <div>
                      <p className="text-slate-300 text-sm mb-1">Total Interest</p>
                      <p className="font-semibold text-white text-lg">{formatCurrency(totalInterest)}</p>
                    </div>
                    <div className="w-1/3 h-1.5 bg-blue-950 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400" style={{ width: `${(totalInterest / totalAmount) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <p className="text-slate-300 text-sm mb-1">Total Payable</p>
                      <p className="font-bold text-blue-200 text-xl">{formatCurrency(totalAmount)}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 transition-colors">
                  Apply for this Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
