"use client";

import { motion } from "framer-motion";
import { FaPython, FaMicrosoft, FaNetworkWired } from "react-icons/fa";
import { SiSplunk, SiJavascript, SiCplusplus, SiGnubash, SiKalilinux, SiWireshark, SiBurpsuite, SiMetasploit, SiVmware } from "react-icons/si";
import { Shield, Users, MessageSquare, Brain, Zap, Search, Target, Lock, Radio, FileSearch, Eye, AlertTriangle, Network, Server, FileText } from "lucide-react";

const skills = [
    {
        category: "Security Operations & Blue Team",
        icon: <Shield className="w-6 h-6" />,
        items: [
            { name: "Incident Response", icon: <AlertTriangle /> },
            { name: "Threat Analysis & Threat Intelligence", icon: <Target /> },
            { name: "Digital Forensics", icon: <FileSearch /> },
            { name: "OSINT", icon: <Search /> },
            { name: "MITRE ATT&CK", icon: <Shield /> },
            { name: "IDS / IPS", icon: <Eye /> },
            { name: "EDR", icon: <Lock /> },
            { name: "Splunk", icon: <SiSplunk /> }
        ],
        className: "md:col-span-2 md:row-span-1 bg-indigo-900/20 border-indigo-500/20",
    },
    {
        category: "Offensive Security & Tools",
        icon: <SiKalilinux className="w-6 h-6" />,
        items: [
            { name: "Network Vulnerability Scanning", icon: <Radio /> },
            { name: "Penetration Testing", icon: <SiKalilinux /> },
            { name: "Burp Suite", icon: <SiBurpsuite /> },
            { name: "Nmap", icon: <SiKalilinux /> },
            { name: "Metasploit", icon: <SiMetasploit /> },
            { name: "Nessus", icon: <Search /> },
            { name: "Wireshark", icon: <SiWireshark /> }
        ],
        className: "md:col-span-2 md:row-span-1 bg-red-900/20 border-red-500/20",
    },
    {
        category: "Networking & Infrastructure",
        icon: <Network className="w-6 h-6" />,
        items: [
            { name: "TCP/IP & OSI Models", icon: <Network /> },
            { name: "LAN / WAN", icon: <FaNetworkWired /> },
            { name: "DNS", icon: <Server /> },
            { name: "DHCP", icon: <Server /> },
            { name: "VPN", icon: <Lock /> },
            { name: "Firewall", icon: <Shield /> },
            { name: "Active Directory", icon: <FaMicrosoft /> },
            { name: "VMware", icon: <SiVmware /> }
        ],
        className: "md:col-span-2 md:row-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Languages & Scripting",
        icon: <SiJavascript className="w-6 h-6" />,
        items: [
            { name: "Python", icon: <FaPython /> },
            { name: "Bash", icon: <SiGnubash /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "C++", icon: <SiCplusplus /> }
        ],
        className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Soft Skills",
        icon: <Users className="w-6 h-6" />,
        items: [
            { name: "Communication", icon: <MessageSquare /> },
            { name: "Problem Solving", icon: <Brain /> },
            { name: "Leadership", icon: <Users /> },
            { name: "Adaptability", icon: <Zap /> },
            { name: "Analytical Thinking", icon: <Brain /> },
            { name: "Documentation", icon: <FileText /> }
        ],
        className: "md:col-span-2 bg-emerald-900/20 border-emerald-500/20",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills that fuel my passion</h2>
                    <p className="text-muted-foreground max-w-md">
                        My technical arsenal, ranging from offensive and defensive security tools to modern web development frameworks.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-3xl border flex flex-col ${
                                skill.category === "Offensive Security & Tools" || skill.category === "Languages & Scripting" 
                                    ? "gap-4" 
                                    : "justify-between"
                            } group hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${skill.className}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {skill.icon}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="relative group/tooltip"
                                        >
                                            <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                                                <span className="text-lg">{item.icon}</span>
                                                {item.name}
                                            </span>

                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-800 text-white text-xs rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 z-20">
                                                {item.name}
                                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45 border-b border-r border-white/10"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}