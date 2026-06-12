import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Tradeverse City | Learn | Plan | Trade | Profit',
  description:
    'Tradeverse City is a premium stock market education platform offering structured courses in Technical Analysis, Trading Psychology, Risk Management, Candlestick Patterns, and more.',
  keywords:
    'stock market courses, trading education, technical analysis, candlestick patterns, trading psychology, risk management, swing trading, intraday trading, options trading',
  openGraph: {
    title: 'Tradeverse City | Learn | Plan | Trade | Profit',
    description:
      'Master the stock market with Tradeverse City — India\'s premium trading education platform.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: '/tradeverse-logo.png',
    apple: '/tradeverse-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4af37',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
