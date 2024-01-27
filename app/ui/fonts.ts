// 'fonts.ts': to keep the fonts that will be used throughout the application.

import { Inter, Lusitana } from 'next/font/google'; //primary font
export const inter = Inter({ subsets: ['latin'] }); //specify subset
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
