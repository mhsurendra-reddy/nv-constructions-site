import { motion } from 'motion/react';
import { CheckCircle, DollarSign, Clock, Wrench, Shield } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Best Quality Construction',
    description: 'We ensure the highest quality standards in all aspects of construction using premium materials and skilled craftsmen',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates per sq. ft. without compromising on quality. Get maximum value for your investment',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Timely Completion',
    description: 'We are committed to completing your project on schedule with efficient project management and planning',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Wrench,
    title: 'Free Maintenance',
    description: 'Enjoy one year of free maintenance service for your building after project completion',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Shield,
    title: 'Trusted Consultancy',
    description: 'Most reliable and trusted construction consultancy in Anantapuramu with proven track record',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Why Choose NV Constructions?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We stand out from the competition with our commitment to excellence, affordability, and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className={`${reason.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className={`h-8 w-8 ${reason.color}`} />
              </div>
              <h3 className="text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="tel:9392309864"
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
