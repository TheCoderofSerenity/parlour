import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              5taag Salon
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Experience luxury beauty treatments in an elegant and relaxing environment. Your beauty is our passion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Home
              </Link>
              <Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Services
              </Link>
              <Link to="/gallery" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">info@5taagsalon.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">4, BM Banerjee Rd, Belghoria, Kolkata, West Bengal 700056</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© 2026 5taag Salon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;