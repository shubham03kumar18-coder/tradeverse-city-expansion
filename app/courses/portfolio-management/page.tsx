import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Management Course | Tradeverse City',
  description: 'Learn portfolio management with Tradeverse City — diversification, asset allocation, rebalancing, performance measurement, and long-term wealth building.',
}

export default function PortfolioManagementPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Portfolio Management"
      level="Intermediate"
      heroTitle="Portfolio Management"
      heroSubtitle="Build wealth systematically. Protect it strategically."
      heroDescription="Portfolio management is the art and science of constructing, maintaining, and optimizing a collection of investments to achieve defined financial objectives within acceptable risk boundaries. This course teaches both the theory and the practical application of building a trading and investment portfolio that compounds wealth over time while managing drawdowns through market cycles."
      whatYouWillLearn={[
        'Portfolio theory — risk, return, correlation, and the efficient frontier',
        'Asset allocation — how to divide capital across equities, bonds, cash, and alternatives',
        'Diversification — the mechanics of reducing unsystematic risk across holdings',
        'Sector allocation and sector rotation strategy within a stock portfolio',
        'Stock screening and selection for portfolio inclusion',
        'Position sizing at the portfolio level — concentration vs. diversification trade-off',
        'Portfolio rebalancing — when, why, and how to rebalance effectively',
        'Performance measurement — absolute return, alpha, beta, Sharpe ratio, Sortino ratio',
        'Benchmark comparison — measuring performance against Nifty 50 and sector indices',
        'Tax efficiency in portfolio construction — LTCG optimization and tax-loss harvesting',
        'Separating the trading portfolio from the investment portfolio',
        'Building a wealth accumulation portfolio for long-term compounding',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Most active traders operate without a portfolio framework. They select trades in isolation, without considering how each position interacts with others in terms of correlation, sector concentration, or total risk exposure. This leads to inadvertently concentrated portfolios that amplify losses during sector-specific downturns or broader market corrections.',
          'Portfolio management provides the architecture that makes individual trade selection more meaningful. Knowing how much capital is allocated to each sector, what the total open risk is across all positions, and when the portfolio has drifted too far from its target allocation allows for proactive, systematic management rather than reactive responses to individual position moves.',
          'Beyond active trading, this course addresses long-term wealth building — how to construct an investment portfolio that compounds over market cycles, how to protect it during bear markets, and how to measure genuine performance rather than letting bull market returns mask poor risk-adjusted outcomes.',
        ],
      }}
      realApplications={[
        'Building a sector-diversified stock portfolio with defined maximum allocation per sector',
        'Calculating portfolio beta to understand overall market sensitivity of your holdings',
        'Applying systematic quarterly rebalancing to maintain target asset allocation',
        'Using Sharpe ratio to compare two strategies with different return and volatility profiles',
        'Tax-loss harvesting — realizing strategic losses in December to offset short-term capital gains',
        'Separating speculative trading capital from core long-term investment capital',
        'Identifying portfolio concentration risk using correlation analysis between holdings',
        'Building a watchlist-to-portfolio workflow that maintains quality over quantity in holdings',
      ]}
      learningOutcomes={[
        'Construct a diversified equity portfolio with defined sector, stock, and risk limits',
        'Calculate portfolio-level metrics — beta, volatility, Sharpe ratio, and drawdown',
        'Design and execute a systematic portfolio rebalancing process',
        'Apply tax-efficient strategies including LTCG planning and loss harvesting in Indian markets',
        'Separate and independently manage a trading account and an investment portfolio',
        'Evaluate portfolio performance on a risk-adjusted basis against relevant benchmarks',
      ]}
      commonMistakes={[
        'Confusing diversification with dilution — owning 50 highly correlated stocks is not diversification',
        'Not rebalancing and letting winning positions grow into dangerously concentrated holdings',
        'Measuring performance only in absolute terms without comparing to a relevant benchmark',
        'Mixing long-term investment capital with short-term trading capital in the same account',
        'Ignoring the tax implications of frequent trading within what should be a long-term portfolio',
        'Over-diversifying into too many small positions that cannot meaningfully impact portfolio returns',
        'Not accounting for correlation during market stress — assets that diversify in normal conditions often correlate during crises',
        'Focusing only on individual stock analysis without considering portfolio-level risk exposure',
      ]}
      faqs={[
        { question: 'How many stocks should I hold in a portfolio?', answer: 'Research suggests that 15-20 stocks across uncorrelated sectors captures the majority of diversification benefit. Beyond 25-30 stocks, additional diversification benefit diminishes while monitoring complexity increases. The course covers concentration vs. diversification trade-offs in detail.' },
        { question: 'What is the difference between a trading portfolio and an investment portfolio?', answer: 'A trading portfolio uses shorter-term strategies (intraday to swing) with active position management and stop-losses. An investment portfolio holds positions for months to years based on longer-term fundamental and technical merit. They should be managed with different rules, different mindsets, and ideally separate accounts.' },
        { question: 'How often should I rebalance my portfolio?', answer: 'A common approach is quarterly rebalancing by threshold — rebalancing when any position deviates more than 5-10% from its target weight. The right frequency depends on your strategy, tax situation, and transaction cost environment.' },
        { question: 'What is alpha and why does it matter?', answer: 'Alpha measures the return your portfolio generates above what would be expected given its level of market risk (beta). Positive alpha means you are outperforming on a risk-adjusted basis. It is the key metric for evaluating whether active stock selection and management is adding genuine value.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Risk Management', href: '/courses/risk-management' },
        { label: 'Market Research Techniques', href: '/courses/market-research-techniques' },
        { label: 'Stock Market Fundamentals', href: '/courses/stock-market-fundamentals' },
        { label: 'Swing Trading', href: '/courses/swing-trading' },
        { label: 'Market Research Center', href: '/learning/market-research-center' },
      ]}
    />
  )
}
