import React from 'react';
import { Calendar, Mail, MessageCircle, Phone } from 'lucide-react';
import Button from '../ui/Button';

const ContactOptions = () => {
    const options = [
        {
            icon: Calendar,
            title: "Schedule Consultation",
            description: "Book a free 30-minute strategy session",
            cta: "Book Now",
            href: "#contact-form",
            primary: true
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "Send us your questions or project details",
            cta: "Send Email",
            href: "mailto:contact@valinztech.com"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            description: "Quick questions? Message us directly",
            cta: "Chat Now",
            href: "https://wa.me/919953562762"
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak directly with our team",
            cta: "Call Now",
            href: "tel:+919953562762"
        }
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Choose your preferred way to connect with us
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {options.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-slate-800/50 border ${option.primary ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-slate-700'} rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {option.title}
                                </h3>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    {option.description}
                                </p>
                                <Button
                                    variant={option.primary ? 'primary' : 'secondary'}
                                    href={option.href}
                                    className="w-full"
                                >
                                    {option.cta}
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactOptions;
