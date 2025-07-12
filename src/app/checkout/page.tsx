"use client";
import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

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

  const handleRazorpayPayment = async () => {
    // Validate billing information
    if (!billingInfo.email || !billingInfo.firstName || !billingInfo.lastName) {
      alert("Please fill in all required billing information.");
      return;
    }

    setIsProcessing(true);

    try {
      // Create order on your backend
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 9600000, // amount in paise (₹96,000)
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            email: billingInfo.email,
            name: `${billingInfo.firstName} ${billingInfo.lastName}`,
            phone: billingInfo.phone,
          },
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create order');
      }

      const orderData = await orderResponse.json();

      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "MajlisUI Kit",
        description: "Complete UI Component Library",
        order_id: orderData.id,
        prefill: {
          name: `${billingInfo.firstName} ${billingInfo.lastName}`,
          email: billingInfo.email,
          contact: billingInfo.phone,
        },
        notes: {
          address: billingInfo.address,
          city: billingInfo.city,
          state: billingInfo.state,
          country: billingInfo.country,
        },
        theme: {
          color: "#3B82F6",
        },
        handler: function (response: any) {
          // Payment successful
          console.log("Payment successful:", response);
          setPaymentSuccess(true);
          setIsProcessing(false);
          alert("Payment completed successfully!");
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            console.log("Payment cancelled");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        console.error("Payment failed:", response);
        setIsProcessing(false);
        alert("Payment failed. Please try again.");
      });

      rzp.open();
    } catch (error) {
      console.error("Error creating order:", error);
      setIsProcessing(false);
      alert("An error occurred. Please try again.");
    }
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
                        placeholder="Mumbai"
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
                        placeholder="Maharashtra"
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
                        placeholder="400001"
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
                        placeholder="India"
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
                      placeholder="+91 9876543210"
                      value={billingInfo.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  {!paymentSuccess && (
                    <Button 
                      onClick={handleRazorpayPayment}
                      className="w-full h-12 text-lg text-white font-semibold"
                      size="lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Pay with Razorpay"}
                    </Button>
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
              <Card className="border-none shadow-none">
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
                      <p className="font-semibold">₹96,000.00</p>
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
                      <span>₹92,200.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Additional Charges 3%</span>
                      <span>₹2,766.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (18%)</span>
                      <span>₹16,596.00</span>
                    </div>
                    <div className="flex justify-between ">
                      <span>Discount</span>
                      <span>-₹15,562.00</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>₹96,000.00</span>
                    </div>
                     <p className="text-xs text-center">
                      Your payment is secured by Razorpay&apos;s advanced encryption and security protocols.
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
