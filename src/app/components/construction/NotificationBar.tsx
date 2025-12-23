import { motion } from 'motion/react';
import { Megaphone, X } from 'lucide-react';
import { useState } from 'react';

export function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 shadow-lg relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 relative">
          <Megaphone className="h-5 w-5 animate-bounce" />
          <p className="text-center">
            <strong>Alerts:</strong> The last date for LRS is 01/31/2026. Please complete your applications before this date.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 p-1 hover:bg-orange-700 rounded-full transition-colors"
            aria-label="Close notification"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
