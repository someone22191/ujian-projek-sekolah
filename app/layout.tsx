import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const pjs = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-pjs'
});

export const metadata: Metadata = {
  title: "SMK Prima Unggul | Online Exam Portal",
  description: "Modern Examination System for SMK Prima Unggul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pjs.variable} font-sans bg-[#FAFAFA] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
