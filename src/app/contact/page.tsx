"use client";
import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CTA from "@/components/sections/cta";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  query: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  query?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    query: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Query validation
    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Query must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({ name: "", email: "", query: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error - you might want to show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <div className="px-4 py-16 md:px-24 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Icons.palmTreeLogo className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your software development inquiry has been sent successfully. Our technical team will get back to you within 24 hours with a detailed proposal.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="mt-6"
            >
              Send Another Message
            </Button>
          </div>
        </div>
        <Testimonials />
        <CTA />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="px-4 py-12 md:px-24 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
            Contact
          </h2>
          <h1 className="text-4xl font-bold">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a software development project or need technical consultation? We&apos;d love to hear from you. 
            Send us your requirements and we&apos;ll respond with a detailed technical proposal.
          </p>
        </div>

        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icons.palmTreeLogo className="h-5 w-5" />
              Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={cn(
                    "transition-colors",
                    errors.name ? "border-destructive focus-visible:ring-destructive" : ""
                  )}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={cn(
                    "transition-colors",
                    errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="query">Project Requirements</Label>
                <textarea
                  id="query"
                  name="query"
                  placeholder="Tell us about your software development needs, technical requirements, or ask us about our IT services..."
                  value={formData.query}
                  onChange={handleInputChange}
                  rows={6}
                  className={cn(
                    "flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors",
                    errors.query ? "border-destructive focus-visible:ring-destructive" : ""
                  )}
                />
                {errors.query && (
                  <p className="text-sm text-destructive">{errors.query}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icons.palmTreeLogo className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icons.palmTreeLogo className="mr-2 h-4 w-4" />
                     Submit Software Requirements
                  </>
                )}
              </Button>
            </form>
            <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            You can also reach us directly at{" "}
            <a 
              href="mailto:support@majlisdev.com" 
              className="text-primary hover:underline"
            >
              support@majlisdev.com
            </a>
          </p>
        </div>
          </CardContent>
        </Card>

        
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
