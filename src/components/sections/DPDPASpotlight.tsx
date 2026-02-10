import React from 'react';
import Button from '../ui/Button';
import { ClipboardCheck, Grid, ShieldCheck, ArrowRight } from 'lucide-react';

const DPDPASpotlight = () => {
    return (
        <section id="dpdpa" className="section bg-[var(--color-secondary-dark)] border-y border-[var(--color-tertiary-dark)]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="text-[var(--color-text-accent)] font-semibold text-xs tracking-widest uppercase mb-2">Featured Service</div>
                        <h2 className="text-3xl md:text-4xl">DPDPA Compliance: India&apos;s New Data Protection Reality</h2>
                        <p className="text-[var(--color-text-secondary)] mt-4 text-lg">
                            The Digital Personal Data Protection Act (DPDPA) 2023 brings significant compliance obligations.
                            With penalties up to ₹250 crore, organizations need systematic frameworks—not just checklists.
                        </p>
                    </div>
                    <Button variant="primary" href="#contact" className="shadow-lg whitespace-nowrap">
                        Explore DPDPA Services <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="card p-8 group">
                        <div className="mb-6 w-12 h-12 rounded bg-[rgba(100,255,218,0.1)] flex items-center justify-center text-[var(--color-text-accent)] group-hover:scale-110 transition-transform">
                            <ClipboardCheck size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-white)]">Gap Assessment</h3>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                            Comprehensive analysis of current compliance posture against DPDPA requirements.
                        </p>
                        <span className="text-xs font-medium text-[var(--color-text-accent)] flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight size={12} />
                        </span>
                    </div>

                    {/* Card 2 */}
                    <div className="card p-8 group border-[var(--color-text-accent)] relative">
                        <div className="absolute top-0 right-0 p-2 bg-[var(--color-text-accent)] text-[var(--color-primary-dark)] text-xs font-bold rounded-bl">KEY STEP</div>
                        <div className="mb-6 w-12 h-12 rounded bg-[rgba(100,255,218,0.1)] flex items-center justify-center text-[var(--color-text-accent)] group-hover:scale-110 transition-transform">
                            <Grid size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-white)]">Framework Implementation</h3>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                            Systematic governance structures for Notice & Consent, Data Security, Breach Management, and Customer Rights.
                        </p>
                        <span className="text-xs font-medium text-[var(--color-text-accent)] flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight size={12} />
                        </span>
                    </div>

                    {/* Card 3 */}
                    <div className="card p-8 group">
                        <div className="mb-6 w-12 h-12 rounded bg-[rgba(100,255,218,0.1)] flex items-center justify-center text-[var(--color-text-accent)] group-hover:scale-110 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-white)]">Ongoing Assurance</h3>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                            Continuous monitoring and validation to maintain compliance.
                        </p>
                        <span className="text-xs font-medium text-[var(--color-text-accent)] flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight size={12} />
                        </span>
                    </div>
                </div>

                <p className="text-center text-white text-base font-bold mt-12 mb-4">
                    From readiness assessment to full implementation | Fixed-scope engagements
                </p>
            </div>
        </section>
    );
};

export default DPDPASpotlight;
