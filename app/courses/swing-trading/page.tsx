import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swing Trading Course | Tradeverse City',
  description: 'Master swing trading with Tradeverse City — multi-day setups, position sizing, trend-aligned entries, and trade management for consistent returns.',
}

export default function SwingTradingPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Swing Trading"
      level="Intermediate"
      heroTitle="Swing Trading"
      heroSubtitle="Capture the market's multi-day moves with precision and patience."
      heroDescription="Swing trading targets price moves that unfold over days to weeks — capturing significant portions of a trend without the noise of intraday volatility. This course teaches you how to identify high-quality swing setups, time entries at pullback zones, manage open positions across multiple sessions, and build a repeatable process for consistent swing trading performance."
      whatYouWillLearn={[
        'What swing trading is and how it differs from intraday and positional trading',
        'Timeframe hierarchy — using weekly, daily, and 4-hour charts together',
        'Identifying swing highs and swing lows for structural entry points',
        'Trend-aligned swing setups — buying pullbacks in uptrends, shorting rallies in downtrends',
        'Using moving averages (21 EMA, 50 SMA) as dynamic entry zones',
        'Volume confirmation for swing breakout setups',
        'Setting precise stop-loss levels using ATR and structure',
        'Profit target determination — swing high targets, Fibonacci extensions, RRR',
        'Partial exit strategies and trailing stop techniques',
        'Scanning for swing opportunities across multiple stocks efficiently',
        'Portfolio-level risk management when carrying multiple swing positions',
        'Post-trade analysis and maintaining a swing trading journal',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Swing trading occupies a powerful middle ground in trading timeframes. Unlike intraday trading, you are not fighting every five-minute noise spike. Unlike positional trading, you are not holding through extended market uncertainty. Swing trading lets you capture the meat of meaningful price moves — the surges and reversals that tend to produce the clearest and most reliable technical signals.',
          'It is also a highly practical approach for those who cannot monitor screens all day. Swing traders analyze after market hours, set orders with defined stops and targets, and let their plan execute without constant supervision. This makes it compatible with professional and personal commitments while still generating meaningful trading income.',
          'The core skill of swing trading is patience combined with precision — waiting for the right setup, entering at the right location, and managing the trade without emotional interference. This course teaches all three.',
        ],
      }}
      realApplications={[
        'Identifying a Nifty midcap stock in a confirmed uptrend pulling back to 21 EMA for entry',
        'Using weekly chart analysis to filter daily swing setups in the same direction',
        'Setting a trailing stop at the prior swing low as a position advances',
        'Using ATR (Average True Range) to determine appropriate stop distance for volatile stocks',
        'Scanning daily charts after close to build a watchlist for next-session entries',
        'Managing a portfolio of 3-5 concurrent swing positions with total portfolio risk control',
        'Using limit orders at pre-identified pullback levels to avoid chasing entries',
        'Reviewing swing trade performance weekly to identify systematic strengths and weaknesses',
      ]}
      learningOutcomes={[
        'Identify valid swing setups across multiple timeframes using defined criteria',
        'Time pullback entries precisely at EMA, structure, or volume-confirmed support levels',
        'Calculate position size based on ATR-derived stops and portfolio risk limits',
        'Set initial targets using swing structure and Fibonacci extension levels',
        'Apply partial exit and trailing stop techniques to maximize trend capture',
        'Build and maintain a swing trading watchlist and performance journal',
      ]}
      commonMistakes={[
        'Entering swing positions during intraday noise rather than waiting for daily closes',
        'Holding losing swing positions past defined stop levels hoping for a reversal',
        'Setting stops too wide without adjusting position size to maintain risk parameters',
        'Taking too many concurrent swing positions and exceeding total portfolio risk',
        'Closing profitable swings too early out of fear before they reach structural targets',
        'Ignoring sector rotation and market-level trends when selecting individual swing setups',
        'Not accounting for scheduled events (earnings, FOMC, RBI policy) in holding windows',
        'Treating all swing setups equally regardless of the quality of the setup structure',
      ]}
      faqs={[
        { question: 'How long does a typical swing trade last?', answer: 'Swing trades typically last between 3 and 15 trading sessions, though this varies. The exit is driven by reaching a structural target, stop-loss trigger, or a change in technical conditions — not by a fixed time target.' },
        { question: 'Can I swing trade with a small capital base?', answer: 'Yes. Swing trading can be approached with any capital size. Position sizing rules ensure you risk a fixed percentage per trade regardless of total capital. The course covers capital allocation in detail.' },
        { question: 'Is swing trading taxable differently in India?', answer: 'In India, equity trades held for less than 12 months are subject to Short-Term Capital Gains (STCG) tax. Trades using F&O instruments are treated as business income. Consult a tax advisor for your specific situation.' },
        { question: 'How many stocks should I track for swing opportunities?', answer: 'Most swing traders maintain a focused watchlist of 20-50 stocks in leading sectors, rather than scanning the entire market. Quality over quantity is the guiding principle.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Trend Analysis', href: '/courses/trend-analysis' },
        { label: 'Price Action Trading', href: '/courses/price-action-trading' },
        { label: 'Risk Management', href: '/courses/risk-management' },
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Intraday Trading', href: '/courses/intraday-trading' },
      ]}
    />
  )
}
