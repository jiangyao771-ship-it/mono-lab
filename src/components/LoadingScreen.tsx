import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-bg flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white tracking-tighter">MONO Lab</h1>
        </motion.div>

        <div className="w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-neon"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-text-muted text-sm font-mono mt-4"
        >
          {Math.round(Math.min(progress, 100))}%
        </motion.p>
      </div>
    </motion.div>
  );
}