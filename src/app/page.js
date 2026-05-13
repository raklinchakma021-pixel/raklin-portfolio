"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      
      {/* Your Sections Here */}
      {/* <Navbar /> */}
      {/* <Banner /> */}
      {/* <AboutMe /> */}
      {/* <SkillsSection /> */}
      {/* etc... */}

      {/* Go To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-violet-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-violet-700"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}