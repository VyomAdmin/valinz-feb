import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
    const missions = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower organizations with Intelligence-Driven Technology Governance frameworks that build trust, ensure compliance, and drive digital transformation."
        },
        {
            icon: Users,
            title: "Our Vision",
            description: "A world where technology governance is proactive, intelligent, and seamlessly integrated into every organization's DNA."
        },
        {
            icon: Lightbulb,
            title: "Our Purpose",
            description: "Bridging the gap between complex regulatory requirements and practical business implementation through expert guidance and systematic frameworks."
        }
    ];

    return (
        <section id="about" className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Purpose & Values</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Why We Exist
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        ValinzTech helps organizations build trust in the digital age through systematic governance frameworks and expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {missions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="h-full bg-[#0D1426]/30 border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all duration-500 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                                        <Icon className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                        {item.description}
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

export default Mission;
