"use client";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CTA from "@/components/sections/cta";
import Testimonials from "@/components/sections/testimonials";

export default function Component() {
  return (
    <>
    <Header />
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
    </div>
    <Testimonials /> 
    <CTA />
    <Footer />
    </>
  );
}
