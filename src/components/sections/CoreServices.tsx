import React from 'react';
import Button from '../ui/Button';
import { Lock, Shield, Search, Users, CheckSquare, Cpu, ArrowRight } from 'lucide-react';

const CoreServices = () => {
    const services = [
        {
            title: "DPDPA Compliance",
            description: "End-to-end implementation of India's Digital Personal Data Protection Act framework.",
            icon: Lock,
            link: "#dpdpa"
        },
        {
            title: "Cybersecurity Audits",
            description: "Technical gap analysis and vulnerability assessments for enterprise systems.",
            icon: Search,
            link: "#services"
        },
        {
            title: "Privacy Governance",
            description: "Systematic data protection frameworks for global regulatory alignment (GDPR/ISO).",
            icon: Shield,
            link: "#services"
        },
        {
            title: "Compliance & Risk Management",
            description: "Architecting enterprise-grade risk frameworks and proactive governance models.",
            icon: CheckSquare,
            link: "#services"
        },
        {
            title: "AI & Tech Governance",
            description: "Governing emerging technologies through ethical and secure framework architecture.",
            icon: Cpu,
            link: "#services"
        },
        {
            title: "Training & Enablement",
            description: "Building internal organizational capability for sustainable governance culture.",
            icon: Users,
            link: "#services"
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                        Core Services
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        Structured governance solutions designed to build trust and ensure long-term technological resilience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-[#0D1426]/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all group">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                                    <Icon className="text-blue-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <a href={service.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                                    Explore Service <ArrowRight size={14} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
