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
        <h1 className="text-4xl font-bold mb-6 text-center">
          Cancellation & Refund Policy
        </h1>
        <div className="space-y-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <p>
            At <strong>MajlisDev</strong>, we strive to deliver high-quality digital products that meet the needs of developers and designers worldwide. Please read our Cancellation & Refund Policy carefully before making a purchase.
          </p>

          <h2 className="text-lg font-semibold">1. Digital Product Nature</h2>
          <p>
            The <strong>MajlisUI Kit</strong> is a downloadable digital product. Once access is granted and the files are delivered, the product is considered &quot;used&quot; and cannot be returned.
          </p>

          <h2 className="text-lg font-semibold">2. No Cancellations</h2>
          <p>
            Orders cannot be canceled once they have been processed. As a digital product, access to the kit is granted immediately after purchase, making cancellations impossible.
          </p>

          <h2 className="text-lg font-semibold">3. No Refunds or Exchanges</h2>
          <p>
            We do not offer refunds or exchanges under any circumstances. All sales are final. Please ensure you’ve reviewed the product details, documentation, and demo before making a purchase.
          </p>

          <h2 className="text-lg font-semibold">4. Lifetime License</h2>
          <p>
            By purchasing the <strong>MajlisUI Kit</strong>, you receive a non-transferable, lifetime license. This means you have perpetual access to the current version and any future updates released as part of the product.
          </p>

          <h2 className="text-lg font-semibold">5. Support</h2>
          <p>
            While we do not offer refunds, we are committed to supporting our customers. If you encounter any issues related to the kit’s functionality, please contact our support team, and we’ll do our best to help resolve them.
          </p>

          <h2 className="text-lg font-semibold">6. Contact Information</h2>
          <p>
            If you have any questions regarding this policy, please reach out to us at:{" "}
            <a href="mailto:support@majlisui.com">
              support@majlisui.com
            </a>
          </p>

          <p className="italic text-sm text-center text-muted-foreground">
            By purchasing MajlisUI Kit, you agree to this policy and accept the terms outlined above.
          </p>
        </div>
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
