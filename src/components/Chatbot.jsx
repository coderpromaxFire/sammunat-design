'use client';

import { useState, useRef, useEffect } from "react";

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
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content })
      });

      if (!res.ok) throw new Error("Backend error");

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "⚠️ I couldn’t generate a response. Please try again."
        }
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ AI service is temporarily unavailable. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed bottom-4 right-4 z-[200]
        w-[90vw] sm:w-96
        h-[75vh] sm:h-[520px]
        bg-white
        rounded-2xl
        shadow-2xl
        flex flex-col
        overflow-hidden
        animate-fadeIn
      "
    >
      {/* Header */}
      <div className="bg-[#1B998B] text-white px-4 py-3 flex justify-between items-center">
        <div>
          <p className="font-semibold leading-tight">Sammunat Assistant</p>
          <span className="text-xs opacity-80">Online • 24/7</span>
        </div>
        <button
          onClick={onClose}
          className="text-2xl leading-none hover:opacity-70"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-4 space-y-3 overflow-y-auto bg-[#F8F1FF] text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-4 py-2 rounded-2xl leading-relaxed ${
              m.role === "user"
                ? "ml-auto bg-[#1B998B] text-white rounded-br-sm"
                : "bg-white text-[#534D56] rounded-bl-sm shadow-sm"
            }`}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="text-xs text-gray-400 italic">
            Sammunat Assistant is typing…
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
          placeholder="Ask about services, pricing, careers..."
          className="
            flex-1 px-4 py-2
            border rounded-xl
            text-sm outline-none
            focus:ring-2 focus:ring-[#1B998B]/40
          "
        />
        <button
          onClick={sendMessage}
          className="
            px-4 py-2
            bg-[#1B998B] text-white
            rounded-xl font-medium
            hover:bg-[#178b7d]
            transition
          "
        >
          Send
        </button>
      </div>
    </div>
  );
}


