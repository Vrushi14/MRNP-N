"use client";

import Image from "next/image";
import { ArrowRight, X, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HereToHelp from "@/components/HereToHelp";

const marqueeImages = [
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911585/20250302_093152_zvu3n8.png",
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911571/WA_1773389374744_1_ttzjo1.jpg",
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911566/IMG-20250228-WA0005_mmmaos.jpg",
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911564/20231124_170013_gztcnk.jpg",
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911563/20231128_155207_uwyxpo.jpg",
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911562/20231125_101130_inczac.jpg",
  "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1773911562/20231127_151533_ctfzar.jpg",
];

const jobs = [
  {
    department: "IT",
    position: "Software Engineer",
    city: "Vadodara",
    state: "Gujarat",
  }
];

export default function CareersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  const handleApplyClick = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsSidebarOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative bg-primaryBlue pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
        <Navbar />
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-8 md:mb-12 lg:mb-16 max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-forum text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6.5rem] md:leading-tight lg:leading-[5rem] xl:leading-[6.5rem] bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent pb-2"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-instrument text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl leading-relaxed"
            >
              Students, recent graduates, seasoned professionals, and senior
              leaders constitute integral pillars of our success.
            </motion.p>
          </div>

          {/* Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full mb-[-8rem] md:mb-[-12rem] lg:mb-[-16rem] xl:mb-[-25rem] z-10"
          >
            <div className="relative w-full aspect-[16/10] md:aspect-[16/7] lg:aspect-[15/7]">
              <Image
                src="/careers-hero.jpg"
                alt="Life @ MRNP & CO LLP"
                fill
                className="object-cover shadow-2xl rounded-sm"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CULTURE SECTION 1 ── */}
      <section className="relative bg-[#F5F5F0] pt-[9rem] md:pt-[14rem] lg:pt-[18rem] xl:pt-[24rem] pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="space-y-8 md:space-y-12">
            <h2 className="font-forum text-3xl md:text-4xl lg:text-5xl text-[#13234C] leading-tight">
              Innovative Collaboration & Dynamic Team Culture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <p className="font-instrument text-[#13234C] text-base md:text-xl leading-relaxed">
                At MRNP, our environment fosters collaboration with top-tier
                talent, visionary thinkers, and industry trailblazers who are at
                the forefront of forging and sustaining innovative and impactful
                partnerships.
              </p>
              <p className="font-instrument text-[#13234C] text-base md:text-xl leading-relaxed">
                Our organization values a dynamic and resourceful team,
                characterized by youthfulness and energy, present across all our
                locations. We firmly uphold the belief that our people define
                our culture and organization, guiding every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE SECTION 2 ── */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-4xl">
            <h2 className="font-forum text-3xl md:text-4xl lg:text-5xl text-primaryBlue mb-4 md:mb-6">
              Culture of Excellence
            </h2>
            <div className="font-instrument space-y-4 md:space-y-6 text-[#191919] text-base md:text-lg leading-relaxed">
              <p>
                At MRNP, our culture is defined by a passionate drive to
                contribute to global transformation initiatives. We are
                committed to fostering an environment where creativity flourishes
                and diverse perspectives thrive. We encourage open expression of
                ideas and embrace challenges as opportunities for growth and
                innovation.
              </p>
              <p>
                We value individuals who challenge conventional norms and strive
                for excellence, as this mindset not only enhances personal
                satisfaction but also drives collective success. Despite our
                dynamic and forward-thinking approach, MRNP remains steadfast in
                upholding core values established over decades: integrity and
                honesty are paramount in every decision and interaction,
                regardless of seniority or role within the firm.
              </p>
            </div>
          </div>
        </div>

        {/* ── INFINITE MARQUEE ── */}
        <div className="overflow-hidden w-full relative animate-marquee-container flex py-8 mt-8">
          <div className="flex w-max animate-marquee space-x-4 md:space-x-8 px-2 md:px-4">
            {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative w-[280px] h-[180px] md:w-[400px] md:h-[260px] lg:w-[450px] lg:h-[300px] flex-shrink-0"
              >
                <Image
                  src={imgUrl}
                  alt={`MRNP Culture ${idx}`}
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 450px"
                  className="object-cover rounded-md md:rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT OPENINGS ── */}
      <section className="bg-white flex justify-center items-center py-9 lg:py-16">
        <div className="container w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0">
          <div className="text-center flex flex-col items-center space-y-6">
            <h2 className="font-forum text-primaryBlue text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] md:leading-[3.125rem] 2xl:text-[2.625rem] 2xl:leading-tight leading-tight uppercase xl:text-5xl 2xl:text-6xl">
              Current Openings
            </h2>
            <div className="md:max-w-2xl">
              <p className="font-instrument text-[#191919] text-[0.875rem] md:text-[1rem] md:leading-[1.25rem] xl:text-[1.125rem] 2xl:leading-[1.5rem]">
                Join MRNP and experience a workplace where your contributions
                matter and where integrity and innovation are at the heart of
                everything we do.
              </p>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block mt-12">
            <table className="w-full">
              <thead className="bg-[#F2F5F1] border border-[#d9d9d9]">
                <tr>
                  <th className="font-instrument p-4 text-primaryBlue lg:text-2xl font-medium uppercase text-left">
                    Department
                  </th>
                  <th className="font-instrument p-4 text-primaryBlue lg:text-2xl font-medium uppercase text-left">
                    Position
                  </th>
                  <th className="font-instrument p-4 text-primaryBlue lg:text-2xl font-medium uppercase text-left">
                    City
                  </th>
                  <th className="font-instrument p-4 text-primaryBlue lg:text-2xl font-medium uppercase text-left">
                    State
                  </th>
                  <th className="font-instrument p-4 text-primaryBlue lg:text-2xl font-medium uppercase text-center">
                    Apply
                  </th>
                </tr>
              </thead>
              <motion.tbody
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {jobs.map((job, idx) => (
                  <motion.tr 
                    key={idx} 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                    className="border-b border-[#d9d9d9]"
                  >
                    <td className="font-instrument text-[#191919] text-lg py-8 px-4 text-left">
                      {job.department}
                    </td>
                    <td className="font-instrument text-[#191919] text-lg py-8 px-4 text-left">
                      {job.position}
                    </td>
                    <td className="font-instrument text-[#191919] text-lg py-8 px-4 text-left">
                      {job.city}
                    </td>
                    <td className="font-instrument text-[#191919] text-lg py-8 px-4 text-left">
                      {job.state}
                    </td>
                    <td className="text-center py-8 px-4">
                      <button 
                        onClick={() => handleApplyClick(job)}
                        className="font-instrument text-base mx-auto flex justify-center items-center text-white bg-primaryBlue px-6 md:px-8 py-3 md:py-4 hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-out w-full md:w-auto rounded-full"
                      >
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-3 md:ml-4 text-white" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <motion.div 
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:hidden mt-8 space-y-6"
          >
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="border border-[#d9d9d9] rounded-lg p-4 space-y-3"
              >
                <div className="flex flex-col">
                  <span className="font-instrument text-primaryBlue font-medium text-sm">
                    Department
                  </span>
                  <span className="font-instrument text-[#191919] text-base">
                    {job.department}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-instrument text-primaryBlue font-medium text-sm">
                    Position
                  </span>
                  <span className="font-instrument text-[#191919] text-base">
                    {job.position}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-instrument text-primaryBlue font-medium text-sm">
                    City
                  </span>
                  <span className="font-instrument text-[#191919] text-base">
                    {job.city}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-instrument text-primaryBlue font-medium text-sm">
                    State
                  </span>
                  <span className="font-instrument text-[#191919] text-base">
                    {job.state}
                  </span>
                </div>
                <button 
                  onClick={() => handleApplyClick(job)}
                  className="font-instrument w-full mt-4 flex justify-center items-center text-white font-semibold bg-primaryBlue px-6 py-3 rounded-full hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-out"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-3 text-white" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HereToHelp />
      <Footer />

      {/* ── SIDEBAR ── */}
      <AnimatePresence>
        {isSidebarOpen && selectedJob && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/30 z-[9998] backdrop-blur-sm"
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#FAF9F6] z-[9999] shadow-2xl overflow-y-auto"
            >
              <div className="p-2 relative">
                <div className="flex justify-end items-center">
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-3 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                  </button>
                </div>
                
                <div className="px-6 mt-1 space-y-3">
                  <div>
                    <h2 className="font-forum text-primaryBlue text-2xl sm:text-4xl font-semibold">
                      Tell us about yourself.
                    </h2>
                  </div>
                  
                  <div className="w-full border-t border-b border-[#d9d9d9] py-5 space-y-6">
                    <table className="w-full">
                      <thead>
                        <tr className="font-instrument text-[#13234C]">
                          <th className="font-medium text-left">Department</th>
                          <th className="font-medium text-left">Position</th>
                          <th className="font-medium text-left">City</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="font-instrument text-[#191919] text-base sm:text-lg">
                          <td className="pt-2">{selectedJob.department}</td>
                          <td className="pt-2">{selectedJob.position}</td>
                          <td className="pt-2">{selectedJob.city}</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <div className="space-y-4">
                      <h3 className="font-instrument text-[#13234C] font-semibold text-lg md:text-2xl">
                        Job Description:
                      </h3>
                      <div className="font-instrument text-sm md:text-base text-[#191919] space-y-3 pl-3">
                        <p>We are looking for a skilled <strong>{selectedJob.position}</strong> to join our team. As an SDE, you will be responsible for designing, developing, and maintaining scalable software solutions. You will work closely with cross-functional teams to deliver high-quality products.</p>
                        
                        <h4 className="font-semibold text-base md:text-lg mt-4">Responsibilities</h4>
                        <ul className="pl-5 list-disc space-y-1">
                          <li>Design, develop, and deploy scalable applications.</li>
                          <li>Write clean, maintainable, and efficient code.</li>
                          <li>Collaborate with product managers and designers to implement new features.</li>
                          <li>Optimize applications for performance and security.</li>
                          <li>Debug and resolve software issues.</li>
                        </ul>
                        
                        <h4 className="font-semibold text-base md:text-lg mt-4">Requirements</h4>
                        <ul className="pl-5 list-disc space-y-1">
                          <li>Strong proficiency in modern programming languages.</li>
                          <li>Experience with backend frameworks.</li>
                          <li>Knowledge of databases (SQL, NoSQL).</li>
                          <li>Strong problem-solving skills and a passion for technology.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-4">
                  <motion.form 
                    className="space-y-3"
                    variants={{
                      hidden: {},
                      visible: { transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <input placeholder="Full Name *" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:outline-none transition-colors placeholder:text-gray-500 rounded-sm" type="text" name="name" required />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <input placeholder="Email Address *" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:outline-none transition-colors placeholder:text-gray-500 rounded-sm" type="email" name="email" required />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <input placeholder="Phone Number *" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:outline-none transition-colors placeholder:text-gray-500 rounded-sm" type="tel" name="phone" required />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <input placeholder="Education *" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:outline-none transition-colors placeholder:text-gray-500 rounded-sm" type="text" name="education" required />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <input placeholder="Current Company" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:outline-none transition-colors placeholder:text-gray-500 rounded-sm" type="text" name="currentCompany" />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <input placeholder="Years of Experience *" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:outline-none transition-colors placeholder:text-gray-500 rounded-sm" type="text" name="experience" required />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      <label htmlFor="resume" className="font-instrument w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] hover:border-primaryBlue transition-colors duration-300 ease-in-out flex items-center justify-between cursor-pointer rounded-sm">
                        <span className="text-gray-500">Upload Resume *</span>
                        <Upload className="w-5 h-5 text-gray-500" />
                      </label>
                      <input id="resume" className="hidden" accept=".pdf,.doc,.docx" type="file" name="resume" required />
                    </motion.div>
                    <motion.button variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} type="submit" className="font-instrument w-full flex justify-center items-center text-white font-semibold bg-primaryBlue px-6 py-4 hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-out mt-6 rounded-sm">
                      Submit Application
                    </motion.button>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
