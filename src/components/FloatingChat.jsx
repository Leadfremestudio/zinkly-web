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
          <path d="M12.031 0C5.39 0 .023 5.366.023 12.008c0 2.125.55 4.197 1.6 6.023L0 24l6.133-1.61c1.77.965 3.757 1.477 5.79 1.48h.005c6.64 0 12.007-5.366 12.007-12.01C24.035 5.37 18.67 0 12.03 0zm0 21.993c-1.8 0-3.57-.48-5.11-1.39l-.366-.218-3.8 1 1.016-3.7-.24-.38a9.836 9.836 0 01-1.512-5.3c0-5.426 4.417-9.845 9.85-9.845 2.632.002 5.107 1.027 6.97 2.89a9.78 9.78 0 012.877 6.967c-.004 5.43-4.42 9.848-9.845 9.848zm4.587-6.262c-.25-.124-1.48-.73-1.707-.81-.227-.083-.393-.124-.56.123-.165.25-.647.81-.792.975-.145.166-.29.186-.54.062a6.8 6.8 0 01-2.01-1.24 7.48 7.48 0 01-1.39-1.73c-.146-.25-.015-.387.11-.51.112-.11.25-.29.375-.434.125-.145.166-.24.25-.405.082-.166.04-.31-.02-.435-.06-.124-.56-1.35-.767-1.85-.2-.486-.4-.42-.56-.428h-.48c-.165 0-.435.062-.663.31-.228.25-.87.85-.87 2.07 0 1.22.885 2.4 1.01 2.56.124.165 1.74 2.656 4.214 3.72.588.254 1.047.406 1.405.52.593.189 1.133.162 1.56.1.475-.07 1.48-.605 1.687-1.19.207-.585.207-1.085.145-1.19-.06-.104-.227-.166-.477-.29z" />
        </svg>
      </a>
    </div>
  );
}

export default FloatingChat;
