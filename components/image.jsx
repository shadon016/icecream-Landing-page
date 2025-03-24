"use client";
import React from "react";
import Cone from "@/public/ice.png";
import Image from "next/image";
import * as motion from "motion/react-client";
const Images = () => {
  return (
    <div className="md:bg-[#F7B5CA] h-[100%] w-full mt-12 md:mt-0 flex justify-center items-center md:rounded-tl-full rounded-bl-4xl">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className=""
      >
        <Image src={Cone} alt="icecream" className="" />
      </motion.div>
    </div>
  );
};

export default Images;
