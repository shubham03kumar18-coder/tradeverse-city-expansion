import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Research Center | Tradeverse City',
  description: 'Learn market research techniques at Tradeverse City — fundamental analysis, sector research, economic indicators, and data-driven trading decisions.',
}

export default function MarketResearchCenterPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Market Research Center"
      heroBadge="Learning Platform"
      heroTitle="Market Research Center — Trade with Data, Not Assumptions"
      heroSubtitle="Great trades are the outcome of great research. Learn to analyze markets like an institution."
      heroDescription="The Market Research Center at Tradeverse City teaches traders how to conduct thorough, structured market research — combining technical analysis with fundamental awareness, macro economic understanding, and sector-level intelligence to make consistently better trading decisions."
      educationalContent={{
        heading: 'Why Market Research is a Competitive Advantage',
        paragraphs: [
          'In highly competitive financial markets, traders who rely purely on chart patterns often miss the larger context driving price. Understanding why a stock or index is moving — not just how it is moving — gives traders a significant edge. Market research bridges the gap between technical signals and market reality.',
          'Tradeverse City\'s Market Research Center teaches a multi-dimensional approach to market analysis. We combine top-down macro analysis (global markets, RBI policy, FII/DII activity, sector rotation) with bottom-up stock research (financials, management quality, earnings trends) and technical timing to create a complete view.',
          'You\'ll learn to read and interpret key economic indicators that influence Indian markets — GDP growth data, inflation (CPI and WPI), interest rate decisions, foreign institutional investor flows, and corporate earnings cycles. Understanding how these macro factors translate to specific stock and index movements is a skill that separates informed traders from reactive ones.',
          'Sector analysis is another critical component. Different sectors perform differently at different points in the economic cycle. Understanding which sectors are in accumulation, which are in distribution, and which are in turnaround phase allows traders to position themselves ahead of institutional money flows.',
          'We also teach how to use stock screening tools to identify trading candidates based on multiple criteria — technical setups, fundamental strength, volume surges, and price relative to market. Efficient stock selection dramatically improves your trading results by ensuring you only trade the strongest setups.',
        ],
      }}
      learningCards={[
        { title: 'Top-Down Market Analysis', description: 'Analyzing global markets, RBI policy, FII/DII flows, and macro conditions before identifying specific trade setups.' },
        { title: 'Sector Rotation Framework', description: 'Understanding economic cycles, identifying sector leaders, and positioning trades in advance of institutional rotation.' },
        { title: 'Economic Indicators', description: 'GDP, CPI, WPI, repo rate decisions, current account data — how each indicator affects equity and currency markets.' },
        { title: 'FII & DII Activity Analysis', description: 'Reading institutional buying and selling data to understand the direction of smart money in Indian markets.' },
        { title: 'Corporate Earnings Analysis', description: 'Analyzing quarterly results, earnings surprises, guidance revisions, and their impact on stock price action.' },
        { title: 'Stock Screening Techniques', description: 'Using screening tools to filter stocks by technical setups, fundamental metrics, volume patterns, and price momentum.' },
        { title: 'News & Event Trading', description: 'How to research and trade around scheduled news events — budget, earnings, RBI policy, and global macro events.' },
        { title: 'Annual Report Reading', description: 'Extracting key insights from annual reports — revenue trends, margins, debt levels, and management commentary.' },
        { title: 'Market Breadth Analysis', description: 'Advance/decline data, new highs/lows, sector performance heatmaps, and using breadth to confirm market direction.' },
      ]}
      benefits={[
        { title: 'Institutional Thinking', description: 'Learn to analyze markets the way institutional traders do — with a structured, multi-factor research process.' },
        { title: 'Data-Driven Decisions', description: 'Replace guesswork and intuition with evidence-based research frameworks that produce consistently better trade selection.' },
        { title: 'Sector Intelligence', description: 'Stay ahead of sector rotation trends and position your trades in the strongest segments of the market.' },
        { title: 'Event-Driven Opportunities', description: 'Learn to identify and trade high-probability setups around predictable market events with proper risk management.' },
        { title: 'Screener Mastery', description: 'Efficient use of stock screeners to identify the best setups from thousands of listed stocks in minutes.' },
        { title: 'Ongoing Market Analysis', description: 'Regular market research updates via our WhatsApp and Telegram channels to support your ongoing trading decisions.' },
      ]}
      faqs={[
        { question: 'Is fundamental analysis necessary for technical traders?', answer: 'A basic understanding of fundamentals helps technical traders avoid trading weak or deteriorating businesses. It also helps identify stocks most likely to sustain breakouts versus those where rallies tend to fail quickly.' },
        { question: 'How do I track FII/DII activity in Indian markets?', answer: 'FII/DII data is published daily by NSE and BSE. Tradeverse City teaches you how to access, interpret, and integrate this data into your market analysis process.' },
        { question: 'What tools does Tradeverse City recommend for market research?', answer: 'We cover multiple tools available for Indian market research — screeners, economic data platforms, and charting tools. Contact us on WhatsApp for specific tool recommendations.' },
        { question: 'How much time does market research take daily?', answer: 'A structured pre-market research routine of 30-60 minutes is sufficient for most traders. We teach efficient research workflows that maximize insight in minimum time.' },
        { question: 'Does market research apply to intraday trading too?', answer: 'Yes. Even intraday traders benefit from a brief macro context check — market bias, key levels to watch, and any scheduled news events that could cause volatility.' },
        { question: 'How do I enroll in the Market Research Center?', answer: 'Contact Tradeverse City on WhatsApp for complete enrollment details and personalized course recommendations.' },
      ]}
      relatedLinks={[
        { label: 'Market Research Techniques Course', href: '/courses/market-research-techniques' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
        { label: 'Portfolio Management Course', href: '/courses/portfolio-management' },
        { label: 'Trend Analysis Course', href: '/courses/trend-analysis' },
      ]}
    />
  )
}
