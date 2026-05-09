import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Goshat Logistics',
  description: 'Comprehensive Terms of Service and user agreements for the Goshat Logistics platform.',
};

export default function TermsOfServicePage() {
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
                <Scale className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                Terms of Service
              </h1>
            </div>
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Effective Date: {lastUpdated}</p>
          </header>

          <div className="space-y-10 text-neutral-600 leading-relaxed text-sm md:text-base">
            
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Contractual Relationship</h2>
              <p className="mb-4">
                These Terms of Service ("Terms") govern the access or use by you, an individual or entity, of applications, websites, content, products, and services (the "Services") made available by Goshat Logistics.
              </p>
              <p className="mb-4">
                PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES. In these Terms, the words "including" and "include" mean "including, but not limited to."
              </p>
              <p>
                Your access and use of the Services constitutes your agreement to be bound by these Terms, which establishes a contractual relationship between you and Goshat Logistics. If you do not agree to these Terms, you may not access or use the Services. Goshat Logistics may immediately terminate these Terms or any Services with respect to you, or generally cease offering or deny access to the Services or any portion thereof, at any time for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. The Services</h2>
              <p className="mb-4">
                The Services comprise mobile applications and related services (each, an "Application"), which enable users to arrange, schedule, and execute logistics and delivery services, including the delivery of packages, food, documents, and parcels with independent third-party providers of such services ("Riders").
              </p>
              <p className="font-semibold text-neutral-900 mb-2">Platform Nature:</p>
              <p>
                YOU ACKNOWLEDGE THAT GOSHAT LOGISTICS DOES NOT PROVIDE TRANSPORTATION OR LOGISTICS SERVICES OR FUNCTION AS A TRANSPORTATION CARRIER AND THAT ALL SUCH TRANSPORTATION OR LOGISTICS SERVICES ARE PROVIDED BY INDEPENDENT THIRD-PARTY CONTRACTORS WHO ARE NOT EMPLOYED BY GOSHAT LOGISTICS OR ANY OF ITS AFFILIATES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Eligibility and Accounts</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>User Requirements:</strong> The Services are not available for use by persons under the age of 16. You may not authorize third parties to use your Account, and you may not allow persons under the age of 16 to receive delivery services unless they are accompanied by you.
                </li>
                <li>
                  <strong>Account Registration:</strong> In order to use most aspects of the Services, you must register for and maintain an active personal user Services account ("Account"). Account registration requires you to submit to Goshat Logistics certain personal information, such as your name, address, mobile phone number, and age.
                </li>
                <li>
                  <strong>Account Security:</strong> You are responsible for all activity that occurs under your Account, and you agree to maintain the security and secrecy of your Account username and password at all times.
                </li>
                <li>
                  <strong>Rider KYC Requirements:</strong> Users registering as Riders must complete our Know Your Customer (KYC) verification process, which includes submitting a valid government-issued ID and other required documentation. Failure to complete or maintain KYC compliance will result in immediate suspension or termination of the Rider Account.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. User Conduct and Prohibited Activities</h2>
              <p className="mb-4">By using the Services, you agree that you will not:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Send or request the delivery of illegal, highly regulated, dangerous, hazardous, or restricted items, including but not limited to firearms, explosives, illegal drugs, or stolen goods.</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li>Use the Services for any unlawful purpose, including but not limited to fraud, money laundering, or harassment.</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
                <li>Attempt to gain unauthorized access to the Services, other accounts, computer systems, or networks connected to the Services.</li>
                <li>Use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, scrape, or in any way reproduce or circumvent the navigational structure or presentation of the Services.</li>
              </ul>
              <p>Goshat Logistics reserves the right to decline any delivery request and to inspect packages if there is reasonable suspicion of a prohibited item.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                You understand that use of the Services may result in charges to you for the services or goods you receive from a Rider ("Charges"). 
              </p>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Payment Processing:</strong> Charges will be inclusive of applicable taxes where required by law. Charges paid by you are final and non-refundable, unless otherwise determined by Goshat Logistics. Payment processing services are provided by third-party processors (e.g., Paystack). We also support direct cash payments and bank transfers directly to Riders, subject to platform verification.
                </li>
                <li>
                  <strong>Strict No Refunds Policy:</strong> Due to the nature of the logistics services, once a delivery order has been accepted and commenced by a Rider, the transaction is deemed final. <strong>Goshat Logistics maintains a strict no refunds and no cancellations policy.</strong> If you believe you were incorrectly charged, you must contact our support within 24 hours of the transaction for a discretionary review.
                </li>
                <li>
                  <strong>Promotional Offers:</strong> Goshat Logistics may from time to time provide certain users with promotional offers and discounts that may result in different amounts charged for the same or similar services or goods obtained through the use of the Services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Disclaimers</h2>
              <p className="uppercase text-sm md:text-base font-semibold leading-relaxed">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." GOSHAT LOGISTICS DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN ADDITION, GOSHAT LOGISTICS MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF THE SERVICES OR ANY SERVICES OR GOODS REQUESTED THROUGH THE USE OF THE SERVICES, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. GOSHAT LOGISTICS DOES NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF INDEPENDENT RIDERS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, AND ANY SERVICE OR GOOD REQUESTED IN CONNECTION THEREWITH, REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Limitation of Liability</h2>
              <p className="uppercase text-sm md:text-base font-semibold leading-relaxed mb-4">
                GOSHAT LOGISTICS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE SERVICES, EVEN IF GOSHAT LOGISTICS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="uppercase text-sm md:text-base font-semibold leading-relaxed">
                GOSHAT LOGISTICS SHALL NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES ARISING OUT OF: (i) YOUR USE OF OR RELIANCE ON THE SERVICES OR YOUR INABILITY TO ACCESS OR USE THE SERVICES; OR (ii) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY RIDER. IN NO EVENT SHALL GOSHAT LOGISTICS'S TOTAL LIABILITY TO YOU IN CONNECTION WITH THE SERVICES FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION EXCEED TWENTY THOUSAND NIGERIAN NAIRA (NGN 20,000).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold Goshat Logistics and its officers, directors, employees, and agents harmless from any and all claims, demands, losses, liabilities, and expenses (including attorneys' fees) arising out of or in connection with: (i) your use of the Services or services or goods obtained through your use of the Services; (ii) your breach or violation of any of these Terms; (iii) Goshat Logistics's use of your User Content; or (iv) your violation of the rights of any third party, including Riders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Dispute Resolution and Governing Law</h2>
              <p className="mb-4">
                Except as otherwise set forth in these Terms, these Terms shall be exclusively governed by and construed in accordance with the laws of the Federal Republic of Nigeria, excluding its rules on conflicts of laws.
              </p>
              <p>
                Any dispute, conflict, claim or controversy arising out of or broadly in connection with or relating to the Services or these Terms, including those relating to its validity, its construction or its enforceability (any "Dispute") shall be first mandatorily submitted to mediation proceedings under the Lagos State Multi-Door Courthouse (LMDC) Mediation Procedure. If such Dispute has not been settled within sixty (60) days after a request for mediation has been submitted, such Dispute can be referred to and shall be exclusively and finally resolved by arbitration under the Arbitration and Mediation Act of Nigeria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Other Provisions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Severability:</strong> If any provision of these Terms is held to be illegal, invalid or unenforceable, in whole or in part, under any law, such provision or part thereof shall to that extent be deemed not to form part of these Terms but the legality, validity and enforceability of the other provisions in these Terms shall not be affected.</li>
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement and understanding of the parties with respect to its subject matter and replaces and supersedes all prior or contemporaneous agreements or undertakings regarding such subject matter.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Contact Information</h2>
              <p className="mb-4">If you have any questions regarding these Terms, please contact us at:</p>
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
