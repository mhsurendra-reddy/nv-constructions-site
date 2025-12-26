import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const phoneNumber = '919392309864'; // country code + number (NO +, NO spaces)
  const message = encodeURIComponent('Hello, I would like to know more about your construction services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
