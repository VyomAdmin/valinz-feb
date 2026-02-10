import React from 'react';
import Button from '../ui/Button';
import { Lock, Shield, Search, Users, CheckSquare, Cpu, ArrowRight } from 'lucide-react';

const CoreServices = () => {
    const services = [
        {
            title: 'Privacy & Data Protection',
            desc: 'GDPR, DPDPA, and comprehensive privacy program implementation with systematic frameworks.',
            icon: <Lock className="text-[var(--color-text-accent)]" size={32} />
        },
        {
            title: 'Cybersecurity Consulting',
            desc: 'Risk Assessment, Compliance and Threat mitigation.',
            icon: <Shield className="text-[var(--color-text-accent)]" size={32} />
        },
        {
            title: 'Audits & Assessments',
            desc: 'Independent validation of security posture, code quality, and architectural decisions.',
            icon: <Search className="text-[var(--color-text-accent)]" size={32} />
        },
        {
            title: 'Training & Enablement',
            desc: 'Role-based training, awareness programs, and executive education to build internal capability.',
            icon: <Users className="text-[var(--color-text-accent)]" size={32} />
        },
        {
            title: 'Compliance & Risk Management',
            desc: 'Governance, Risk & Compliance through structured, intelligence-driven programs.',
            icon: <CheckSquare className="text-[var(--color-text-accent)]" size={32} />
        },
        {
            title: 'AI Governance & Ethics',
            desc: 'Responsible AI frameworks, risk assessments, and regulatory alignment for emerging technologies.',
            icon: <Cpu className="text-[var(--color-text-accent)]" size={32} />
        }
    ];

    return (
        <section id="services" className="section bg-[var(--color-primary-dark)]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Technology Assurance</h2>
                    <p className="text-[var(--color-text-secondary)] text-lg">
                        Beyond DPDPA, we provide intelligence-driven consulting across every dimension of technology governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="card p-8 group hover:border-[var(--color-text-accent)] transition-all">
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-white)] group-hover:text-[var(--color-text-accent)] transition-colors">{service.title}</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="flex items-center text-sm font-medium text-[var(--color-text-white)] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Services <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="secondary" href="#contact">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
