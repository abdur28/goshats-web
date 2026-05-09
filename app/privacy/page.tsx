import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Goshat Logistics',
  description: 'Comprehensive Privacy Policy for Goshat Logistics, detailing extensive data collection, usage, sharing, and security practices.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-neutral-100">
          <header className="mb-12 border-b border-neutral-100 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800">
                <Shield className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                Privacy Policy
              </h1>
            </div>
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Effective Date: {lastUpdated}</p>
          </header>

          <div className="space-y-10 text-neutral-600 leading-relaxed text-sm md:text-base">
            
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction and Scope</h2>
              <p className="mb-4">
                Welcome to Goshat Logistics ("Company", "we", "our", or "us"). This Privacy Policy describes how Goshat Logistics collects, uses, processes, and discloses your information, including personal information, in conjunction with your access to and use of our mobile applications (the "Customer App" and the "Rider App"), websites, and associated services (collectively, the "Services").
              </p>
              <p>
                This policy applies to all users of our Services worldwide, including but not limited to customers requesting deliveries ("Customers") and independent contractors providing delivery services ("Riders"). By using the Services, you consent to the data practices described in this comprehensive Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information in three primary categories: data you provide directly to us, data we collect automatically through your use of our Services, and data we obtain from third-party sources.</p>
              
              <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">2.1 Information You Provide to Us</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Account Information:</strong> When you register for an account, we collect your full name, email address, phone number, login credentials, and profile picture.</li>
                <li><strong>Delivery Information:</strong> Physical addresses for pick-up and drop-off, recipient names, recipient contact numbers, and specific instructions related to the delivery of packages, food, or documents.</li>
                <li><strong>Rider Verification (KYC) Data:</strong> For individuals applying to be independent contractor Riders, we collect identity verification documents, government-issued identification cards, vehicle registration documents, and biometric data strictly for identity verification purposes.</li>
                <li><strong>Financial Information:</strong> We do not store full credit card numbers. Payment processing is handled by secure third-party processors (e.g., Paystack). We only store payment tokens, transaction history, and for Riders, bank account details for payouts.</li>
                <li><strong>Communications:</strong> Records of your communications with our customer support team, including transcripts of chats, emails, and phone calls.</li>
              </ul>

              <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">2.2 Information Created When You Use Our Services</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Location Data (Customers):</strong> We collect precise or approximate location data from your mobile device if you enable us to do so, to facilitate delivery pick-ups and track order progress.</li>
                <li><strong>Location Data (Riders):</strong> We collect precise location data when the Rider App is running in the foreground or background during an active delivery request to dispatch orders and provide tracking to Customers. We do not track Rider locations when the app is offline or inactive.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our Services, including access dates and times, app features or pages viewed, app crashes, and other system activity.</li>
                <li><strong>Device Information:</strong> We collect data about the devices you use to access our Services, including hardware models, device IP address, operating systems and versions, software, preferred languages, unique device identifiers, and mobile network data.</li>
              </ul>

              <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">2.3 Information from Third Parties</h3>
              <p>We may receive information about you from third parties, such as payment processors, identity verification services, and marketing partners. We may combine this information with other information we collect about you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">Goshat Logistics uses the collected data for the following extensive purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>To Provide and Maintain Services:</strong> To create and update accounts, enable deliveries, calculate pricing, process payments, and track package progress.</li>
                <li><strong>Safety and Security:</strong> To verify Rider identities, screen for unsafe or illegal activities, combat fraud, and ensure the safety of both our Customers and Riders.</li>
                <li><strong>Customer Support:</strong> To direct your questions to the appropriate support agent, investigate and address your concerns, and monitor and improve our customer support responses.</li>
                <li><strong>Research and Development:</strong> For testing, research, analysis, and product development to improve user experience, optimize dispatch algorithms, and develop new features.</li>
                <li><strong>Communications:</strong> To send you receipts, updates on deliveries, security alerts, and administrative messages. We may also send marketing communications about our products, services, and promotions (which you can opt out of at any time).</li>
                <li><strong>Legal Proceedings and Requirements:</strong> To investigate or address claims or disputes relating to your use of our Services, or as otherwise allowed or required by applicable Nigerian law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share the information we collect in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Between Users:</strong> To facilitate a delivery, we share Customer names, pick-up/drop-off locations, phone numbers, and delivery instructions with the assigned Rider. Customers can view the Rider's name, profile photo, vehicle details, and real-time location.</li>
                <li><strong>With Service Providers:</strong> We share data with third-party vendors, consultants, marketing partners, payment processors (e.g., Paystack), and other service providers who need access to such information to carry out work on our behalf.</li>
                <li><strong>For Legal Reasons:</strong> We may share information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, legal process, or governmental request.</li>
                <li><strong>With Law Enforcement:</strong> We may disclose data to law enforcement officials, government authorities, or other third parties if we believe your actions are inconsistent with our Terms of Service, or to protect the rights, property, or safety of Goshat Logistics or others.</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Data Retention and Deletion</h2>
              <p className="mb-4">
                We retain user profile, transaction, and other personal data for as long as you maintain your Goshat Logistics account. We may retain certain information after account deletion if required by law, such as for tax, fraud prevention, or accounting purposes.
              </p>
              <p>
                Users may request deletion of their accounts at any time through the app settings or by contacting our support team. Following such requests, we delete the data that is not required to be retained for legal or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. User Rights and Choices</h2>
              <p className="mb-4">Depending on your location and applicable laws, you have specific rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access and Updates:</strong> You can review and edit most of your account information directly within the app settings.</li>
                <li><strong>Device Permissions:</strong> Most mobile platforms (iOS, Android) have defined certain types of device data that apps cannot access without your consent. You can manage these permissions in your device settings.</li>
                <li><strong>Marketing Opt-Outs:</strong> You may opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional communications, such as receipts or account updates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Security Measures</h2>
              <p>
                We implement robust administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include data encryption, secure server architecture, and restricted access to data by authorized personnel only. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Children's Privacy</h2>
              <p>
                Our Services are not directed to, and we do not knowingly collect personal information from, children under the age of 16. If we find that a child under 16 has given us personal information, we will take steps to delete that information. If you believe that we have inadvertently collected information from a child under 16, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you of the changes through the app or through others means, such as email. To the extent permitted under applicable law, by using our Services after such notice, you consent to our updates to this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contact Us</h2>
              <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at:</p>
              <address className="not-italic text-neutral-800 bg-neutral-100 p-6 rounded-2xl border border-neutral-200 block w-full shadow-sm">
                <span className="font-bold text-lg mb-2 block">Goshat Logistics</span>
                <span className="block mb-1">Bekaji Benin Crescent, No 49a</span>
                <span className="block mb-1">Phone: +234 813 978 1449</span>
                <span className="block">Email: <a href="mailto:Goshatlogistics@gmail.com" className="text-blue-600 hover:underline">Goshatlogistics@gmail.com</a></span>
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
