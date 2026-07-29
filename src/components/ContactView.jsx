import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Share2 } from 'lucide-react';

const COMPANY_INFO = {
  contactEmail: "🔲 [Email Address]",
  contactPhone: "🔲 [Phone Number]",
  address: "🔲 [Corporate Address]",
  socials: {
    linkedin: "🔲 [LinkedIn]",
  },
};

export const ContactView = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyInterestedIn: 'Entrain EduHub',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 space-y-16">
      
      {/* Header */}
      <section className="bg-[#0A0A0B] text-center max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contact Entrain EduHub</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
          Get in Touch
        </h1>
        <p className="mt-3 text-base text-[#CBD5E1] leading-relaxed max-w-xl mx-auto">
          Contact Entrain EduHub or reach out to individual ventures—Entrain Academy, Entrain Lab, or Entrain Growth Lab.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-flat p-6 space-y-4">
              <h2 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-wider">
                Corporate Contact Details
              </h2>

              <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                  <Mail className="w-4 h-4 text-[#14B8A6]" />
                  <span>Email:</span>
                </div>
                <p className="text-sm font-mono text-[#F8FAFC] pl-6">{COMPANY_INFO.contactEmail}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                  <Phone className="w-4 h-4 text-[#14B8A6]" />
                  <span>Phone:</span>
                </div>
                <p className="text-sm font-mono text-[#F8FAFC] pl-6">{COMPANY_INFO.contactPhone}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                  <MapPin className="w-4 h-4 text-[#14B8A6]" />
                  <span>Address:</span>
                </div>
                <p className="text-sm font-mono text-[#F8FAFC] pl-6">{COMPANY_INFO.address}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                  <Share2 className="w-4 h-4 text-[#14B8A6]" />
                  <span>Social Media:</span>
                </div>
                <p className="text-sm font-mono text-[#F8FAFC] pl-6">{COMPANY_INFO.socials.linkedin}</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="card-flat p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0A756A]/20 border border-[#14B8A6]/40 flex items-center justify-center mx-auto text-[#14B8A6]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Message Sent Successfully</h3>
                  <p className="text-sm text-[#CBD5E1] max-w-sm mx-auto">
                    Thank you for contacting <strong className="text-[#F8FAFC]">Entrain EduHub</strong>. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', companyInterestedIn: 'Entrain EduHub', message: '' });
                    }}
                    className="mt-4 btn-secondary text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-base font-semibold text-[#F8FAFC] mb-2">Professional Contact Form</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#CBD5E1] mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#CBD5E1] mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#CBD5E1] mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone number"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#14B8A6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#CBD5E1] mb-1.5">Company Interested In *</label>
                      <select
                        value={formData.companyInterestedIn}
                        onChange={(e) => setFormData({ ...formData, companyInterestedIn: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#14B8A6]"
                      >
                        <option value="Entrain EduHub">Entrain EduHub (Parent)</option>
                        <option value="Entrain Academy">Entrain Academy (Culinary)</option>
                        <option value="Entrain Lab">Entrain Lab (Digital Marketing)</option>
                        <option value="Entrain Growth Lab">Entrain Growth Lab (Organic Agency)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#CBD5E1] mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message, course inquiry, or partnership request..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#14B8A6] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-xs flex items-center justify-center gap-2"
                  >
                    <span>Submit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
