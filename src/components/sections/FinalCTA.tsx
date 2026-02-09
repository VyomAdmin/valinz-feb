import React from 'react';
import Button from '../ui/Button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section id="contact" className="section bg-[var(--color-primary-dark)] text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    Ready to Build Governance <br /> Frameworks That Last?
                </h2>
                <p className="text-xl text-[var(--color-text-secondary)] mb-12">
                    Let&apos;s discuss your specific needs—from DPDPA compliance to comprehensive technology assurance.
                </p>

                <div className="mb-12">
                    <Button variant="primary" className="py-4 px-8 text-lg w-full md:w-auto">
                        Schedule Free Consultation
                    </Button>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-[var(--color-text-secondary)]">
                    <a href="mailto:contact@valinztech.com" className="flex items-center gap-2 hover:text-[var(--color-text-white)] transition-colors">
                        <Mail size={20} />
                        <span>contact@valinztech.com</span>
                    </a>
                    <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-[var(--color-text-white)] transition-colors">
                        <Phone size={20} />
                        <span>+91-XXX-XXX-XXXX</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-[var(--color-text-white)] transition-colors">
                        <MessageCircle size={20} />
                        <span>WhatsApp Consultation</span>
                    </a>
                </div>

                <div className="mt-12 text-sm text-[var(--color-text-secondary)] opacity-60">
                    Initial consultations are complimentary and no-obligation. We&apos;ll understand your situation and determine how we can help.
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
