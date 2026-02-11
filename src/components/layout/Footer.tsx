import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#020c1b', borderTop: '1px solid var(--color-tertiary-dark)' }} className="pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

                    {/* Column 1: About */}
                    <div>
                        <div className="mb-6">
                            <Logo className="h-12 w-auto" variant="dark" />
                        </div>
                        <p className="text-[var(--color-text-secondary)] mb-6 text-sm leading-relaxed">
                            Serving Delhi NCR and beyond | ISO 27001 Expertise | DPDPA Specialists.
                            Trust, Intelligence, Compliance.
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[var(--color-text-white)]">Services</h4>
                        <ul className="space-y-3">
                            {['DPDPA Compliance', 'Cybersecurity Consulting', 'Privacy & Data Protection', 'AI Governance', 'Compliance & Risk', 'Technical Audits'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-white)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[var(--color-text-white)]">Resources</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Our Approach', 'Blog / Insights', 'Case Studies', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-white)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[var(--color-text-white)]">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                                <MapPin size={18} className="mt-0.5 shrink-0" />
                                <span>Noida, Delhi NCR</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                                <Mail size={18} />
                                <a href="mailto:contact@valinztech.com" className="hover:text-[var(--color-text-white)]">contact@valinztech.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                                <Phone size={18} />
                                <a href="tel:+919953562762" className="hover:text-[var(--color-text-white)]">+91-9953562762</a>
                            </li>
                            <li className="mt-4">
                                <a href="#" className="inline-flex items-center justify-center p-2 border border-[var(--color-tertiary-dark)] rounded hover:border-[var(--color-text-white)] hover:text-[var(--color-text-white)] text-[var(--color-text-secondary)] transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--color-tertiary-dark)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                    <p>&copy; {new Date().getFullYear()} ValinzTech. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[var(--color-text-white)]">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[var(--color-text-white)]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
