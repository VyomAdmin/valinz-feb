import React from 'react';
import Button from '../ui/Button';

const LetsConnect = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Ready to build trust and compliance into your technology systems? Let's discuss how ValinzTech can help your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button variant="primary" href="#contact-form" className="text-lg py-4 px-10">
                            Schedule Free Consultation
                        </Button>
                        <Button variant="secondary" href="mailto:contact@valinztech.com" className="text-lg py-4 px-10">
                            Email Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsConnect;
