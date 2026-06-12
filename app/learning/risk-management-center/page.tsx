import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Risk Management Center | Tradeverse City',
  description: 'Learn professional risk management strategies at Tradeverse City — position sizing, stop-loss, reward-to-risk ratios, and capital protection techniques.',
}

export default function RiskManagementCenterPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Risk Management Center"
      heroBadge="Learning Platform"
      heroTitle="Risk Management Center — Protect Your Capital First"
      heroSubtitle="The traders who survive long enough to profit are the ones who master risk first."
      heroDescription="The Risk Management Center at Tradeverse City is built around a single truth: capital preservation is the number one priority of every professional trader. Before any trade can profit, it must first be structured to limit loss. This center teaches you every technique needed to protect your trading capital."
      educationalContent={{
        heading: 'Risk Management: The Foundation of Consistent Profitability',
        paragraphs: [
          'Many traders spend months learning technical analysis and market strategies, yet fail because they never develop a disciplined risk management framework. A trader with average technical skills and excellent risk management will consistently outperform a technically brilliant trader who ignores risk.',
          'Risk management in trading encompasses several interconnected disciplines: position sizing (how much to risk per trade), stop-loss placement (where to exit a losing trade), reward-to-risk ratios (ensuring profits outweigh losses), portfolio diversification (not concentrating too much capital in a single position), and drawdown management (protecting your account during losing streaks).',
          'At Tradeverse City\'s Risk Management Center, we start with the foundational 1-2% rule — the principle that no single trade should risk more than 1-2% of your total trading capital. This rule alone, consistently applied, makes it nearly impossible to blow up a trading account. We then progress to more nuanced position sizing methods including fixed fractional sizing, Kelly Criterion applications, and volatility-based position adjustment.',
          'Stop-loss strategy goes far beyond simply placing a stop. We teach you how to place stops at technically meaningful levels — below support, above resistance, beyond swing highs and lows — rather than arbitrary price distances. Trailing stops, time-based stops, and volatility-based stops are also covered.',
          'Reward-to-risk (R:R) ratio management ensures that your winning trades are larger than your losing trades. Even with a 50% win rate, a 2:1 R:R ratio makes you profitable over a series of trades. We integrate R:R analysis into every entry methodology taught across the Tradeverse City curriculum.',
        ],
      }}
      learningCards={[
        { title: 'Position Sizing Methods', description: 'Fixed risk per trade, percentage-based sizing, volatility-adjusted sizing, and Kelly Criterion — when and how to apply each.' },
        { title: 'Stop-Loss Strategies', description: 'Technical stops, volatility stops, time-based stops, and trailing stops — placing stops where the market proves your thesis wrong.' },
        { title: 'Reward-to-Risk Ratios', description: 'How to identify and only take trades with favorable R:R ratios. Why a 40% win rate with 2.5:1 R:R is highly profitable.' },
        { title: 'Drawdown Management', description: 'Understanding equity drawdowns, maximum drawdown thresholds, and when to reduce position size or stop trading.' },
        { title: 'Portfolio Diversification', description: 'Distributing capital across uncorrelated positions, sector diversification, and avoiding overconcentration in single stocks.' },
        { title: 'Capital Allocation Rules', description: 'How much total capital to allocate to trading, how much to keep in reserve, and how to manage margin requirements safely.' },
        { title: 'Options Risk Management', description: 'Unique risk considerations for options trading — theta decay, unlimited loss prevention, and premium risk management.' },
        { title: 'Trading Account Setup', description: 'Structuring your trading account for risk — separating trading capital from investment capital, margin management, and account sizing.' },
        { title: 'Risk Journaling', description: 'Tracking risk metrics across your trades to identify patterns and continuously refine your risk management approach.' },
      ]}
      benefits={[
        { title: 'Capital Protection First', description: 'Build the mental habit of protecting capital before pursuing profit — the hallmark of every consistently profitable trader.' },
        { title: 'Personalized Risk Framework', description: 'Develop a risk management system calibrated to your specific capital size, risk tolerance, and trading style.' },
        { title: 'Real Trade Examples', description: 'See risk management applied to real NSE/BSE trade setups with precise position sizing and stop placement calculations.' },
        { title: 'Integration with TA Courses', description: 'Risk management principles are woven through all Tradeverse City courses — not taught in isolation.' },
        { title: 'WhatsApp Mentorship', description: 'Submit your trade plans for risk review via WhatsApp and receive personalized feedback before you enter positions.' },
        { title: 'Drawdown Recovery Strategies', description: 'Learn how to psychologically and financially recover from losing streaks without compounding losses.' },
      ]}
      faqs={[
        { question: 'What is the 1% rule in risk management?', answer: 'The 1% rule states that you should never risk more than 1% of your total trading capital on a single trade. This means even 10 consecutive losing trades would only reduce your account by 10%, giving you the resilience to continue trading.' },
        { question: 'How do I calculate position size?', answer: 'Position size = (Account Capital × Risk %) ÷ (Entry Price - Stop Loss Price). Contact Tradeverse City on WhatsApp for personalized position sizing worksheets.' },
        { question: 'Is a tight stop-loss always better?', answer: 'No. Stop-losses that are too tight get triggered by normal price noise before the trade has time to work. We teach you to place stops at technically meaningful levels, not arbitrary distances.' },
        { question: 'What is a good reward-to-risk ratio?', answer: 'A minimum of 1.5:1 is acceptable, with 2:1 or higher being the target for most strategies. Some setups offer 3:1 or more — these are the highest quality opportunities.' },
        { question: 'How much capital do I need to start trading?', answer: 'For specific capital recommendations tailored to your situation and goals, contact Tradeverse City on WhatsApp for a personalized consultation.' },
        { question: 'Does Tradeverse City cover F&O risk management?', answer: 'Yes. Our Options Trading Fundamentals and Futures Market Basics courses include dedicated risk management modules specific to derivatives.' },
      ]}
      relatedLinks={[
        { label: 'Trading Psychology Center', href: '/learning/trading-psychology-center' },
        { label: 'Risk Management Course', href: '/courses/risk-management' },
        { label: 'Options Trading Fundamentals', href: '/courses/options-trading-fundamentals' },
        { label: 'Intraday Trading Course', href: '/courses/intraday-trading' },
        { label: 'Portfolio Management Course', href: '/courses/portfolio-management' },
      ]}
    />
  )
}
