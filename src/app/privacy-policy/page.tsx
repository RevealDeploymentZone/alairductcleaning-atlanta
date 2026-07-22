import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Al Air Duct Cleaning Atlanta',
  description: 'Privacy Policy for Al Air Duct Cleaning Atlanta. Learn how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide when you request a quote, schedule a service, or contact us. This may include your name, email address, phone number, address, and service preferences.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries</li>
                <li>Schedule appointments</li>
                <li>Send service reminders and updates</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, subject to confidentiality agreements.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>6. Cookies</h2>
              <p>
                We use cookies to improve your browsing experience. You can disable cookies in your browser settings, though some features may not function properly.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@alhomeservices.us" className="text-primary-600">info@alhomeservices.us</a> or call <a href="tel:4049484544" className="text-primary-600">(404) 948-4544</a>.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-primary-600 hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
