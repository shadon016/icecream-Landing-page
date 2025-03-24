import { Menu } from "lucide-react";
import * as motion from "motion/react-client";

const fadeInUpAnimation = {
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const Nav = () => {
  const li = [
    { link: "#", title: "home" },
    { link: "#", title: "about" },
    { link: "#", title: "contact" },
  ];
  return (
    <div className="w-full absolute px-8 z-20 lg:px-30 backdrop-blur-md">
      <motion.div
        variants={fadeInUpAnimation}
        initial="initial"
        animate="animate"
        className="flex justify-between items-center h-16 lg:h-20"
      >
        <motion.h1
          variants={fadeInUpAnimation}
          className="text-2xl font-bold text-black"
        >
          Cone & Co.
        </motion.h1>
        <ul className="hidden lg:flex gap-6 text-sm font-semibold uppercase ">
          {li?.map((item, index) => (
            <motion.li
              variants={fadeInUpAnimation}
              key={index}
              className="cursor-pointer text-black"
            >
              {item.title}
            </motion.li>
          ))}
        </ul>
        <Menu color="black" size={38} className="lg:hidden" />
      </motion.div>
    </div>
  );
};

export default Nav;
