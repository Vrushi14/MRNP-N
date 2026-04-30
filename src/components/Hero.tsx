"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/mrnp-hero-bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6 mt-10 md:py-40">
          <h1 className="font-forum text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6.5rem] md:leading-tight lg:leading-[5rem] xl:leading-[6.5rem] bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent pb-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              History of expertise.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Reputation for excellence.
            </motion.div>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-instrument text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-5xl mx-auto whitespace-pre-line leading-relaxed"
          >
            Smart approaches to solution with exceptional service. Talent and
            expertise necessary to meet our clients' needs in an ever-changing
            and fast-paced environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-14"
          >
            <Link
              href="/about"
              className="font-instrument px-10 py-4 bg-[#2A3F76] text-white text-sm lg:text-[1rem] xl:text-[1.25rem] font-bold rounded-full hover:bg-primaryBlue/90 transition-all duration-300"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
