"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

// Test data for development
const TEST_DATA = {
  name: "John Doe",
  email: "john@example.com",
  orderId: "order_test_123456",
  paymentId: "pay_test_789012",
  amount: "96,000.00"
};

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  
  // Use URL params if available, otherwise use test data
  const orderDetails = {
    name: searchParams.get("name") || TEST_DATA.name,
    email: searchParams.get("email") || TEST_DATA.email,
    orderId: searchParams.get("orderId") || TEST_DATA.orderId,
    paymentId: searchParams.get("paymentId") || TEST_DATA.paymentId,
    amount: searchParams.get("amount") || TEST_DATA.amount,
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-2">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icons.palmTreeLogo className="h-16 w-16" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
              <p className="text-muted-foreground mb-4">
                Your payment has been successfully processed. <br></br> You will receive a confirmation email shortly.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium">{orderDetails.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{orderDetails.email}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Order ID</span>
                    <span className="font-medium">{orderDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Payment ID</span>
                    <span className="font-medium">{orderDetails.paymentId}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Amount Paid</span>
                    <span className="font-medium">₹{orderDetails.amount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                If you have any questions, please contact our support team.
              </p>
              <Button className="text-white" asChild size="lg">
                <Link href="/">
                  Return to Home
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
} 