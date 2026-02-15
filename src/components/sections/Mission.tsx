import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
    const missions = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower organizations with intelligent technology governance frameworks that build trust, ensure compliance, and drive sustainable digital transformation."
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
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why We Exist
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        ValinzTech helps organizations build trust in the digital age through systematic governance frameworks and expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {missions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Mission;
