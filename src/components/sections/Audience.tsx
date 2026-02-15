import React from 'react';

const Audience = () => {
    const segments = [
        {
            title: "Startups",
            description: "Scale with confidence by building solid governance foundations from day one. DPDPA ready from launch."
        },
        {
            title: "Scaling Enterprises",
            description: "Manage increasing complexity through systematic framework updates and dedicated assurance models."
        },
        {
            title: "Established Organizations",
            description: "Transform legacy governance into intelligent, future-ready architectures that drive competitive trust."
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
                        Who We Serve
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        Specialized governance intelligence for every stage of your technological evolution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {segments.map((segment, index) => (
                        <div key={index} className="bg-[#0D1426]/30 border border-white/5 p-12 rounded-[2.5rem] hover:border-blue-500/20 transition-all">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-blue-400 mb-6">{segment.title}</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                {segment.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
                        Based in Noida | Serving Delhi NCR and beyond
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Audience;
