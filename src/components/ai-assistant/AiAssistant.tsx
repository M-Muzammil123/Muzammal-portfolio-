"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import {
  defaultQuestions,
  getAssistantResponse,
} from "@/data/assistantKnowledge";
import { personalData } from "@/data/personal";
import { AssistantMessage } from "@/types";

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi, I'm Muzammil's AI Portfolio Assistant! Ask me anything about Muzammil's engineering background, autonomous AI agents, RAG systems, or featured production projects.",
      suggestedQuestions: defaultQuestions,
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (queryText: string) => {
    const text = queryText.trim();
    if (!text) return;

    const count = ++counterRef.current;
    const userMsg: AssistantMessage = {
      id: `user-${count}`,
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate natural AI thinking latency (~400ms)
    setTimeout(() => {
      const response = getAssistantResponse(text);
      const assistantMsg: AssistantMessage = {
        id: `assistant-${count}`,
        sender: "assistant",
        text: response.text,
        actionLinks: response.actionLinks,
        suggestedQuestions: response.suggestedQuestions,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ask Muzammil AI Assistant"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-2xl backdrop-blur-md hover:border-[var(--accent-cyan)]/70 transition-all group"
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[var(--accent-cyan)]/50 shadow-[0_0_10px_var(--accent-glow)] shrink-0">
          <Image
            src={personalData.profileImage}
            alt={personalData.fullName}
            width={32}
            height={32}
            className="w-full h-full object-cover object-top"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[var(--bg-card)] shadow-[0_0_6px_#34D399]" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-mono-code font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
            Ask Muzammil AI
          </span>
          <span className="text-[10px] text-[var(--text-muted)] font-mono-code">
            Instant Answers
          </span>
        </div>
      </motion.button>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[420px] h-[550px] max-h-[80vh] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[var(--accent-cyan)]/40 shrink-0 shadow-xs">
                  <Image
                    src={personalData.profileImage}
                    alt={personalData.fullName}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[var(--bg-card)] shadow-[0_0_4px_#34D399]" />
                </div>
                <div>
                  <h3 className="text-xs font-mono-code font-bold text-[var(--text-primary)]">
                    Muzammil.AI Assistant
                  </h3>
                  <p className="text-[10px] text-emerald-400 font-mono-code flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online • Grounded Knowledge
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                className="w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-normal">
              {messages.map((msg) => {
                const isAssistant = msg.sender === "assistant";

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[var(--accent-cyan)]/40 shrink-0 mt-0.5 shadow-xs">
                        <Image
                          src={personalData.profileImage}
                          alt={personalData.name}
                          width={28}
                          height={28}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-xl p-3.5 ${
                        isAssistant
                          ? "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]"
                          : "bg-[var(--text-primary)] text-[var(--bg-main)] font-medium"
                      }`}
                    >
                      <div className="whitespace-pre-line leading-relaxed">
                        {msg.text}
                      </div>

                      {/* Action Links if any */}
                      {msg.actionLinks && msg.actionLinks.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-[var(--border-color)]/70 flex flex-wrap gap-2">
                          {msg.actionLinks.map((action) => (
                            <a
                              key={action.label}
                              href={action.url}
                              onClick={() => {
                                if (action.url.startsWith("#")) setIsOpen(false);
                              }}
                              target={action.isExternal ? "_blank" : undefined}
                              rel={action.isExternal ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono-code bg-[var(--bg-main)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] transition-colors"
                            >
                              <span>{action.label}</span>
                              <ArrowUpRight className="w-2.5 h-2.5" />
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Suggested Follow-ups */}
                      {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-[var(--border-color)]/50 space-y-1.5">
                          <span className="text-[10px] font-mono-code text-[var(--text-muted)] block">
                            Suggested questions:
                          </span>
                          <div className="flex flex-col gap-1">
                            {msg.suggestedQuestions.map((q) => (
                              <button
                                key={q}
                                type="button"
                                onClick={() => handleSend(q)}
                                className="text-left text-[11px] font-mono-code text-[var(--accent-cyan)] hover:underline p-1 rounded hover:bg-[var(--bg-main)] transition-colors"
                              >
                                → {q}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs font-mono-code pl-8">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-ping" />
                  <span>Synthesizing response...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-card)] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my AI projects, stack, or experience..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send Message"
                className="w-9 h-9 rounded-xl bg-[var(--text-primary)] text-[var(--bg-main)] flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
