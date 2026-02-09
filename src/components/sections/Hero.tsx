import React from 'react';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background - Subtle grid pattern */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(var(--color-tertiary-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-tertiary-dark) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[var(--color-primary-dark)]"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-4 inline-block px-3 py-1 border border-[var(--color-tertiary-dark)] rounded-full backdrop-blur-sm bg-[rgba(10,25,47,0.5)]">
                    <span className="text-xs font-semibold tracking-wider text-[var(--color-text-accent)]">TRUST. INTELLIGENCE. COMPLIANCE.</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Intelligence-Driven <br />
                    <span className="text-[var(--color-text-white)] bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--color-text-secondary)]">Technology Governance</span>
                </h1>

                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
                    We help organizations build intelligent, secure, compliant, and future-ready technology systems through systematic governance frameworks.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button variant="primary" href="#dpdpa">
                        DPDPA Compliance Services <ChevronRight size={16} className="ml-2" />
                    </Button>
                    <Button variant="secondary" href="#contact">
                        Schedule Free Consultation
                    </Button>
                </div>

                {/* Trust Bar */}
                <div className="pt-8 border-t border-[var(--color-tertiary-dark)] max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-[var(--color-text-secondary)] opacity-80">
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-accent)]"></span>
                        Serving Delhi NCR
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-accent)]"></span>
                        ISO 27001 Expertise
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-accent)]"></span>
                        DPDPA Specialists
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
