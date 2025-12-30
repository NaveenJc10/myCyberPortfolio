"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";

const experiences = [
    {
        company: "Merchantrade Asia Sdn Bhd",
        role: "Cyber Security Intern",
        period: "January 2025 – April 2025",
        location: "Selangor, MALAYSIA",
        logo: "/mm_logo.png",
        transparentBg: true,
        description: [
            "Documented information security incidents and investigation findings.",
            "Conducted OSINT and threat intelligence research to support detection, attribution, and threat validation.",
            "Performed forensic analysis of acquired data to identify evidence of malicious activity, data breaches, or other security incidents.",
            "Analyzed digital evidence, including files, logs, system artifacts, and network data, to reconstruct events and identified attacker tactics, techniques, and procedures (TTPs).",
            "Stayed updated on developments in the information security field through online news, technical publications, professional associations, conferences, and training seminars.",
            "Correlated IOCs with known CVEs and affected assets to assess exposure and support incident response prioritization.",
            "Contributed to SOC documentation, playbooks, and continuous process improvement."
        ]
    },
    {
        company: "VeecoTech Solutions Sdn Bhd",
        role: "Web Designer Intern",
        period: "May 2022 – August 2022",
        location: "Penang, MALAYSIA",
        logo: "/veecotech_logo.png",
        transparentBg: true,
        description: [
            "Designed and customized responsive websites using WordPress, ensuring compatibility across desktop, tablet, and mobile devices.",
            "Developed and enhanced front-end interfaces for web and e-commerce applications using HTML, CSS, JavaScript, PHP, and jQuery.",
            "Customized CSS layouts and implemented pixel-perfect designs across major browsers.",
            "Translated design concepts and creative briefs into usable, visually engaging user interfaces.",
            "Collaborated closely with developers to ensure smooth design-to-code handoff and consistent UI behavior.",
            "Optimized interface performance while maintaining visual consistency and usability.",
            "Worked closely with the UX design team to ensure an optimal user experience for clients."
        ]
    }
];

export default function Experience() {
const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
};


    return (
        <section className="py-20 px-3 md:px-10 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 px-1 md:px-0"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Experience
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        A timeline of my professional growth and contributions in the cybersecurity landscape.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Animated Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
                    />

                    <div className="space-y-6 md:space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative pl-5 md:pl-12 group"
                            >
                                {/* Animated Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                                    className="absolute -left-[7px] md:left-[9px] top-6 md:top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform"
                                >
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all cursor-pointer"
                                    onClick={() => toggleExpand(index)}
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* Top row: Logo + Role/Company */}
                                        <div className="flex items-start gap-3 md:gap-4">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full p-1 flex items-center justify-center overflow-hidden shrink-0 ${exp.transparentBg ? '' : 'bg-white'
                                                }`}>
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-primary font-medium text-sm md:text-base">{exp.company}</p>
                                            </div>
                                            {/* Expand Icon */}
                                            <motion.div
                                                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="shrink-0"
                                            >
                                                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                                            </motion.div>
                                        </div>

                                        {/* Bottom row: Period + Location */}
                                        <div className="flex items-center flex-nowrap gap-x-2 md:gap-x-4 text-muted-foreground text-xs md:text-sm pl-0 md:pl-14 overflow-x-auto">
                                            <p className="font-medium whitespace-nowrap">{exp.period}</p>
                                            <p className="text-white/40">•</p>
                                            <p className="whitespace-nowrap">{exp.location}</p>
                                        </div>

                                        {/* Expandable Description */}
                                        <AnimatePresence>
                                            {expandedIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 pl-0 md:pl-14 border-t border-white/10 mt-2 bg-black/20 -mx-5 md:-mx-6 px-4 md:px-6 pb-4 rounded-b-xl">
                                                        <ul className="space-y-3 text-sm md:text-sm text-white/70 pr-2 md:pr-0">
                                                            {exp.description.map((item, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: i * 0.1 }}
                                                                    className="flex gap-2.5 items-start leading-relaxed"
                                                                >
                                                                    <span className="text-primary text-xs mt-1 shrink-0">•</span>
                                                                    <span className="flex-1 break-words">{item}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}