import { Nunito_Sans, Roboto_Slab } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const nunitoSans = Nunito_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const robotoSlab = Roboto_Slab({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Stryker B2B Portal',
  description: 'Stryker B2B Customer Portal powered by viax',
  icons: { icon: (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/stryker-logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunitoSans.variable + ' ' + robotoSlab.variable + ' antialiased'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
