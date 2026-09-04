import { FormEvent, useState } from 'react';
import { Paperclip, Plus, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  from: 'user' | 'universe';
}

function ArmyBombMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 132"
      className={compact ? 'h-7 w-6' : 'h-16 w-12'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bomb-globe" cx="38%" cy="30%" r="74%">
          <stop offset="0" stopColor="#E7D8FF" stopOpacity="0.96" />
          <stop offset="0.28" stopColor="#A77BFF" stopOpacity="0.78" />
          <stop offset="0.68" stopColor="#43216F" stopOpacity="0.75" />
          <stop offset="1" stopColor="#09080D" stopOpacity="0.98" />
        </radialGradient>
        <linearGradient id="bomb-handle" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#E7D8FF" stopOpacity="0.9" />
          <stop offset="0.45" stopColor="#6E4DAA" stopOpacity="0.7" />
          <stop offset="1" stopColor="#17121F" />
        </linearGradient>
        <filter id="bomb-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#bomb-glow)">
        <circle cx="50" cy="42" r="34" fill="url(#bomb-globe)" stroke="#B995FF" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M28 47C39 35 52 31 72 25" stroke="#E6D7FF" strokeOpacity="0.32" strokeWidth="1" />
        <path d="M30 60C48 51 61 54 76 43" stroke="#CDB1FF" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="39" cy="30" r="5" fill="#F4ECFF" fillOpacity="0.55" />
        <path d="M42 77H58L61 94H39L42 77Z" fill="url(#bomb-handle)" stroke="#A77BFF" strokeOpacity="0.55" />
        <path d="M35 94H65L70 103H30L35 94Z" fill="#17121F" stroke="#B995FF" strokeOpacity="0.58" />
        <path d="M39 108H61" stroke="#A77BFF" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function ArmyBombChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), text, from: 'user' },
      { id: Date.now() + 1, text: 'The universe is listening. More answers are coming soon.', from: 'universe' },
    ]);
    setDraft('');
  };

  return (
    <div className={`army-chat ${isOpen ? 'army-chat--open' : ''}`}>
      <section className="army-chat__panel" aria-hidden={!isOpen}>
        <div className="army-chat__header">
          <div className="flex items-center gap-3">
            <span className="army-chat__avatar"><ArmyBombMark compact /></span>
            <div>
              <p className="text-[11px] tracking-wide2 text-paper">BTS UNIVERSE</p>
              <p className="text-[9px] tracking-wide2 text-accent uppercase">World library</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="army-chat__icon-button"
            aria-label="Minimize BTS Universe chat"
          >
            <X size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="army-chat__messages" aria-live="polite">
          {messages.length === 0 ? (
            <div className="army-chat__empty">
              <ArmyBombMark />
              <p>Ask anything about<br />the BTS Universe.</p>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`army-chat__message army-chat__message--${message.from}`}>
                {message.text}
              </div>
            ))
          )}
        </div>

        <form className="army-chat__form" onSubmit={handleSubmit}>
          <button type="button" className="army-chat__icon-button" aria-label="Add attachment">
            <Paperclip size={15} strokeWidth={1.5} />
          </button>
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask anything about BTS Universe..."
            aria-label="Ask anything about BTS Universe"
          />
          <button type="submit" className="army-chat__send" aria-label="Send message">
            <Send size={14} strokeWidth={1.7} />
          </button>
        </form>
      </section>

      <button
        type="button"
        className="army-chat__bomb"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Minimize BTS Universe chat' : 'Open BTS Universe chat'}
        aria-expanded={isOpen}
      >
        <span className="army-chat__bomb-orbit" />
        <ArmyBombMark />
        {!isOpen && <span className="army-chat__plus"><Plus size={11} strokeWidth={1.5} /></span>}
      </button>
    </div>
  );
}
