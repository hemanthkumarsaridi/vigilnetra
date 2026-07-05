import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg hover:bg-primary/10 transition-all duration-300 group">
      <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-medium text-foreground">Back</span>
    </button>
  );
}