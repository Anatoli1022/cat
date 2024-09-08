import localFont from 'next/font/local';
import './globals.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { Poppins } from 'next/font/google';
import { NextAuthProvider } from './next';

const bermia = localFont({
  src: [
    {
      path: '/assets/fonts/Bermia-Black.eot',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/assets/fonts/Bermia-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/assets/fonts/Bermia-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/assets/fonts/Bermia-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-bermia',
});

export const popFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children, pageProps, Component }) {
  return (
    <html lang="en" className={`${bermia.variable} ${popFont.variable}`}>
      <body>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
