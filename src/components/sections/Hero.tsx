import React from 'react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
            {/* Background Decor - Subtle blue glows */}
            <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] z-0"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-blue-900/20 rounded-full blur-[100px] z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <div className="mb-6 inline-block px-4 py-1.5 border border-[rgba(100,255,218,0.2)] rounded-full backdrop-blur-md bg-[rgba(10,25,47,0.4)]">
                            <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-text-accent)] uppercase">Trust. Intelligence. Compliance.</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[0.95] text-white">
                            Intelligence <br />
                            <span className="text-[var(--color-text-white)] bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-blue-400">Governance</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-xl leading-relaxed font-medium">
                            We help organizations build intelligent, secure, and compliant technology systems through systematic governance frameworks.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto">
                            <Button variant="primary" href="#dpdpa" className="text-lg py-4 px-10 shadow-2xl">
                                DPDPA Compliance <ChevronRight size={20} className="ml-2" />
                            </Button>
                            <Button variant="secondary" href="#contact" className="text-lg py-4 px-10 shadow-xl">
                                Free Consultation
                            </Button>
                        </div>

                        {/* Trust Bar - More Prominent */}
                        <div className="pt-10 border-t border-[rgba(255,255,255,0.1)] flex flex-wrap gap-x-12 gap-y-4 text-base font-semibold text-white">
                            <span className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                                Serving Delhi NCR and beyond
                            </span>
                            <span className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                                DPDPA Specialists
                            </span>
                        </div>
                    </div>

                    {/* Right Side: 3D Graphic Placeholder */}
                    <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
                        <div className="relative group">
                            {/* Stylized Logo with 3D effect */}
                            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-transparent blur-2xl rounded-full opacity-50"></div>
                                <Logo className="w-[400px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] contrast-125 saturate-50 brightness-110" />
                                {/* Overlay for metallic sheen */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 border border-blue-500/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-white/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
