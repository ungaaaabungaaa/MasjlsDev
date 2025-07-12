"use client";
import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutPage() {
  const [couponCode, setCouponCode] = useState("");
  const [billingInfo, setBillingInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle coupon code logic here
    console.log("Coupon code:", couponCode);
  };

  const handleCheckout = () => {
    // Validate billing information
    if (!billingInfo.email || !billingInfo.firstName || !billingInfo.lastName) {
      alert("Please fill in all required billing information.");
      return;
    }

    // Trigger the hidden PayPal button
    const paypalButton = document.querySelector('[data-paypal-button]') as HTMLElement;
    if (paypalButton) {
      paypalButton.click();
    } else {
      console.log("Billing info:", billingInfo);
      console.log("Proceeding to PayPal checkout...");
    }
  };

  // PayPal order creation
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "1080.00",
            currency_code: "USD",
          },
          description: "MajlisUI Kit - Complete UI Component Library",
        },
      ],
    });
  };

  // PayPal payment approval
  const onApprove = async (data: any, actions: any) => {
    setIsProcessing(true);
    try {
      const details = await actions.order.capture();
      console.log("Payment successful:", details);
      setPaymentSuccess(true);
      alert("Payment completed successfully!");
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // PayPal error handling
  const onError = (err: any) => {
    console.error("PayPal error:", err);
    alert("An error occurred with PayPal. Please try again.");
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex flex-col items-center justify-center">
            <Icons.palmTreeLogo className="h-12 w-12" />
            <h1 className="text-3xl font-bold text-center mb-2">OneClick CheckOut</h1>
            <p className="text-muted-foreground text-center">Fix Your Broken UI</p>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto shadow-none border-none">
            {/* Left Column - Billing Form */}
            <div className="space-y-6">
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icons.palmTreeLogo className="h-5 w-5" />
                    Billing Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={billingInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={billingInfo.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={billingInfo.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">Address</label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="123 Main Street"
                      value={billingInfo.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium">City</label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={billingInfo.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="state" className="text-sm font-medium">State</label>
                      <Input
                        id="state"
                        name="state"
                        placeholder="NY"
                        value={billingInfo.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="zipCode" className="text-sm font-medium">ZIP Code</label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        placeholder="10001"
                        value={billingInfo.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium">Country</label>
                      <Input
                        id="country"
                        name="country"
                        placeholder="United States"
                        value={billingInfo.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={billingInfo.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {!paymentSuccess && (
                <>
                  <Button 
                    onClick={handleCheckout}
                    className="w-full h-12 text-lg text-white font-semibold"
                    size="lg"
                    disabled={isProcessing}
                  >
                    Pay with PayPal
                  </Button>
                  
                  {/* Hidden PayPal button for programmatic triggering */}
                  <div className="hidden">
                    <PayPalScriptProvider
                      options={{
                        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
                        currency: "USD",
                        intent: "capture",
                      }}
                    >
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                        data-paypal-button
                      />
                    </PayPalScriptProvider>
                  </div>
                </>
              )}
                </CardContent>
              </Card>

              {isProcessing && (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  <span className="ml-2 text-sm text-muted-foreground">Processing payment...</span>
                </div>
              )}

              {paymentSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-green-700 font-medium">Payment Successful!</span>
                  </div>
                </div>
              )}

             
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              <Card className="border-none">
                <CardHeader>
                  <CardTitle>Your Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icons.palmTreeLogo className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">MajlisUI Kit</h3>
                        <p className="text-sm text-muted-foreground">Complete UI Component Library <br></br> 100+ Tailored UI Components <br></br> Optimized for Modern Web Apps  <br></br> Built with Accessibility in Mind <br></br>Fully Responsive & Mobile-Ready <br></br> Easy Integration with React/Next.js <br></br> Lifetime Access & Updates <br></br> Commercial Use License Included <br></br> Clean, Scalable Codebase  </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$1,080.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none">
                <CardContent>
                <CardTitle className="text-lg mb-4">Coupon Code</CardTitle>
                  <form onSubmit={handleCouponSubmit} className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" variant="outline">Apply</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-none">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$1,200.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Additional Charges</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (0%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between ">
                      <span>Discount</span>
                      <span>-$120.00</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>$1080</span>
                    </div>
                     <p className="text-xs text-center">
                      Your payment is protected by PayPal&apos;s Buyer Protection policy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
