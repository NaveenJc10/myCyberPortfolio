"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force video to play on mount
        const playVideo = async () => {
            try {
                await video.play();
            } catch (error) {
                console.log("Autoplay prevented:", error);
            }
        };

        playVideo();

        // Intersection Observer to ensure video plays when visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-20 relative overflow-hidden">
            {/* Background Elements - More subtle */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="space-y-6"
                >
                    <div className="space-y-1">
                        <h2 className="text-xs md:text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase">
                            Cyber Security Professional
                        </h2>
                        <div className="h-[1px] w-16 bg-gradient-to-r from-primary/60 to-transparent mt-3" />
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                        Naveen
                    </h1>
                    
                    <p className="text-base md:text-lg text-muted-foreground/80 max-w-md leading-relaxed pt-2">
                        Driven by curiosity and a love for security. I create simple, functional, and secure digital experiences.
                    </p>

                    <div className="flex items-center gap-3 pt-4">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-white/40 to-white/10"></div>
                        <span className="text-xs md:text-sm text-muted-foreground/60 font-light tracking-wide">Based in Malaysia</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                    className="relative h-[500px] md:h-[750px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/5"
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-contain"
                    >
                        <source src="/cybervid.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-white/5 rounded-2xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}