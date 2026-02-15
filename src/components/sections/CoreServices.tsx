import React from 'react';
import Button from '../ui/Button';
import { Lock, Shield, Search, Users, CheckSquare, Cpu, ArrowRight } from 'lucide-react';

const CoreServices = () => {
    const services = [
        {
            title: 'Privacy & Data Protection',
            desc: 'GDPR, DPDPA, and comprehensive privacy program implementation with systematic frameworks.',
            icon: Lock
        },
        {
            title: 'Cybersecurity Consulting',
            desc: 'Enterprise-grade risk assessment, compliance mapping, and threat mitigation strategies.',
            icon: Shield
        },
        {
            title: 'Audits & Assessments',
            desc: 'Independent validation of security posture, code quality, and architectural decisions.',
            icon: Search
        },
        {
            title: 'Training & Enablement',
            desc: 'Role-based training, awareness programs, and executive education to build internal capability.',
            icon: Users
        },
        {
            title: 'Compliance & Risk Management',
            desc: 'Governance, Risk & Compliance (GRC) through structured, intelligence-driven programs.',
            icon: CheckSquare
        },
        {
            title: 'AI Governance & Ethics',
            desc: 'Responsible AI frameworks, risk assessments, and regulatory alignment for emerging technologies.',
            icon: Cpu
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 border border-blue-500/20 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Core Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Technology Assurance
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        Beyond DPDPA, we provide intelligence-driven consulting across every dimension of technology governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group relative h-full bg-[#0D1426]/30 border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-blue-500/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/10 transition-colors">
                                    <Icon className="w-7 h-7 text-blue-400/70 group-hover:text-[#64ffda] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
                                    {service.desc}
                                </p>
                                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#64ffda] uppercase opacity-40 group-hover:opacity-100 transition-all">
                                    Explore Service <ArrowRight size={14} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Button variant="secondary" href="#contact-form" className="text-xs py-4 px-10 uppercase tracking-widest rounded-full">
                        View All Capabilities
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
