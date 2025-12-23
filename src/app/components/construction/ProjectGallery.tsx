import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import project1 from '../../../assets/images/project1.jpg';
import project2 from '../../../assets/images/project2.jpg';
import project3 from '../../../assets/images/project3.jpg';

const projects = [
  {
    id: 1,
    title: 'Modern Residential Building',
    category: 'Residential',
    image: project1,
    description: '4 BHK Villa with modern amenities',
  },
  {
    id: 2,
    title: 'Luxury House Construction',
    category: 'Residential',
    image: project2,
    description: 'Contemporary design with spacious interiors',
  },
  {
    id: 3,
    title: 'Commercial Complex',
    category: 'Commercial',
    image: project3,
    description: 'Multi-story commercial building',
  },
  {
    id: 4,
    title: 'Interior Design Project',
    category: 'Interior',
    image: project1,
    description: 'Modern living room with elegant furniture',
  },
  {
    id: 5,
    title: 'Industrial Shed',
    category: 'Commercial',
    image: project2,
    description: 'Large industrial warehouse construction',
  },
  {
    id: 6,
    title: 'Farm House',
    category: 'Residential',
    image: project3,
    description: 'Beautiful farmhouse with natural surroundings',
  },
];

export function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Our Completed Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successfully completed construction projects showcasing our expertise and quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(project)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs mb-2">
                  {project.category}
                </span>
                <h3 className="text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
