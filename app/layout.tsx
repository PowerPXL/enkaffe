import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "1kaffe.se",
    template: "%s | 1kaffe.se",
  },
  description: "1kaffe.se arbetar med att erbjudda behövande kaffe och med en kopp värme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={inter.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 py-8">
              <div className="flex flex-col gap-10 min-h-[60vh]">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}