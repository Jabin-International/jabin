import { FileText } from 'lucide-react';
import type { Metadata } from 'next';
import LegalPageHero from '@/components/legal/LegalPageHero';

export const metadata: Metadata = {
  title: 'Terms of Service | Jabin International',
  description: 'Terms of Service for Jabin International Private Limited - Business Services & Digital Solutions',
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalPageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our services"
        icon={FileText}
        lastUpdated={new Date().toLocaleDateString()}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Jabin International&apos;s services, you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access and use our business services and digital solutions for
              commercial use as per the agreed service terms only.
            </p>
            <p className="text-gray-700 mb-4">This license shall automatically terminate if you violate any of these restrictions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Engagement</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Clients must provide accurate information during service consultation</li>
              <li>Service fees must be paid as per the agreed schedule and terms</li>
              <li>Clients are expected to actively participate in project collaboration</li>
              <li>Project deliverables are provided based on agreed specifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All service deliverables, including but not limited to websites, applications, designs, and business solutions,
              are the property of the client upon full payment. Jabin International retains rights to general methodologies and frameworks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Jabin International shall not be liable for any damages arising from the use or inability to use
              our services, except as specifically outlined in the service agreement.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
            