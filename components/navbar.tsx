'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const learningPlatformLinks = [
  { label: 'Beginner Hub', href: '/learning/beginner-hub' },
  { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
  { label: 'Trading Psychology Center', href: '/learning/trading-psychology-center' },
  { label: 'Risk Management Center', href: '/learning/risk-management-center' },
  { label: 'Learning Resources Library', href: '/learning/resources-library' },
  { label: 'Market Research Center', href: '/learning/market-research-center' },
  { label: 'Community Learning Hub', href: '/learning/community-hub' },
]

const tradingCoursesLinks = [
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

interface DropdownMenuProps {
  label: string
  links: { label: string; href: string }[]
  onLinkClick: () => void
}

function DropdownMenu({ label, links, onLinkClick }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-gold transition-colors px-1 py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-2xl z-50 py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setOpen(false); onLinkClick() }}
              className="block px-4 py-2 text-sm text-foreground/80 hover:text-gold hover:bg-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileLearning, setMobileLearning] = useState(false)
  const [mobileCourses, setMobileCourses] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/tradeverse-logo.png"
              alt="Tradeverse City Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <div className="text-base font-bold font-serif text-gold leading-tight tracking-wide">
                Tradeverse City
              </div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Learn | Plan | Trade | Profit
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors px-2 py-2">
              Home
            </Link>
            <DropdownMenu label="Learning Platform" links={learningPlatformLinks} onLinkClick={() => {}} />
            <DropdownMenu label="Trading Courses" links={tradingCoursesLinks} onLinkClick={() => {}} />
            <Link href="/#about" className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors px-2 py-2">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors px-2 py-2">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919318336747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-background font-semibold text-sm px-4 py-2 rounded-md hover:bg-gold-light transition-colors"
            >
              <WhatsAppIcon />
              Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-foreground/80 hover:text-gold">Home</Link>

            {/* Learning Platform */}
            <div>
              <button
                onClick={() => setMobileLearning(!mobileLearning)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground/80 hover:text-gold"
              >
                Learning Platform
                <ChevronDown size={14} className={`transition-transform ${mobileLearning ? 'rotate-180' : ''}`} />
              </button>
              {mobileLearning && (
                <div className="pl-4 space-y-1 border-l border-border mt-1 mb-2">
                  {learningPlatformLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-foreground/70 hover:text-gold">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Trading Courses */}
            <div>
              <button
                onClick={() => setMobileCourses(!mobileCourses)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground/80 hover:text-gold"
              >
                Trading Courses
                <ChevronDown size={14} className={`transition-transform ${mobileCourses ? 'rotate-180' : ''}`} />
              </button>
              {mobileCourses && (
                <div className="pl-4 space-y-1 border-l border-border mt-1 mb-2">
                  {tradingCoursesLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-foreground/70 hover:text-gold">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#about" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-foreground/80 hover:text-gold">About</Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-foreground/80 hover:text-gold">Contact</Link>

            <div className="pt-3 flex flex-col gap-2">
              <a
              href="https://wa.me/919318336747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-background font-semibold text-sm px-4 py-2.5 rounded-md"
            >
              <WhatsAppIcon /> WhatsApp Enquiry
            </a>
            <a
              href="https://t.me/+919318336747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-semibold text-sm px-4 py-2.5 rounded-md"
              >
                <TelegramIcon /> Telegram Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function TelegramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}
