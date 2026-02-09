import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TrustCredibility = () => {
    const credentials = [
        "ISO 27001 Expertise",
        "ISO 31000 Expertise",
        "GDPR & DPDPA Specialists",
        "SOC 2 Implementation",
        "CERT-In Reporting",
        "AI Risk Frameworks",
        "Systematic Methodologies"
    ];

    return (
        <section className="section bg-[var(--color-secondary-dark)] border-y border-[var(--color-tertiary-dark)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Expert Guidance, Proven Methodology</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                        Our team brings deep expertise across cybersecurity, privacy, AI governance, and risk management—combining technical knowledge with business acumen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {credentials.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-[var(--color-primary-dark)] rounded border border-[var(--color-tertiary-dark)]">
                            <CheckCircle2 className="text-[var(--color-text-accent)] shrink-0" size={20} />
                            <span className="text-[var(--color-text-white)] font-medium text-sm">{item}</span>
                        </div>
                    ))}
                    <div className="flex items-center justify-center p-4 bg-[rgba(100,255,218,0.05)] rounded border border-dashed border-[var(--color-text-accent)]">
                        <span className="text-[var(--color-text-accent)] text-sm font-semibold">Your Trusted Partner</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustCredibility;
