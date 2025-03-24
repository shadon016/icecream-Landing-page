import React from "react";
import Image from "next/image";
import Banner from "@/public/banner.jpg";
import * as motion from "motion/react-client";
const About = () => {
  return (
    <motion.div
      className="px-12 lg:px-30 py-16"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ infinite: true }}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className=" lg:w-[100rem] mx-auto">
          <Image src={Banner} alt="img" className=" py-2" />
        </div>
        <div className="">
          <h1 className="capitalize text-4xl">About Us</h1>
          <p className="text-justify text-lg py-8">
            Cone & Co. is a family-owned ice cream shop that has been serving
            the community for over 20 years. We specialize in creating unique
            and delicious ice cream flavors that are sure to satisfy your sweet
            tooth. Our ice cream is made fresh daily using only the finest
            ingredients, and we offer a wide variety of flavors to choose from.
            Whether you’re in the mood for a classic scoop of chocolate or
            vanilla, or something a little more adventurous like bubblegum or
            cotton candy, we have something for everyone. So come on down to
            Cone & Co. and treat yourself to a cone of your favorite flavor
            today!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
