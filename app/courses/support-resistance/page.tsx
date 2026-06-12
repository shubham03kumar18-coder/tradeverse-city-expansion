import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support & Resistance Course | Tradeverse City',
  description: 'Learn professional support and resistance analysis at Tradeverse City — static levels, dynamic zones, trendlines, channels, and breakout trading.',
}

export default function SupportResistancePage() {
  return (
    <CoursePageTemplate
      breadcrumb="Support & Resistance"
      level="Intermediate"
      heroTitle="Support & Resistance"
      heroSubtitle="The structural backbone of every profitable trading strategy."
      heroDescription="Support and resistance levels are the most fundamental structural elements of price charts. This course teaches you to identify, draw, and trade key S&R levels with the precision of institutional traders — from basic horizontal levels to advanced zone-based analysis, trendlines, and dynamic supports."
      whatYouWillLearn={[
        'The psychology behind support and resistance — why price respects these levels',
        'Identifying major and minor support and resistance levels on any chart',
        'The difference between S&R levels and S&R zones — and why zones are more reliable',
        'Role reversal — how previous support becomes resistance and vice versa',
        'Static vs. dynamic S&R — horizontal levels, moving average support, trendlines',
        'Drawing accurate trendlines and channels on multiple timeframes',
        'Fibonacci retracements as support and resistance tool',
        'Round number psychology — why 100, 500, 1000 prices create natural S&R',
        'Multi-timeframe S&R — aligning higher timeframe levels with lower timeframe entries',
        'Breakout vs. bounce trading — strategies for both S&R scenarios',
        'False breakouts — how to identify and avoid traps',
        'Volume confirmation at S&R levels for high-probability setups',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Support and resistance form the structural framework within which all price action occurs. Every chart pattern, every candlestick signal, every indicator reading becomes dramatically more meaningful when interpreted in relation to key S&R levels.',
          'Professional traders and institutions make decisions around major price levels. When price approaches a significant previous high or low, the market participants who were previously trapped or waiting to act make their moves — creating repeatable, tradeable behavior. Understanding this dynamic is what allows traders to anticipate market moves rather than merely react to them.',
          'The course goes beyond the basics of drawing lines on charts. You will learn to think in zones rather than exact prices, understand the psychological significance of round numbers, and use Fibonacci levels as precision tools for planning entries and targets at mathematically significant retracement points.',
        ],
      }}
      realApplications={[
        'Identifying key S&R zones on Nifty 50 daily charts for weekly swing trade planning',
        'Using previous day high and low as intraday support and resistance for day trading',
        'Planning breakout trade entries above weekly highs with stop-loss below the broken level',
        'Identifying the origin of strong moves to find potential retracement entry zones using S&R',
        'Using round number analysis to identify probable reversal zones in stock charts',
        'Combining multiple S&R confluences for highest-probability trade setups',
        'Using bank nifty 15-minute chart levels for options buying entry timing',
        'Recognizing false breakouts early using volume divergence at S&R levels',
      ]}
      learningOutcomes={[
        'Draw accurate support and resistance levels on any chart with confidence',
        'Distinguish between meaningful S&R levels and chart noise',
        'Apply zone-based analysis for more robust S&R trading setups',
        'Trade both breakouts and reversals at S&R levels with defined risk/reward',
        'Integrate multi-timeframe S&R analysis for precision entry timing',
        'Identify high-probability S&R confluences where multiple factors align',
      ]}
      commonMistakes={[
        'Drawing too many lines — cluttering the chart with minor levels that create confusion',
        'Trading exact price levels rather than zones — price often slightly overshoots before reversing',
        'Ignoring the timeframe hierarchy — minor 5-minute levels matter less than major daily levels',
        'Treating all S&R levels equally — levels with more touches and stronger history carry more weight',
        'Missing role reversals — failing to note when previous support has become resistance',
        'Not waiting for confirmation before trading breaks — many breakouts are false without confirmation',
        'Over-adjusting trendlines to fit recent price action — this creates subjective, unreliable levels',
        'Ignoring the origin of strong impulse moves as potential S&R zones',
      ]}
      faqs={[
        { question: 'How many S&R levels should I draw on a chart?', answer: 'Focus on 3-5 major levels on any given chart. Quality over quantity — fewer, more significant levels create cleaner, more reliable analysis.' },
        { question: 'How do I know if a breakout is genuine?', answer: 'Look for increasing volume on the break, a full candle close beyond the level, and price holding above the broken level on retests. False breaks typically happen on low volume with quick reversals.' },
        { question: 'Which S&R levels are most reliable?', answer: 'Levels that have been tested multiple times, created strong reversals, and align with round numbers or major timeframe highs/lows are the most reliable.' },
        { question: 'How does this course connect to technical analysis?', answer: 'S&R analysis is foundational to all other technical analysis. Candlestick patterns, chart patterns, indicators, and Fibonacci all become more powerful when used at significant S&R levels.' },
        { question: 'How do I enroll?', answer: 'Contact Tradeverse City on WhatsApp for enrollment details, fees, and schedules.' },
        { question: 'Can S&R analysis be applied to F&O trading?', answer: 'Yes. S&R levels are critical for options trading — they guide strike price selection, define target levels, and help position stop-losses. Our Options Trading course builds on S&R fundamentals.' },
      ]}
      relatedLinks={[
        { label: 'Candlestick Analysis', href: '/courses/candlestick-analysis' },
        { label: 'Trend Analysis', href: '/courses/trend-analysis' },
        { label: 'Price Action Trading', href: '/courses/price-action-trading' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
      ]}
    />
  )
}
