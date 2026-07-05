import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Eye, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import SettingsMenu from "@/components/SettingsMenu";

const LOGO_URL = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/a76f73fd7_generated_image.png";
const SCAM_IMG_1 = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/67b533211_generated_image.png";
const SCAM_IMG_2 = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/1d2e3d4b6_generated_image.png";

const TECH_STACK = [
  "React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3",
  "Node.js", "Base44 AI", "Framer Motion", "Lucide Icons",
  "InvokeLLM", "Web Speech API"
];

const PURPOSE_POINTS = [
  { icon: Shield, title: "Real-Time Scam Detection", desc: "Instantly analyzes messages, emails, URLs, and documents using advanced AI to identify potential fraud and phishing attempts." },
  { icon: Eye, title: "Multi-Format Analysis", desc: "Supports SMS, emails, URLs, documents, and images — providing comprehensive protection across all digital communication channels." },
  { icon: AlertTriangle, title: "Actionable Safety Guidance", desc: "Provides clear warnings, risk levels, and step-by-step actions to take when a scam is detected, keeping you protected." },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SettingsMenu />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-block mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden mx-auto shadow-xl animate-pulse-glow">
              <img src={LOGO_URL} alt="Vigil Netra" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Vigil Netra</span>
          </motion.h1>
          <motion.p {...fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Your AI-powered guardian against digital scams. Detect fraud in messages, emails, URLs, documents, and images — instantly.
          </motion.p>
          <motion.button {...fadeUp} onClick={() => navigate("/select")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Sparkles className="w-5 h-5" /> Start
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
      {/* ... Purpose, Dev Kit, Real Scam Images, Quick Links sections ... */}
    </div>
  );
}