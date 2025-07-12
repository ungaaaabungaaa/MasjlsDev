"use client";
import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Link from "next/link";

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
    // Handle PayPal checkout logic here
    console.log("Billing info:", billingInfo);
    console.log("Proceeding to PayPal checkout...");
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex flex-col items-center justify-center">
            <Icons.palmTreeLogo className="h-12 w-12" />
            <h1 className="text-3xl font-bold text-center mb-2">One Click CheckOut</h1>
            <p className="text-muted-foreground text-center">Fix Your Broken UI</p>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Billing Form */}
            <div className="space-y-6">
              <Card className="border-none">
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
                </CardContent>
              </Card>

              <Button 
                onClick={handleCheckout}
                className="w-full h-12 text-lg font-semibold"
                size="lg"
              >
                Continue to PayPal
              </Button>
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
                        <p className="text-sm text-muted-foreground">Complete UI Component Library</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$1,080.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none">
                <CardHeader>
                  <CardTitle className="text-lg">Coupon Code</CardTitle>
                </CardHeader>
                <CardContent>
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
                      <span>$159.96</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>$23.99</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-$10.99</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>$172.96</span>
                    </div>
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
