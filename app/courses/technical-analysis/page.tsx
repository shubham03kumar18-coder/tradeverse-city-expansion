import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Analysis Course | Tradeverse City',
  description: 'Master Technical Analysis with Tradeverse City — a comprehensive course covering indicators, chart patterns, price action, and trading system development.',
}

export default function TechnicalAnalysisPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Technical Analysis"
      level="Intermediate"
      heroTitle="Technical Analysis"
      heroSubtitle="Read markets with precision. Trade with conviction."
      heroDescription="Technical Analysis is the core skill that separates informed traders from gamblers. This comprehensive course covers the full spectrum of technical tools — from chart patterns and classical indicators to advanced volume analysis and trading system building. You will learn how to objectively analyze any market on any timeframe."
      whatYouWillLearn={[
        'Dow Theory — the foundational framework of technical analysis',
        'Chart types — candlestick, bar, line, and point-and-figure charts',
        'Classical chart patterns — head & shoulders, triangles, flags, wedges, cups',
        'Momentum indicators — RSI, MACD, Stochastic, and their divergence signals',
        'Trend indicators — EMA, SMA, Bollinger Bands, Parabolic SAR',
        'Volume analysis — OBV, VWAP, volume profile, and accumulation/distribution',
        'Oscillators and overbought/oversold conditions',
        'Support and resistance identification from multiple methods',
        'Fibonacci tools — retracement, extension, and time zones',
        'Intermarket analysis — how different asset classes correlate',
        'Building a rule-based technical trading system',
        'Backtesting setups and measuring edge in historical data',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Technical analysis is the language of price. Every trade you place is ultimately a bet on future price movement — and the more accurately you can read past and current price behavior, the better positioned you are to forecast what comes next. Not perfectly, but probabilistically.',
          'Fundamental analysis tells you what to buy; technical analysis tells you when and where to buy it. The two approaches complement each other, but for active traders and short-to-medium term participants, technical analysis provides the precise, actionable information that fundamental analysis cannot — entry timing, stop placement, and profit targets.',
          'This course moves well beyond indicators into the deeper skill of reading market structure, identifying institutional footprints in price and volume, and building a coherent technical framework that you apply consistently across every trade. The goal is not to give you signals — it is to give you a skill set.',
        ],
      }}
      realApplications={[
        'Using RSI divergence to identify weakening momentum before a reversal',
        'Combining MACD crossovers with volume confirmation for entry timing',
        'Identifying ascending triangle breakouts with volume expansion for targets',
        'Using Bollinger Band squeeze to anticipate explosive price moves',
        'Applying VWAP as a dynamic support/resistance level for intraday trades',
        'Building a rules-based technical system that can be backtested and validated',
        'Reading head-and-shoulders patterns for major trend reversal signals',
        'Using Fibonacci extensions to project price targets in trending markets',
      ]}
      learningOutcomes={[
        'Apply Dow Theory principles to assess the broader market condition before trading',
        'Identify and trade at least eight classical chart patterns with defined entry and exit rules',
        'Use RSI, MACD, Bollinger Bands, and volume indicators in a coordinated framework',
        'Build a complete technical trading setup with defined entry, stop, and target criteria',
        'Apply multi-timeframe analysis to validate technical setups before execution',
        'Backtest trading setups using historical data to measure historical edge',
      ]}
      commonMistakes={[
        'Using too many indicators that create conflicting signals and analysis paralysis',
        'Treating indicators as predictive rather than descriptive tools',
        'Ignoring volume confirmation when identifying chart pattern breakouts',
        'Curve-fitting a system to historical data without forward-testing it',
        'Using indicators with default settings that may not match your trading instrument',
        'Forcing pattern identification when price structure does not clearly support it',
        'Neglecting the higher timeframe context when applying technical signals',
        'Confusing indicator signals on illiquid or thinly traded stocks',
      ]}
      faqs={[
        { question: 'Do I need to learn all indicators?', answer: 'No. The goal is to build a small, consistent toolkit of indicators that complement each other rather than duplicate information. The course guides you through building your own coherent indicator framework.' },
        { question: 'Is technical analysis more reliable for certain asset classes?', answer: 'Technical analysis works wherever there is sufficient liquidity and price discovery. It is highly effective in equity, forex, commodities, and index futures markets. Thinly traded, illiquid instruments can produce unreliable technical signals.' },
        { question: 'Can I combine technical analysis with fundamental analysis?', answer: 'Yes, and many successful traders do. Fundamentals help identify what to focus on; technical analysis determines the precise timing and price levels for entry and exit.' },
        { question: 'How is this course different from the Candlestick Analysis course?', answer: 'The Candlestick Analysis course focuses specifically on Japanese candlestick patterns and their interpretation. This Technical Analysis course is broader and covers the complete toolkit — indicators, chart patterns, volume, Fibonacci, and system building.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Candlestick Analysis', href: '/courses/candlestick-analysis' },
        { label: 'Trend Analysis', href: '/courses/trend-analysis' },
        { label: 'Price Action Trading', href: '/courses/price-action-trading' },
        { label: 'Support & Resistance', href: '/courses/support-resistance' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
      ]}
    />
  )
}
