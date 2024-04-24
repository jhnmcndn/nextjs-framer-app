import { DM_Sans, DM_Mono } from "next/font/google";

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

export const dm_mono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_mono',
  weight: ['300', '400', '500'],
})