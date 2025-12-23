import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';


export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [dialog, setDialog] = useState<{
  open: boolean;
  type: 'success' | 'error';
  message: string;
}>({
  open: false,
  type: 'success',
  message: '',
});

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_e2kcykf',
    'template_pf78vqc',
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
    },
    'E5XsNxJrhi0beuWF0'
  )
  .then(() => {
    setDialog({
      open: true,
      type: 'success',
      message: 'Message sent successfully! We will contact you soon.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  })
  .catch(() => {
    setDialog({
      open: true,
      type: 'error',
      message: 'Failed to send message. Please try again.',
    });
  });
};

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to start your construction project? Contact us for a free consultation and quote
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Phone Numbers</p>
                    <a href="tel:9392309864" className="text-gray-900 hover:text-orange-600 transition-colors block">
                      +91 9392309864
                    </a>
                    <a href="tel:8008844057" className="text-gray-900 hover:text-orange-600 transition-colors block">
                      +91 8008844057
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Email Address</p>
                    <a href="mailto:ranganath3112@gmail.com" className="text-gray-900 hover:text-orange-600 transition-colors">
                      ranganath3112@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Office Address</p>
                    <p className="text-gray-900">
                      12-3-961,<br />
                      Beside Kumar Hospital,<br />
                      Vidyuth Nagar, Anantapuramu.
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Working Hours</p>
                    <p className="text-gray-900">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122639.89163343884!2d77.51522495!3d14.68310285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14a67e93897e7%3A0x6ef9607459fd14b7!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      {dialog.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
          >
            <div
              className={`mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full ${
                dialog.type === 'success'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {dialog.type === 'success' ? '✓' : '✕'}
            </div>

            <h3 className="text-gray-900 mb-2">
              {dialog.type === 'success' ? 'Success' : 'Error'}
            </h3>

            <p className="text-gray-600 mb-6">{dialog.message}</p>

            <button
              onClick={() => setDialog({ ...dialog, open: false })}
              className={`w-full py-3 rounded-lg text-white transition ${
                dialog.type === 'success'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
