'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FormField, Input, Textarea, Select } from '@/components/form';
import Button from '@/components/button';

const serviceOptions = [
  { value: 'residential', label: 'Residential Construction' },
  { value: 'commercial', label: 'Commercial Building' },
  { value: 'renovation', label: 'Renovation & Remodeling' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'other', label: 'Other' },
];

const contactDetails = [
  {
    icon: '/icons/location.png',
    label: 'Office Address',
    lines: ['Plot 45, Street 7, F-8/2', 'Islamabad, 44000', 'Pakistan'],
  },
  {
    icon: '/icons/phone.png',
    label: 'Phone',
    lines: ['+92 51 345 6789', '+92 300 123 4567'],
  },
  {
    icon: '/icons/email.png',
    label: 'Email',
    lines: ['info@majeedbuilders.com', 'projects@majeedbuilders.com'],
  },
  {
    icon: '/icons/timing.png',
    label: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 6:00 PM PKT'],
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = 'Full name is required.';
  if (!data.email.trim()) errors.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!data.service) errors.service = 'Please select a service.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSelect = (field: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold uppercase">Get in Touch</span>
          <h1 className="mt-3 text-5xl font-black text-white uppercase leading-tight">
            Contact Us
          </h1>
          <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          <p className="mt-6 max-w-xl text-stone-300 text-lg leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form and our team
            will get back to you within 24 business hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-black text-stone-900 uppercase mb-2">
                  Office Information
                </h2>
                <div className="h-[2px] w-8 bg-amber-700" />
              </div>

              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4 p-5 bg-stone-50 border border-stone-200">
                  <div className="relative w-6 h-6 flex-shrink-0 mt-0.5">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-stone-400 uppercase mb-2">
                      {item.label}
                    </div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-stone-700 text-sm leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-xl font-black text-stone-900 uppercase mb-2">
                  Send Us a Message
                </h2>
                <div className="h-[2px] w-8 bg-amber-700" />
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-stone-900 uppercase mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Thank you, <strong>{form.name}</strong>. We&apos;ve received your enquiry and
                    will get back to you at <strong>{form.email}</strong> within 24 business hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Full Name" required error={errors.name}>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange('name')}
                        error={!!errors.name}
                        autoComplete="name"
                      />
                    </FormField>
                    <FormField label="Email Address" required error={errors.email}>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange('email')}
                        error={!!errors.email}
                        autoComplete="email"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Phone Number" error={errors.phone}>
                      <Input
                        type="tel"
                        placeholder="Your Phone Number (optional)"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        error={!!errors.phone}
                        autoComplete="tel"
                      />
                    </FormField>
                    <FormField label="Service Required" required error={errors.service}>
                      <Select
                        options={serviceOptions}
                        placeholder="Select a service..."
                        value={form.service}
                        onChange={handleSelect('service')}
                        error={!!errors.service}
                      />
                    </FormField>
                  </div>

                  <FormField label="Your Message" required error={errors.message}>
                    <Textarea
                      placeholder="Tell us about your project — location, size, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={handleChange('message')}
                      error={!!errors.message}
                      rows={6}
                    />
                  </FormField>

                  <p className="text-xs text-stone-400 leading-relaxed">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-amber-700 hover:underline">
                      Privacy Policy
                    </a>
                    . We will never share your information with third parties.
                  </p>

                  <Button type="submit" size="lg" disabled={submitting} fullWidth>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
