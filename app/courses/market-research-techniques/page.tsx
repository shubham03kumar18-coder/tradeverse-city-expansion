import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Research Techniques Course | Tradeverse City',
  description: 'Learn structured market research with Tradeverse City — sector analysis, fundamental screening, economic data interpretation, and building a research-driven trading edge.',
}

export default function MarketResearchTechniquesPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Market Research Techniques"
      level="Intermediate"
      heroTitle="Market Research Techniques"
      heroSubtitle="Informed conviction leads to confident execution."
      heroDescription="Market research is the bridge between raw information and trading conviction. This course teaches you to systematically gather, filter, and interpret market data — from macro-economic indicators and sector rotation analysis to company-level fundamental screening and news flow interpretation — and integrate it all into a research-driven trading and investment process."
      whatYouWillLearn={[
        'The macro-to-micro research framework — top-down market analysis',
        'Reading and interpreting key economic indicators — GDP, CPI, IIP, PMI, and RBI policy',
        'Sector rotation — how capital moves between sectors across economic cycles',
        'Industry analysis — competitive dynamics, growth drivers, and margin trends',
        'Company fundamental screening — revenue growth, profitability, debt, and valuation',
        'Earnings analysis — how to read quarterly results and interpret management commentary',
        'Annual reports — what institutional investors look for and how to extract key insights',
        'FII/DII flow data — interpreting institutional buying and selling patterns',
        'Derivatives data research — PCR, OI data, max pain analysis',
        'News and event calendar management — handling budget, RBI policy, and global events',
        'Building a stock screening watchlist using quantitative filters',
        'Synthesizing research into a structured market thesis and trade rationale',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'The difference between a trader with conviction and a trader who second-guesses every position is usually the depth of their research. When you have thoroughly researched why a trade makes sense — the macro context, the sector tailwind, the company-level metrics, and the technical confirmation — you can hold through normal volatility without panic because you understand the underlying basis for your thesis.',
          'Market research also dramatically improves trade selection. Rather than scanning for any technical setup, research-driven traders focus on stocks where fundamentals support the technical picture — stocks in strong sectors with improving earnings trends and institutional accumulation. This intersection of research and technicals produces higher-quality, higher-conviction trades.',
          'In India specifically, macro events — RBI policy meetings, Union Budget, quarterly earnings seasons, global FII flows — move markets in predictable and analyzable ways. Understanding how to research these events, position ahead of them, and manage risk around them is a skill that consistently differentiates informed traders from reactive ones.',
        ],
      }}
      realApplications={[
        'Using top-down sector rotation analysis to focus stock selection on leading sectors',
        'Screening for stocks with accelerating revenue growth, expanding margins, and low debt',
        'Interpreting RBI policy meetings and their implications for banking and rate-sensitive sectors',
        'Analyzing FII flow data to gauge institutional sentiment and anticipate large-cap moves',
        'Using the NSE derivatives PCR (Put-Call Ratio) as a market sentiment indicator',
        'Building a structured earnings analysis process before and after quarterly results',
        'Reading annual reports to identify qualitative moats that quantitative screens miss',
        'Maintaining a macro calendar and adjusting position sizes ahead of high-impact events',
      ]}
      learningOutcomes={[
        'Apply a top-down research framework from macro to sector to individual stock selection',
        'Interpret key economic indicators and understand their implications for equity markets',
        'Build a systematic fundamental stock screening process using quantitative criteria',
        'Analyze quarterly earnings and annual report data to assess business quality',
        'Integrate derivatives research data (OI, PCR, max pain) with technical market analysis',
        'Synthesize multiple research layers into a structured, written trade or investment thesis',
      ]}
      commonMistakes={[
        'Doing research only after entering a trade rather than before — confirmation bias in action',
        'Over-relying on analyst recommendations without understanding the underlying research basis',
        'Treating news headlines as research — surface information without structural context',
        'Ignoring sector context and selecting stocks based on company analysis alone',
        'Not updating research theses as macro or fundamental conditions change post-entry',
        'Researching too many stocks superficially rather than researching fewer stocks thoroughly',
        'Confusing short-term news catalysts with long-term fundamental investment theses',
        'Not maintaining a research log — losing the documented basis for past decisions and outcomes',
      ]}
      faqs={[
        { question: 'Do I need an accounting background for fundamental analysis?', answer: 'No. The course teaches financial statement reading specifically for traders and investors — focusing on the key metrics that matter for stock selection without requiring deep accounting knowledge.' },
        { question: 'How much time does market research require daily?', answer: 'Professional traders typically spend 30-60 minutes on research before each session — checking macro data, earnings releases, FII/DII flows, and sector developments. The course teaches how to build an efficient, focused daily research routine.' },
        { question: 'Where can I access reliable market research data in India?', answer: 'The course covers the most reliable and accessible data sources — NSE/BSE websites, SEBI filings, company annual reports, RBI publications, screener.in for fundamental data, and derivatives data from exchange platforms.' },
        { question: 'How do I combine market research with technical analysis?', answer: 'The research framework identifies what to trade — sectors with momentum, stocks with improving fundamentals. Technical analysis determines when and where to enter. The course explicitly covers how to integrate both layers into a single decision framework.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Portfolio Management', href: '/courses/portfolio-management' },
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Stock Market Fundamentals', href: '/courses/stock-market-fundamentals' },
        { label: 'Market Research Center', href: '/learning/market-research-center' },
        { label: 'Resources Library', href: '/learning/resources-library' },
      ]}
    />
  )
}
