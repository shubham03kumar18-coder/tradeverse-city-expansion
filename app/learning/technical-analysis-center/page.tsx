import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Analysis Center | Tradeverse City',
  description: 'Master technical analysis at Tradeverse City — chart reading, price patterns, indicators, and advanced TA strategies for the Indian stock market.',
}

export default function TechnicalAnalysisCenterPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Technical Analysis Center"
      heroBadge="Learning Platform"
      heroTitle="Technical Analysis Center — Read the Market Like a Pro"
      heroSubtitle="Charts don't lie. Learn to read what the market is actually telling you."
      heroDescription="The Technical Analysis Center at Tradeverse City is a comprehensive learning environment dedicated to the art and science of reading price charts. From your first candlestick to advanced multi-timeframe analysis, this center builds your TA skills systematically."
      educationalContent={{
        heading: 'The Power of Technical Analysis in Modern Trading',
        paragraphs: [
          'Technical analysis is the study of past price action to forecast future price movements. It is the primary toolkit of active traders worldwide — whether they trade equity, futures, options, or commodities. At its core, technical analysis is built on three principles: price discounts everything, prices move in trends, and history tends to repeat itself.',
          'At Tradeverse City\'s Technical Analysis Center, we take you beyond the basics. We don\'t just show you what a moving average is — we teach you why it works, when to use it, and crucially, when not to rely on it. Understanding the limitations of indicators is as important as understanding their strengths.',
          'Our curriculum covers candlestick patterns in depth — single candle formations, two-candle reversal patterns, and complex multi-candle continuation signals. You\'ll learn chart patterns including Head & Shoulders, Double Tops, Triangles, Flags, and Wedges, and understand how to measure and trade the breakouts that follow.',
          'Support and resistance analysis forms the structural backbone of any trading strategy. We cover static levels, dynamic levels, trendlines, channels, and the psychological price zones that create reliable trading setups. Fibonacci retracements and extensions are also covered as precision tools for entry and target identification.',
          'Indicators and oscillators — RSI, MACD, Stochastic, Bollinger Bands, Volume, and more — are integrated into a coherent analytical framework rather than taught in isolation. You will learn how to use indicator confluence to dramatically improve the accuracy of your setups.',
        ],
      }}
      learningCards={[
        { title: 'Candlestick Patterns', description: 'Master 40+ candlestick formations — doji, hammer, engulfing, shooting star, morning star, and advanced reversal sequences.' },
        { title: 'Chart Pattern Analysis', description: 'Head & Shoulders, Double Tops/Bottoms, Triangles, Flags, Wedges, and how to measure breakout targets from each pattern.' },
        { title: 'Support & Resistance', description: 'Identifying key price levels, understanding zone-based support/resistance, and trading bounces and breakouts with precision.' },
        { title: 'Trend Analysis & Trendlines', description: 'Defining trends on multiple timeframes, drawing accurate trendlines, and identifying trend reversals before they happen.' },
        { title: 'Moving Averages', description: 'Simple, exponential, and weighted moving averages — crossovers, dynamic support/resistance, and trend confirmation.' },
        { title: 'RSI & Momentum', description: 'Using the Relative Strength Index for overbought/oversold signals, divergence setups, and momentum confirmation.' },
        { title: 'MACD & Signal Analysis', description: 'Signal line crossovers, histogram analysis, and using MACD in conjunction with price action for high-probability entries.' },
        { title: 'Volume Analysis', description: 'Understanding volume as confirmation of price moves, volume spikes, and the relationship between volume and trend strength.' },
        { title: 'Fibonacci Levels', description: 'Retracement levels for pullback entries, extension levels for target identification, and Fibonacci in trending markets.' },
      ]}
      benefits={[
        { title: 'Market-Ready TA Skills', description: 'Learn technical analysis through real Indian market charts — Nifty 50, Bank Nifty, large-cap and mid-cap stocks.' },
        { title: 'Multi-Timeframe Approach', description: 'Understand how to align analysis across daily, hourly, and 15-minute charts for precision entry and exit.' },
        { title: 'Indicator Confluence Training', description: 'Learn to stack multiple confirmation signals to reduce false signals and improve trade accuracy.' },
        { title: 'Pattern Recognition Drills', description: 'Practice identifying patterns on historical charts to build speed and confidence in real-time analysis.' },
        { title: 'Personalized Mentorship', description: 'Submit your charts for review via WhatsApp and receive direct mentor feedback on your analysis.' },
        { title: 'Internal Linking to Courses', description: 'Seamlessly progress from the TA Center into our Candlestick, Price Action, and Swing Trading courses.' },
      ]}
      faqs={[
        { question: 'Is technical analysis reliable for the Indian stock market?', answer: 'Yes. Technical analysis works in any liquid market where price is driven by supply and demand, including NSE, BSE, and F&O markets. Many professional traders in India rely exclusively on TA for their trading decisions.' },
        { question: 'What is the difference between technical and fundamental analysis?', answer: 'Fundamental analysis evaluates the intrinsic value of a stock through financials. Technical analysis studies price and volume patterns to time entries and exits. Most professional traders combine both approaches.' },
        { question: 'Which indicators should a beginner focus on first?', answer: 'We recommend starting with candlestick analysis, support/resistance, and volume. Indicators like RSI and MACD are introduced after you have a solid price action foundation. Contact us on WhatsApp for a personalized learning roadmap.' },
        { question: 'Can I use technical analysis for intraday trading?', answer: 'Absolutely. TA is equally applicable to intraday (5-minute, 15-minute charts) and positional trading (daily, weekly charts). The principles are the same — only the timeframe changes.' },
        { question: 'Does Tradeverse City provide live chart analysis?', answer: 'Our learning program includes practical chart analysis sessions. For details on live sessions and mentorship, contact us on WhatsApp.' },
        { question: 'How long until I can apply technical analysis in real trades?', answer: 'Most students can apply basic TA concepts after completing the foundational modules. Consistent proficiency typically develops with 2-3 months of practice. Contact us for a personalized timeline.' },
      ]}
      relatedLinks={[
        { label: 'Candlestick Analysis Course', href: '/courses/candlestick-analysis' },
        { label: 'Support & Resistance Course', href: '/courses/support-resistance' },
        { label: 'Price Action Trading Course', href: '/courses/price-action-trading' },
        { label: 'Trend Analysis Course', href: '/courses/trend-analysis' },
        { label: 'Risk Management Center', href: '/learning/risk-management-center' },
      ]}
    />
  )
}
