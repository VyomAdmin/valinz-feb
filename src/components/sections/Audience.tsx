import React from 'react';

const Audience = () => {
    const audiences = [
        {
            title: 'Growing Startups',
            desc: 'Building governance foundations for investor due diligence and sustainable growth. Common needs: SOC 2, DPDPA readiness, security assessments.'
        },
        {
            title: 'Scaling Companies',
            desc: 'Navigating regulatory requirements while maintaining operational agility. Common needs: ISO 27001, comprehensive privacy programs, AI governance.'
        },
        {
            title: 'Established Enterprises',
            desc: 'Meeting stakeholder expectations and regulatory obligations across complex operations. Common needs: Integrated GRC, third-party risk, continuous assurance.'
        }
    ];

    return (
        <section className="section bg-[var(--color-primary-dark)] border-b border-[var(--color-tertiary-dark)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Built for Organizations Committed to Excellence</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiences.map((segment, index) => (
                        <div key={index} className="p-8 border-l-2 border-[var(--color-tertiary-dark)] hover:border-[var(--color-text-accent)] hover:bg-[var(--color-secondary-dark)] transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4 text-[var(--color-text-white)]">{segment.title}</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                {segment.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 text-sm text-[var(--color-text-secondary)] tracking-wide">
                    BASED IN NOIDA | SERVING DELHI NCR AND BEYOND
                </div>
            </div>
        </section>
    );
};

export default Audience;
