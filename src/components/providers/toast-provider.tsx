"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, CheckCircle, AlertCircle } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type?: "info" | "success" | "error";
}

interface ToastContextType {
  toast: (message: string, type?: Toast["type"]) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: Toast["type"] = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-24 md:bottom-10 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="glass-dark border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 w-80 pointer-events-auto"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                t.type === "success" ? "bg-green-500/20" : t.type === "error" ? "bg-red-500/20" : "bg-prime-purple/20"
              }`}>
                {t.type === "success" ? <CheckCircle className="w-5 h-5 text-green-500" /> : 
                 t.type === "error" ? <AlertCircle className="w-5 h-5 text-red-500" /> : 
                 <Info className="w-5 h-5 text-prime-purple" />}
              </div>
              <div className="flex-1">
                <p className="text-white text-[13px] font-bold leading-tight">{t.message}</p>
              </div>
              <button onClick={() => removeToast(t.id)} className="text-white/40 hover:text-white transition-colors p-1">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};