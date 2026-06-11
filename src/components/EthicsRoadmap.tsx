import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, EyeOff, LayoutGrid, HelpCircle, Check, Users, MessageSquare, ChevronRight, Milestone, Sparkles, Send, Loader2 } from 'lucide-react';
import { TRANSLATIONS, ROADMAP_STEPS, CHAT_Q_AND_A } from '../data/mockData';
import { Message } from '../types';

interface EthicsRoadmapProps {
  lang: 'en' | 'es';
}

export default function EthicsRoadmap({ lang }: EthicsRoadmapProps) {
  const t = TRANSLATIONS[lang];

  // Conversation history state
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string; isSimulated?: boolean }[]>([
    { sender: 'bot', text: TRANSLATIONS[lang].placeholderAnswerText }
  ]);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle switching language translates default messages if pristine
  useEffect(() => {
    if (messages.length === 1 && (messages[0].text === TRANSLATIONS['en'].placeholderAnswerText || messages[0].text === TRANSLATIONS['es'].placeholderAnswerText)) {
      setMessages([{ sender: 'bot', text: TRANSLATIONS[lang].placeholderAnswerText }]);
    }
  }, [lang]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    // Filter starting message if it was just the introductory placeholder
    let currentFeed = [...messages];
    if (currentFeed.length === 1 && (currentFeed[0].text === TRANSLATIONS['en'].placeholderAnswerText || currentFeed[0].text === TRANSLATIONS['es'].placeholderAnswerText)) {
      currentFeed = [];
    }

    const newMessages = [...currentFeed, { sender: 'user' as const, text: textToSend }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          lang,
        }),
      });

      if (!response.ok) {
        throw new Error('Chat server returned error status');
      }

      const data = await response.json();
      setMessages([...newMessages, { sender: 'bot' as const, text: data.text, isSimulated: data.isSimulated }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([...newMessages, { 
        sender: 'bot' as const, 
        text: lang === 'en' 
          ? "I am having trouble connecting to the LanderBot service. Please try again in a moment!" 
          : "Tengo problemas para conectarme al servicio de LanderBot. ¡Por favor, inténtelo de nuevo en un momento!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionClick = (idx: number) => {
    setActiveQuestionIdx(idx);
    const questionText = lang === 'en' ? CHAT_Q_AND_A[idx].q : CHAT_Q_AND_A[idx].qEs;
    handleSendMessage(questionText);
  };

  return (
    <section id="ethics" className="py-24 bg-white text-gray-900 overflow-hidden border-t border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER GRID: Ethics & Equity principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Ethics Left explanation block */}
          <div className="lg:col-span-4 text-left space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#0A3D62] uppercase font-bold bg-[#0A3D62]/5 px-3.5 py-1.5 rounded-full border border-brand-blue/10" id="ethics-badge">
              {lang === 'en' ? 'ETHICAL SPECIFICATIONS' : 'MARCO ÉTICO CÍVICO'}
            </span>
            <h2 className="text-3xl font-display font-extrabold text-brand-blue-dark tracking-tight leading-tight" id="ethics-title">
              {t.ethicsTitle}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed" id="ethics-subtitle">
              {t.ethicsSubtitle}
            </p>

            <div className="bg-[#FAFBFD] p-5 rounded-2xl border border-gray-100 flex items-center space-x-3 text-xs text-gray-500 font-medium">
              <ShieldCheck className="h-5 w-5 text-brand-green flex-shrink-0" />
              <span>{lang === 'en' ? 'Our AI architecture adheres strictly to Forsyth municipal civil guidelines.' : 'Diseñado para garantizar la privacidad ante los estándares de fomento.'}</span>
            </div>
          </div>

          {/* Ethics 4 Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Privacy */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 text-left hover:shadow-xl hover:border-[#0A3D62]/20 transition-all group" id="ethics-card-1">
              <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl border border-[#0A3D62]/10 inline-block mb-4 group-hover:bg-brand-blue/10 transition-colors">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-brand-blue-dark font-display mb-2">{t.ethics1}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">{t.ethics1Detail}</p>
            </div>

            {/* Card 2: Accessibility */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 text-left hover:shadow-xl hover:border-[#0A3D62]/20 transition-all group" id="ethics-card-2">
              <div className="p-3 bg-brand-green/10 text-brand-greenrounded-xl border border-brand-green/20 inline-block mb-4 group-hover:bg-brand-green/15 transition-colors">
                <Users className="h-5 w-5 text-brand-green-dark" />
              </div>
              <h3 className="text-base font-bold text-brand-blue-dark font-display mb-2">{t.ethics2}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">{t.ethics2Detail}</p>
            </div>

            {/* Card 3: Fairness */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 text-left hover:shadow-xl hover:border-[#0A3D62]/20 transition-all group" id="ethics-card-3">
              <div className="p-3 bg-brand-blue-light/10 text-brand-blue-light rounded-xl border border-brand-blue-light/25 inline-block mb-4 group-hover:bg-brand-blue-light/15 transition-colors">
                <ShieldCheck className="h-5 w-5 text-brand-blue-light" />
              </div>
              <h3 className="text-base font-bold text-brand-blue-dark font-display mb-2">{t.ethics3}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">{t.ethics3Detail}</p>
            </div>

            {/* Card 4: Transparency */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 text-left hover:shadow-xl hover:border-[#0A3D62]/20 transition-all group" id="ethics-card-4">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20 inline-block mb-4 group-hover:bg-amber-500/15 transition-colors">
                <LayoutGrid className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-brand-blue-dark font-display mb-2">{t.ethics4}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">{t.ethics4Detail}</p>
            </div>

          </div>

        </div>

        {/* LOWER GRID: Startup Vision Roadmap */}
        <div className="border-t border-gray-100 pt-20 mb-20">
          
          {/* Roadmap Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#0A3D62] uppercase font-bold bg-[#0A3D62]/5 px-3.5 py-1.5 rounded-full border border-brand-blue/10" id="roadmap-badge">
              {lang === 'en' ? 'FUTURE HORIZON' : 'PLAN DE DESARROLLO'}
            </span>
            <h2 className="text-3xl font-display font-extrabold text-brand-blue-dark tracking-tight mt-4" id="roadmap-title">
              {t.futureTitle}
            </h2>
            <p className="text-gray-500 text-lg mt-3" id="roadmap-subtitle">
              {t.futureSubtitle}
            </p>
          </div>

          {/* Interactive Roadmap Horizontal Path */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left" id="roadmap-deck">
            
            {ROADMAP_STEPS.map((step, idx) => (
              <div key={idx} className="bg-[#FAFBFD] border border-gray-150 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#0A3D62]/30 hover:shadow-md transition-all group" id={`roadmap-step-card-${idx}`}>
                <div className="absolute top-4 right-4 text-gray-200 font-mono font-bold text-4xl select-none group-hover:text-brand-green/20 transition-colors">0{idx + 1}</div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[#0A3D62] font-bold uppercase block tracking-wider bg-white border border-gray-150 px-2.5 py-1 rounded-full w-max">
                      {lang === 'en' ? step.period : step.periodEs}
                    </span>
                    <h4 className="text-lg font-bold text-brand-blue-dark mt-3 tracking-tight font-display">
                      {lang === 'en' ? step.title : step.titleEs}
                    </h4>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {lang === 'en' ? step.description : step.descriptionEs}
                  </p>

                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <span className="block text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider">Strategic Milestones:</span>
                    <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                      {(lang === 'en' ? step.milestones : step.milestonesEs).map((miles, mIdx) => (
                        <li key={mIdx} className="flex items-start space-x-1.5 leading-snug">
                          <Check className="h-4 w-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{miles}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {idx < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-300 z-15 pointer-events-none">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* EMBEDDED DYNAMIC ASSISTANCE CHATBOT PREVIEW (High-interactive touch) */}
        <div className="max-w-4xl mx-auto bg-brand-blue-dark text-white rounded-2xl border border-brand-blue/30 shadow-2xl p-6 sm:p-8 text-left relative overflow-hidden" id="chatbot-preview-widget">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-brand-green/20 text-brand-green border border-brand-green/20 rounded-xl relative">
                <MessageSquare className="h-6 w-6 text-brand-green animate-pulse-subtle" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-brand-green border-2 border-brand-blue-dark" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display">{t.learnAIBot}</h3>
                <p className="text-xs text-gray-400 font-normal">{t.learnBotSubtitle}</p>
              </div>
            </div>

            <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-[10px] font-mono border border-brand-green/30 self-start md:self-center">
              Active Simulator Mode
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Left buttons (the user queries) */}
            <div className="md:col-span-5 space-y-2 flex flex-col justify-center">
              {CHAT_Q_AND_A.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuestionClick(idx)}
                  className={`w-full text-left p-2.5 sm:p-3 text-xs font-semibold rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    activeQuestionIdx === idx
                      ? 'bg-brand-green text-brand-blue-dark border-brand-green shadow-lg font-bold scale-102'
                      : 'bg-[#031C31] hover:bg-brand-blue text-gray-300 border-brand-blue/45 hover:text-white'
                  }`}
                  id={`chatbot-query-${idx}`}
                >
                  <span className="truncate pr-1">{lang === 'en' ? item.q : item.qEs}</span>
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* Right message log showing explanation */}
            <div className="md:col-span-7 bg-[#011425] border border-white/5 p-4 sm:p-5 rounded-xl flex flex-col h-[400px]" id="chatbot-reply-view">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`h-2 w-2 rounded-full ${isLoading ? 'bg-amber-400 animate-ping' : 'bg-brand-green'}`} />
                  <span className="text-[10px] font-mono tracking-wider text-[#487EB0] uppercase font-bold">LanderBot AI</span>
                </div>
                <span className="text-[9px] font-mono text-gray-500">{lang === 'en' ? 'Forsyth Housing Context' : 'Contexto de Forsyth'}</span>
              </div>

              {/* Message scroll container */}
              <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 mb-3 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm max-w-[85%] leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-brand-green text-brand-blue-dark font-semibold rounded-tr-none shadow-md'
                          : 'bg-[#031C31] border border-brand-blue-light/10 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === 'bot' && msg.isSimulated && (
                      <span className="text-[8px] font-mono text-amber-400 mt-1 pl-1">
                        {lang === 'en' ? '• Simulated AI preview' : '• Vista previa simulada'}
                      </span>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center space-x-2 bg-brand-blue/20 border border-brand-blue-light/10 text-gray-300 rounded-xl rounded-tl-none py-2 px-3 text-xs w-max animate-pulse">
                    <Loader2 className="h-3 w-3 animate-spin text-brand-green" />
                    <span>{lang === 'en' ? 'LanderBot is thinking...' : 'LanderBot está pensando...'}</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (userInput.trim()) {
                    handleSendMessage(userInput);
                  }
                }}
                className="flex items-center space-x-2 border-t border-white/10 pt-3"
              >
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={lang === 'en' ? "Ask about Section 8, transit, or housing rules..." : "Pregunta sobre Sección 8 o transporte..."}
                  disabled={isLoading}
                  className="flex-1 bg-[#031C31] border border-brand-blue-light/30 focus:border-brand-green/60 text-white placeholder-gray-500 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-green/35 transition-all disabled:opacity-50"
                  id="chatbot-custom-input"
                />
                <button
                  type="submit"
                  disabled={!userInput.trim() || isLoading}
                  className="bg-brand-green hover:bg-brand-green-dark text-brand-blue-dark p-2 sm:p-2.5 rounded-xl font-bold transition-all disabled:opacity-40 disabled:hover:bg-brand-green cursor-pointer flex items-center justify-center shrink-0"
                  id="chatbot-send-btn"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
