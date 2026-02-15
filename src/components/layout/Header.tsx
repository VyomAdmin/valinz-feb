'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navigation = [
        {
            name: 'Services',
            href: '#services',
            dropdown: [
                { name: 'DPDPA Compliance', href: '#dpdpa' },
                { name: 'All Services', href: '#services' }
            ]
        },
        { name: 'About & Contact', href: '#about' },
        {
            name: 'Resources',
            href: '#insights',
            dropdown: [
                { name: 'Blog', href: '#insights' },
                { name: 'Case Studies', href: '#insights' },
                { name: 'Downloads', href: '#insights' }
            ]
        }
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050A18]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold tracking-tighter text-white">VALINZ<span className="text-[#64ffda]">TECH</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors flex items-center gap-1.5"
                            >
                                {item.name}
                                {item.dropdown && <ChevronRight size={10} className={`rotate-90 transition-transform ${activeDropdown === item.name ? 'rotate-[270deg]' : ''}`} />}
                            </Link>

                            {item.dropdown && activeDropdown === item.name && (
                                <div className="absolute top-full left-0 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-[#0D1426] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-3 text-xs font-semibold text-slate-300 hover:text-[#64ffda] hover:bg-white/5 rounded-lg transition-colors"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button variant="primary" href="#contact" className="ml-4 py-2 px-6 text-xs bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda] hover:bg-[#64ffda]/20 rounded-full">
                        Free Consultation
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0D1426] border-b border-white/10 py-8 shadow-2xl animate-in fade-in slide-in-from-top-4">
                    <nav className="flex flex-col px-6 gap-6">
                        {navigation.map((item) => (
                            <div key={item.name} className="space-y-4">
                                <Link
                                    href={item.href}
                                    className="text-lg font-bold text-white block"
                                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-4 flex flex-col gap-4 border-l border-white/5">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="text-slate-400 font-medium"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Button variant="primary" href="#contact" className="mt-4 w-full justify-center py-4 bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda]" onClick={() => setIsMobileMenuOpen(false)}>
                            Free Consultation
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
