import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intraday Trading Course | Tradeverse City',
  description: 'Master intraday trading with Tradeverse City — opening range strategies, VWAP, scalping, intraday risk rules, and disciplined execution in live markets.',
}

export default function IntradayTradingPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Intraday Trading"
      level="Advanced"
      heroTitle="Intraday Trading"
      heroSubtitle="Execute with speed. Manage with discipline. Exit with precision."
      heroDescription="Intraday trading demands the highest levels of technical skill, emotional discipline, and risk management. This advanced course covers the complete intraday trading framework — from pre-market preparation and opening range analysis to VWAP strategies, momentum setups, and strict end-of-day risk protocols — built for the demands of India's NSE and BSE markets."
      whatYouWillLearn={[
        'Intraday market structure — opening volatility, morning trend, midday chop, afternoon trend',
        'Pre-market preparation — gap analysis, overnight range, F&O data interpretation',
        'Opening Range Breakout (ORB) — 15-minute and 30-minute strategies',
        'VWAP and its role as the intraday market reference point',
        'Intraday trend identification using short-term EMAs (9, 20, 50)',
        'Momentum trading — identifying stocks in play with relative strength',
        'Scalping techniques — quick entries and exits with tight risk management',
        'Intraday volume analysis — VWAP volume profile, unusual volume spikes',
        'News-driven intraday setups — earnings, announcements, and circuit triggers',
        'Intraday position sizing — using daily loss limits and per-trade risk caps',
        'Managing multiple intraday positions simultaneously',
        'End-of-day square-off rules and avoiding overnight holding on intraday margin',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Intraday trading is the most demanding discipline in the markets — but also one of the most rewarding when done with a structured, rule-based approach. The key difference between intraday traders who succeed and those who fail is almost never technical knowledge. It is discipline, process, and risk management.',
          'India\'s markets offer exceptional intraday opportunities — high liquidity in Nifty, Bank Nifty, and large-cap stocks, combined with futures and options markets that allow leveraged participation with defined risk. But leverage cuts both ways. Without strict daily loss limits, position sizing rules, and pre-defined setup criteria, intraday trading becomes gambling with institutional-grade tools.',
          'This course does not promise quick profits. It teaches you the professional framework that separates those who consistently extract value from intraday markets from the majority who experience account erosion. The process is learnable — but only with the right structure.',
        ],
      }}
      realApplications={[
        'Analyzing overnight gap opens to determine morning directional bias before market open',
        'Trading the 15-minute Opening Range Breakout on Bank Nifty with defined targets and stops',
        'Using VWAP reclaim or rejection for high-probability mean-reversion entries',
        'Identifying momentum stocks with unusual pre-open volume for intraday trend plays',
        'Applying daily loss limits and stopping trading once the limit is hit regardless of setup quality',
        'Using Nifty futures as a market filter before taking stock intraday positions',
        'Managing simultaneous intraday positions without over-leveraging margin limits',
        'Reviewing intraday trades in a journal to identify repeated execution mistakes',
      ]}
      learningOutcomes={[
        'Prepare a structured pre-market analysis routine before each trading session',
        'Identify and execute Opening Range Breakout and VWAP-based intraday setups',
        'Apply strict per-trade and daily loss limit rules consistently in live markets',
        'Read intraday market structure — trend phase, chop zone, and reversal signals',
        'Manage multiple intraday trades simultaneously within defined risk parameters',
        'Analyze post-session trade performance to continuously improve execution quality',
      ]}
      commonMistakes={[
        'Averaging down on losing intraday positions hoping for a reversal before close',
        'Trading in the midday chop window (12 PM–1:30 PM IST) when setups are unreliable',
        'Over-leveraging through F&O margin without understanding maximum loss exposure',
        'Not respecting the daily loss limit and "revenge trading" after drawdowns',
        'Entering trades based on tips or news without a defined technical setup',
        'Holding intraday F&O positions overnight and incurring unexpected gap risk',
        'Ignoring the broader Nifty direction and trading individual stocks against market flow',
        'Not having a defined square-off time and holding intraday positions into closing volatility',
      ]}
      faqs={[
        { question: 'How much capital do I need to start intraday trading?', answer: 'There is no fixed minimum, but the course covers how to calculate appropriate starting capital based on position sizing rules, margin requirements, and daily loss limit structures. Adequate capitalization is critical to avoid forced exits on normal volatility.' },
        { question: 'What instruments are best for intraday trading in India?', answer: 'Nifty 50 futures, Bank Nifty futures, large-cap stocks, and liquid sector ETFs offer the best combination of liquidity, tight spreads, and intraday volatility for structured trading.' },
        { question: 'Is intraday trading suitable for part-time traders?', answer: 'Intraday trading requires active market monitoring during trading hours (9:15 AM–3:30 PM IST). It is most suitable for those who can dedicate full attention during these hours. The course also covers hybrid approaches for those with time constraints.' },
        { question: 'Can I do intraday trading in F&O?', answer: 'Yes. Nifty and Bank Nifty futures and options are among the most popular intraday instruments in India. The course covers futures-specific intraday setups as well as options intraday considerations.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Price Action Trading', href: '/courses/price-action-trading' },
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Risk Management', href: '/courses/risk-management' },
        { label: 'Trading Psychology', href: '/courses/trading-psychology' },
        { label: 'Options Trading Fundamentals', href: '/courses/options-trading-fundamentals' },
      ]}
    />
  )
}
