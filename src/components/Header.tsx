"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Terminal, Home, Code, FolderGit2, Mail, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
    name: string;
    href: string;
    external?: boolean;
    icon?: any;
    gradient?: string;
    iconColor?: string;
}

const navItems: NavItem[] = [
    { 
        name: "Home", 
        href: "#",
        icon: Home,
        gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
        iconColor: "text-blue-500"
    },
    { 
        name: "Skills", 
        href: "#skills",
        icon: Code,
        gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
        iconColor: "text-purple-500"
    },
    { 
        name: "Projects", 
        href: "#projects",
        icon: FolderGit2,
        gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
        iconColor: "text-green-500"
    },
    { 
        name: "Contact", 
        href: "#contact",
        icon: Mail,
        gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
        iconColor: "text-red-500"
    },
    { 
        name: "Blog", 
        href: "#blog",
        icon: BookOpen,
        gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
        iconColor: "text-orange-500"
    },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { 
    rotateX: -90, 
    opacity: 0,
  },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { 
    rotateX: 0, 
    opacity: 1,
  },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
  },
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Force Home active when near top
            if (window.scrollY < 200) {
                setActiveSection("");
            }
        };

        document.documentElement.style.scrollBehavior = 'smooth';

        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -60% 0px",
            threshold: 0.1,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Only update if not near top of page
            if (window.scrollY >= 200) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            if (item.href.startsWith("#") && item.href !== "#") {
                const sectionId = item.href.substring(1);
                const element = document.getElementById(sectionId);
                if (element) observer.observe(element);
            }
        });

        window.addEventListener("scroll", handleScroll);
        
        // Check scroll position immediately on mount
        if (window.scrollY < 100) {
            setActiveSection("");
        }
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b relative",
                scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
            )}
            style={{ transform: 'none' }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
                <Link href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
                    <Terminal className="w-6 h-6 text-primary" />
                    <span>Naveen<span className="text-primary">.</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => {
                        const isActive = item.href === "#" 
                            ? activeSection === "" 
                            : activeSection === item.href.substring(1);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block"
                            >
                                <motion.div
                                    className="block rounded-xl overflow-visible group relative"
                                    style={{ perspective: "600px" }}
                                    whileHover="hover"
                                    initial="initial"
                                >
                                    <motion.div
                                        className="absolute inset-0 z-0 pointer-events-none"
                                        variants={glowVariants}
                                        animate={isActive ? "hover" : "initial"}
                                        transition={{
                                            opacity: { duration: 0.5 },
                                            scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
                                        }}
                                        style={{
                                            background: item.gradient,
                                            opacity: isActive ? 1 : 0,
                                            borderRadius: "12px",
                                        }}
                                    />
                                    <motion.div
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl",
                                            isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                                        )}
                                        variants={itemVariants}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            duration: 0.5,
                                        }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            transformOrigin: "center bottom",
                                        }}
                                    >
                                        {Icon && (
                                            <span className={cn("transition-colors duration-300", isActive ? item.iconColor : "")}>
                                                <Icon className="h-4 w-4" />
                                            </span>
                                        )}
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </motion.div>
                                    <motion.div
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl",
                                            isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                                        )}
                                        variants={backVariants}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            duration: 0.5,
                                        }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            transformOrigin: "center top",
                                            rotateX: 90,
                                        }}
                                    >
                                        {Icon && (
                                            <span className={cn("transition-colors duration-300", isActive ? item.iconColor : "")}>
                                                <Icon className="h-4 w-4" />
                                            </span>
                                        )}
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Neon Glowing Bottom Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.4)]"></div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden md:hidden"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {navItems.map((item, index) => {
                                const isActive = item.href === "#" 
                                    ? activeSection === "" 
                                    : activeSection === item.href.substring(1);
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.1, duration: 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block"
                                        >
                                            <motion.div
                                                className="block rounded-xl overflow-visible group relative"
                                                style={{ perspective: "600px" }}
                                                whileHover="hover"
                                                initial="initial"
                                            >
                                                <motion.div
                                                    className="absolute inset-0 z-0 pointer-events-none"
                                                    variants={glowVariants}
                                                    animate={isActive ? "hover" : "initial"}
                                                    transition={{
                                                        opacity: { duration: 0.5 },
                                                        scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
                                                    }}
                                                    style={{
                                                        background: item.gradient,
                                                        opacity: isActive ? 1 : 0,
                                                        borderRadius: "12px",
                                                    }}
                                                />
                                                <motion.div
                                                    className={cn(
                                                        "flex items-center gap-2 px-4 py-3 relative z-10 bg-transparent transition-colors rounded-xl min-h-[44px]",
                                                        isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                                                    )}
                                                    variants={itemVariants}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 100,
                                                        damping: 20,
                                                        duration: 0.5,
                                                    }}
                                                    style={{
                                                        transformStyle: "preserve-3d",
                                                        transformOrigin: "center bottom",
                                                    }}
                                                >
                                                    {Icon && (
                                                        <span className={cn("transition-colors duration-300", isActive ? item.iconColor : "")}>
                                                            <Icon className="h-5 w-5" />
                                                        </span>
                                                    )}
                                                    <span className="text-lg font-medium">{item.name}</span>
                                                </motion.div>
                                                <motion.div
                                                    className={cn(
                                                        "flex items-center gap-2 px-4 py-3 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl min-h-[44px]",
                                                        isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                                                    )}
                                                    variants={backVariants}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 100,
                                                        damping: 20,
                                                        duration: 0.5,
                                                    }}
                                                    style={{
                                                        transformStyle: "preserve-3d",
                                                        transformOrigin: "center top",
                                                        rotateX: 90,
                                                    }}
                                                >
                                                    {Icon && (
                                                        <span className={cn("transition-colors duration-300", isActive ? item.iconColor : "")}>
                                                            <Icon className="h-5 w-5" />
                                                        </span>
                                                    )}
                                                    <span className="text-lg font-medium">{item.name}</span>
                                                </motion.div>
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}