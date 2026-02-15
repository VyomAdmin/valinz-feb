import React from 'react';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

const Location = () => {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Map/Visual */}
                    <div className="relative">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12 h-full flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Delhi NCR & Beyond
                                </h3>
                                <p className="text-slate-300 text-lg">
                                    Serving organizations across India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">
                                Our Location
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                                    <p className="text-slate-300">
                                        Delhi NCR, India<br />
                                        Serving clients nationwide
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                                    <p className="text-slate-300">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 10:00 AM - 2:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                                    <a href="mailto:contact@valinztech.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        contact@valinztech.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                                    <a href="tel:+919953562762" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        +91 9953562762
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
