import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.03]);

  return (
    <section ref={ref} id="gallery" className="relative w-full overflow-hidden bg-[#0a0a0a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#1EA7FF]/20 blur-[80px]"></div>
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#FF1E9A]/20 blur-[90px]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">3D Showcase</h2>
          <p className="max-w-md text-zinc-400">Floating hoodies, neon rims, cinematic shadows. Zero logic, all vibes.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[0,1,2,3,4,5].map((i) => (
            <motion.div
              key={i}
              style={{ y: i % 2 ? y1 : y2, scale }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 p-[1px] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#CCFF00]/10 via-transparent to-[#1EA7FF]/10 opacity-40 blur-xl"></div>
              <div className="relative z-10 h-full w-full rounded-3xl bg-[#111]/70 backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(204,255,0,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(30,167,255,0.12),transparent_60%)]"></div>
                <div className="absolute -right-6 top-10 h-24 w-24 rotate-12 rounded-2xl bg-gradient-to-br from-[#FF1E9A] to-transparent opacity-60 blur-2xl"></div>
                <div className="absolute left-6 bottom-8 h-20 w-20 -rotate-6 rounded-2xl bg-gradient-to-br from-[#CCFF00] to-transparent opacity-60 blur-2xl"></div>
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#CCFF00]"></span>
                      HOODIE-{i+1}
                    </div>
                    <div className="mt-3 text-xl font-bold">Neon Mesh {i+1}</div>
                  </div>
                  <div className="rounded-xl bg-white/5 px-2 py-1 text-xs text-zinc-300 backdrop-blur">
                    3D CARD
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
