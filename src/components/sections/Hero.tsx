import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050A18]">
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Grid / Structural Pattern */}
                <div className="absolute inset-0 opacity-[0.1]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Soft blue/teal lighting gradients */}
                <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-[#64ffda]/5 rounded-full blur-[100px]"></div>

                {/* Abstract animated lines */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#64ffda]/30 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <div className="mb-6 inline-block px-4 py-1.5 border border-[#64ffda]/20 rounded-full backdrop-blur-md bg-blue-900/10">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#64ffda] uppercase">Trusted Governance Experts</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.05] text-white">
                            Intelligent Technology<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">Governance</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed font-medium">
                            ValinzTech helps organizations build trust in the digital age through systematic governance frameworks and expert guidance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto">
                            <Button variant="primary" href="#about" className="text-lg py-4 px-10 shadow-2xl shadow-blue-900/40 bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda]/20 group">
                                Explore About Us <ChevronRight size={20} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="secondary" href="#contact" className="text-lg py-4 px-10 backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
                                Free Consultation
                            </Button>
                        </div>

                        {/* Authority Tags */}
                        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-semibold text-slate-400 border-t border-white/5 pt-10">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] shadow-[0_0_8px_#64ffda]"></span>
                                Confident
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                Structured
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                                Enterprise-Grade
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Valinz Icon */}
                    <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
                        <div className="relative group">
                            {/* Glass Framed Container Effect */}
                            <div className="absolute -inset-10 bg-[#64ffda]/5 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>

                            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
                                <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl">
                                    <Image
                                        src="/images/Valinz-Icon.jpeg"
                                        alt="ValinzTech Icon"
                                        width={450}
                                        height={450}
                                        className="w-[400px] h-auto rounded-[2rem] shadow-2xl contrast-110 saturate-[0.9] brightness-105"
                                    />
                                </div>
                                {/* Subtle sheen overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay rounded-[2.5rem]"></div>
                            </div>

                            {/* Decorative structural lines */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 border border-[#64ffda]/10 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 border border-white/5 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
