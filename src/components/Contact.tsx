"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { SiMedium, SiSpotify } from "react-icons/si";
import { MeshGradientSVG } from "@/components/ui/shader-svg";

export default function Contact() {
    return (
        <>
            <style jsx>{`
                .stardust-button {
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.3),
                                inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
                                inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.5),
                                0 3rem 3rem rgba(0, 0, 0, 0.3),
                                0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
                }
                
                .stardust-button::before {
                    content: "";
                    position: absolute;
                    left: -15%;
                    right: -15%;
                    bottom: 25%;
                    top: -100%;
                    border-radius: 50%;
                    background-color: rgba(64, 180, 255, 0.15);
                    transition: all 0.3s ease;
                }
                
                .stardust-button::after {
                    content: "";
                    position: absolute;
                    left: 6%;
                    right: 6%;
                    top: 12%;
                    bottom: 40%;
                    border-radius: 22px 22px 0 0;
                    box-shadow: inset 0 10px 8px -10px rgba(129, 216, 255, 0.6);
                    background: linear-gradient(180deg, rgba(64, 180, 255, 0.25) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
                    transition: all 0.3s ease;
                }
                
                .stardust-button:hover {
                    box-shadow: inset 0 0.3rem 0.5rem rgba(129, 216, 255, 0.4),
                                inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
                                inset 0 -0.4rem 0.9rem rgba(64, 180, 255, 0.6),
                                0 3rem 3rem rgba(0, 0, 0, 0.3),
                                0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
                }
                
                .stardust-button:hover::before {
                    transform: translateY(-5%);
                }
                
                .stardust-button:hover::after {
                    opacity: 0.4;
                    transform: translateY(5%);
                }
                
                .stardust-button:active {
                    transform: translateY(4px);
                    box-shadow: inset 0 0.3rem 0.5rem rgba(129, 216, 255, 0.5),
                                inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8),
                                inset 0 -0.4rem 0.9rem rgba(64, 180, 255, 0.4),
                                0 3rem 3rem rgba(0, 0, 0, 0.3),
                                0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
                }
            `}</style>
            <section id="contact" className="pt-20 pb-8 px-4 md:px-10 bg-black min-h-[80vh] flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex justify-between items-start gap-8">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 pl-0">
                                Let's Connect
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg mb-8 max-w-2xl pl-0">
                                I'm actively seeking entry-level opportunities in cybersecurity.<br />
                                Let's discuss how I can contribute to your team.
                            </p>

                            <div className="flex flex-wrap gap-4 pl-0">
                                <Link
                                    href="mailto:naveenjc10@gmail.com"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors -ml-0"
                                >
                                    Get in Touch
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1zSbA081THbIDeI3LbE3tkZC903m8_RrM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="stardust-button relative inline-flex items-center gap-2 px-6 py-3 bg-[#0a1929] text-[#81d8ff] rounded-full text-sm font-medium transition-all duration-200"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="text-lg">✧</span>
                                        Download Resume
                                        <Download className="w-3.5 h-3.5" />
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block flex-shrink-0 w-48 opacity-40">
                            <MeshGradientSVG />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="flex-shrink-0 text-center md:text-left w-full md:w-auto">
                            <p className="text-muted-foreground mb-2">your friendly chaos creator</p>
                            <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white flex justify-center md:justify-start overflow-hidden py-4">
                                {"Naveen".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 0,
                                            delay: index * 0.15,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h1>
                        </div>

                        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mb-4 w-full md:w-auto justify-center md:justify-end md:mr-[-2.5rem]">
                            <Link 
                                href="https://www.linkedin.com/in/naveen-thinarthan-70b346309/" 
                                target="_blank" 
                                className="group flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105 min-h-[44px] touch-manipulation"
                            >
                                <Linkedin className="w-4 h-4 text-[#0A66C2] transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">LinkedIn</span>
                            </Link>
                            <Link 
                                href="https://github.com/NaveenJc10" 
                                target="_blank" 
                                className="group flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105 min-h-[44px] touch-manipulation"
                            >
                                <Github className="w-4 h-4 text-[#6e5494] transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">GitHub</span>
                            </Link>
                            <Link 
                                href="https://open.spotify.com/user/5d87hmo0aa8xed5ob8gvvp7fd?si=aa752039f89d41e5" 
                                target="_blank" 
                                className="group flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105 min-h-[44px] touch-manipulation"
                            >
                                <SiSpotify className="w-4 h-4 text-[#1DB954] transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Spotify</span>
                            </Link>
                            <Link 
                                href="https://medium.com/@naveenjc10" 
                                target="_blank" 
                                className="group flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105 min-h-[44px] touch-manipulation overflow-hidden"
                            >
                                <div className="flex items-center justify-center w-4 h-4">
                                    <SiMedium className="w-3 h-3 text-muted-foreground group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Medium</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Footer Copyright */}
                    <div className="mt-8 pt-4 border-t border-white/5">
                        <p className="text-center text-sm text-muted-foreground pb-0">
                            © 2026 Naveen. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
                    </section>
        </>
    );
}