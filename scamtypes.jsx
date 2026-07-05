import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Phone, Mail, Globe, CreditCard, Heart, Wrench, Award, ShieldAlert } from "lucide-react";
import BackButton from "@/components/BackButton";

const SCAM_TYPES = [
  { icon: Phone, title: "Phone/SMS Scams", desc: "Fake calls or texts claiming to be from banks, government agencies...", color: "text-red-500", bg: "bg-red-500/10" },
  { icon: Mail, title: "Phishing Emails", desc: "Emails disguised as legitimate companies asking you to click links...", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Globe, title: "Fake Websites & URLs", desc: "Fraudulent websites that mimic real ones to trick you...", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: CreditCard, title: "Financial Fraud", desc: "Investment scams, lottery frauds, and fake loan offers...", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Heart, title: "Romance Scams", desc: "Scammers build emotional relationships online to manipulate victims...", color: "text-pink-500", bg: "bg-pink-500/10" },
  { icon: Wrench, title: "Tech Support Scams", desc: "Fake tech support calls or pop-ups claiming your device is infected...", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Award, title: "Job/Prize Scams", desc: "Fake job offers or prize notifications requiring upfront fees...", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: ShieldAlert, title: "Identity Theft", desc: "Criminals steal your personal information to open accounts...", color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

export default function ScamTypes() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <BackButton />
      <div className="max-w-5xl mx-auto px-4 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Types of Scams</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Know your enemy. Understanding different scam types is the first step to protecting yourself.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {SCAM_TYPES.map((scam, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-[2.5/1] overflow-hidden">
                <img src={scam.img} alt={scam.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${scam.bg} flex items-center justify-center`}>
                    <scam.icon className={`w-5 h-5 ${scam.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{scam.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{scam.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}