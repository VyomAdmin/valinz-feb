import React from 'react';
import { Brain, Box, Share2 } from 'lucide-react';

const Differentiation = () => {
    const diffs = [
        {
            title: "Architecture over Checklists",
            description: "We don't just tick boxes. We build systematic governance architectures that integrate deeply into your technology stack.",
            icon: Box
        },
        {
            title: "Intelligence-Driven",
            description: "Using proactive, data-informed strategies to anticipate risks before they impact your organization.",
            icon: Brain
        },
        {
            title: "Holistic Governance",
            description: "Bridging the gap between legal policy, technical security, and business objectives through single-framework alignment.",
            icon: Share2
        }
    ];

    return (
        <section className="py-24 bg-[#0D1426] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                        The ValinzTech Difference
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        Why the world's most innovative companies choose our systematic approach to governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {diffs.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-[#020617]/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                                    <Icon className="text-blue-400" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
