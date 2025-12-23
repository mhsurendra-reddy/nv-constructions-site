import { motion } from 'motion/react';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';


export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-orange-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img src="/nv-constructions-site/images/logo.jpg" alt="NV Constructions" className="h-32 w-auto mb-6" />
            </div>
            <h1 className="text-gray-900 mb-6">
              Building Dreams with Excellence
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Your trusted partner for quality construction services in Anantapuramu. 
              From building approvals to complete construction, we handle it all with expertise and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              <a 
                href="tel:9392309864"
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Call Us Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-gray-900">25+</div>
                <p className="text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-gray-900">12+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-gray-900">100%</div>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/nv-constructions-site/images/project1.jpg"
                alt="Construction Project"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm mb-1">Latest Project</p>
                <h3 className="text-white">Modern Residential Complex</h3>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-6 shadow-2xl"
            >
              <div className="text-center">
                <p className="text-orange-600 mb-1">Quality</p>
                <div className="text-gray-900">Certified</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}