import React from 'react';
import { Brain, Box, Share2 } from 'lucide-react';

const Differentiation = () => {
    const differentiators = [
        {
            title: 'Understanding Drives Results',
            desc: "We help you understand the 'why' behind requirements, not just the 'what.' Our clients gain both compliance and capability—reducing dependency while building internal expertise.",
            icon: <Brain className="text-[var(--color-text-accent)]" size={40} />
        },
        {
            title: 'Systematic Frameworks, Not Checklists',
            desc: "We establish governance structures that bring order to complexity. Our methodologies create sustainable systems that evolve with your organization and regulatory landscape.",
            icon: <Box className="text-[var(--color-text-accent)]" size={40} />
        },
        {
            title: 'Holistic Governance Approach',
            desc: "We see connections others miss. Privacy, security, AI, and compliance aren't isolated domains—we integrate them into cohesive governance that reduces real business risk.",
            icon: <Share2 className="text-[var(--color-text-accent)]" size={40} />
        }
    ];

    return (
        <section id="methodology" className="section bg-[var(--color-secondary-dark)]">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <div className="inline-block mb-4 px-3 py-1 border border-[var(--color-tertiary-dark)] rounded text-xs font-semibold tracking-wider text-[var(--color-text-accent)] uppercase">
                        The ValinzTech Difference
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-white)] mb-6">
                        Intelligence Induced Into <br /> Every Engagement
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl">
                        We don&apos;t just implement compliance—we build the frameworks your organization will depend on.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <div key={index} className="flex flex-col h-full bg-[var(--color-primary-dark)] border border-[var(--color-tertiary-dark)] p-8 rounded-lg">
                            <div className="mb-6 p-4 rounded-full bg-[rgba(100,255,218,0.05)] w-20 h-20 flex items-center justify-center border border-[rgba(100,255,218,0.1)]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[var(--color-text-white)]">{item.title}</h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
