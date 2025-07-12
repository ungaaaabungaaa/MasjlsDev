# PayPal Integration Setup Guide

## Prerequisites

1. Create a PayPal Developer Account at [developer.paypal.com](https://developer.paypal.com/)
2. Create a new application in your PayPal Developer Dashboard

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# PayPal Configuration
# Get your PayPal Client ID from https://developer.paypal.com/
# For sandbox testing, use your sandbox client ID
# For production, use your live client ID
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here

# PayPal Client Secret (server-side only, don't expose in NEXT_PUBLIC_)
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here

# PayPal Environment (sandbox or live)
PAYPAL_ENVIRONMENT=sandbox
```

## Getting Your PayPal Credentials

1. Log in to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Navigate to "My Apps & Credentials"
3. Create a new app or select an existing one
4. Copy the Client ID and Client Secret
5. For testing, use the Sandbox credentials
6. For production, use the Live credentials

## Testing

For testing purposes, you can use the default "test" client ID, but for production you must use your actual PayPal credentials.

## Features Included

- PayPal Smart Payment Buttons
- PayPal blue themed styling
- Order creation and payment capture
- Error handling
- Payment success/failure states
- PayPal Protection badge
- Mobile-responsive design

## Security Notes

- Never expose your PayPal Client Secret in client-side code
- Always use HTTPS in production
- Validate payments on the server side
- Store sensitive data securely 