import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Wand2, SlidersHorizontal, Rows } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Chaotic Taste Engine', text: 'Unhinged recs with couture precision.', color: '#FF1E9A' },
  { icon: Wand2, title: '3D Fit Visuals', text: 'Float, tilt, glow. See the drip in space.', color: '#1EA7FF' },
  { icon: SlidersHorizontal, title: 'Style Controls', text: 'Sliders for attitude, spice, and audacity.', color: '#CCFF00' },
  { icon: Shield, title: 'Taste Shield', text: 'Blocks boring fits on sight.', color: '#F5F5F5' },
  { icon: Zap, title: 'Neon Speed', text: 'UI so fast it leaves light streaks.', color: '#FF1E9A' },
  { icon: Rows, title: 'Grid Flex', text: 'Cinematic layouts with parallax depth.', color: '#1EA7FF' },
];

export default function FeaturesGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/4 top-8 h-40 w-40 rounded-full bg-[#CCFF00]/20 blur-[80px]"></div>
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-[#1EA7FF]/20 blur-[100px]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Features, but make it 3D</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">Cards with depth, neon rims, and hover tilt. Pure presentation.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text, color }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-[1px]"
            >
              <div className="relative h-full w-full rounded-3xl bg-[#0f0f0f]/80 p-6 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-2xl opacity-60 blur-2xl" style={{ background: `radial-gradient(ellipse at center, ${color}, transparent 60%)` }} />
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                    <Icon className="h-7 w-7" style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{title}</div>
                    <p className="mt-1 text-sm text-zinc-400">{text}</p>
                  </div>
                </div>
                <div className="mt-8 h-32 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
