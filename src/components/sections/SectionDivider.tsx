import React from 'react';

const SectionDivider = () => {
    return (
        <section className="relative h-64 flex items-center justify-center overflow-hidden">
            {/* Soft Gradient Shift */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-blue-900/5 to-[#050A18]"></div>

            {/* Thin Structured Pattern Overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    {/* Visual signal change */}
                    <div className="w-px h-24 bg-gradient-to-b from-[#64ffda]/40 to-transparent mb-8"></div>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase">Transitions</span>
                </div>
            </div>
        </section>
    );
};

export default SectionDivider;
