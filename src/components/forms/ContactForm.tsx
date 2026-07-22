'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms API endpoint - Simple and reliable
      const formData = new FormData();

      // Web3Forms access key - Sends to info@alhomeservices.us
      formData.append('access_key', '6c4dd6eb-b6b8-44ae-bde9-9d8d739065c8');

      // Required fields
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);

      // Optional fields
      formData.append('subject', `New Lead: ${data.service} - ${data.name}`);
      formData.append('message', `
Service Requested: ${data.service}

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Message:
${data.message || 'No message provided'}

---
Submitted from: Al Air Duct Cleaning Atlanta Website
      `);

      // Web3Forms options
      formData.append('from_name', 'Al Air Duct Cleaning Website');
      formData.append('replyto', data.email);
      formData.append('redirect', 'false');

      console.log('Submitting form to Web3Forms...');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      console.log('Web3Forms response:', result);

      if (result.success) {
        console.log('Form submitted successfully!');
        setSubmitStatus('success');
        reset();
      } else {
        console.error('Form submission failed:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Phone is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Interested In *
        </label>
        <select
          id="service"
          {...register('service', { required: 'Please select a service' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="Air Duct Cleaning">Air Duct Cleaning</option>
          <option value="Air Scrubber Installation">Air Scrubber Installation</option>
          <option value="Dryer Vent Cleaning">Dryer Vent Cleaning</option>
          <option value="Dryer Vent Replacement">Dryer Vent Replacement</option>
          <option value="Air Duct Installation">Air Duct Installation</option>
          <option value="Air Duct Removal">Air Duct Removal</option>
          <option value="System Evaluation">System Evaluation</option>
          <option value="Other">Other</option>
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-800 rounded-lg">
          Thank you! We will contact you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-800 rounded-lg">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Get Free Quote'}
      </button>
    </form>
  );
}
