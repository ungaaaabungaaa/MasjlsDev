# MajlisUI Kit - Next.js SaaS Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- 🎨 Beautiful, responsive UI components
- 💳 Razorpay payment integration
- 🔒 Secure authentication system
- 📱 Mobile-first design
- 🎯 TypeScript support
- 🎨 Tailwind CSS styling
- 📝 MDX blog support
- 🌙 Dark/Light mode toggle

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Payment Integration

This project includes Razorpay payment gateway integration. To set up payments:

1. Create a Razorpay account at [razorpay.com](https://razorpay.com/)
2. Get your API keys from the Razorpay dashboard
3. Create a `.env.local` file with your Razorpay credentials:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_ENVIRONMENT=test
```

For detailed setup instructions, see [RAZORPAY_SETUP.md](./RAZORPAY_SETUP.md).

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── (auth)/         # Authentication routes
│   ├── (marketing)/    # Marketing pages
│   ├── checkout/       # Payment checkout page
│   └── api/            # API routes
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   ├── sections/      # Page sections
│   └── magicui/       # Magic UI components
├── lib/               # Utility functions
└── assets/            # Static assets
```

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components + Radix UI primitives
- **Payment**: Razorpay integration
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Content**: MDX support for blog
- **TypeScript**: Full TypeScript support

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_ENVIRONMENT=test
```

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Deployment Options

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Use the Amplify CLI
- **Railway**: Deploy with zero configuration
- **DigitalOcean**: Use App Platform

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Razorpay Documentation](https://razorpay.com/docs/) - payment integration guide
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - typed JavaScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the [Razorpay Setup Guide](./RAZORPAY_SETUP.md) for payment-related questions
- Review the [Next.js documentation](https://nextjs.org/docs)
