"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, LayoutGroup } from "framer-motion";
import { servicesData } from "@/data/services";

export function ServiceSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <LayoutGroup>
      <nav className="flex flex-col">
        {servicesData.map((s) => {
          const isActive = s.slug === currentSlug;
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`relative block px-6 py-2 font-instrument text-base md:text-lg ${
                isActive ? "text-white" : "bg-white text-primaryBlue hover:bg-gray-50 transition-colors"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-primaryBlue"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{s.title}</span>
            </Link>
          );
        })}
      </nav>
    </LayoutGroup>
  );
}

export function AnimatedSection({
  heading,
  description,
  body,
}: {
  heading?: string;
  description?: string;
  body: string | string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      {heading && (
        <h3 className="font-forum text-2xl md:text-3xl text-[#061143] mb-5">
          {heading}
        </h3>
      )}
      {description && (
        <p className="font-instrument text-[#191919] text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>
      )}
      {Array.isArray(body) ? (
        <motion.ul
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 font-instrument text-[#191919] text-base md:text-lg leading-relaxed list-disc pl-5"
        >
          {body.map((item, idx) => {
            const colonIndex = item.indexOf(":");
            return (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                {colonIndex !== -1 ? (
                  <>
                    <span className="font-bold">{item.slice(0, colonIndex + 1)}</span>
                    {item.slice(colonIndex + 1)}
                  </>
                ) : (
                  item
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      ) : (
        <p className="font-instrument text-[#191919] text-base md:text-lg leading-relaxed whitespace-pre-wrap">
          {body}
        </p>
      )}
    </motion.div>
  );
}

export function AnimatedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      className="relative w-full aspect-[16/9] mb-10 overflow-hidden bg-gray-100"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
        priority
      />
    </motion.div>
  );
}
