import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Dumbbell, Lock, CreditCard } from 'lucide-react';
import { useAppContext } from '@/src/context/AppContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { purchase } = useAppContext();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      purchase();
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-600/30">
      <nav className="w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-red-600" />
            <span className="font-bold text-xl tracking-tight">STRIKING MASTERY</span>
          </Link>
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Lock className="w-4 h-4" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Payment Form */}
          <div className="lg:col-span-2 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="pl-10" required />
                    <CreditCard className="absolute left-3 top-2.5 w-5 h-5 text-zinc-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg font-bold"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Pay $99.00'}
              </Button>
              
              <p className="text-center text-xs text-zinc-500 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Payments are secure and encrypted.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Full Course Access</span>
              <span className="font-medium">$99.00</span>
            </div>
            
            <div className="border-t border-zinc-800 my-4"></div>
            
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>$99.00</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
