"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

export default function ThanksPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Detect bottom of page
      if (scrollTop + windowHeight >= fullHeight - 100) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative w-[320px] rounded-3xl border border-violet-500/20 bg-white p-6 shadow-2xl dark:bg-zinc-900">
            
            <button
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-500">
                <Heart className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Thanks for Visiting!
                </h3>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  I truly appreciate your time exploring my portfolio.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-violet-500/10 p-4 text-sm text-gray-700 dark:text-gray-300">
              Hope we can build something amazing together 🚀
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}