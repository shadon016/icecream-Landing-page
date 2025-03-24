import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";

const fadeInUpAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      infinite: true,
    },
  },
};
const Content = () => {
  return (
    <motion.div
      variants={fadeInUpAnimation}
      initial="initial"
      animate="animate"
      className="px-8 py-20 md:py-20 lg:px-30 flex flex-col gap-6 justify-center items-start lg:h-screen "
    >
      <motion.h1
        variants={fadeInUpAnimation}
        className="text-[clamp(2rem,3vw,4rem)] uppercase font-bold"
      >
        Berry Whirlwind
      </motion.h1>
      <motion.p
        variants={fadeInUpAnimation}
        className="text-justify font-size  tracking-tight leading-5.5 lg:leading-10"
      >
        A fruity, vibrant ice cream cone that’s bursting with berry goodness.
        The Berry Whirlwind is a fan-favorite for those who love a balance of
        sweet and tart, all swirled into a beautiful, eye-catching treat.
      </motion.p>
      <motion.div
        variants={fadeInUpAnimation}
        className="flex font-size  hover:text-[#e7d5c1]"
      >
        <p className="border-b-2 border-t-2 border-l-2 border-[#FFEBD4] px-4 p-2 rounded-tl-md rounded-bl-md">
          $3.00
        </p>
        <Link
          href=""
          className="border-2 border-[#FFEBD4] p-2 px-4 rounded-tr-md rounded-br-md"
        >
          order now
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Content;
