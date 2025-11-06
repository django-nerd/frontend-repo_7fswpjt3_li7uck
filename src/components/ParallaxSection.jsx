import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yFg = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.03]);

  return (
    <section ref={ref} id="gallery" className="relative w-full overflow-hidden bg-[#020202] py-28 text-white">
      {/* Background neon wireframe grid */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,167,255,0.12),transparent_60%)]"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header with cinematic intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-14"
        >
          <span className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rounded-full bg-gradient-to-r from-[#CCFF00]/20 via-[#FF1E9A]/20 to-[#1EA7FF]/20 blur-3xl"></span>
          <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-6xl">3D Showcase</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">Floating hooks, neon rims, cinematic shadows. Zero logic, all dopamine.</p>
        </motion.div>

        {/* Mid-layer floating stickers */}
        <motion.div style={{ y: yMid }} className="pointer-events-none absolute left-10 top-24" aria-hidden>
          <div className="h-16 w-16 rotate-12 rounded-xl bg-gradient-to-br from-[#FF1E9A] to-transparent opacity-70 blur-xl" />
        </motion.div>
        <motion.div style={{ y: yMid }} className="pointer-events-none absolute right-12 bottom-20" aria-hidden>
          <div className="h-20 w-20 -rotate-12 rounded-xl bg-gradient-to-br from-[#1EA7FF] to-transparent opacity-70 blur-xl" />
        </motion.div>

        {/* Grid of glass 3D cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {[0,1,2,3,4,5].map((i) => (
            <motion.div
              key={i}
              style={{ y: yFg, scale }}
              whileHover={{ y: -12, rotateX: 5, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl p-[1.5px] shadow-[0_30px_120px_-30px_rgba(0,0,0,0.75)]"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))' }}
            >
              <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-[#0b0b0b]/80 backdrop-blur-xl">
                {/* Edge neon */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,rgba(204,255,0,0.08),transparent_40%),linear-gradient(240deg,rgba(30,167,255,0.08),transparent_40%)]" />
                {/* Fake 3D subject lights */}
                <div className="absolute -right-10 top-6 h-32 w-32 rotate-12 rounded-2xl bg-[#FF1E9A]/40 blur-3xl" />
                <div className="absolute left-6 bottom-10 h-28 w-28 -rotate-6 rounded-2xl bg-[#CCFF00]/40 blur-3xl" />

                {/* Labels */}
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#CCFF00]" />
                      HOODIE-{i+1}
                    </div>
                    <div className="mt-3 text-xl font-bold">Neon Mesh {i+1}</div>
                  </div>
                  <div className="rounded-xl bg-white/5 px-2 py-1 text-xs text-zinc-300 backdrop-blur">
                    3D CARD
                  </div>
                </div>
              </div>
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 40px 120px -20px rgba(204,255,0,0.25)' }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient for transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
