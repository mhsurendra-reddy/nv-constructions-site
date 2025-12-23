import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/nv-constructions-site/src/assets/images//logo.jpg" alt="NV Constructions" className="h-16 w-auto" />
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality construction services in Anantapuramu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Building Approvals</li>
              <li>Construction Plans</li>
              <li>Structural Design</li>
              <li>Building Constructions</li>
              <li>Interior Designs</li>
              <li>Site Supervision</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:9392309864" className="text-gray-400 hover:text-orange-600 transition-colors block">
                    +91 9392309864
                  </a>
                  <a href="tel:8008844057" className="text-gray-400 hover:text-orange-600 transition-colors block">
                    +91 8008844057
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                <a href="mailto:ranganath3112@gmail.com" className="text-gray-400 hover:text-orange-600 transition-colors">
                  ranganath3112@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  12-3-961, Beside Kumar Hospital,<br />
                  Vidyuth Nagar, Anantapuramu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} NV Constructions. All rights reserved.
            </p>
            <div className="flex gap-3 text-gray-400">
              <a href="#" className="hover:text-orange-600 transition-colors">
                @Designed by Surendra
              </a>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}