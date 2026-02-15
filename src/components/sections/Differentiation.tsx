import React from 'react';
import { Brain, Box, Share2 } from 'lucide-react';

const Differentiation = () => {
    const differentiators = [
        {
            title: 'Understanding Drives Results',
            desc: "We help you understand the 'why' behind requirements, not just the 'what.' Our clients gain both compliance and capability—reducing dependency while building internal expertise.",
            icon: Brain
        },
        {
            title: 'Systematic Frameworks, Not Checklists',
            desc: "We establish governance structures that bring order to complexity. Our methodologies create sustainable systems that evolve with your organization and regulatory landscape.",
            icon: Box
        },
        {
            title: 'Holistic Governance Approach',
            desc: "We see connections others miss. Privacy, security, AI, and compliance aren't isolated domains—we integrate them into cohesive governance that reduces real business risk.",
            icon: Share2
        }
    ];

    return (
        <section id="differentiation" className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 border border-white/5 rounded-full bg-slate-400/5 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">The Valinz Difference</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Intelligence Induced <br /> Into Every Engagement
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        We don't just implement compliance—we build the frameworks your organization will depend on.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="group h-full bg-[#0D1426]/30 border border-white/5 p-12 rounded-[3rem] hover:border-blue-500/20 transition-all duration-500 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-blue-500/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-blue-500/10 transition-colors">
                                    <Icon className="w-10 h-10 text-blue-400/70" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
