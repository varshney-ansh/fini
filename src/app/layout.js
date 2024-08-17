import "./globals.css";
import localFont from 'next/font/local';

const finiOpen = localFont({
  src: [
    {
      path: '../../fonts/paypal-fonts/PayPalOpen-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/paypal-fonts/PayPalOpen-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/paypal-fonts/PayPalOpen-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
})

export const metadata = {
  title: "Fini - A Personal Finance Manager",
  description: "Fini - A Personal Finance Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/blue-logo.svg" sizes="any" />
      </head>
      <body className={finiOpen.className}>{children}</body>
    </html>
  );
}
