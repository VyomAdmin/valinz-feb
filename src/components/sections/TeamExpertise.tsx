import React from 'react';
import { Award, BookOpen, Users, TrendingUp, Lock, Globe } from 'lucide-react';

const TeamExpertise = () => {
    const expertiseAreas = [
        {
            icon: Lock,
            title: "Data Protection & Privacy",
            description: "DPDPA compliance, GDPR alignment, privacy frameworks, and data governance strategies"
        },
        {
            icon: Award,
            title: "Compliance & Audit",
            description: "ISO 27001, SOC 2, regulatory compliance, and continuous assurance programs"
        },
        {
            icon: Globe,
            title: "Technology Governance",
            description: "IT governance frameworks, risk management, and strategic technology alignment"
        },
        {
            icon: Users,
            title: "Organizational Change",
            description: "Governance culture building, stakeholder management, and capability development"
        },
        {
            icon: TrendingUp,
            title: "Process Optimization",
            description: "Workflow design, automation strategies, and operational efficiency improvements"
        },
        {
            icon: BookOpen,
            title: "Advisory & Training",
            description: "Expert consulting, governance workshops, and customized training programs"
        }
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Team & Expertise
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Deep expertise across technology governance, compliance, and organizational transformation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {expertiseAreas.map((area, index) => {
                        const Icon = area.icon;
                        return (
                            <div
                                key={index}
                                className="border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {area.title}
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            {area.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Certifications & Credentials */}
                <div className="border-t border-slate-700 pt-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Backed by Industry Certifications
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                            <span className="px-6 py-3 border border-slate-700 rounded-lg">ISO 27001 Lead Auditor</span>
                            <span className="px-6 py-3 border border-slate-700 rounded-lg">CIPP/E Certified</span>
                            <span className="px-6 py-3 border border-slate-700 rounded-lg">CISSP</span>
                            <span className="px-6 py-3 border border-slate-700 rounded-lg">DPDPA Specialist</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamExpertise;
