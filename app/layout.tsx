import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./index.css";


const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
type Props = {
   children: ReactNode;
};

export const metadata: Metadata = {
   title: "birusha ndegeya portfolio",
   description: "Birusha Ndegeya's portfolio, software developer - TypeScript",
};

const RootLayout = ({ children }: Readonly<Props>) => {
   return (
      <html lang="en">
         <body className={nunitoSans.className}>{children}</body>
      </html>
   );
}

export default RootLayout;