"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState } from "react";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const locations = [
  "India",
  "London",
  "Florida",
  "Cayman",
  "Hong Kong",
  "Dubai",
  "Cyprus",
];

export default function Locations() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#000B1E] py-20 overflow-hidden">
      {/* Top and Bottom Horizontal Glows */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 z-10"
          >
            <div>
              <h2 className="font-forum text-4xl md:text-5xl font-bold text-white mb-4">
                Our Locations
              </h2>
              <p className="font-instrument text-white text-lg">
                Strategic locations for optimal global reach.
              </p>
            </div>
            <div className="space-y-4">
              {locations.map((location, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={location}
                  onClick={() => setActiveIndex(idx)}
                  className={`font-instrument text-2xl md:text-3xl font-light pb-4 border-b transition-all duration-300 cursor-pointer ${activeIndex === idx
                    ? "text-blue-400 border-blue-400"
                    : "text-white border-white hover:text-blue-400 hover:border-blue-400"
                    }`}
                >
                  {location}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full"
          >
            <div className="absolute w-full h-full">
              <Globe activeLocation={locations[activeIndex]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
