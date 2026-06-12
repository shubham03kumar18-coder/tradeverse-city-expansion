import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Price Action Trading Course | Tradeverse City',
  description: 'Learn clean, indicator-free price action trading with Tradeverse City — structure, order flow, key levels, and high-probability setups.',
}

export default function PriceActionTradingPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Price Action Trading"
      level="Advanced"
      heroTitle="Price Action Trading"
      heroSubtitle="The purest form of market reading — no indicators, just price."
      heroDescription="Price action trading strips away the noise and focuses on what the market is actually telling you through raw price movement. This advanced course teaches you to read order flow, identify institutional footprints, recognize high-probability setups at key structural levels, and trade with minimal indicator dependence."
      whatYouWillLearn={[
        'The philosophy and foundations of pure price action analysis',
        'Reading market structure — impulse legs, corrective phases, and structural shifts',
        'Identifying key price levels — swing highs, swing lows, equal highs and lows',
        'Order blocks and fair value gaps — where institutional orders cluster',
        'Liquidity concepts — understanding where stop hunts occur and why',
        'Supply and demand zones derived from price structure',
        'Pin bars, inside bars, engulfing bars — high-quality price action signals',
        'Multi-timeframe price action alignment for trade confirmation',
        'Market phases — accumulation, distribution, manipulation, and expansion',
        'Entry, stop-loss, and take-profit placement purely from price structure',
        'Building a price action trading plan with defined rules',
        'Managing trades using price structure rather than fixed targets',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Indicators are derived from price — they are mathematically processed versions of the raw data that already exists in candlestick charts. Price action traders skip the derivation and work directly with the source. This provides faster, cleaner, and more contextually accurate signals.',
          'More importantly, price action teaches you to think like an institution. Large players move markets through orders, and those orders leave footprints in price structure. Learning to identify order blocks, fair value gaps, and liquidity voids gives you insight into where institutional participation is concentrated.',
          'Price action trading is not about predicting the future — it is about identifying where the weight of evidence strongly favors one outcome over another, entering with a defined risk, and managing the trade as structure evolves. This course builds that decision-making framework from the ground up.',
        ],
      }}
      realApplications={[
        'Identifying order blocks at key levels to plan high-probability long entries',
        'Using fair value gaps as magnets for price during corrective moves',
        'Reading liquidity sweeps to avoid stop-hunt traps before directional moves',
        'Applying multi-timeframe structure analysis to filter entry timeframe signals',
        'Placing entries at supply/demand zones with tight structural stop placement',
        'Interpreting inside bars and pin bars at key decision areas for entries',
        'Identifying market structure shifts (CHoCH) as early reversal signals',
        'Managing open positions by adjusting stops to evolving structural levels',
      ]}
      learningOutcomes={[
        'Identify market structure components — higher highs, lower lows, and structural shifts',
        'Locate order blocks, fair value gaps, and liquidity levels on any chart',
        'Enter trades at high-confluence price action zones with defined risk parameters',
        'Apply multi-timeframe price action analysis to improve trade quality',
        'Manage trades dynamically using structure rather than arbitrary fixed targets',
        'Build a complete price action trading plan with rules for every scenario',
      ]}
      commonMistakes={[
        'Treating every pin bar or engulfing candle as a signal regardless of context or location',
        'Ignoring the higher timeframe structure when taking price action signals on lower frames',
        'Placing entries without waiting for confirmation — acting on anticipated signals',
        'Misidentifying order blocks by including candles with too much prior price action',
        'Setting stops too tight at price action levels and getting taken out by normal volatility',
        'Taking counter-trend setups at mid-range rather than at proven structural extremes',
        'Confusing corrective moves in a trend with structural reversals',
        'Not adapting price action rules to the specific instrument and its typical volatility',
      ]}
      faqs={[
        { question: 'Is price action trading suitable for beginners?', answer: 'This course is classified as Advanced because it assumes familiarity with basic chart reading, candlestick patterns, and market structure concepts. We recommend completing Candlestick Analysis and Technical Analysis courses first.' },
        { question: 'Do I use any indicators at all in price action trading?', answer: 'The core methodology relies on raw price structure. Some price action traders optionally use volume, VWAP, or basic moving averages as confirmation layers — but they are supplementary, never primary.' },
        { question: 'What is the difference between supply/demand zones and support/resistance?', answer: 'Support and resistance are price levels. Supply and demand zones are price regions derived from identified imbalance between buyer and seller strength. Zones have higher context and often align with institutional order placement.' },
        { question: 'Is this approach based on ICT or SMC concepts?', answer: 'The course incorporates institutional concepts including order blocks, fair value gaps, and liquidity — drawing on principles from multiple professional price action frameworks adapted for Indian markets.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Candlestick Analysis', href: '/courses/candlestick-analysis' },
        { label: 'Support & Resistance', href: '/courses/support-resistance' },
        { label: 'Intraday Trading', href: '/courses/intraday-trading' },
        { label: 'Swing Trading', href: '/courses/swing-trading' },
      ]}
    />
  )
}
