import React from 'react';
import { Search, Layers, Rocket, Shield } from 'lucide-react';

const Approach = () => {
    const phases = [
        {
            number: "01",
            icon: Search,
            title: "ASSESS",
            description: "Comprehensive evaluation of your current technology governance maturity, compliance gaps, and risk landscape."
        },
        {
            number: "02",
            icon: Layers,
            title: "ARCHITECT",
            description: "Design tailored governance frameworks aligned with your business objectives, regulatory requirements, and industry standards."
        },
        {
            number: "03",
            icon: Rocket,
            title: "IMPLEMENT",
            description: "Execute the governance strategy with structured implementation, change management, and stakeholder enablement."
        },
        {
            number: "04",
            icon: Shield,
            title: "ASSURE",
            description: "Continuous monitoring, optimization, and assurance to maintain compliance and adapt to evolving requirements."
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-[#050A18] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Systematic Methodology</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Our Approach
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        A systematic, four-phase governance framework designed for enterprise-grade technology ecosystems.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Connection Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden md:block"></div>

                    <div className="space-y-12 relative">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            const isEven = index % 2 !== 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Number Circle */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#0D1426] border border-blue-500/30 z-20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                        <span className="text-blue-400 font-bold text-sm tracking-tighter">{phase.number}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] ml-20 md:ml-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className="bg-[#0D1426]/50 border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/20 transition-all duration-500 group">
                                            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                    <Icon className="w-5 h-5 text-blue-400" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white tracking-tight">
                                                    {phase.title}
                                                </h3>
                                            </div>
                                            <p className="text-slate-400 leading-relaxed text-sm font-medium">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer for MD screens */}
                                    <div className="hidden md:block w-[10%]"></div>
                                    <div className="hidden md:block w-[45%]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
