import { motion } from 'motion/react';
import { 
  FileCheck, 
  DollarSign, 
  Layout, 
  Building2, 
  Ruler, 
  Home, 
  Paintbrush, 
  Sofa, 
  Eye, 
  Warehouse, 
  Fence, 
  TreePine 
} from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Building Approvals',
    description: 'Complete assistance with building permissions and approvals from local authorities',
  },
  {
    icon: DollarSign,
    title: 'Loan Processing',
    description: 'Expert guidance for construction and home loan documentation and processing',
  },
  {
    icon: Layout,
    title: 'Floor Plans',
    description: 'Customized floor plan designs tailored to your requirements and budget',
  },
  {
    icon: Building2,
    title: 'Construction Plans',
    description: 'Detailed construction planning and architectural drawings for your project',
  },
  {
    icon: Ruler,
    title: 'Structural Design',
    description: 'Professional structural engineering and design services for safety and durability',
  },
  {
    icon: Home,
    title: 'Building Constructions',
    description: 'Complete construction services from foundation to finishing with quality materials',
  },
  {
    icon: Paintbrush,
    title: 'Elevation Designs',
    description: 'Modern and aesthetic elevation designs that enhance your building appearance',
  },
  {
    icon: Sofa,
    title: 'Interior Designs',
    description: 'Contemporary interior design solutions for residential and commercial spaces',
  },
  {
    icon: Eye,
    title: 'Site Supervision',
    description: 'Regular site monitoring and quality control throughout the construction process',
  },
  {
    icon: Warehouse,
    title: 'Commercial Sheds',
    description: 'Industrial and commercial shed construction with prefab and traditional methods',
  },
  {
    icon: Fence,
    title: 'Precast Walls & Fencing',
    description: 'Durable precast compound walls and boundary fencing solutions',
  },
  {
    icon: TreePine,
    title: 'Farm Houses',
    description: 'Design and construction of beautiful farmhouses and rural properties',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive construction and consultancy services to meet all your building needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-orange-100 group hover:-translate-y-1"
            >
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <service.icon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
