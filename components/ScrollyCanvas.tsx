"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Array to hold preloaded images
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress 0-1 to frame index 0-119
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits: 000, 001, ..., 119
      const formattedNumber = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${formattedNumber}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      }
      // Even if error, push it to maintain index
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame];

      if (img && img.complete && img.naturalWidth !== 0) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate object-fit: cover logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    // Initial render
    render();

    // Subscribe to framer motion changes
    const unsubscribe = frameIndex.on("change", render);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once to set initial size

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[450vh] bg-[#050D18]">
      {/* Sticky container for the canvas */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050D18] z-50 text-slate-300 text-sm tracking-widest uppercase">
            <div className="w-12 h-12 rounded-full border-2 border-brandTeal/20 border-t-brandTeal animate-spin mb-4" />
            <span className="font-mono text-xs text-brandTeal">Loading 120-Frame Visual Sequence...</span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
