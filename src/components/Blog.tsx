"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
    title: string;
    pubDate: string;
    link: string;
    thumbnail: string;
    categories: string[];
}

const FEATURED_POSTS: BlogPost[] = [
    {
        title: "Beyond the Search Box: Why OSINT Is Everything Googling Isn't",
        pubDate: new Date().toISOString(),
        link: "https://medium.com/@naveenjc10/beyond-the-search-box-why-osint-is-everything-googling-isnt-a7ade5ee5c52",
        thumbnail: "https://www.webopedia.com/wp-content/uploads/2024/09/what-is-osint-cover.webp",
        categories: ["OSINT", "Cybersecurity"]
    },
    {
        title: "The New Malaysia Cyber Security Act 2024: What Every Business Needs to Know",
        pubDate: new Date().toISOString(),
        link: "https://medium.com/@naveenjc10/the-new-malaysia-cyber-security-act-2024-what-every-business-needs-to-know-cf183bd1d539",
        thumbnail: "https://eccweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/04/26103925/THE-ROLE-OF-CYBER-LAWS-IN-CYBERSECURITY-1.png",
        categories: ["Cybersecurity", "Policy"]
    },
    {
        title: "The Spotify 300TB Leak: When the World's Largest Music Library Went Public",
        pubDate: new Date().toISOString(),
        link: "https://medium.com/@naveenjc10/the-spotify-300tb-leak-when-the-worlds-largest-music-library-went-public-abb42c1d0771",
        thumbnail: "https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categories: ["Data Breach", "Cybersecurity"]
    },
    {
        title: "Nmap Scans That Make Network Admins Lose Sleep (And How to Not Be That Person)",
        pubDate: new Date().toISOString(),
        link: "https://medium.com/@naveenjc10/nmap-scans-that-make-network-admins-lose-sleep-and-how-to-not-be-that-person-95769a78dc33",
        thumbnail: "https://miro.medium.com/1*R6I7ZcaoaL0TIaclrFoR5A.png",
        categories: ["Network Security", "Tools"]
    }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export default function Blog() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        const newIndex = currentIndex + newDirection;
        if (newIndex >= 0 && newIndex < FEATURED_POSTS.length) {
            setDirection(newDirection);
            setCurrentIndex(newIndex);
        }
    };

    const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0
        })
    };

    return (
        <section id="blog" className="py-20 px-4 md:px-10 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Thoughts</h2>
                        <p className="text-muted-foreground max-w-md">
                            Insights and articles on cybersecurity, technology, and my learning journey.
                        </p>
                    </div>
                    <Link
                        href="https://medium.com/@naveenjc10"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                    >
                        Read more blogs on Medium <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Mobile Swipe Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.25, ease: "easeOut" },
                                    opacity: { duration: 0.15 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
                                className="cursor-grab active:cursor-grabbing touch-pan-y"
                            >
                                <BlogCard post={FEATURED_POSTS[currentIndex]} index={currentIndex} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={() => paginate(-1)}
                            disabled={currentIndex === 0}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Previous post"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex gap-2">
                            {FEATURED_POSTS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        idx === currentIndex ? "bg-primary" : "bg-white/20"
                                    }`}
                                    aria-label={`Go to post ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            disabled={currentIndex === FEATURED_POSTS.length - 1}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Next post"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURED_POSTS.map((post, index) => (
                        <BlogCard key={index} post={post} index={index} />
                    ))}
                </div>

                <div className="mt-8 md:hidden flex justify-center">
                    <Link
                        href="https://medium.com/@naveenjc10"
                        target="_blank"
                        className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors min-h-[44px]"
                    >
                        Read more on Medium <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full"
        >
            <Link href={post.link} target="_blank" className="flex-1 flex flex-col">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                    {post.thumbnail ? (
                        <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                            <BookOpen className="w-10 h-10 text-neutral-700" />
                        </div>
                    )}
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex gap-2 mb-3 flex-wrap">
                        {post.categories.slice(0, 2).map((cat, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                                {cat}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-auto">
                        {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}