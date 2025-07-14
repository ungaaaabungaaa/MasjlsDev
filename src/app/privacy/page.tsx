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
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="space-y-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <p className="text-center">
            At MajlisDev, your privacy is important to us. This Privacy Policy describes how we collect, use, and protect your personal information when you use our software development services and IT solutions platform.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect different types of information depending on how you use our services:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment details.</li>
            <li><strong>Account Data:</strong> Login credentials, preferences, and usage patterns.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, operating system, and usage analytics.</li>
            <li><strong>Cookies & Tracking Data:</strong> To enhance user experience and site performance.</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Provide and maintain our software development services</li>
            <li>Process transactions and send billing notifications for software projects</li>
            <li>Respond to technical support inquiries and provide software assistance</li>
            <li>Send updates about our software development services and technical newsletters</li>
            <li>Improve our software development processes through analytics and feedback</li>
            <li>Prevent fraudulent or unauthorized use of our software services</li>
          </ul>

          <h2 className="text-xl font-semibold">3. How We Share Your Information</h2>
          <p>
            We do not sell or rent your personal information. However, we may share it with:
          </p>
          <ul className="list-disc pl-6">
            <li>Trusted third-party service providers who assist in delivering our software development services</li>
            <li>Payment processors (such as Razorpay) for processing payments for our software development projects</li>
            <li>Government authorities or law enforcement if legally required</li>
            <li>In connection with a business transaction such as a merger or acquisition</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We implement industry-standard security measures, including encryption, firewalls, and secure server protocols to protect your data and any software-related information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold">5. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to understand user behavior, improve site functionality, and deliver personalized experiences. You can control cookies through your browser settings.
          </p>

          <h2 className="text-xl font-semibold">6. Your Rights & Choices</h2>
          <p>
            Depending on your location, you may have rights including:
          </p>
          <ul className="list-disc pl-6">
            <li>The right to access, correct, or delete your personal data</li>
            <li>The right to withdraw consent at any time</li>
            <li>The right to data portability (where applicable)</li>
            <li>The right to object to processing for marketing or other reasons</li>
          </ul>

          <h2 className="text-xl font-semibold">7. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide our software development services, comply with legal obligations, resolve disputes, and enforce agreements related to our IT and software services.
          </p>

          <h2 className="text-xl font-semibold">8. Third-Party Links</h2>
          <p>
            Our software development platform may contain links to third-party websites or services. We are not responsible for their privacy practices or content. Please review their privacy policies separately.
          </p>

          <h2 className="text-xl font-semibold">9. Children&apos;s Privacy</h2>
          <p>
            Our software development services are not intended for children under the age of 13. We do not knowingly collect personal data from minors. If we learn we&apos;ve collected such data, we will take steps to delete it promptly.
          </p>

          <h2 className="text-xl font-semibold">10. International Users</h2>
          <p>
            If you are accessing our software development services from outside India, please be aware that your data may be transferred to, stored, and processed in India or other countries where our software infrastructure is located.
          </p>

          <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of our services constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-xl font-semibold">12. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or your data, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:support@majlisdev.com">support@majlisdev.com</a><br />
          </p>
        </div>
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
