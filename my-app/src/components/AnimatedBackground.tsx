import React, { useEffect, useState } from "react";

interface Diamond {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);

  useEffect(() => {
    // Generate random diamonds
    const diamondArray: Diamond[] = [];
    for (let i = 0; i < 6; i++) {
      diamondArray.push({
        id: i,
        left: Math.random() * 100,
        size: 80 + Math.random() * 200, // 80px to 280px
        duration: 20 + Math.random() * 15, // 20s to 35s
        delay: Math.random() * 5, // 0s to 5s stagger
      });
    }
    setDiamonds(diamondArray);
  }, []);

  return (
    <>
      <style>{`
        @keyframes salmiakki-scroll {
          from {
            transform: translateY(100vh) rotateZ(45deg);
            opacity: 0.7;
          }
          to {
            transform: translateY(-100vh) rotateZ(45deg);
            opacity: 0.5;
          }
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
          background: linear-gradient(135deg, #FF9500 0%, #FFD700 100%);
          transform: rotateZ(45deg);
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
              width: `${diamond.size}px`,
              height: `${diamond.size}px`,
              animationDuration: `${diamond.duration}s`,
              animationDelay: `${diamond.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
