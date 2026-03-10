import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { Check, Dumbbell, Shield, Zap } from 'lucide-react';
import { useAppContext } from '@/src/context/AppContext';

export default function CoursePurchasePage() {
  const navigate = useNavigate();
  const { hasPurchased } = useAppContext();

  if (hasPurchased) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-600/30">
      {/* Navbar */}
      <nav className="w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-red-600" />
            <span className="font-bold text-xl tracking-tight">STRIKING MASTERY</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">Logged in</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Unlock Your Full Potential
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Get instant access to the complete striking curriculum. Learn at your own pace with high-quality video breakdowns.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-zinc-800 text-center">
            <h2 className="text-2xl font-bold mb-2">Full Course Access</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl font-extrabold">$99</span>
              <span className="text-zinc-400">/ lifetime</span>
            </div>
            <Link to="/checkout">
              <Button size="lg" className="w-full h-14 text-lg font-bold">
                Unlock Full Course
              </Button>
            </Link>
            <p className="text-sm text-zinc-500 mt-4">One-time payment. No hidden fees.</p>
          </div>
          
          <div className="p-8 bg-zinc-900/50">
            <h3 className="font-semibold mb-6 text-lg">What's included:</h3>
            <ul className="space-y-4">
              {[
                "Over 50+ HD Video Lessons",
                "Fundamentals & Advanced Techniques",
                "Clinch Work & 8 Limbs Mastery",
                "Downloadable Training Schedules",
                "Access to Private Community",
                "Direct Feedback from Coach Marcus"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
