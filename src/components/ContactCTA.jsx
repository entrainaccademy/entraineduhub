import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react';

const COMPANY_INFO = {
  contactEmail: "🔲 [Email Address]",
  contactPhone: "🔲 [Phone Number]",
  headquarters: "🔲 [Corporate Address]",
};

const SUBSIDIARIES = [
  { id: "growth-labs", shortName: "Growth Labs" },
  { id: "labs",        shortName: "Labs" },
  { id: "academy",     shortName: "Academy" },
];

export const ContactCTA = ({ initialBrandId }) => {
  const [selectedBrand, setSelectedBrand] = useState(initialBrandId || 'parent');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1120] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contact Parent Entity</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                Connect With Entrain Edu Hub
              </h2>
              <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                Contact parent management or select a subsidiary brand to direct your inquiry to the appropriate engineering, marketing, or training team.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#111827] border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050816] text-[#14B8A6]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Corporate Email</div>
                  <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-xs font-semibold text-white hover:text-[#14B8A6]">
                    {COMPANY_INFO.contactEmail}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111827] border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050816] text-[#14B8A6]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Phone</div>
                  <div className="text-xs font-semibold text-white">{COMPANY_INFO.contactPhone}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111827] border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050816] text-[#14B8A6]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Headquarters</div>
                  <div className="text-xs font-semibold text-white">{COMPANY_INFO.headquarters}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#111827] border border-white/10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0A756A]/20 border border-[#14B8A6]/40 flex items-center justify-center mx-auto text-[#14B8A6]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-[#94A3B8] max-w-sm mx-auto">
                    Thank you. A representative will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-[#050816] border border-white/10 text-xs font-semibold text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs text-[#94A3B8] font-medium block mb-2">Inquiry Target:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedBrand('parent')}
                        className={`p-2 rounded-lg text-xs font-semibold border transition-all ${
                          selectedBrand === 'parent'
                            ? 'bg-[#0A756A] text-white border-[#14B8A6]'
                            : 'bg-[#050816] text-[#94A3B8] border-white/5'
                        }`}
                      >
                        Parent Hub
                      </button>
                      {SUBSIDIARIES.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setSelectedBrand(b.id)}
                          className={`p-2 rounded-lg text-xs font-semibold border transition-all ${
                            selectedBrand === b.id
                              ? 'bg-[#0A756A] text-white border-[#14B8A6]'
                              : 'bg-[#050816] text-[#94A3B8] border-white/5'
                          }`}
                        >
                          {b.shortName}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#94A3B8] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border border-white/10 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#94A3B8] mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border border-white/10 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#94A3B8] mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border border-white/10 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#14B8A6]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#94A3B8] mb-1">Message *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project requirements or partnership inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border border-white/10 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#14B8A6] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-bold shadow-glow-primary transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
