import { Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b">
          <div className="flex items-center gap-6 text-gray-600">
            <a href="tel:9392309864" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>9392309864</span>
            </a>
            <a href="mailto:ranganath3112@gmail.com" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
              <Mail className="h-4 w-4" />
              <span>ranganath3112@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Anantapuramu, Andhra Pradesh</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img src="src\assets\images\logo.jpg" alt="NV Constructions" className="h-16 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>

          <a 
            href="tel:9392309864" 
            className="bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-colors shadow-md"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}