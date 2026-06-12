import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import Link from 'next/link'
import { TrendingUp, BookOpen, Brain, Shield, BarChart2, Users, ChevronRight, Star, CheckCircle } from 'lucide-react'

const learningPlatformItems = [
  { icon: BookOpen, title: 'Beginner Hub', desc: 'Start your trading journey with structured fundamentals and guided learning paths.', href: '/learning/beginner-hub' },
  { icon: BarChart2, title: 'Technical Analysis Center', desc: 'Master chart reading, indicators, and price pattern recognition.', href: '/learning/technical-analysis-center' },
  { icon: Brain, title: 'Trading Psychology Center', desc: 'Develop the mental discipline and emotional control every successful trader needs.', href: '/learning/trading-psychology-center' },
  { icon: Shield, title: 'Risk Management Center', desc: 'Learn to protect capital and manage risk with precision at every trade.', href: '/learning/risk-management-center' },
  { icon: TrendingUp, title: 'Market Research Center', desc: 'Conduct thorough market analysis and build data-driven trading decisions.', href: '/learning/market-research-center' },
  { icon: Users, title: 'Community Learning Hub', desc: 'Learn alongside fellow traders, share insights, and grow together.', href: '/learning/community-hub' },
]

const topCourses = [
  { title: 'Stock Market Fundamentals', href: '/courses/stock-market-fundamentals', level: 'Beginner' },
  { title: 'Candlestick Analysis', href: '/courses/candlestick-analysis', level: 'Intermediate' },
  { title: 'Price Action Trading', href: '/courses/price-action-trading', level: 'Advanced' },
  { title: 'Swing Trading', href: '/courses/swing-trading', level: 'Intermediate' },
  { title: 'Intraday Trading', href: '/courses/intraday-trading', level: 'Advanced' },
  { title: 'Options Trading Fundamentals', href: '/courses/options-trading-fundamentals', level: 'Advanced' },
  { title: 'Risk Management', href: '/courses/risk-management', level: 'All Levels' },
  { title: 'Trading Psychology', href: '/courses/trading-psychology', level: 'All Levels' },
]

const stats = [
  { value: '10,000+', label: 'Students Trained' },
  { value: '14+', label: 'Structured Courses' },
  { value: '7+', label: 'Learning Centers' },
  { value: '5★', label: 'Student Rating' },
]

