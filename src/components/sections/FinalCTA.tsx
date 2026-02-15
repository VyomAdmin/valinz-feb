import React from 'react';
import Button from '../ui/Button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section id="final-cta" className="relative py-32 overflow-hidden bg-[#050A18]">
            {/* Immersive Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,255,218,0.1),transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#64ffda]/30 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-10 inline-block px-4 py-1.5 border border-[#64ffda]/20 rounded-full bg-[#64ffda]/5">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-[#64ffda] uppercase">Next Steps</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                        Ready to Build <br /> Governance <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-blue-400">That Lasts?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                        Discuss your specific needs—from DPDPA compliance to comprehensive technology assurance—with our senior consultants.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <Button variant="primary" href="#contact-form" className="w-full sm:w-auto text-sm py-5 px-16 uppercase tracking-[0.2em] font-bold bg-[#64ffda] text-[#050A18] hover:bg-[#64ffda]/90 rounded-full shadow-[0_0_50px_rgba(100,255,218,0.25)] transition-all scale-110">
                            Schedule Your Free Consultation
                        </Button>

                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-4 border-t border-white/5 opacity-60">
                            <a href="mailto:contact@valinztech.com" className="text-xs font-bold text-slate-400 hover:text-white transition-colors tracking-widest uppercase">contact@valinztech.com</a>
                            <a href="tel:+919953562762" className="text-xs font-bold text-slate-400 hover:text-white transition-colors tracking-widest uppercase">+91 99535 62762</a>
                            <a href="https://wa.me/919953562762" className="text-xs font-bold text-slate-400 hover:text-white transition-colors tracking-widest uppercase">WhatsApp Direct</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
