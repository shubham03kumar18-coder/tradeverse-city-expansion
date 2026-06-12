import Link from 'next/link'
import Image from 'next/image'
import { WhatsAppIcon, TelegramIcon, InstagramIcon } from './navbar'

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
              <Image src="/tradeverse-logo.png" alt="Tradeverse City" width={52} height={52} className="rounded-full" />
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
              href="https://wa.me/919318336747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-background font-semibold text-sm px-4 py-2.5 rounded-md w-fit hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <a
              href="https://t.me/+919318336747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary border border-border text-foreground font-semibold text-sm px-4 py-2.5 rounded-md w-fit hover:opacity-90 transition-opacity"
            >
              <TelegramIcon /> Telegram Channel
            </a>
            <a
              href="https://www.instagram.com/tradeverse_city/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary border border-border text-foreground font-semibold text-sm px-4 py-2.5 rounded-md w-fit hover:text-gold hover:border-gold transition-colors"
            >
              <InstagramIcon size={16} /> @tradeverse_city
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
            <a href="tel:+919318336747" className="text-muted-foreground hover:text-gold transition-colors text-xs font-medium">
              +91 93183 36747
            </a>
            <a href="https://wa.me/919318336747" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <WhatsAppIcon size={18} />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="https://t.me/+919318336747" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <TelegramIcon size={18} />
              <span className="sr-only">Telegram</span>
            </a>
            <a href="https://www.instagram.com/tradeverse_city/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <InstagramIcon size={18} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


