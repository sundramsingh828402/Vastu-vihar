import React, { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';

interface EmiCalculatorProps {
  initialPrice?: number;
  className?: string;
  isCompact?: boolean;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({
  initialPrice = 5000000, // 50 Lakh default
  className = '',
  isCompact = false,
}) => {
  // Loan amount defaults to 80% of property cost
  const [loanAmount, setLoanAmount] = useState<number>(Math.round(initialPrice * 0.8));
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% p.a. standard home loan rate in India
  const [tenureYears, setTenureYears] = useState<number>(20);

  // EMI calculation
  const { monthlyEmi, totalInterest, totalAmount } = useMemo(() => {
    const P = loanAmount;
    const annualR = interestRate;
    const N = tenureYears * 12;

    if (P <= 0 || annualR <= 0 || N <= 0) {
      return { monthlyEmi: 0, totalInterest: 0, totalAmount: 0 };
    }

    const r = annualR / 12 / 100;
    const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    const totalPayable = emi * N;
    const interest = totalPayable - P;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(interest),
      totalAmount: Math.round(totalPayable),
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const principalRatio = totalAmount > 0 ? (loanAmount / totalAmount) * 100 : 50;

  return (
    <div className={`bg-[#FFFFFF] border border-stone-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded bg-[#0E2B63]/10 flex items-center justify-center text-[#0E2B63]">
          <Calculator className="w-4 h-4 text-[#E52424]" />
        </div>
        <div>
          <h4 className="text-base font-serif-luxury font-bold text-[#0E2B63]">
            Home Loan & EMI Estimator
          </h4>
          <p className="text-xs text-slate-500">
            Calculate your estimated monthly installment with leading Indian banks
          </p>
        </div>
      </div>

      <div className={`grid ${isCompact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
        {/* Sliders Control */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-[#0E2B63] mb-1">
              <span>Loan Amount</span>
              <span className="font-bold text-[#0E2B63] tabular-nums">
                {formatINR(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="500000"
              max="15000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#E52424] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
              <span>₹5 Lakh</span>
              <span>₹1.5 Crore</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-[#0E2B63] mb-1">
              <span>Interest Rate (% per annum)</span>
              <span className="font-bold text-[#0E2B63] tabular-nums">
                {interestRate.toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="7.0"
              max="14.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#E52424] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
              <span>7.0% (Prime)</span>
              <span>14.0%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-[#0E2B63] mb-1">
              <span>Loan Tenure (Years)</span>
              <span className="font-bold text-[#0E2B63] tabular-nums">
                {tenureYears} Years ({tenureYears * 12} Mos)
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#E52424] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
              <span>5 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Output Summary Card */}
        <div className="bg-slate-50 border border-slate-200 rounded p-4 flex flex-col justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
              Estimated Monthly EMI
            </span>
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0E2B63] tabular-nums my-1">
              {formatINR(monthlyEmi)}
              <span className="text-xs font-normal text-slate-500 ml-1">/ month</span>
            </div>

            {/* Proportion Bar */}
            <div className="mt-4 mb-2">
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${principalRatio}%` }}
                  className="bg-[#0E2B63] h-full"
                  title="Principal"
                />
                <div
                  style={{ width: `${100 - principalRatio}%` }}
                  className="bg-[#29A8E0] h-full"
                  title="Interest"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                <span className="flex items-center gap-1 font-semibold text-[#0E2B63]">
                  <span className="w-2 h-2 rounded-full bg-[#0E2B63]" />
                  Principal: {principalRatio.toFixed(0)}%
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#29A8E0]">
                  <span className="w-2 h-2 rounded-full bg-[#29A8E0]" />
                  Interest: {(100 - principalRatio).toFixed(0)}%
                </span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3 mt-3">
              <div className="flex justify-between">
                <span>Total Principal:</span>
                <span className="font-medium text-stone-900 tabular-nums">{formatINR(loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest:</span>
                <span className="font-medium text-stone-900 tabular-nums">{formatINR(totalInterest)}</span>
              </div>
              <div className="flex justify-between font-semibold text-stone-900 pt-1 border-t border-stone-200">
                <span>Total Amount Payable:</span>
                <span className="tabular-nums">{formatINR(totalAmount)}</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-stone-400 mt-4 italic">
            *Subject to individual bank sanction criteria, CIBIL score, and statutory charges.
          </div>
        </div>
      </div>
    </div>
  );
};
