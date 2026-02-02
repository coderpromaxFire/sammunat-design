'use client';

import { useState, useRef, useEffect } from "react";

/* ---------- AI Avatar ---------- */
function AiAvatar({ size = 26 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-br from-[#1B998B] to-[#17BEBB] flex items-center justify-center shadow"
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="white" opacity="0.95" />
        <circle cx="9" cy="10" r="1.2" fill="#1B998B" />
        <circle cx="15" cy="10" r="1.2" fill="#1B998B" />
        <path
          d="M8 14c1.2 1 6.8 1 8 0"
          stroke="#1B998B"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ---------- Chatbot ---------- */
export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I’m Sammunat’s assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  if (!open) return null;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Service temporarily unavailable."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-end p-4">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* Chat Box */}
      <div className="relative w-[340px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-pop">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#1B998B] to-[#17BEBB] text-white px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AiAvatar size={30} />
            <div>
              <p className="font-semibold text-sm">Sammunat Assistant</p>
              <span className="text-xs opacity-80 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-lg hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 px-3 py-3 space-y-3 overflow-y-auto bg-[#F4F7F9] text-sm">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {m.role === "assistant" && <AiAvatar />}

              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-[#1B998B] text-white rounded-br-sm"
                    : "bg-white text-gray-700 rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2">
              <AiAvatar />
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message…"
            className="flex-1 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-[#1B998B]/40"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-[#1B998B] hover:bg-[#14867A] text-white rounded-full transition"
          >
            ➤
          </button>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-pop {
          animation: pop 0.25s ease-out;
        }
        @keyframes pop {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}





