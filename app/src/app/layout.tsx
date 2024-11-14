
import "./globals.css"


import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: 'Home Amazon',
  description: 'home amazon',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body >
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
