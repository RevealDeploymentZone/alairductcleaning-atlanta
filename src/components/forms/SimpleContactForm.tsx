'use client';

import { useState, FormEvent } from 'react';

export default function SimpleContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Web3Forms Access Key - Hidden */}
      <input type="hidden" name="access_key" value="6c4dd6eb-b6b8-44ae-bde9-9d8d739065c8" />

      {/* Custom Subject */}
      <input type="hidden" name="subject" value="New Contact Form Submission from Al Air Duct Cleaning Atlanta" />

      {/* From Name */}
      <input type="hidden" name="from_name" value="Al Air Duct Cleaning Atlanta Website" />

      {/* Redirect - false to get JSON response */}
      <input type="hidden" name="redirect" value="false" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
        >
          <option value="" className="text-gray-500">Select a service</option>
          <option value="Air Duct Cleaning" className="text-gray-900">Air Duct Cleaning</option>
          <option value="Air Scrubber Installation" className="text-gray-900">Air Scrubber Installation</option>
          <option value="Dryer Vent Cleaning" className="text-gray-900">Dryer Vent Cleaning</option>
          <option value="Dryer Vent Replacement" className="text-gray-900">Dryer Vent Replacement</option>
          <option value="Air Duct Installation" className="text-gray-900">Air Duct Installation</option>
          <option value="Air Duct Removal" className="text-gray-900">Air Duct Removal</option>
          <option value="System Evaluation" className="text-gray-900">System Evaluation</option>
          <option value="Other" className="text-gray-900">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
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
          Something went wrong. Please try again or call us at (404) 948-4544.
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
