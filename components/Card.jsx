import Image from "next/image";
import icecream from "@/public/p.png";
import { ShoppingCart } from "lucide-react";
import * as motion from "motion/react-client";
const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      transition={{ type: "spring" }}
      className="card rounded-md py-8"
    >
      <Image src={icecream} alt="img" className="object-cover mx-auto py-2" />
      <div>
        <h2 className="py-2">icecream title</h2>
        <p className="py-2">$5.00</p>
      </div>
      <div className="flex-1">
        <button className="cursor-pointer px-4 lg:px-6 py-2 gap-2 flex items-center mt-4 bg-purple-500 rounded-md">
          add cart <ShoppingCart size={16} color="white" />
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
