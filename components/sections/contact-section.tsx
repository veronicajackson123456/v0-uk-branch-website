'use client'

import Image from 'next/image'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  type: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="London skyline"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">Get in Touch</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance mb-8">
              Let&apos;s Create
              <br />
              <em className="text-gold">Something</em>
              <br />
              Extraordinary
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Whether you are interested in sponsoring a production, joining our talent roster, or exploring a partnership, we want to hear from you. Our team of professionals are ready to discuss how CNBC Film UK can work with you.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Email</p>
                <a href="mailto:info@cnbc.film" className="font-body text-base text-foreground hover:text-gold transition-colors">
                  info@cnbc.film
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Location</p>
                <p className="font-body text-sm text-muted-foreground">London, United Kingdom</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Parent Company</p>
                <p className="font-body text-sm text-muted-foreground">
                  Corporate Network Broadcasting Cinema
                  <br />
                  United States of America
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-12 border-l-2 border-gold pl-6">
              <p className="font-display text-xl font-light text-foreground/70 italic leading-relaxed">
                &ldquo;Every great film begins with a conversation. Let ours begin today.&rdquo;
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card/80 backdrop-blur-sm border border-border p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <div className="gold-line mx-auto" />
                <h3 className="font-display text-4xl font-light text-foreground">
                  Thank You
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Your message has been received. A member of our team will be in touch at <strong className="text-gold">info@cnbc.film</strong> within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-body text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-body text-xs tracking-widest uppercase text-gold mb-2">Send an Enquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-muted-foreground/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-muted-foreground/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-muted-foreground/50"
                    placeholder="+44 ..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Enquiry Type *</label>
                  <select
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="bg-input border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="sponsorship">Film Sponsorship</option>
                    <option value="talent">Talent / Casting</option>
                    <option value="partnership">Corporate Partnership</option>
                    <option value="production">Production Services</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-input border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-muted-foreground/50"
                    placeholder="Brief subject"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-muted-foreground/50 resize-none"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <p className="font-body text-[10px] text-muted-foreground leading-relaxed">
                  By submitting this form you agree to our{' '}
                  <a href="/legal/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>.
                  We will respond to your enquiry at <strong className="text-foreground">info@cnbc.film</strong>.
                </p>

                <button
                  type="submit"
                  className="font-body text-xs tracking-widest uppercase px-10 py-4 bg-gold text-background hover:bg-gold-light transition-all duration-300 text-center mt-2"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
