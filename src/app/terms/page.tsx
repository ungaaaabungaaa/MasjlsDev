"use client";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CTA from "@/components/sections/cta";
import Testimonials from "@/components/sections/testimonials";

export default function Component() {
  return (
    <>
      <Header />
      <div className="px-4 py-12 md:px-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
        <div className="space-y-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <p className="text-center">
            Welcome to MajlisDev. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, platform, and any associated services (collectively, the &quot;Service&quot;). By accessing or using our Service, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold">1. Services Provided</h2>
          <p>
            MajlisDev provides custom software development services including web applications, mobile app development, 
            SaaS platform development, e-commerce solutions, enterprise software, API integrations, and technical consulting. 
            All our services fall under the IT and Software category and are designed to deliver scalable, secure, and 
            high-performance software solutions for businesses.
          </p>

          <h2 className="text-xl font-semibold">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By agreeing to these Terms, you represent and warrant that you have the legal capacity to enter into a binding contract.
          </p>

          <h2 className="text-xl font-semibold">3. User Accounts</h2>
          <p>
            When you create an account, you must provide accurate and complete information. You are responsible for all activities under your account and for safeguarding your login credentials.
          </p>

          <h2 className="text-xl font-semibold">4. Acceptable Use</h2>
          <p>
            You agree not to misuse our services. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>Uploading or distributing viruses or harmful code</li>
            <li>Accessing unauthorized data or systems</li>
            <li>Sending spam or phishing messages</li>
            <li>Engaging in activities that could harm MajlisDev or its users</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Data Privacy</h2>
          <p>
            We value your privacy. By using our services, you consent to the collection and use of your information as outlined in our <a href="/privacy">Privacy Policy</a>. We do not sell or rent your personal data to third parties.
          </p>

          <h2 className="text-xl font-semibold">6. Third-Party Services</h2>
          <p>
            Our services may include integrations or links to third-party tools or platforms. MajlisDev is not responsible for the availability or accuracy of such external services, nor does it endorse any content or policies they offer.
          </p>

          <h2 className="text-xl font-semibold">7. Service Availability</h2>
          <p>
            We aim to provide uninterrupted access to our services. However, we do not guarantee continuous uptime or availability. Maintenance, updates, or unexpected outages may occasionally occur.
          </p>

          <h2 className="text-xl font-semibold">8. Payment & Billing</h2>
          <p>
            Our software development services may require payment through various plans. All fees for software development 
            projects are due as specified in your chosen package or custom agreement. Failure to pay may result in 
            suspension of development work or termination of software services.
          </p>

          <h2 className="text-xl font-semibold">9. Subscription Renewals & Cancellation</h2>
          <p>
            For ongoing software maintenance and support subscriptions, renewals are automatic unless canceled prior to 
            the renewal date. You may cancel your software maintenance subscription anytime via your account dashboard. 
            No refunds will be issued for partial billing periods of software services.
          </p>

          <h2 className="text-xl font-semibold">10. Intellectual Property</h2>
          <p>
            All software code, technical documentation, system architecture, and proprietary software solutions developed 
            by MajlisDev are our intellectual property or that of our licensors. Upon full payment, you receive appropriate 
            usage rights to the software as specified in your service agreement. You may not redistribute, reverse engineer, 
            or create derivative works without explicit permission.
          </p>

          <h2 className="text-xl font-semibold">11. Software Development Feedback</h2>
          <p>
            If you submit technical requirements, feature requests, or feedback regarding our software development services, 
            you grant MajlisDev a non-exclusive, royalty-free, worldwide license to use, modify, and incorporate such 
            feedback into our software development processes and future projects.
          </p>

          <h2 className="text-xl font-semibold">12. Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these Terms. Upon termination, your access to the platform and stored data may be revoked.
          </p>

          <h2 className="text-xl font-semibold">13. Disclaimer of Warranties</h2>
          <p>
            Our services are provided &quot;as is&quot; and &quot;as available.&quot; We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 className="text-xl font-semibold">14. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, MajlisDev is not liable for any indirect, incidental, consequential, or punitive damages, or loss of profits or revenues, whether incurred directly or indirectly.
          </p>

          <h2 className="text-xl font-semibold">15. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless MajlisDev, its affiliates, officers, and employees from any claims, damages, or expenses arising out of your use of the service or violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold">16. Changes to Terms</h2>
          <p>
            We may update these Terms periodically. Any changes will be posted on this page with the updated date. Your continued use of the service indicates acceptance of the modified terms.
          </p>

          <h2 className="text-xl font-semibold">17. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction, e.g., &quot;the Republic of India&quot;], without regard to conflict of law principles.
          </p>

          <h2 className="text-xl font-semibold">18. Contact Us</h2>
          <p>
            For any questions or concerns regarding these Terms, please reach out to us at <a href="mailto:support@majlisdev.com">support@majlisdev.com</a>.
          </p>
        </div>
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
