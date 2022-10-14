import React, { useEffect, useRef, useContext } from "react";
import IsDarkContext from "../../context/isDarkContext";

const Colors = {
  light: "#fff",
  dark: "#341931",
};
let shouldDraw = null;

const cords = {
  x: 300,
  y: 600,
};
let radius = 0;
const DarkModeAnimation = () => {
  const isDark = useContext(IsDarkContext);
  const canvasRef = useRef(null);

  const draw = (ctx, radius) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (isDark) {
      ctx.fillStyle = Colors.dark;
    } else {
      ctx.fillStyle = Colors.light;
    }
    ctx.beginPath();
    ctx.arc(cords.x, cords.y, Math.pow(radius, 2.9), 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let animationFrameId;

    const { width, height } = context.canvas.getBoundingClientRect();
    if (context.canvas.width !== width || context.canvas.height !== height) {
      const { devicePixelRatio: originalRatio = 1 } = window;
      const lowerResolutionRatio = originalRatio * 0.5;
      context.canvas.width = width * lowerResolutionRatio;
      context.canvas.height = height * lowerResolutionRatio;
      context.scale(lowerResolutionRatio, lowerResolutionRatio);
    }
    if (isDark) {
      shouldDraw = true;
    } else {
      shouldDraw = false;
    }

    const screenHeight = 912;
    const screenWidth = 912;
    const maxRadiusMultiplier = Math.pow(
      Math.max(screenWidth, screenHeight),
      1.0 / 2.9
    );

    const grow = () => {
      radius += 0.25;

      if (radius < maxRadiusMultiplier) {
        draw(context, radius);
        animationFrameId = window.requestAnimationFrame(grow);
      }
    };
    const startGrowing = () => {
      radius = 0;
      grow();
    };

    if (shouldDraw === true) {
      startGrowing();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <canvas
      className="w-screen h-screen fixed -z-10 bg-slate-200"
      ref={canvasRef}
    />
  );
};

export default DarkModeAnimation;
