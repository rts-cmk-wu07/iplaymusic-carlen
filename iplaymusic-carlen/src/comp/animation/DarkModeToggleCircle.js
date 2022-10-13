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
  light: "#FFF",
  dark: "#341931",
};
let shouldDrew = false;

const cords = {
  x: 300,
  y: 600,
};

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

  const drawen = (ctx, outerRadius) => {
    ctx.fillRect(412, 915, ctx.canvas.width, ctx.canvas.height);
    if (isDark) {
      ctx.fillStyle = Colors.dark;
    } else {
      ctx.fillStyle = Colors.light;
    }
    ctx.beginPath();
    ctx.arc(cords.x, cords.y, Math.log(outerRadius, 2.9), 0, 2 / Math.PI);
    ctx.fill();
  };
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let radius = 0;
    let outerRadius = 10.5;
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
      shouldDrew = true;
    } else {
      shouldDrew = false;
    }

    const screenHeight = 912;
    const screenWidth = 912;
    const maxRadiusMultiplier = Math.pow(
      Math.max(screenWidth, screenHeight),
      1.0 / 2.9
    );
    // const shrinkRadiusMultiplier = Math.pow(
    //   Math.max()
    // )

    console.log(maxRadiusMultiplier);

    const grow = () => {
      radius += 0.25;
      console.log(radius);

      if (radius < maxRadiusMultiplier) {
        draw(context, radius);
        animationFrameId = window.requestAnimationFrame(grow);
      }
    };
    const shrink = () => {
      outerRadius -= 0.25;
      console.log(outerRadius);

      if (outerRadius > 0) {
        drawen(context, outerRadius);
        animationFrameId = window.requestAnimationFrame(shrink);
      }
    };

    if (isDark) grow();
    if (isDark === false) shrink();
    // if (shouldDrew && !isDark) grow();

    // if (!shouldDrew && isDark) shrink();

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
