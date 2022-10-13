import React, { useEffect, useRef, useContext } from "react";
import IsDarkContext from "../../context/isDarkContext";

// const debounce = (callback, delay = 250) => {
//   let timeoutId;
//   return (...arg) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       timeoutId = null;
//       callback(...arg);
//     }, delay);
//   };
// };

// const throttle = (callback, limit = 250) => {
//   let wait = false;
//   return () => {
//     if (!wait) {
//       callback.call();
//       wait = true;
//       setTimeout(() => {
//         wait = false;
//       }, limit);
//     }
//   };
// };

const Colors = {
  light: "#00f",
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

  let outerRadius = 10.487884000961095;

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

  const drawen = (ctx, outerRadius) => {
    ctx.fillRect(412, 915, ctx.canvas.width, ctx.canvas.height);
    if (!isDark) {
      ctx.fillStyle = Colors.dark;
    } else {
      ctx.fillStyle = Colors.light;
    }
    ctx.beginPath();
    ctx.arc(cords.x, cords.y, Math.log(radius, 2.9), 0, 2 / Math.PI);
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
    const minRadiusMultiplier = 0;
    const shrink = () => {
      radius -= 0.5;
      console.log(radius);

      if (radius > minRadiusMultiplier) {
        drawen(context, outerRadius);
        animationFrameId = window.requestAnimationFrame(shrink);
      }
    };

    const grow = () => {
      radius += 0.25;
      console.log(radius);

      if (radius < maxRadiusMultiplier) {
        draw(context, radius);
        animationFrameId = window.requestAnimationFrame(grow);
      }
    };
    const startGrowing = () => {
      radius = 0;
      grow();
    };
    const startShrinking = () => {
      shrink();
    };

    if (shouldDraw === true) {
      startGrowing();
    } else if (shouldDraw === false) startShrinking();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, drawen]);

  return (
    <canvas
      className="w-screen h-screen fixed -z-10 bg-slate-200"
      ref={canvasRef}
    />
  );
};

export default DarkModeAnimation;
