import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Options Trading Fundamentals Course | Tradeverse City',
  description: 'Understand options trading with Tradeverse City — calls, puts, Greeks, option strategies, Nifty options, and risk-defined trading in the derivatives market.',
}

export default function OptionsTradingFundamentalsPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Options Trading Fundamentals"
      level="Advanced"
      heroTitle="Options Trading Fundamentals"
      heroSubtitle="Defined risk. Leveraged returns. Strategic flexibility."
      heroDescription="Options are the most powerful and most misunderstood instruments in the financial markets. This course builds a rigorous understanding of options from first principles — how they are priced, how the Greeks affect their behavior, how to build strategic positions that define your risk, and how to participate in Nifty and Bank Nifty options with a structured, informed approach."
      whatYouWillLearn={[
        'What options are — calls, puts, buyers, sellers, and contract mechanics',
        'Options pricing — intrinsic value, time value, and the impact of each',
        'The Greeks — Delta, Gamma, Theta, Vega, and how each affects your position',
        'Theta decay — why time works against option buyers and for option sellers',
        'Implied Volatility (IV) — what it means and why it changes option premiums dramatically',
        'Options chain reading — identifying key strike levels, OI, and volume data',
        'Basic strategies — covered calls, protective puts, straddles, strangles, spreads',
        'Bull call spreads, bear put spreads, and ratio spreads for defined-risk directional plays',
        'Nifty and Bank Nifty weekly options — expiry dynamics and their implications',
        'Open Interest analysis as a market sentiment indicator',
        'Options as insurance vs. options as speculation — two very different approaches',
        'Tax and regulatory treatment of options trading in India',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Options allow traders and investors to do things that are impossible with equity alone — define maximum loss before entering a trade, generate income from existing holdings, express complex market views with precise risk profiles, and participate in high-volatility events without unlimited downside.',
          'In India, Nifty and Bank Nifty options represent the most liquid derivative instruments in the world by contract count. Understanding how to use them — particularly during expiry weeks — opens a completely different dimension of market participation. But this power comes with complexity that the uninformed frequently underestimate.',
          'The majority of retail options traders lose because they treat options as lottery tickets — buying cheap out-of-the-money calls or puts without understanding theta decay, implied volatility premium, or the statistical edge (or lack thereof) of their strategy. This course builds the foundational knowledge that transforms options from gambles into tools.',
        ],
      }}
      realApplications={[
        'Reading the Nifty options chain to identify maximum pain levels and OI-based support/resistance',
        'Buying ATM call options on a confirmed technical breakout with defined maximum loss',
        'Selling covered calls against existing equity holdings to generate monthly premium income',
        'Using a bull call spread to participate in a bullish move while capping maximum investment',
        'Identifying high IV environments (before events) and low IV environments for strategy selection',
        'Understanding how Bank Nifty weekly expiry creates specific intraday patterns on Thursdays',
        'Using straddles to express a volatility view without a directional bias',
        'Calculating break-even prices for options strategies before execution',
      ]}
      learningOutcomes={[
        'Explain call and put mechanics, pricing factors, and intrinsic vs. extrinsic value',
        'Interpret Delta, Gamma, Theta, and Vega and apply them to position management decisions',
        'Read an options chain and extract meaningful data on sentiment, support, and resistance',
        'Build basic defined-risk options strategies including spreads and straddles',
        'Evaluate whether to buy or sell options based on IV environment and market context',
        'Apply options as part of an integrated trading framework alongside equity and futures',
      ]}
      commonMistakes={[
        'Buying far out-of-the-money options without understanding the statistical probability of them expiring worthless',
        'Ignoring theta decay and holding long option positions for too long without a price move',
        'Selling naked options without understanding the unlimited theoretical risk profile',
        'Confusing high OI at a strike with a price target rather than a resistance/support level',
        'Entering options positions just before major events without accounting for IV crush afterward',
        'Not adjusting option strategy selection based on the current implied volatility environment',
        'Using options without a technical thesis — treating them as independent instruments rather than structured tools',
        'Under-capitalizing positions and then over-leveraging with too many option contracts',
      ]}
      faqs={[
        { question: 'Do I need a special account to trade options?', answer: 'In India, options trading requires an F&O enabled trading account. Your broker must activate F&O trading, and SEBI has specific eligibility criteria. The course covers account requirements in detail.' },
        { question: 'Is options selling safer than options buying?', answer: 'Options sellers collect premium and benefit from time decay, which creates a statistical edge. However, selling options without defined risk management (e.g., spreads, stop-loss rules) can result in very large losses during adverse moves. Neither is inherently safe — both require structured risk management.' },
        { question: 'What is IV crush?', answer: 'IV crush occurs when implied volatility drops sharply after a major event (earnings, RBI policy, budget). If you buy options before an event and the stock moves as expected, the IV crush can still result in a loss because the volatility premium deflates after the uncertainty resolves.' },
        { question: 'Is this course suitable without derivatives trading experience?', answer: 'This is classified as Advanced because it requires prior understanding of stock markets and technical analysis. The course starts from options basics but moves quickly. Stock Market Fundamentals and Technical Analysis are recommended prerequisites.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Futures Market Basics', href: '/courses/futures-market-basics' },
        { label: 'Risk Management', href: '/courses/risk-management' },
        { label: 'Intraday Trading', href: '/courses/intraday-trading' },
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Trading Psychology', href: '/courses/trading-psychology' },
      ]}
    />
  )
}
