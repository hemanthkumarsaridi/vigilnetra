import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Volume2, VolumeX } from "lucide-react";
import { base44 } from "@/api/base44Client";

const BOY_IMG = "https://media.base44.com/images/public/6a49e4640bcd31375ae99d8e/e1102fded_generated_image.png";

export default function ThankYou() {
  const navigate = useNavigate();
  const [audioUrl, setAudioUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => { generateSpeech(); }, []);

  const generateSpeech = async () => {
    try {
      const res = await base44.integrations.Core.GenerateSpeech({
        text: "Thank you for using Vigil Netra! Stay alert and safe. Always visit us before falling for fraud. Remember, your safety is our priority. Stay vigilant!",
        voice: "storm",
        language_code: "en"
      });
      setAudioUrl(res.url);
      const audio = new Audio(res.url);
      audioRef.current = audio;
      audio.play().then(() => setPlaying(true)).catch(() => {});
      audio.onended = () => setPlaying(false);
    } catch (e) {}
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.currentTime = 0; audioRef.current.play(); setPlaying(true); }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <button onClick={toggleAudio} className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg">
          {playing ? <Volume2 className="w-5 h-5 text-primary" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
        </button>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }}>
          <img src={BOY_IMG} alt="Thank You" className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-primary/30 animate-dance-bounce" />
        </motion.div>
        {/* Confetti particles, Thank You text, Logo, Return to Home button */}
        <button onClick={() => navigate("/home")}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:scale-105 transition-all">
          <Home className="w-5 h-5" /> Return to Home
        </button>
      </div>
    </div>
  );
}