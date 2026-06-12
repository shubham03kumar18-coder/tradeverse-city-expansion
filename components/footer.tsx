import Link from 'next/link'
import Image from 'next/image'
import { WhatsAppIcon, TelegramIcon } from './navbar'

const learningLinks = [
  { label: 'Beginner Hub', href: '/learning/beginner-hub' },
  { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
  { label: 'Trading Psychology Center', href: '/learning/trading-psychology-center' },
  { label: 'Risk Management Center', href: '/learning/risk-management-center' },
  { label: 'Learning Resources Library', href: '/learning/resources-library' },
  { label: 'Market Research Center', href: '/learning/market-research-center' },
  { label: 'Community Learning Hub', href: '/learning/community-hub' },
]

const coursesLinks = [
  { label: 'Stock Market Fundamentals', href: '/courses/stock-market-fundamentals' },
  { label: 'Candlestick Analysis', href: '/courses/candlestick-analysis' },
  { label: 'Support & Resistance', href: '/courses/support-resistance' },
  { label: 'Trend Analysis', href: '/courses/trend-analysis' },
  { label: 'Technical Analysis', href: '/courses/technical-analysis' },
  { label: 'Price Action Trading', href: '/courses/price-action-trading' },
  { label: 'Swing Trading', href: '/courses/swing-trading' },
  { label: 'Intraday Trading', href: '/courses/intraday-trading' },
  { label: 'Risk Management', href: '/courses/risk-management' },
  { label: 'Trading Psychology', href: '/courses/trading-psychology' },
  { label: 'Options Trading Fundamentals', href: '/courses/options-trading-fundamentals' },
  { label: 'Futures Market Basics', href: '/courses/futures-market-basics' },
  { label: 'Portfolio Management', href: '/courses/portfolio-management' },
  { label: 'Market Research Techniques', href: '/courses/market-research-techniques' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/tradeverse-logo.png" alt="Tradeverse City" width={44} height={44} className="rounded-sm" />
              <div>
                <div className="font-serif font-bold text-gold text-lg leading-tight">Tradeverse City</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Learn | Plan | Trade | Profit</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              India&apos;s premium stock market education platform. Empowering traders with structured knowledge, proven strategies, and mentorship guidance.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/message/your-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold text-background font-semibold text-sm px-4 py-2.5 rounded-md w-fit hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a
                href="https://t.me/your-telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary border border-border text-foreground font-semibold text-sm px-4 py-2.5 rounded-md w-fit hover:opacity-90 transition-opacity"
              >
                <TelegramIcon /> Telegram Channel
              </a>
            </div>
          </div>

          {/* Learning Platform */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Learning Platform</h3>
            <ul className="space-y-2">
              {learningLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trading Courses (split into 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Trading Courses</h3>
            <ul className="grid grid-cols-2 gap-2">
              {coursesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tradeverse City. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            For complete course details, fees, schedules, enrollment information, and mentorship guidance, contact Tradeverse City on WhatsApp.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <InstagramIcon size={18} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://wa.me/message/your-whatsapp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <WhatsAppIcon size={18} />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <TelegramIcon size={18} />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}
