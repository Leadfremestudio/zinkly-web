import { useState } from 'react';

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', text: 'Hi there! 👋 Welcome to Zinkly Support. How can we help you engineer your digital transformation today?' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { sender: 'user', text: message };
    setChatLog((prev) => [...prev, userMsg]);
    setMessage('');

    // Simulated automated replies with professional answers
    setTimeout(() => {
      let replyText = "Thank you for reaching out! Our engineering desk has logged your query. If you'd like to book a direct discovery call immediately, please head to our Contact page or drop an email to hello@zinkly.com.";
      
      const lowercaseMsg = message.toLowerCase();
      if (lowercaseMsg.includes('price') || lowercaseMsg.includes('cost') || lowercaseMsg.includes('budget')) {
        replyText = "Our project pricing is highly bespoke depending on scale, architecture, and SLAs. You can use our interactive Project Planner on the Contact page to configure an approximate estimate in under 60 seconds!";
      } else if (lowercaseMsg.includes('service') || lowercaseMsg.includes('develop') || lowercaseMsg.includes('react') || lowercaseMsg.includes('wordpress')) {
        replyText = "We specialize in Custom Software, Enterprise App Development, Cloud-Native Automation, and Website Engineering. Head over to our Services page to review our delivery blueprint and filter our technology stack matrix!";
      } else if (lowercaseMsg.includes('intern') || lowercaseMsg.includes('internship') || lowercaseMsg.includes('job') || lowercaseMsg.includes('career')) {
        replyText = "That's fantastic! Zinkly is dedicated to cultivating engineering talent. We have a robust Internship Program. You can find detail listings and requirements directly on the Services page under the Internship Section!";
      }

      setChatLog((prev) => [...prev, { sender: 'bot', text: replyText }]);
    }, 1000);
  };

  return (
    <div className={`floating-chat-container ${isOpen ? 'active' : ''}`}>
      {/* Chat Window Box */}
      {isOpen && (
        <div className="chat-window-box">
          <div className="chat-window-header">
            <div className="chat-bot-identity">
              <span className="online-indicator"></span>
              <div className="chat-bot-meta">
                <span className="bot-name">Zinkly Concierge</span>
                <span className="bot-status">Online (Replies in seconds)</span>
              </div>
            </div>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chat-window-body">
            {chatLog.map((log, idx) => (
              <div key={idx} className={`chat-bubble-row ${log.sender}`}>
                <div className="chat-bubble">{log.text}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="chat-window-footer">
            <input
              type="text"
              placeholder="Ask Zinkly anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="chat-input-field"
              aria-label="Chat input"
            />
            <button type="submit" className="chat-send-btn" aria-label="Send query">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Launcher Toggle Button */}
      <button
        type="button"
        className={`floating-btn floating-chat ${isOpen ? 'open-state' : ''}`}
        aria-label="Toggle support chat"
        onClick={() => setIsOpen(!isOpen)}
        id="chat-widget"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
            <path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default FloatingChat;
