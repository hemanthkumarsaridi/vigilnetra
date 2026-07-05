import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Globe, FileText, Image, MessageCircle, Phone, FileSearch } from "lucide-react";
import BackButton from "@/components/BackButton";

const JULIE_IMG = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/6485c8dbe_generated_image.png";

const INPUT_TYPES = [
  { id: "sms", label: "SMS", desc: "Text messages", icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
  { id: "email", label: "Email", desc: "Email content", icon: Mail, color: "from-purple-500 to-pink-500" },
  { id: "url", label: "URL", desc: "Website links", icon: Globe, color: "from-green-500 to-emerald-500" },
  { id: "document", label: "Document", desc: "PDF, Word, etc.", icon: FileText, color: "from-orange-500 to-amber-500" },
  { id: "image", label: "Image", desc: "Photos & screenshots", icon: Image, color: "from-pink-500 to-rose-500" },
  { id: "whatsapp", label: "WhatsApp", desc: "Chat messages", icon: MessageCircle, color: "from-green-600 to-green-400" },
  { id: "call", label: "Call Script", desc: "Phone call transcript", icon: Phone, color: "from-indigo-500 to-blue-500" },
  { id: "other", label: "Other", desc: "Any other content", icon: FileSearch, color: "from-slate-500 to-slate-400" },
];

export default function Selection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background pb-20">
      <BackButton />
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <motion.img src={JULIE_IMG} alt="Julie" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-primary/30"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">What would you like to analyze?</h1>
          <p className="text-muted-foreground">Select the type of content you want to check for scams</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INPUT_TYPES.map((type, i) => (
            <motion.button key={type.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }} onClick={() => navigate(`/upload?type=${type.id}`)}
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                <type.icon className="w-7 h-7 text-white" />
              </div>
              <span className="font-semibold text-sm">{type.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{type.desc}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}