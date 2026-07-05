import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Lock, Search, ShieldCheck, Smartphone, Wifi, UserCheck, Bell } from "lucide-react";
import BackButton from "@/components/BackButton";

const TIPS = [
  { icon: Lock, title: "Use Strong Passwords", desc: "Create unique, complex passwords. Use a password manager and enable 2FA.", color: "text-blue-500" },
  { icon: Search, title: "Verify Before You Trust", desc: "Always verify the sender's identity before clicking links or sharing information.", color: "text-cyan-500" },
  { icon: ShieldCheck, title: "Keep Software Updated", desc: "Regularly update your OS, browser, and apps. Security patches fix vulnerabilities.", color: "text-green-500" },
  { icon: Smartphone, title: "Be Careful on Mobile", desc: "Don't install apps from unknown sources. Be cautious of permissions.", color: "text-purple-500" },
  { icon: Wifi, title: "Secure Your Network", desc: "Use a VPN on public Wi-Fi. Keep home router firmware updated.", color: "text-orange-500" },
  { icon: UserCheck, title: "Protect Personal Info", desc: "Never share passwords, OTPs, or financial details over phone or email.", color: "text-pink-500" },
  { icon: Bell, title: "Report Suspicious Activity", desc: "Report scam attempts to local authorities and the platform.", color: "text-amber-500" },
];

const TECHNOLOGIES = [
  { name: "Artificial Intelligence", desc: "Advanced LLM models analyze content patterns to detect fraud" },
  { name: "Natural Language Processing", desc: "Understanding context and intent behind text messages" },
  { name: "Image Recognition", desc: "Computer vision to analyze images for scam indicators" },
  { name: "Real-Time Analysis", desc: "Instant processing and threat assessment of any content" },
  { name: "Pattern Matching", desc: "Database of known scam patterns for quick identification" },
  { name: "Behavioral Analysis", desc: "Detecting unusual patterns that indicate fraudulent intent" },
];

export default function TechTips() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <BackButton />
      <div className="max-w-5xl mx-auto px-4 pt-20">
        {/* Images Section, Technologies grid, Safety Tips list */}
      </div>
    </div>
  );
}