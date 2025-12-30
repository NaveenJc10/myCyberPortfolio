"use client";

import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";

const certifications = [
    {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        year: "2023",
        logo: "/eccouncil_logo.png"
    },
    {
        name: "(ISC)² Certified in Cybersecurity",
        issuer: "(ISC)²",
        year: "2023",
        logo: "/isc2.png"
    },
    {
        name: "Certified Network Security Practitioner (CNSP)",
        issuer: "The SecOps Group",
        year: "2023",
        logo: "/cnsp_logo.png"
    },
    {
        name: "Security+ (SY0-701)",
        issuer: "CompTIA",
        year: "2024",
        logo: "/security.png",
        inProgress: true
    },
    {
        name: "Fortinet Certified Associate in Cybersecurity",
        issuer: "Fortinet",
        year: "2023",
        logo: "/fortinet.png"
    },
    {
        name: "MTA Networking Fundamentals 98-366",
        issuer: "Microsoft",
        year: "2022",
        logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
        transparentBg: true
    },
    {
        name: "IBM Introduction to Cybersecurity Tools & Cyberattacks",
        issuer: "IBM",
        year: "2023",
        logo: "/IBM_cyber.png"
    },
    {
        name: "IBM Introduction to Machine Learning",
        issuer: "IBM",
        year: "2023",
        logo: "/IBM_ml.png"
    },
    {
        name: "Google Digital Marketing",
        issuer: "Google",
        year: "2021",
        logo: "/google_logo.png"
    }
];

export default function Certifications() {
    return (
        <section className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <Award className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Certifications
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        Professional credentials that validate my knowledge and dedication to industry standards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl border transition-colors flex items-center gap-4 relative overflow-hidden ${
                                cert.inProgress 
                                    ? 'bg-white/[0.03] border-white/20 backdrop-blur-sm opacity-60' 
                                    : 'bg-white/5 border-white/10 hover:border-primary/50'
                            }`}
                        >
                            {cert.inProgress && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                                        <Clock className="w-3 h-3 text-primary" />
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/30 text-primary border border-primary/50 shadow-lg shadow-primary/20 backdrop-blur-md">
                                            In Progress
                                        </span>
                                    </div>
                                </>
                            )}
                            <div className={`w-12 h-12 rounded-full p-1 flex items-center justify-center overflow-hidden shrink-0 ${
                                cert.transparentBg ? '' : 'bg-white'
                                }`}>
                                <img
                                    src={cert.logo}
                                    alt={`${cert.issuer} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>{cert.issuer}</span>
                                    {/* <span>{cert.year}</span> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}