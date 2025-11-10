import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="rounded-2xl bg-neutral-900/40 p-6 h-full flex items-center justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-sm text-neutral-400 mt-2">
                Royal College of Science and Commerce
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                Jul 2022 – Apr 2025
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="rounded-2xl bg-neutral-900/40 p-6 h-full flex items-center justify-center">
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-semibold">
                MBA in Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-sm text-neutral-400 mt-2">
                Dr. D.Y. Patil Vidyapeeth, Pune
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                Jul 2025 – 2027 (Pursuing)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

