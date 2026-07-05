import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle, BookOpen, TreePine, Loader2, RotateCcw, History, Flag } from "lucide-react";
import { base44 } from "@/api/base44Client";
import BackButton from "@/components/BackButton";

const JULIE_IMG = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/6485c8dbe_generated_image.png";

const RISK_CONFIG = {
  safe: { icon: ShieldCheck, color: "text-green-500", bg: "bg-green-500/10", label: "Safe", dance: "animate-dance-swing" },
  low: { icon: CheckCircle, color: "text-blue-500", bg: "bg-blue-500/10", label: "Low Risk", dance: "animate-dance-swing" },
  medium: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10", label: "Medium Risk", dance: "animate-dance-bounce" },
  high: { icon: ShieldAlert, color: "text-orange-500", bg: "bg-orange-500/10", label: "High Risk", dance: "animate-dance-bounce" },
  critical: { icon: ShieldAlert, color: "text-red-500", bg: "bg-red-500/10", label: "Critical Danger", dance: "animate-dance-bounce" },
  educational: { icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10", label: "Educational", dance: "animate-dance-swing" },
  nature: { icon: TreePine, color: "text-emerald-500", bg: "bg-emerald-500/10", label: "Nature Content", dance: "animate-dance-swing" },
};

export default function Analysis() {
  const navigate = useNavigate();
  const location = useLocation();
  const { text, fileUrl, type } = location.state || {};
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!text && !fileUrl) { navigate("/select"); return; }
    analyzeContent();
  }, []);

  const analyzeContent = async () => {
    setLoading(true);
    try {
      const prompt = `You are Vigil Netra, an AI scam detection assistant. Analyze the following ${type || "content"}...
- For normal/friendly messages: mark as "safe", give warm response
- For educational documents: mark category as "educational", describe content
- For nature images: mark category as "nature", identify scenery
- For scam messages: mark as "high"/"critical" risk, provide warnings & actions
Content to analyze:
${text || ""}
${fileUrl ? `File uploaded: ${fileUrl}` : ""}`;

      const res = await base44.integrations.Core.InvokeLLM({
        prompt,
        ...(fileUrl ? { file_urls: [fileUrl] } : {}),
        response_json_schema: {
          type: "object",
          properties: {
            risk_level: { type: "string", enum: ["safe", "low", "medium", "high", "critical"] },
            category: { type: "string", enum: ["normal", "educational", "nature", "scam", "phishing", "spam", "suspicious", "safe"] },
            title: { type: "string" },
            analysis: { type: "string" },
            friendly_message: { type: "string" },
            content_description: { type: "string" },
            is_scam: { type: "boolean" },
            confidence: { type: "number" },
            cautions: { type: "array", items: { type: "string" } },
            actions: { type: "array", items: { type: "string" } },
            positive_points: { type: "array", items: { type: "string" } }
          }
        }
      });
      setResult(res);
    } catch (err) {
      setResult({ risk_level: "low", title: "Analysis Complete", analysis: "Unable to analyze.", cautions: [], actions: [], positive_points: [], confidence: 0 });
    }
    setLoading(false);
  };

  // Renders: Julie dancing, risk badge, friendly message, analysis,
  // positive points, cautions, recommended actions, and 3 buttons (Finish, Analyze Another, History)
  return <div className="min-h-screen bg-background pb-20">{/* ... */}</div>;
}