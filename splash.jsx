import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/a76f73fd7_generated_image.png";

export default function Splash() {
  const [phase, setPhase] = useState(0);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    // Play pleasant ambient sound using Web Audio API
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const playNote = (freq, start, dur) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, ctx.currentTime + start);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + start + 0.1);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + start + dur);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + dur);
      };
      [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => playNote(f, i * 0.4, 1.5));
      audioRef.current = ctx;
    } catch (e) {}

    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2000);
    const t3 = setTimeout(() => setPhase(3), 3500);
    const t4 = setTimeout(() => navigate("/home"), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: [null, Math.random() * window.innerHeight] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {phase >= 0 && (
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }} className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden animate-pulse-glow">
                <img src={LOGO_URL} alt="Vigil Netra" className="w-full h-full object-cover" />
              </div>
              {phase >= 1 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.5, 1] }}
                  className="absolute -inset-4 rounded-full border-2 border-cyan-400/30" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {phase >= 1 && (
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Vigil Netra
          </motion.h1>
        )}
        {phase >= 2 && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-blue-300/70 text-lg tracking-widest uppercase">
            AI-Powered Scam Detection
          </motion.p>
        )}
        {phase >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 flex gap-1">
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}