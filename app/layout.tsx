import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./index.css";


type RootLayoutProps = {
   children: ReactNode;
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "birusha ndegeya",
   description: "Birusha Ndegeya's portfolio, software developer - TypeScript",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>){
   return (
      <html lang="en" className="bg-[#21222A] text-white">
         <body className={nunitoSans.className}>{children}</body>
      </html>
   );
}