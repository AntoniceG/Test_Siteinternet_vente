import { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export const AIChatbot = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Bonjour ! Je suis l\'assistant Octipro. Comment puis-je vous aider aujourd\'hui ?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { role: 'user', text: input }]);
        const userMsg = input.toLowerCase();
        setInput('');

        // Fake bot logic
        setTimeout(() => {
            let botResponse = "C'est une excellente question. Pour vous répondre précisément, auriez-vous 30 minutes pour en discuter avec l'un de nos experts ?";
            if (userMsg.includes('prix') || userMsg.includes('tarif')) {
                botResponse = "Nos tarifs sont sur mesure car ils dépendent de vos objectifs de croissance. En moyenne, l'investissement est rentabilisé dès les premiers mois via le gain de leads.";
            } else if (userMsg.includes('btp') || userMsg.includes('chantier')) {
                botResponse = "Nous sommes spécialisés dans le BTP. Nous savons exactement comment mettre en valeur vos réalisations pour rassurer vos futurs clients.";
            }
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[200]">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-emerald-500 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center justify-center text-zinc-950 hover:scale-110 transition-transform active:scale-95"
            >
                {isOpen ? <X /> : <MessageSquare />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-full mb-4 right-0 w-[350px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-zoom-in origin-bottom-right">
                    {/* Header */}
                    <div className="bg-zinc-800 p-4 border-b border-zinc-700 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <Bot className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Assistant OptiPro</p>
                            <p className="text-emerald-500 text-[10px] uppercase font-black">En ligne</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-emerald-500 text-zinc-950 rounded-tr-none' : 'bg-zinc-800 text-zinc-300 rounded-tl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 bg-zinc-800/50 border-t border-zinc-800 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Écrivez votre message..."
                            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        <button type="submit" className="p-2 bg-emerald-500 rounded-lg text-zinc-950">
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};
