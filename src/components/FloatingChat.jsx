// WhatsApp floating redirect widget with tooltip
function FloatingChat() {
  // Replace with the client's actual WhatsApp phone number (with country code, no "+", spaces, or dashes)
  const WHATSAPP_NUMBER = "1234567890"; 
  const DEFAULT_MESSAGE = encodeURIComponent("Hi Zinkly! I would love to learn more about your services.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  return (
    <div className="whatsapp-floating-container">
      {/* Tooltip */}
      <div className="whatsapp-tooltip">
        WhatsApp
      </div>

      {/* Launcher Redirect Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link-btn"
        aria-label="Contact Zinkly on WhatsApp"
        id="chat-widget"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </a>
    </div>
  );
}

export default FloatingChat;
