import React from 'react';
import { Search, Layers, Rocket, Shield } from 'lucide-react';

const Approach = () => {
    const phases = [
        {
            number: "01",
            icon: Search,
            title: "ASSESS",
            description: "Comprehensive evaluation of your current technology governance maturity and compliance gaps."
        },
        {
            number: "02",
            icon: Layers,
            title: "ARCHITECT",
            description: "Design tailored governance frameworks aligned with your business objectives and regulatory requirements."
        },
        {
            number: "03",
            icon: Rocket,
            title: "IMPLEMENT",
            description: "Execute the governance strategy with structured implementation and stakeholder enablement."
        },
        {
            number: "04",
            icon: Shield,
            title: "ASSURE",
            description: "Continuous monitoring and assurance to maintain compliance and adapt to evolving requirements."
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
                        Our Approach
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        A systematic, four-phase governance framework designed for enterprise technology ecosystems.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center"
                                >
                                    {/* Number Circle on Top */}
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0D1426] border border-blue-500/30 z-20 shadow-2xl mb-6">
                                        <span className="text-blue-400 font-bold text-lg tracking-tighter">{phase.number}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full">
                                        <div className="bg-[#0D1426]/50 border border-white/5 p-6 rounded-2xl hover:border-blue-500/20 transition-all h-full flex flex-col">
                                            <div className="flex items-center gap-3 mb-4 justify-center">
                                                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Icon className="text-blue-400" size={20} />
                                                </div>
                                                <h3 className="text-lg font-bold text-white tracking-tight uppercase">
                                                    {phase.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-slate-500 leading-relaxed font-medium flex-grow">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
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
