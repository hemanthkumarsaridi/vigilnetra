import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload as UploadIcon, FileText, X, Sparkles, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import BackButton from "@/components/BackButton";

const JULIE_IMG = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/6485c8dbe_generated_image.png";

const TYPE_LABELS = {
  sms: "SMS Message", email: "Email", url: "URL / Website Link",
  document: "Document", image: "Image", whatsapp: "WhatsApp Message",
  call: "Call Script", other: "Content",
};

export default function Upload() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type") || "other";
  const label = TYPE_LABELS[type] || "Content";
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const needsTextInput = ["sms", "email", "url", "whatsapp", "call", "other"].includes(type);
  const needsFileInput = ["document", "image", "email"].includes(type);

  const handleAnalyze = async () => {
    if (!text.trim() && !file) return;
    setAnalyzing(true);
    try {
      let fileUrl = null;
      if (file) {
        const res = await base44.integrations.Core.UploadFile({ file });
        fileUrl = res.file_url;
      }
      navigate(`/analysis?type=${type}`, { state: { text, fileUrl, type } });
    } catch (err) {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <BackButton />
      <div className="max-w-2xl mx-auto px-4 pt-20">
        {/* Text area + file upload + Start Analyze button */}
        <button onClick={handleAnalyze} disabled={(!text.trim() && !file) || analyzing}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg disabled:opacity-50 transition-all">
          {analyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
          {analyzing ? "Uploading..." : "Start Analyze"}
        </button>
      </div>
    </div>
  );
}