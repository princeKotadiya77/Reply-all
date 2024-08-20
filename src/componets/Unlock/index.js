import React, { useState } from "react";
import { motion } from "framer-motion";
import AiPower from "../AI";
import Hapleing from "../Helping";
import Think from "../Think";
import MindBlowing from "../Mindblowing";
import Genretive from "../Genretive";
import VidoesGenration from "../VidoesGenration";
import PayOnce from "../PayOnce";
import Basic from "../Basic";
import Voice from "../Voice";

const UnlockComponents = () => {
  const [bgColor, setBgColor] = useState("bg-slate-950");
  const [animate, setAnimate] = useState(false);

  const handleBackgroundChange = () => {
    const colors = [
      "bg-slate-950",
      "bg-blue-500",
      "bg-green-500",
      "bg-red-500",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
    setAnimate(!animate);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: animate ? 1 : 1 }}
      transition={{ duration: 0.5 }}
      className={`${bgColor} transition-all duration-1000 `}
    >
      <div className="">
        <div className="pt-[120px] h-full pb-[40px]">
          <div className="mt-[20px]">
            <h1 className="flex justify-center text-3xl text-center lg:text-6xl md:text-5xl font-extrabold text-white">
              Unlock Your Creativity with{" "}
            </h1>
          </div>
          <div className="mt-[20px]">
            <span className="flex justify-center text-3xl lg:text-6xl md:text-5xl font-extrabold text-white mt-[30px]">
              Mindblowing
            </span>
          </div>
          <div className="flex justify-center mt-[10px]">
            <motion.img
              src="/images/curve-DplsLMf8.png"
              alt="img"
              className="lg:w-[380px] md:w-[280px] w-[250px]"
              animate={{ rotate: animate ? 360 : 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <p className="lg:text-2xl md:text-1xl text-xl text-center text-white">
              Innovate, Imagine, and Inspire with Our Cutting-Edge Solutions.
            </p>
          </div>
          <div className="flex justify-center mt-[35px]">
            <button
              onClick={handleBackgroundChange}
              className="btn2 !border-none"
            >
              Change Background & Animate
            </button>
          </div>

          <div>
            <AiPower />
          </div>

          <div>
            <Hapleing />
          </div>
        </div>
        <div>
          <Think />
        </div>
        <div>
          <MindBlowing />
        </div>
        <div>
          <Genretive />
        </div>
        <div>
          <VidoesGenration />
        </div>
        <div>
          <PayOnce />
        </div>

        <div>
          <Basic />
        </div>
        <div>
          <Voice />
        </div>
      </div>
    </motion.div>
  );
};

export default UnlockComponents;
