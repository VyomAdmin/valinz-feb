import React from 'react';
import { FileText, Calendar, Rocket } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Calendar,
            title: "Schedule",
            description: "Book a free 30-minute consultation at your convenience"
        },
        {
            icon: FileText,
            title: "Discuss",
            description: "We'll understand your governance needs and challenges"
        },
        {
            icon: Rocket,
            title: "Collaborate",
            description: "Receive a tailored proposal and begin your governance journey"
        }
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How Consultations Work
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        A simple 3-step process to get started
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative text-center"
                            >
                                {/* Step number */}
                                <div className="text-8xl font-black text-blue-500/10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="relative bg-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow connector (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-20 -right-4 text-blue-500/30 text-4xl">
                                        →
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