const testimonials = [
  { name: 'Rahul M.', text: 'Tradeverse City transformed my understanding of technical analysis. The structured approach made complex concepts simple.' },
  { name: 'Priya S.', text: 'The risk management course alone changed how I approach every trade. Highly recommend to any aspiring trader.' },
  { name: 'Arjun K.', text: 'From a complete beginner to a confident swing trader in 6 months. The mentorship at Tradeverse City is unmatched.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} aria-hidden="true" />

        {/* Candlestick SVG background */}
        <div className="absolute right-0 top-16 bottom-0 w-full lg:w-1/2 opacity-10 overflow-hidden" aria-hidden="true">
          <CandlestickChartSVG />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Premium Trading Education Platform
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Master the{' '}
              <span className="text-gold-shimmer">Stock Market</span>
              {' '}with Expert Guidance
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
              Learn. Plan. Trade. Profit. — Tradeverse City offers structured, in-depth courses in Technical Analysis, Trading Psychology, Risk Management, and beyond.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Whether you&apos;re a complete beginner or a seasoned trader looking to sharpen your edge, our comprehensive learning ecosystem is designed to take you from knowledge to consistent profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919318336747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold text-background font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-xl"
              >
                Start Learning Today
                <ChevronRight size={18} />
              </a>
              <Link
                href="/learning/beginner-hub"
                className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-semibold text-base px-8 py-4 rounded-lg hover:border-gold/50 transition-colors"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-card border-y border-border" aria-label="Platform statistics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Platform */}
      <section className="py-20 px-4 sm:px-6" aria-labelledby="learning-platform-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Our Ecosystem</div>
            <h2 id="learning-platform-heading" className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Comprehensive Learning Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Seven dedicated learning centers, each focused on a critical pillar of trading mastery. Navigate your learning journey with purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPlatformItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon size={22} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center gap-1 text-gold text-xs font-semibold">
                  Explore <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/learning/resources-library" className="inline-flex items-center gap-2 text-gold font-semibold text-sm border border-gold/40 px-6 py-2.5 rounded-lg hover:bg-gold/10 transition-colors">
              View All Learning Centers <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Courses */}
      <section className="py-20 px-4 sm:px-6 bg-card" aria-labelledby="courses-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Structured Curriculum</div>
            <h2 id="courses-heading" className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
              14 In-Depth Trading Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From foundational concepts to advanced trading strategies — our course library covers every dimension of successful trading.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topCourses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group bg-background border border-border rounded-xl p-5 hover:border-gold/50 transition-all duration-300 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-gold transition-colors leading-snug">{course.title}</h3>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs bg-gold/10 text-gold px-2.5 py-1 rounded-full font-medium">{course.level}</span>
                  <ChevronRight size={14} className="text-muted-foreground group-hover:text-gold transition-colors" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses/stock-market-fundamentals" className="inline-flex items-center gap-2 bg-gold text-background font-bold text-sm px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              View All 14 Courses <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Tradeverse City */}
      <section className="py-20 px-4 sm:px-6" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Why Choose Us</div>
              <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-balance">
                The Tradeverse City Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We don&apos;t just teach trading theory — we build trading professionals. Every course at Tradeverse City is built around real market applications, practical exercises, and mentorship that follows you through your journey.
              </p>
              <ul className="space-y-4">
                {[
                  'Structured, progressive curriculum from beginner to advanced',
                  'Real market applications with live chart analysis',
                  'Dedicated support via WhatsApp and Telegram',
                  'Psychology and risk management integrated throughout',
                  'Community of active traders for peer learning',
                  'Regular market research and analysis updates',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <TradingRoadmapSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 bg-card border-y border-border" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Student Reviews</div>
            <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl font-bold text-balance">
              What Our Students Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background border border-border rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4" aria-label={`5 star rating`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="font-semibold text-sm text-foreground">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  )
}

// SVG Components
function CandlestickChartSVG() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Grid lines */}
      {[100, 200, 300, 400].map((y) => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#d4af37" strokeWidth="0.5" />
      ))}
      {[100, 200, 300, 400, 500].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="500" stroke="#d4af37" strokeWidth="0.5" />
      ))}
      {/* Bullish candles (gold) */}
      {[
        [60, 200, 80, 260, 180, 290],
        [160, 160, 80, 200, 140, 240],
        [260, 120, 80, 160, 200, 220],
        [360, 80, 80, 120, 160, 180],
        [460, 60, 80, 100, 140, 160],
      ].map(([x, top, h, bodyTop, bodyH], i) => (
        <g key={i}>
          <line x1={x + 20} y1={top} x2={x + 20} y2={top + h} stroke="#d4af37" strokeWidth="2" />
          <rect x={x} y={bodyTop} width="40" height={bodyH - bodyTop + top} fill="#d4af37" fillOpacity="0.7" rx="2" />
        </g>
      ))}
      {/* Bearish candles (darker) */}
      {[
        [110, 220, 60, 240, 280, 300],
        [210, 180, 60, 200, 240, 260],
        [310, 140, 60, 160, 200, 220],
        [410, 100, 60, 120, 160, 180],
        [510, 80, 60, 100, 130, 150],
      ].map(([x, top, h, bodyTop, bodyH], i) => (
        <g key={`b${i}`}>
          <line x1={x + 20} y1={top} x2={x + 20} y2={top + h} stroke="#9a7d1c" strokeWidth="2" />
          <rect x={x} y={bodyTop} width="40" height={bodyH - bodyTop + top} fill="#9a7d1c" fillOpacity="0.5" rx="2" />
        </g>
      ))}
      {/* Moving average line */}
      <polyline
        points="60,280 160,240 260,200 360,160 460,130 560,100"
        stroke="#f0d060"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 3"
      />
    </svg>
  )
}

function TradingRoadmapSVG() {
  const steps = [
    { label: 'Market Fundamentals', sub: 'Understand stocks, indices & market structure' },
    { label: 'Technical Analysis', sub: 'Charts, patterns, indicators & price action' },
    { label: 'Risk Management', sub: 'Position sizing, stop-loss & capital protection' },
    { label: 'Trading Psychology', sub: 'Discipline, patience & emotional control' },
    { label: 'Live Market Trading', sub: 'Apply skills in real market conditions' },
  ]
  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-start gap-4">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-gold text-sm font-bold">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="w-0.5 h-8 bg-gold/30 mt-1" />}
          </div>
          <div className="pb-4">
            <div className="font-semibold text-foreground text-sm">{step.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.sub}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
