import { DollarSign } from 'lucide-react';
import type { Metadata } from 'next';
import LegalPageHero from '@/components/legal/LegalPageHero';
import ContactSection from '@/components/legal/ContactSection';

export const metadata: Metadata = {
  title: 'Refund Policy | Jabin International',
  description: 'Refund Policy for Jabin International Private Limited - Business Services & Digital Solutions',
};

export default function RefundPolicyPage() {
  return (
    <>
      <LegalPageHero
        title="Refund Policy"
        description="Clear and fair refund terms for all our business services and solutions"
        icon={DollarSign}
        lastUpdated={new Date().toLocaleDateString()}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="prose prose-lg max-w-none">

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Eligibility</h2>
            <p className="text-gray-700 mb-4">
              We want you to be satisfied with our services. Refunds may be available under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Request made within 7 days of project initiation</li>
              <li>No more than 20% of project work has been completed</li>
              <li>Valid reason for service cancellation is provided</li>
              <li>All project materials and access credentials are returned</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">The following are not eligible for refunds:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Projects completed beyond 20% of total scope</li>
              <li>Custom development work that has been delivered</li>
              <li>Administrative and consultation fees</li>
              <li>Third-party services and licenses purchased for the project</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
            <p className="text-gray-700 mb-4">To request a refund:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Contact us at info@jabin.org with your refund request</li>
              <li>Provide your project details and reason for refund</li>
              <li>Our team will review your request within 5-7 business days</li>
              <li>If approved, refunds will be processed within 10-15 business days</li>
              <li>Refunds will be credited to the original payment method</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Transfers</h2>
            <p className="text-gray-700 mb-4">
              Instead of a refund, you may be eligible to transfer your service agreement to a different
              service offering or future project, subject to availability and service compatibility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h2>
            <p className="text-gray-700 mb-4">
              In case of service cancellation due to circumstances beyond our control
              (natural disasters, pandemics, etc.), we will offer full refunds or service transfers.
            </p>
          </section>
          <ContactSection />
        </div>
      </div>
    </>
  );
}
          