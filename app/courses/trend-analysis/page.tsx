import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trend Analysis Course | Tradeverse City',
  description: 'Learn how to identify, confirm, and trade with market trends using Tradeverse City\'s Trend Analysis course — trendlines, channels, and directional bias.',
}

export default function TrendAnalysisPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Trend Analysis"
      level="Intermediate"
      heroTitle="Trend Analysis"
      heroSubtitle="The market moves in trends. Learn to identify them before everyone else."
      heroDescription="The oldest principle in trading is that markets move in trends. This course teaches you how to correctly identify trend direction, measure trend strength, spot trend reversals early, and position yourself to trade in alignment with the dominant market direction — across all timeframes."
      whatYouWillLearn={[
        'The three phases of a market trend — accumulation, markup, and distribution',
        'How to draw valid trendlines and trend channels on any timeframe',
        'Identifying uptrends, downtrends, and sideways consolidation phases',
        'Measuring trend strength using ADX and slope analysis',
        'Higher highs, higher lows, lower highs, and lower lows — reading trend structure',
        'Trend continuation vs. trend reversal signals',
        'Multi-timeframe trend alignment for higher probability setups',
        'Using moving averages (SMA, EMA, WMA) to confirm and trade trends',
        'Fibonacci retracement within trending markets',
        'Volume and momentum confirmation of trend direction',
        'How institutional money flows create and sustain trends',
        'Trend-based entry and exit strategies',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Trading against the trend is one of the most common and costly mistakes retail traders make. A deep understanding of trend analysis allows you to align every trade with the path of least resistance — the direction in which institutional capital is flowing.',
          'Trend analysis is not just about drawing lines on a chart. It is about understanding the psychology behind price movement — why certain levels hold, why certain patterns repeat, and why markets transition from trending to ranging phases. This knowledge transforms reactive trading into proactive, structured decision-making.',
          'Beyond entry signals, trend analysis shapes your entire trade management approach — where to place stops, when to scale positions, and when market conditions no longer support your thesis. It is the backbone of disciplined, process-driven trading.',
        ],
      }}
      realApplications={[
        'Identifying the dominant daily trend before selecting intraday trade direction',
        'Drawing valid trendline support and resistance for swing entries',
        'Using EMA crossovers to confirm trend transitions and momentum shifts',
        'Applying Fibonacci retracement to find entry points within existing trends',
        'Reading ADX readings to determine if a market is trending or ranging',
        'Combining multi-timeframe analysis to filter low-quality counter-trend setups',
        'Identifying distribution phases before major trend reversals',
        'Applying trend channels to set precise price targets in swing trades',
      ]}
      learningOutcomes={[
        'Correctly identify and label uptrend, downtrend, and sideways market phases',
        'Draw technically valid trendlines and trend channels on any timeframe chart',
        'Use multiple indicators to confirm trend direction before entering trades',
        'Apply multi-timeframe analysis to align trend bias across time horizons',
        'Recognize early warning signs of trend reversal before they fully materialize',
        'Integrate trend analysis with support/resistance and entry/exit timing',
      ]}
      commonMistakes={[
        'Drawing trendlines through candle bodies rather than correctly using wicks',
        'Calling a trend reversal too early after only one or two contrary candles',
        'Ignoring the broader higher timeframe trend and trading counter-trend on lower frames',
        'Misusing moving averages as support/resistance without understanding their lagging nature',
        'Confusing consolidation for reversal and entering prematurely',
        'Using only one timeframe and missing the larger directional context',
        'Forcing trendlines to fit a predetermined bias rather than reading the chart objectively',
        'Not adjusting stop placement when trend structure changes mid-trade',
      ]}
      faqs={[
        { question: 'How many touches does a valid trendline need?', answer: 'A minimum of three touches — two to establish the line and a third to validate it. More touches increase significance, but quality of the touches matters more than quantity.' },
        { question: 'What is the best moving average for trend following?', answer: 'There is no single "best" moving average. The 20 EMA, 50 EMA, and 200 SMA are widely watched and therefore self-reinforcing. The course covers how to choose the right moving average period for your trading style.' },
        { question: 'How do I distinguish a trend reversal from a retracement?', answer: 'Reversals break the structure of higher highs and higher lows (in uptrends). Retracements maintain the structure while pulling back to demand zones. The course provides specific criteria for making this distinction.' },
        { question: 'Is Trend Analysis relevant for intraday traders?', answer: 'Absolutely. The same principles apply on 5-minute, 15-minute, and hourly charts. Intraday traders who align with the higher-timeframe trend significantly improve their probability.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Candlestick Analysis', href: '/courses/candlestick-analysis' },
        { label: 'Price Action Trading', href: '/courses/price-action-trading' },
        { label: 'Support & Resistance', href: '/courses/support-resistance' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
      ]}
    />
  )
}
