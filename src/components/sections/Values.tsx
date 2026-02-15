import React from 'react';
import { Heart, Eye, Handshake, Scale, Zap } from 'lucide-react';

const Values = () => {
    const values = [
        {
            icon: Heart,
            title: "Integrity",
            description: "Unwavering commitment to ethical practices and transparent governance"
        },
        {
            icon: Eye,
            title: "Excellence",
            description: "Pursuit of the highest standards in everything we deliver"
        },
        {
            icon: Handshake,
            title: "Partnership",
            description: "Collaborative approach that treats your success as our mission"
        },
        {
            icon: Scale,
            title: "Balance",
            description: "Practical solutions that balance compliance rigor with business pragmatism"
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Continuous improvement and adoption of best practices in governance"
        }
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Values
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        The principles that guide our work and define our partnerships
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
                    {values.slice(0, 4).map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* 5th value centered */}
                <div className="max-w-md mx-auto">
                    {values.slice(4).map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;
