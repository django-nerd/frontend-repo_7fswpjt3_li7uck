import { motion } from 'framer-motion';
import { Crown, Diamond, Flame } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Crown,
    accent: '#1EA7FF',
    features: ['Basic vibes', '1 canvas', 'Community drip'],
  },
  {
    name: 'Regular',
    icon: Diamond,
    accent: '#CCFF00',
    features: ['All visuals', 'Unlimited canvases', 'Priority glow'],
  },
  {
    name: 'Violent+',
    icon: Flame,
    accent: '#FF1E9A',
    features: ['Max neon', '3D slabs pro', 'VIP taste shield'],
  },
];

export default function PricingShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-[#FF1E9A]/20 blur-[100px]"></div>
        <div className="absolute right-20 bottom-10 h-56 w-56 rounded-full bg-[#CCFF00]/20 blur-[120px]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Pricing. Like metallic slabs.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">Three tiers with neon rim lights. Toggle is visual only.</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(({ name, icon: Icon, features, accent }) => (
            <motion.div
              key={name}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative overflow-hidden rounded-3xl p-[1px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.2), 0 30px 80px -20px rgba(0,0,0,0.6)'
              }}
            >
              <div className="relative h-full rounded-3xl bg-[#111]/80 p-8 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-2xl opacity-60 blur-2xl" style={{ background: `radial-gradient(ellipse at center, ${accent}, transparent 60%)` }} />
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                    <Icon className="h-7 w-7" style={{ color: accent }} />
                  </div>
                  <div className="text-2xl font-bold">{name}</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10">
                  Choose {name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
