import React, { useEffect } from 'react';
import { X, CheckCircle2, TrendingUp, Code, GraduationCap, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export const BrandModal = ({ brand, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (brand) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [brand, onClose]);

  if (!brand) return null;

  const getBrandIcon = (iconName) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#14B8A6]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#0A756A]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#14B8A6]" />;
      default: return <Building2 className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#050816]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0B1120] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        
        <div className="h-1 bg-gradient-to-r from-[#0A756A] via-[#14B8A6] to-[#0A756A]" />

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#111827] border border-white/10">
                {getBrandIcon(brand.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#050816] text-[#14B8A6] border border-white/10 inline-block mb-1">
                  {brand.categoryBadge}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {brand.name}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#111827] border border-white/10 text-[#94A3B8] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs font-semibold text-[#14B8A6] mb-2">
            {brand.tagline}
          </p>
          <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
            {brand.fullOverview}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#111827] border border-white/5 mb-6">
            {brand.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-extrabold text-white">{metric.value}</div>
                <div className="text-[10px] text-[#94A3B8] font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Services & Offerings</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {brand.services.map((service, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#111827] border border-white/5">
                  <div className="font-bold text-xs text-white mb-0.5">{service.name}</div>
                  <p className="text-[11px] text-[#94A3B8] leading-normal">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6 p-4 rounded-xl bg-[#111827] border border-white/5">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Key Achievements</span>
            </h3>
            <div className="space-y-1.5">
              {brand.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-[#94A3B8]">
              Operating under <strong className="text-white">Entrain Edu Hub Governance</strong>
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#111827] border border-white/10 text-white text-xs font-semibold hover:bg-white/5 w-1/2 sm:w-auto"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(brand.id);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-semibold hover:opacity-95 flex items-center justify-center gap-1.5 w-1/2 sm:w-auto"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
