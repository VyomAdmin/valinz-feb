'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'About', href: '#about' },
        { name: 'Insights', href: '#insights' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[rgba(10,25,47,0.85)] backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(10, 25, 47, 0.9)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--color-tertiary-dark)' : 'none'
            }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight text-[var(--color-text-white)]">
                    VALINZ<span style={{ color: 'var(--color-text-secondary)' }}>TECH</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-[var(--color-text-white)] transition-colors"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" href="#contact" className="ml-4 py-2 px-4 text-sm">
                        Contact Us
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[var(--color-text-white)]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-secondary-dark)] border-b border-[var(--color-tertiary-dark)] py-4 shadow-xl">
                    <nav className="flex flex-col px-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium py-2 border-b border-[var(--color-tertiary-dark)]"
                                style={{ color: 'var(--color-text-secondary)' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" href="#contact" className="mt-2 w-full justify-center">
                            Contact Us
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
