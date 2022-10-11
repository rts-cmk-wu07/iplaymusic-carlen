/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";
import { motion } from "framer-motion";

const PlaylistsHeader = () => {
  const colors = useContext(ColorContext);
  const styles = {
    gradient: css`
      background-image: linear-gradient(
        to bottom,
        ${colors.textgrad1},
        ${colors.textgrad2}
      );
    `,
  };
  return (
    <motion.div
      initial={{
        clipPath:
          "polygon(0% 0%,0% 72%,1% 71%,2% 70.3%,2% 70.2%,3% 69.8%,4% 69.5%,5% 69.3%,6% 69%,6% 68.9%,8% 68.9%,9% 68.85%,10% 68.9544%,12% 69.7%,13% 70.3%,13% 70.555%,14% 71.1%,15% 71.9%,16% 72.9%,16% 73%,17% 74%,18% 75.4%,18.5% 76%,19% 76.7%,19.8% 77.6%,20.5% 78.5%,21% 79%,22% 80%,22.4% 80.4%,22.8% 80.4%,23.3% 80.8%,23.8% 81%,25% 81.3%,25% 81.5%,26% 82%,26% 82%,28% 82.5%,29% 82.3%,29% 82.3%,31% 82.1%,32% 81.9%,33% 81.5%,34% 81.1%,35% 80.4%,37% 79%,38% 78%,39% 77%,40% 76%,42% 74%,43% 73%,44% 72%,46% 70%,47% 69%,48% 68%,49% 67%,51% 65%,51% 65%,52% 64.3%,54% 62.8%,54.5% 62.5%,57% 62%,58% 62%,61% 62%,62% 62.5%,64% 63.7%,65% 64.8%,65.5% 65.4%,66% 66%,67% 66.9%,68% 68%,69.2% 69.8%,69.7% 70.3%,70% 70.9%,71% 72%,71.7% 73%,72.5% 74%,73% 74.7%,74% 75.5%,75% 76.5%,75.5% 76.9%,76% 77.1%,78% 78%,80% 78.3%,82% 78%,83% 77.8%,85% 76.7%,87% 75.4%,88.3% 74.3%,89% 73.6%,91% 71.8%,92% 70.5%,93% 69.3%,94% 67.8%,95% 66.7%,96% 66.3%,97% 63.4%,98% 36.5%,99% 62.3%,100% 62%,100% 0%,0% 0%)",
      }}
      animate={{
        clipPath:
          "polygon(0% 0%,0% 72%,1% 71%,2% 70.3%,2% 70.2%,3% 69.8%,4% 69.5%,5% 69.3%,6% 69%,6% 68.9%,8% 68.9%,9% 69.25%,10% 69.9544%,12% 71.7%,13% 72.9%,13% 73%,14% 74.1%,15% 75.9%,16% 77.9%,16% 78%,17% 80%,18% 82.4%,18.5% 84%,19% 85.7%,19.8% 87.6%,20.5% 88.5%,21% 89%,22% 90%,22.4% 90.4%,22.8% 90.4%,23.3% 90.8%,23.8% 91%,25% 91.3%,25% 91.5%,26% 92%,26% 92%,28% 92.5%,29% 92.3%,29% 92.3%,31% 92.1%,32% 91.9%,33% 91.5%,34% 91.1%,35% 90.4%,37% 89%,38% 88%,39% 87%,40% 86%,42% 83%,43% 80%,44% 77%,46% 71%,47% 69%,48% 68%,49% 67%,51% 65%,51% 65%,52% 64.3%,54% 62.8%,54.5% 62.5%,57% 62%,58% 62%,61% 62%,62% 62.5%,64% 64.7%,65% 66.8%,65.5% 68.4%,66% 70%,67% 73.9%,68% 78%,69.2% 82.8%,69.7% 85.3%,70% 86.9%,71% 89%,71.7% 90%,72.5% 91%,73% 91.7%,74% 92.5%,75% 93.5%,75.5% 93.9%,76% 94.1%,78% 95%,80% 95.3%,82% 95%,83% 94.8%,85% 93.7%,87% 92.4%,88.3% 91.3%,89% 90.6%,91% 87.8%,92% 85.5%,93% 81.3%,94% 75.8%,95% 73.7%,96% 72.3%,97% 100.4%,98% 36.5%,99% 62.3%,100% 62%,100% 0%,0% 0%)",
      }}
      transition={{
        duration: 5.2,
        repeat: Infinity,
        repeatType: "reverse",
        type: "ease-in-out",
      }}
      css={styles.gradient}
      className="h-64 w-screen aboslute top-0"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {/* <svg className="absolute top-0" width="450" height="280" viewBox="0 0 ">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1">
            <stop offset="0" stopColor="#ee0979" />
            <stop offset="1" stopColor="#ff6a00" />
          </linearGradient>
        </defs>
        <path
          d="M450,108.338a141.888,141.888,0,0,0-72.6,3.388A134.3,134.3,0,0,0,346.8,125.6c-8.76,5.612-16.2,13.341-26.64,16.624-9.84,3.071-19.56.953-28.68-2.859-16.92-7.094-33.48-15.776-52.32-8.788-17.04,6.247-28.08,21.282-39.84,33.141-10.32,10.376-23.16,20.012-39.48,20.753-30.6,1.482-47.4-25.094-66.6-41.612-21.6-18.529-51.6-33.882-82.56-27C6.84,116.7,3,117.974,0,120.3V-87.75H450V108.338Z"
          fill="url(#linear-gradient)"
        />
      </svg> */}
    </motion.div>
  );
};

export default PlaylistsHeader;
