import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Al Air Duct Cleaning Atlanta',
  description: 'Terms and Conditions for using Al Air Duct Cleaning Atlanta services.',
  robots: { index: true, follow: true },
};

export default function TermsConditionsPage() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Services</h2>
            <p>
              Al Air Duct Cleaning Atlanta provides professional air duct cleaning, dryer vent cleaning, and related HVAC services in Atlanta, Georgia.
            </p>

            <h2>2. Quotes and Pricing</h2>
            <p>
              All quotes are estimates based on information provided. Final pricing may vary based on actual conditions discovered on-site. We will inform you of any changes before proceeding.
            </p>

            <h2>3. Scheduling and Cancellations</h2>
            <p>
              Appointments must be cancelled at least 24 hours in advance to avoid cancellation fees. Same-day cancellations may be subject to a $75 fee.
            </p>

            <h2>4. Payment</h2>
            <p>
              Payment is due upon completion of services. We accept cash, credit cards, and checks. A deposit may be required for large commercial projects.
            </p>

            <h2>5. Warranty</h2>
            <p>
              We guarantee our work for 90 days. If you experience any issues related to our service within this period, we will return to address them at no additional charge.
            </p>

            <h2>6. Liability</h2>
            <p>
              We carry full insurance coverage. We are not liable for pre-existing damage or issues unrelated to our services. We will document conditions before beginning work.
            </p>

            <h2>7. Access</h2>
            <p>
              Client must provide clear access to all areas requiring service. Additional fees may apply if access is restricted or requires special equipment.
            </p>

            <h2>8. Disputes</h2>
            <p>
              Any disputes will be governed by the laws of Georgia. We prefer to resolve issues amicably before pursuing legal action.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about these terms? Contact us at <a href="tel:4049484544" className="text-primary-600">(404) 948-4544</a>.
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
  );
}
