import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Futures Market Basics Course | Tradeverse City',
  description: 'Learn futures trading with Tradeverse City — contract mechanics, margin, rollover, Nifty futures, hedging, and structured futures trading strategies.',
}

export default function FuturesMarketBasicsPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Futures Market Basics"
      level="Advanced"
      heroTitle="Futures Market Basics"
      heroSubtitle="Leverage, precision, and professional-grade market access."
      heroDescription="Futures contracts are the instruments of choice for institutional and professional traders — high liquidity, leverage, and precise price discovery with no delivery obligation for most participants. This course teaches you how futures markets work, how to use Nifty and stock futures effectively, and how to integrate futures into a structured trading and hedging framework."
      whatYouWillLearn={[
        'What futures contracts are — mechanics, lot sizes, expiry, and settlement in India',
        'How futures prices are derived — spot price, cost of carry, and fair value',
        'Margin requirements — initial margin, exposure margin, and SPAN calculation',
        'Mark-to-market (MTM) settlement — how daily profits and losses are credited/debited',
        'Nifty 50 and Bank Nifty futures — structure, lot size, expiry cycle',
        'Stock futures — single-stock futures and their liquidity characteristics',
        'Contango and backwardation — what the futures curve tells you about market sentiment',
        'Rollover mechanics — how and when to roll expiring positions to next month',
        'Futures as a hedging instrument — protecting equity portfolios using index futures',
        'Using basis (futures vs. spot divergence) as a trading and directional signal',
        'Open interest and volumes in futures for sentiment analysis',
        'Risk management rules specifically for leveraged futures positions',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Futures markets exist for two primary purposes: hedging and price discovery. Understanding both makes you a more complete market participant. For active traders, Nifty and Bank Nifty futures offer unmatched liquidity, tight spreads, and the ability to go short as easily as long — without the complications of borrowing stock.',
          'The leverage available in futures is significantly higher than equity. This creates both opportunity and obligation. Traders who understand SPAN margin, MTM settlement, and rollover dynamics navigate futures confidently. Those who do not frequently face unexpected margin calls or roll costs that destroy otherwise profitable positions.',
          'Beyond active trading, futures are essential tools for portfolio managers and large equity holders who need to hedge directional exposure during uncertain market periods. This course builds the dual competency — futures as a trading instrument and futures as a hedging tool.',
        ],
      }}
      realApplications={[
        'Trading Nifty futures with defined margin requirements and understanding actual risk exposure',
        'Rolling a Nifty futures position from current month to next month expiry at minimal cost',
        'Using Bank Nifty futures basis (premium/discount to spot) as an intraday directional indicator',
        'Hedging a ₹20 lakh equity portfolio against market downside using index futures',
        'Interpreting rising futures open interest in the context of a trending market',
        'Calculating the break-even and maximum loss for a leveraged futures position',
        'Avoiding high rollover cost periods by understanding the cost-of-carry dynamics',
        'Using stock futures with high OI to identify institutional positioning in individual stocks',
      ]}
      learningOutcomes={[
        'Explain how futures contracts are priced relative to spot and the cost of carry relationship',
        'Navigate futures margin requirements including initial margin and MTM settlement processes',
        'Trade Nifty and Bank Nifty futures with a defined entry, stop, and risk framework',
        'Execute a futures contract rollover at expiry with minimal basis risk',
        'Use index futures to hedge an existing equity portfolio against directional market risk',
        'Read futures OI and volume data to extract institutional sentiment signals',
      ]}
      commonMistakes={[
        'Treating futures lot size as the investment amount rather than calculating actual margin used',
        'Not maintaining adequate margin buffer and facing forced liquidation during normal volatility',
        'Forgetting about MTM daily settlement and not monitoring daily cash balance requirements',
        'Rolling futures positions too late into expiry and paying excessive rollover premiums',
        'Ignoring the cost of carry when holding futures positions for extended periods',
        'Using single-stock futures on illiquid contracts with wide bid-ask spreads',
        'Not accounting for lot size in position sizing calculations, leading to over-exposure',
        'Using futures without a hedge or stop-loss — the unlimited loss profile of naked futures',
      ]}
      faqs={[
        { question: 'What is the difference between futures and options?', answer: 'Futures oblige both parties to transact at expiry (or be cash-settled). Options give the buyer the right but not the obligation to transact. Futures have linear risk; options have non-linear risk/reward profiles. Both are derivatives — but with fundamentally different risk characteristics.' },
        { question: 'What is SPAN margin?', answer: 'SPAN (Standard Portfolio Analysis of Risk) is the margin calculation system used by exchanges. It calculates the margin required based on the maximum potential loss of a futures position across a range of price and volatility scenarios. The course covers SPAN interpretation in detail.' },
        { question: 'Can I hold futures positions overnight?', answer: 'Yes. Unlike some intraday products, futures can be held overnight or across multiple sessions until expiry. However, each day your position is marked to market and profits/losses are credited/debited to your account. Margin must be maintained at all times.' },
        { question: 'Is commodity futures covered in this course?', answer: 'This course focuses on financial futures — equity index and stock futures traded on NSE. Commodity futures (traded on MCX, NCDEX) involve different underlying dynamics and are a separate area of study.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Options Trading Fundamentals', href: '/courses/options-trading-fundamentals' },
        { label: 'Risk Management', href: '/courses/risk-management' },
        { label: 'Intraday Trading', href: '/courses/intraday-trading' },
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Portfolio Management', href: '/courses/portfolio-management' },
      ]}
    />
  )
}
