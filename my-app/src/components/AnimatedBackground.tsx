import React, { useEffect, useState } from "react";

interface Diamond {
  id: number;
  left: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
}

const MIN_SIZE = 40;
const MAX_SIZE = 420;

// Smaller = faster, larger = slower (parallax depth feel)
const sizeToDuration = (size: number) => {
  const t = (size - MIN_SIZE) / (MAX_SIZE - MIN_SIZE);
  return 45 + t * 225; // 45s (small/fast) → 270s (large/slow)
};

const sizeToOpacity = (size: number) => {
  const t = (size - MIN_SIZE) / (MAX_SIZE - MIN_SIZE);
  return 0.55 - t * 0.38; // 0.55 (small/near) → 0.17 (large/far)
};

const AnimatedBackground = () => {
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);

  useEffect(() => {
    const sizes = [
      48, 62, 75, 90,          // small — fast
      130, 155, 180,           // medium
      240, 280,                // medium-large
      330, 360, 400, 420,      // large — slow
      55, 200,                 // extras for variety
    ];

    const diamondArray: Diamond[] = sizes.map((size, i) => ({
      id: i,
      left: Math.random() * 110 - 5, // allow slight off-screen edges
      width: size,
      height: size * 1.5,             // 1.4:1 ratio → ~71° tip angle, less pointy than 2:1
      duration: sizeToDuration(size),
      delay: -(Math.random() * sizeToDuration(size)), // stagger through full cycle
      opacity: sizeToOpacity(size),
    }));

    setDiamonds(diamondArray);
  }, []);

  return (
    <>
      <style>{`
        @keyframes salmiakki-scroll {
          from { transform: translateY(110vh); }
          to   { transform: translateY(-110vh); }
        }

        .animated-background {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .salmiakki-diamond {
          position: absolute;
          top: 0;
          background: linear-gradient(to bottom, #FF9500 0%, #FFD700 100%);
          /* rhombus: pointed top/bottom, flat left/right */
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: salmiakki-scroll linear infinite;
        }
      `}</style>

      <div className="animated-background">
        {diamonds.map((diamond) => (
          <div
            key={diamond.id}
            className="salmiakki-diamond"
            style={{
              left: `${diamond.left}%`,
              width: `${diamond.width}px`,
              height: `${diamond.height}px`,
              animationDuration: `${diamond.duration}s`,
              animationDelay: `${diamond.delay}s`,
              opacity: diamond.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
