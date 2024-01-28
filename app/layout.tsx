import '@/app/ui/global.css'; //Add global styles
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';

//Tailwind 'antialiased'class: smooths out the font.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
