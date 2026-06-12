import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Risk Management Course | Tradeverse City',
  description: 'Learn professional risk management with Tradeverse City — position sizing, stop-loss methodology, portfolio risk controls, and capital preservation strategies.',
}

export default function RiskManagementPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Risk Management"
      level="All Levels"
      heroTitle="Risk Management"
      heroSubtitle="Longevity in trading is built on protecting what you have."
      heroDescription="The single greatest differentiator between traders who survive and those who blow up their accounts is risk management — not their ability to pick the right stocks. This course delivers a complete, professional-grade risk management framework covering position sizing, stop-loss methodology, portfolio-level risk controls, drawdown management, and the psychological discipline to follow your rules under pressure."
      whatYouWillLearn={[
        'Why risk management, not stock picking, determines long-term trading survival',
        'The mathematics of drawdown recovery — why losses hurt more than gains help',
        'Per-trade risk rules — the 1% and 2% risk frameworks',
        'Position sizing methodologies — fixed fractional, Kelly criterion, volatility-based',
        'Stop-loss placement — structure-based vs. volatility-based (ATR) stops',
        'Risk-to-reward ratios — why RRR alone does not determine profitability',
        'Expectancy — combining win rate and RRR into a meaningful performance metric',
        'Portfolio-level risk — daily loss limits, maximum drawdown triggers, and circuit breakers',
        'Correlation risk — why multiple positions in correlated instruments multiply exposure',
        'Leverage and margin — understanding actual vs. notional exposure',
        'Scaling in and out of positions to manage average cost and risk',
        'Post-drawdown recovery plans and psychological reset protocols',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Most traders focus 90% of their effort on finding entries and virtually no effort on managing risk. Yet the math is unambiguous: a 50% loss requires a 100% gain to recover. A 25% loss requires a 33% gain. Every dollar you lose requires more than a dollar of work to recover. Risk management is not just a defensive skill — it is a compounding accelerator when practiced consistently.',
          'Professional traders at prop firms and hedge funds are not primarily evaluated on their best trades. They are evaluated on their drawdown control, Sharpe ratio, and risk-adjusted returns. These metrics are entirely within the trader\'s control through disciplined risk management, regardless of market conditions.',
          'This course fundamentally shifts how you think about trading. The focus moves from "how do I find winning trades?" to "how do I ensure no single trade or sequence of trades can permanently damage my account?" That shift in mental model is the foundation of all professional trading.',
        ],
      }}
      realApplications={[
        'Calculating the correct number of shares/lots for each trade based on account size and stop distance',
        'Setting a daily maximum loss limit and systematically stopping trading when it is hit',
        'Using ATR to determine stop-loss distances that account for normal market volatility',
        'Building a portfolio of positions with limited sector and directional correlation',
        'Applying the Kelly criterion to determine optimal position sizing based on historical edge',
        'Reviewing drawdown history to identify risk management rule violations as the root cause',
        'Adjusting position size during periods of consecutive losses to reduce exposure while recovering',
        'Separating trading capital from personal funds to maintain clear psychological boundaries',
      ]}
      learningOutcomes={[
        'Calculate position size for any trade based on account risk percentage and stop distance',
        'Place stop-loss orders at technically defensible levels using structure and ATR methods',
        'Apply portfolio-level risk limits — daily loss cap, maximum open risk, correlation control',
        'Compute trading expectancy and use it to evaluate the viability of a trading strategy',
        'Build and document a personal risk management rulebook for your trading style',
        'Implement a drawdown response protocol that protects capital during losing periods',
      ]}
      commonMistakes={[
        'Using a fixed share quantity rather than calculating size based on risk percentage',
        'Moving stop-losses away from their original placement when price approaches them',
        'Ignoring correlation risk and holding multiple positions in the same sector or instrument',
        'Treating maximum leverage as the default position size rather than a ceiling',
        'Not having a daily loss limit or ignoring it after a bad morning session',
        'Calculating risk-to-reward on setups without adjusting for actual win rate',
        'Adding to losing positions to "average down" without a predefined, structured plan',
        'Using the same position size during drawdown periods as during normal trading periods',
      ]}
      faqs={[
        { question: 'What is the 1% rule in trading?', answer: 'The 1% rule means you risk no more than 1% of your total trading capital on any single trade. If your account is ₹5,00,000, maximum risk per trade is ₹5,000. This rule ensures that a string of losses never catastrophically damages your account.' },
        { question: 'What is a good risk-to-reward ratio?', answer: 'A minimum of 1:2 (risk ₹1 to make ₹2) is commonly cited, but the optimal RRR depends entirely on your win rate. A strategy with a 30% win rate needs a higher RRR to be profitable than a strategy with a 60% win rate. The course covers expectancy calculation in detail.' },
        { question: 'Should stop-losses always be set at the time of entry?', answer: 'Yes. In professional trading, the stop-loss and target are defined before placing the entry order. This prevents emotional decision-making under the pressure of an open position.' },
        { question: 'Is this course applicable to both stock and F&O traders?', answer: 'Yes. The risk management principles are universal. The course covers specific considerations for leveraged F&O instruments, including the difference between nominal and actual risk exposure in futures and options.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Trading Psychology', href: '/courses/trading-psychology' },
        { label: 'Swing Trading', href: '/courses/swing-trading' },
        { label: 'Intraday Trading', href: '/courses/intraday-trading' },
        { label: 'Portfolio Management', href: '/courses/portfolio-management' },
        { label: 'Risk Management Center', href: '/learning/risk-management-center' },
      ]}
    />
  )
}
