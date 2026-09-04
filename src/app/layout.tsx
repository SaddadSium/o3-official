import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Footer ইম্পোর্ট করা হলো

export const metadata: Metadata = {
  title: "Ocean of Orchid | Visual Production",
  description: "Professional Photography and Cinematography in Dhaka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* main-কে flex-grow দেওয়া হলো যাতে কন্টেন্ট কম থাকলেও ফুটার সবসময় নিচে থাকে */}
        <main className="flex-grow pt-[104px]">{children}</main>
        <Footer /> {/* Footer যুক্ত করা হলো */}
      </body>
    </html>
  );
}
