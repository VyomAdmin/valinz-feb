import React from 'react';

const SectionDivider = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Subtle structured pattern */}
                    <div className="relative">
                        <div className="absolute inset-0 opacity-10">
                            <div className="grid grid-cols-12 gap-4 h-full">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="border-l border-blue-500/30"></div>
                                ))}
                            </div>
                        </div>

                        {/* Center line with gradient */}
                        <div className="relative h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                        {/* Center dot */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionDivider;
