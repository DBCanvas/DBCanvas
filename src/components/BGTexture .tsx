// BGTexture.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const BGTexture = () => {
  const [currentTexture, setCurrentTexture] = useState(0);

  const textures = [
    {
      name: "Dots",
      style: {
        background: "radial-gradient(circle, #ddd 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }
    },
    {
      name: "Squares",
      style: {
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 19px, #ddd 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, #ddd 20px)
        `,
        backgroundSize: "80px 80px"
      }
    },
    {
      name: "Concentric Circles",
      style: {
        background: ``,
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      }
    },
    {
      name: "Diagonal Lines",
      style: {
        background: `
          repeating-linear-gradient(
            45deg, 
            #eee, 
            #eee 1px, 
            transparent 1px, 
            transparent 20px
          ),
          repeating-linear-gradient(
            -45deg, 
            #eee, 
            #eee 1px, 
            transparent 1px, 
            transparent 20px
          )
        `
      }
    }
  ];

  const handleChangeTexture = () => {
    setCurrentTexture((prev) => (prev + 1) % textures.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTexture}
          style={textures[currentTexture].style}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Change Texture Button */}
      <div className="absolute bottom-5 right-5">
        <Button
          onClick={handleChangeTexture}
          className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-all"
        >
          Change Texture
        </Button>
      </div>
    </div>
  );
};

export default BGTexture;