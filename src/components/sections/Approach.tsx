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
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Approach
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        A systematic, four-phase methodology to build robust technology governance
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        return (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Connection Line */}
                                {index < phases.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0"></div>
                                )}

                                <div className="relative bg-slate-900/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 z-10">
                                    {/* Phase Number */}
                                    <div className="text-6xl font-black text-blue-500/20 mb-4">
                                        {phase.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-blue-400" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {phase.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-300 leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Approach;
