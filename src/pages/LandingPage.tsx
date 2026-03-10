import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Dumbbell, Shield, Zap, Target, Instagram, Twitter, Youtube } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-600/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-red-600" />
            <span className="font-bold text-xl tracking-tight">STRIKING MASTERY</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
            </Link>
            <Link to="/auth">
              <Button>Try Our Course</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/boxing/1920/1080" 
            alt="Boxing Training" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            MASTER THE ART OF <span className="text-red-600">STRIKING</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Elevate your combat skills with world-class coaching. From fundamentals to advanced combinations, unlock your true potential in the ring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14">
                Try Our Course
              </Button>
            </Link>
            <a href="#contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/coach/800/1000" 
                alt="Coach Profile" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Coach</h2>
              <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
                With over 15 years of professional fighting experience and a proven track record of coaching champions, Coach Marcus brings elite-level striking techniques to everyone. Whether you're a beginner looking to get in shape or a pro preparing for a title fight, this curriculum is built for results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span className="text-zinc-200">Former World Champion</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-red-600" />
                  <span className="text-zinc-200">Coached 10+ Pro Fighters</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-red-600" />
                  <span className="text-zinc-200">Master of Muay Thai & Boxing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A comprehensive curriculum designed to build your striking from the ground up.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Fundamentals", desc: "Stance, footwork, and basic punches to build a solid foundation." },
              { title: "Advanced Techniques", desc: "Head movement, counters, and angles to outsmart your opponent." },
              { title: "The Clinch & 8 Limbs", desc: "Master elbows, knees, and dominant clinch positions." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-600/50 transition-colors">
                <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                  <Dumbbell className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-zinc-400">Have questions about the course or private coaching? Send us a message.</p>
          </div>
          
          <form className="space-y-6 bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea 
                id="message" 
                rows={4}
                className="flex w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                placeholder="How can we help you?"
              />
            </div>
            <Button className="w-full h-12 text-lg">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Instagram className="w-6 h-6" /></a>
          <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Youtube className="w-6 h-6" /></a>
        </div>
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Striking Mastery. All rights reserved.</p>
      </footer>
    </div>
  );
}
