import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/919871610154"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors z-50 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    );
  }