# Razorpay Integration Setup Guide

## Prerequisites

1. Create a Razorpay account at [razorpay.com](https://razorpay.com/)
2. Complete your KYC verification
3. Generate API keys from the Razorpay Dashboard

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Razorpay Configuration
# Get your Razorpay keys from https://dashboard.razorpay.com/app/keys
# For testing, use your test mode keys
# For production, use your live mode keys
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

# Razorpay Environment (test or live)
RAZORPAY_ENVIRONMENT=test
```

## Getting Your Razorpay Credentials

1. Log in to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Navigate to "Settings" → "API Keys"
3. Generate Test Keys for development
4. Copy the Key ID and Key Secret
5. For production, activate your account and generate Live Keys

## Installation

The project already includes the Razorpay dependency. If you need to install it separately:

```bash
npm install razorpay
# or
yarn add razorpay
# or
pnpm add razorpay
```

## API Endpoint Setup

Create an API endpoint at `src/app/api/create-order/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, receipt, notes } = await request.json();

    const options = {
      amount: amount, // amount in paise
      currency: currency,
      receipt: receipt,
      notes: notes,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
```

## Add Razorpay Script to Layout

Add the Razorpay checkout script to your main layout file (`src/app/layout.tsx`):

```typescript
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Testing

For testing purposes, you can use the test mode credentials. Test payments will not charge real money.

### Test Card Details
- **Card Number**: 4111 1111 1111 1111
- **Expiry**: Any future date
- **CVV**: Any 3 digits
- **Name**: Any name

### Test UPI
- **UPI ID**: success@razorpay
- **UPI ID (failure)**: failure@razorpay

## Features Included

- Razorpay Checkout integration
- Order creation and payment processing
- Multiple payment methods (Cards, UPI, Net Banking, Wallets)
- Responsive design
- Error handling and success states
- Automatic payment verification
- Secure payment processing

## Security Notes

- Never expose your Razorpay Key Secret in client-side code
- Always validate payments on the server side
- Use HTTPS in production
- Store sensitive data securely
- Implement proper error handling and logging
- Verify payment signatures for enhanced security

## Webhook Setup (Optional)

For production applications, set up webhooks to handle payment confirmations:

1. Go to Razorpay Dashboard → Settings → Webhooks
2. Add your webhook URL: `https://yourdomain.com/api/webhooks/razorpay`
3. Select events: `payment.captured`, `payment.failed`, `order.paid`
4. Add webhook secret for verification

## Currency Support

Razorpay supports multiple currencies. Update the currency in your checkout based on your business requirements:

- INR (Indian Rupees) - Primary
- USD (US Dollars)
- EUR (Euros)
- GBP (British Pounds)
- And many more

## Support

For any issues or questions:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)
- [API Reference](https://razorpay.com/docs/api/) 