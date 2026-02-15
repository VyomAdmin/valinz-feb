'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is DPDPA and why does my organization need it?",
            answer: "The Digital Personal Data Protection Act (DPDPA) is India's data protection law that regulates how organizations collect, process, and store personal data. Compliance is mandatory for organizations handling Indian citizens' data, with significant penalties for non-compliance."
        },
        {
            question: "How long does DPDPA compliance implementation take?",
            answer: "Timeline varies based on your organization's size and current maturity. Typically, initial assessment takes 2-4 weeks, framework design 4-6 weeks, and implementation 3-6 months. We provide a detailed roadmap during the consultation."
        },
        {
            question: "What makes ValinzTech different from other consultants?",
            answer: "We combine deep technical expertise with practical business understanding. Our systematic 4-phase approach ensures sustainable compliance, not just checkbox exercises. We focus on building governance capabilities within your team, not creating dependency."
        },
        {
            question: "Do you work with organizations outside Delhi NCR?",
            answer: "Yes, we serve clients across India and internationally. Our hybrid engagement model combines remote collaboration with strategic on-site sessions as needed."
        },
        {
            question: "What happens during the free consultation?",
            answer: "We'll discuss your specific governance challenges, assess your current state, explain our approach, and provide initial recommendations. There's no obligation, and you'll leave with actionable insights regardless of whether we work together."
        },
        {
            question: "Can you help with other compliance frameworks beyond DPDPA?",
            answer: "Absolutely. We specialize in multiple frameworks including ISO 27001, SOC 2, GDPR alignment, and custom governance frameworks. Our expertise spans the full spectrum of technology governance and compliance."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#050A18]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                            Governance FAQs
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                            Clear answers to common questions about our systematic approach.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-[#0D1426]/30 border rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === index ? 'border-blue-500/30 ring-1 ring-blue-500/10' : 'border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-xl font-bold text-white tracking-tight pr-8">
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-blue-500/10' : ''}`}>
                                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-blue-400' : 'text-slate-500'}`} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <div className="px-8 pb-8 text-slate-400 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
