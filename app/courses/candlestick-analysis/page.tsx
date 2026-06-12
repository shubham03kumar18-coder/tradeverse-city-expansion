import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Candlestick Analysis Course | Tradeverse City',
  description: 'Master candlestick patterns with Tradeverse City — single candles, reversal patterns, continuation patterns, and real market applications.',
}

export default function CandlestickAnalysisPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Candlestick Analysis"
      level="Intermediate"
      heroTitle="Candlestick Analysis"
      heroSubtitle="Every candle tells a story. Learn to read them fluently."
      heroDescription="Candlestick analysis is the most powerful and visually intuitive form of price action reading. This course takes you from basic candle anatomy to advanced multi-candle reversal and continuation patterns, with a focus on reading candlesticks in the context of broader market structure."
      whatYouWillLearn={[
        'The anatomy of a candlestick — open, high, low, close, body, and wicks',
        'Bullish and bearish single candle patterns — hammer, doji, shooting star, marubozu',
        'Two-candle reversal patterns — engulfing, harami, piercing line, dark cloud cover',
        'Three-candle patterns — morning star, evening star, three white soldiers, three black crows',
        'Doji variations — dragonfly, gravestone, long-legged doji and their interpretations',
        'How candlestick patterns interact with support and resistance levels',
        'Confirmation requirements — why standalone patterns are unreliable',
        'Volume confirmation for candlestick signals',
        'Multi-timeframe candlestick analysis for entry timing',
        'Continuation patterns — rising and falling three methods, windows (gaps)',
        'Common misidentifications and how to avoid false signal traps',
        'Applying candlestick analysis to equity, F&O, and index trading',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Candlestick charts originated in 18th-century Japan and have been used for over 250 years to read market psychology. They remain the most widely used chart type among professional traders globally because they communicate the struggle between buyers and sellers with extraordinary visual clarity.',
          'Each candlestick represents four critical data points — the opening price, the highest price reached, the lowest price reached, and the closing price — compressed into a single visual unit. Patterns formed by one, two, or three candles reveal the shifts in momentum and sentiment that precede major price moves.',
          'The power of candlestick analysis is significantly amplified when combined with support/resistance levels, volume analysis, and trend context. A bullish engulfing pattern at a major support level carries far more weight than the same pattern in the middle of a trend. This course teaches you to read candlesticks in context, not in isolation.',
        ],
      }}
      realApplications={[
        'Identifying reversal setups at key support levels using hammer and engulfing patterns for swing trade entries',
        'Using doji formations at resistance levels to anticipate rejection and plan short trades',
        'Spotting morning star and evening star formations at critical trend turning points',
        'Identifying high-probability intraday entry points using 15-minute candlestick patterns',
        'Filtering out false breakouts using candlestick close confirmation above breakout levels',
        'Using long upper wicks at resistance to confirm institutional selling pressure',
        'Combining candlestick reversal signals with RSI divergence for high-confidence trade setups',
        'Reading index candlestick patterns (Nifty 50, Bank Nifty) for overall market bias',
      ]}
      learningOutcomes={[
        'Correctly identify 30+ candlestick patterns in real market charts across multiple timeframes',
        'Apply appropriate confirmation criteria before acting on candlestick signals',
        'Distinguish high-quality setups from patterns appearing in low-probability locations',
        'Integrate candlestick analysis with support, resistance, and trend analysis for complete setups',
        'Read market sentiment and momentum through candlestick body size, wick length, and volume',
        'Apply candlestick analysis effectively to both equity and derivatives markets',
      ]}
      commonMistakes={[
        'Trading candlestick patterns in isolation without context — patterns at support mean more than patterns in trend midpoints',
        'Not waiting for candle close confirmation and acting on patterns that change before close',
        'Confusing similar-looking patterns — harami vs. inside bar, spinning top vs. doji',
        'Ignoring volume — a pattern without confirming volume is significantly less reliable',
        'Over-relying on candlestick signals on lower timeframes where noise overwhelms signal',
        'Treating every single-candle signal as equally valid regardless of its location in the trend',
        'Misidentifying wicks as patterns — a long wick alone is not a hammer unless body and location criteria are met',
        'Forgetting that Japanese candles work best on daily and 4-hour charts; lower timeframe signals need additional filters',
      ]}
      faqs={[
        { question: 'Do I need to know all candlestick patterns?', answer: 'No. Proficiency in 8-10 high-probability patterns used in the right context is far more effective than memorizing 50 patterns.' },
        { question: 'Which candlestick patterns work best in Indian markets?', answer: 'Engulfing patterns, hammer/shooting star at key levels, doji formations, and morning/evening stars are highly reliable in Indian equity markets when combined with proper context.' },
        { question: 'Can candlestick analysis be used for intraday trading?', answer: 'Yes, but with additional filters. On 5-minute and 15-minute charts, confirmation tools like volume and momentum indicators are essential to filter noise.' },
        { question: 'How long until I can identify patterns fluently?', answer: 'With consistent chart practice, most students develop pattern recognition fluency within 4-6 weeks of the course. Contact us on WhatsApp for personalized practice guidance.' },
        { question: 'Is this course suitable for options traders?', answer: 'Yes. Candlestick analysis is equally valuable for options traders who use it to time entries and identify directional bias for their strategies.' },
        { question: 'How do I enroll?', answer: 'Contact Tradeverse City on WhatsApp for enrollment details, fees, and schedules.' },
      ]}
      relatedLinks={[
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
        { label: 'Support & Resistance Course', href: '/courses/support-resistance' },
        { label: 'Price Action Trading', href: '/courses/price-action-trading' },
        { label: 'Trend Analysis', href: '/courses/trend-analysis' },
      ]}
    />
  )
}
