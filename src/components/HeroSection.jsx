import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap } from 'lucide-react';

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.3);
    y.set(my * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold tracking-wide text-black transition-transform duration-300 focus:outline-none"
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CCFF00] via-[#FF1E9A] to-[#1EA7FF] opacity-90 blur-[2px]"></span>
      <span className="absolute inset-[2px] rounded-2xl bg-[#0a0a0a]"></span>
      <span className="relative z-10 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-[#CCFF00] via-[#FF1E9A] to-[#1EA7FF]">
        {children}
      </span>
    </motion.button>
  );
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  // Parallax for foreground shards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const onMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    mouseX.set(px);
    mouseY.set(py);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
    >
      {/* Background gradient waves */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 -top-20 h-[50vh] w-[50vh] rounded-full bg-[#FF1E9A]/20 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 h-[60vh] w-[60vh] rounded-full bg-[#1EA7FF]/20 blur-[140px]"></div>
        <div className="absolute left-1/2 top-1/3 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full bg-[#CCFF00]/10 blur-[110px]"></div>
      </div>

      {/* Mid-layer Spline scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground neon shards */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="pointer-events-none absolute inset-0" aria-hidden
      >
        <div className="absolute left-[8%] top-[20%] h-40 w-40 rotate-12 rounded-[2rem] bg-gradient-to-b from-[#CCFF00]/60 to-transparent blur-2xl opacity-40"></div>
        <div className="absolute right-[12%] top-[28%] h-56 w-56 -rotate-6 rounded-[2rem] bg-gradient-to-b from-[#FF1E9A]/60 to-transparent blur-2xl opacity-40"></div>
        <div className="absolute left-[30%] bottom-[10%] h-52 w-52 rotate-3 rounded-[2rem] bg-gradient-to-b from-[#1EA7FF]/60 to-transparent blur-2xl opacity-40"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="pointer-events-none absolute -inset-x-8 -top-10 mx-auto h-24 w-[85vw] max-w-4xl rounded-full bg-gradient-to-r from-[#CCFF00]/20 via-[#FF1E9A]/20 to-[#1EA7FF]/20 blur-3xl"></span>
          <h1 className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text font-black leading-[0.9] text-transparent" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <span className="block text-[10vw] leading-none md:text-8xl">DRIP SO VIOLENT</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            Your AI stylist that bullies your closet into evolution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Rocket className="h-5 w-5" /> Start Styling
            </MagneticButton>
            <a
              href="#gallery"
              className="relative inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-white/80 transition-colors hover:border-white/20 hover:text-white"
            >
              <Zap className="h-5 w-5 text-[#CCFF00]" /> See the Drip
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient overlay so text stays readable over Spline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
