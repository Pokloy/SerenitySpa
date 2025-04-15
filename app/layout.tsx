import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/ui/navigation';
import { Instagram, Facebook, Twitter, Heart} from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Serenity Spa & Wellness',
  description: 'Luxury spa and wellness services for mind, body, and soul',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-2xl font-playfair mb-4">Serenity Spa</h3>
              <p className="text-gray-400">Your sanctuary for wellness and relaxation</p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xl mb-4">Contact</h4>
              <p className="text-gray-400">123 Wellness Street</p>
              <p className="text-gray-400">New York, NY 10001</p>
              <p className="text-gray-400">Tel: (555) 123-4567</p>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xl mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 hover:text-primary cursor-pointer" />
                <Facebook className="w-6 h-6 hover:text-primary cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-sm flex justify-center items-center gap-1 text-gray-400">
              For Demo Purpose —
              <span className="inline-flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" /> Alier E. Torrenueva 2025
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}