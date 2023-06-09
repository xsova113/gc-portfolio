import { skills } from "@/libs/constants";
import { slideIn } from "@/app/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className="flex flex-col md:flex-row max-md:pt-16 items-center flex-1">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 0.8)}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col"
      >
        <h1 className="text-center text-2xl font-bold mb-6 max-md:pt-14">
          My Skills
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition"
            >
              <div
                key={index}
                className={`${item.color} h-24 w-24 flex items-center justify-center px-2 py-2 mr-2 mt-2 rounded-full`}
                style={{background: item.color}}
              >
                <Image
                  src={item.img}
                  alt={item.skill}
                  width={item.size || 45}
                  height={item.size || 45}
                  loading="lazy"
                />
              </div>
              <p className=" text-stone-600 pt-1 dark:text-stone-200 transition font-semibold cursor-default text-sm">
                {item.skill}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MySkills;
