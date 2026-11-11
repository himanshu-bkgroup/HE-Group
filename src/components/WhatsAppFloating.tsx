import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface WhatsAppFloatingProps {
  currentPage?: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Customize prefilled text based on context
  const getContextMessage = (type?: string) => {
    switch (type) {
      case 'housekeeping':
        return encodeURIComponent('Hello Himanshu Enterprises, I am interested in your professional Housekeeping Services. Please share service packages and quotation details.');
      case 'security':
        return encodeURIComponent('Hello Himanshu Enterprises, I would like to inquire about trained Security Guards and deployment for our facility. Please contact me.');
      case 'careers':
        return encodeURIComponent('Hello Himanshu Enterprises HR, I am looking to apply for job opportunities at your organization.');
      default:
        return encodeURIComponent('Hello Himanshu Enterprises, I am interested in your housekeeping / security contractual services. Please contact me regarding service details and quotation.');
    }
  };

  const directUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${getContextMessage(currentPage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#006B35] to-[#008C45] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center border border-white/20">
                <img
                  src="/assets/aistudio/image_3f2de657.png"
                  alt="Himanshu Enterprises"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm leading-tight">Himanshu Enterprises</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Official WhatsApp Desk · Sector 62
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 shadow-xs leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">Namaste & Welcome to Himanshu Enterprises!</p>
              <p className="text-slate-600">
                "Your Problem, Our Solution." How can our facility team assist your business today?
              </p>
            </div>

            {/* Quick Action Options */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-1">
                Select quick inquiry:
              </p>
              
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${getContextMessage('housekeeping')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-[#E8F5ED] hover:text-[#006B35] rounded-lg border border-slate-200/90 font-medium transition-colors group"
              >
                <span>🧹 Housekeeping & Cleaning Quote</span>
                <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#006B35]" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${getContextMessage('security')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-[#E8F5ED] hover:text-[#006B35] rounded-lg border border-slate-200/90 font-medium transition-colors group"
              >
                <span>🛡️ Security Guards & Manpower</span>
                <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#006B35]" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${getContextMessage('general')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-white hover:bg-[#E8F5ED] hover:text-[#006B35] rounded-lg border border-slate-200/90 font-medium transition-colors group"
              >
                <span>🏢 Speak with Sector 62 Head Office</span>
                <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#006B35]" />
              </a>
            </div>
          </div>

          {/* Footer Direct Launch */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 tabular-nums">
              +91 7217876220
            </span>
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#008C45] hover:bg-[#006B35] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#008C45] hover:bg-[#006B35] text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none border-2 border-white cursor-pointer"
        aria-label="Open WhatsApp conversation"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF7900] rounded-full border-2 border-white"></span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">Chat on WhatsApp</span>
          <span className="text-[10px] text-emerald-100">Quick Response</span>
        </div>
      </button>
    </div>
  );
};
