import HeroSection from './components/HeroSection';
import ParallaxSection from './components/ParallaxSection';
import FeaturesGrid from './components/FeaturesGrid';
import PricingShowcase from './components/PricingShowcase';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-[#CCFF00]/40 selection:text-white">
      <HeroSection />
      <ParallaxSection />
      <FeaturesGrid />
      <PricingShowcase />
      <footer className="border-t border-white/10 bg-black py-12 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-3 text-xs tracking-widest text-zinc-500">DRIPME.AI</div>
          <div>
            Made for vibes only. No logic. No backend. Just premium cinematic UI.
          </div>
        </div>
      </footer>
    </div>
  );
}
