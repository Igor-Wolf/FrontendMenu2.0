'use client'

import "./globals.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ExternalContainer } from "./Components/ExternalContainer";
import { MobileHeader } from "./Components/MobileHeader";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>  
        <title>Crime Perfeito</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"></link>
        
    </head>
      <body>
        <Header></Header>
        <ExternalContainer>
          {children}
        </ExternalContainer>
        <MobileHeader></MobileHeader>
        <Footer></Footer>
    </body>
  </html>
  );
}
