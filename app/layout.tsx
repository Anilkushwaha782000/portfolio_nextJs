import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { FloatingNavDemo } from "./components/FloatingNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anil's portfolio",
  description: "Modern and beautiful portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <FloatingNavDemo/>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
        </body>
    </html>
  );
}
