import React from 'react'
import campusFooter from "../assets/campusFooter.png"
import { Facebook, Globe, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import logo from "../assets/logo.webp"
export const Footer = () => {
    return (
        <footer className="mt-12">
            <div className="relative w-full h-full">
                <img  src={campusFooter} alt="Campus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white to-black/10" />
            </div>
            <div className="bg-[hsl(0,61%,16%)] text-white py-10 ">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-evenly justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Institute Info */}
                    <div className="flex flex-col items-center md:text-left">
                        <img width="160" height="160" src={logo} alt="logo"  className='h-24 w-24'/>
                        <h4 className="font-bold text-lg mb-1 ">National Institute of Technology Patna</h4>
                        <p className="text-sm opacity-80 mb-4">
                            Ashok Rajpath, Mahendru,<br />
                            Patna, Bihar 800005
                        </p>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <Phone className="w-4 h-4" /> 0612-2371715
                            </li>
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <Mail className="w-4 h-4" /> info@nitp.ac.in
                            </li>
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <Globe className="w-4 h-4" /> www.nitp.ac.in
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-4 justify-center md:justify-start">
                            <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
                            <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
                            <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
                            <MapPin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Quick Links</h4>
                        <div className="w-12 h-0.5 bg-yellow-500 mb-4" />
                        <ul className="space-y-2 text-sm opacity-80">
                            <li className="hover:opacity-100 cursor-pointer">Departments</li>
                            <li className="hover:opacity-100 cursor-pointer">NIRF</li>
                            <li className="hover:opacity-100 cursor-pointer">New Campus</li>
                            <li className="hover:opacity-100 cursor-pointer">RTI</li>
                            <li className="hover:opacity-100 cursor-pointer">Magazine(Vol.4)</li>
                            <li className="hover:opacity-100 cursor-pointer">Study In India</li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Explore</h4>
                        <div className="w-12 h-0.5 bg-yellow-500 mb-4" />
                        <ul className="space-y-2 text-sm opacity-80">
                            <li className="hover:opacity-100 cursor-pointer">Campus</li>
                            <li className="hover:opacity-100 cursor-pointer">BOG/FC/BWC Minutes</li>
                            <li className="hover:opacity-100 cursor-pointer">Convocation 2023</li>
                            <li className="hover:opacity-100 cursor-pointer">Senate Minutes</li>
                            <li className="hover:opacity-100 cursor-pointer">SC/ST Grievance Cell</li>
                            <li className="hover:opacity-100 cursor-pointer">Climate Action Plan</li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Useful Links</h4>
                        <div className="w-12 h-0.5 bg-yellow-500 mb-4" />
                        <ul className="space-y-2 text-sm opacity-80">
                            <li className="hover:opacity-100 cursor-pointer">How to Reach</li>
                            <li className="hover:opacity-100 cursor-pointer">Annual Reports</li>
                            <li className="hover:opacity-100 cursor-pointer">National Service Scheme</li>
                            <li className="hover:opacity-100 cursor-pointer">Tenders</li>
                            <li className="hover:opacity-100 cursor-pointer">Academic Calendar</li>
                            <li className="hover:opacity-100 cursor-pointer">Terms of Use</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[hsl(0,60%,8%)] text-white py-4 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
                    <span>Copyright © 2024 National Institute of Technology Patna. All Rights Reserved.</span>
                    <span className="mt-2 md:mt-0">Developed & Maintained by WDC NIT Patna</span>
                </div>
            </div>
        </footer>
    )
}
