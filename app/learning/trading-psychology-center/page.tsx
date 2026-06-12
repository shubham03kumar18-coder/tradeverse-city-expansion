import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Psychology Center | Tradeverse City',
  description: 'Develop the mental edge of a professional trader. Tradeverse City\'s Trading Psychology Center covers discipline, emotional control, and mindset mastery.',
}

export default function TradingPsychologyCenterPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Trading Psychology Center"
      heroBadge="Learning Platform"
      heroTitle="Trading Psychology Center — The Mental Edge Every Trader Needs"
      heroSubtitle="Knowledge without discipline is a losing strategy. Master the mind, master the market."
      heroDescription="Trading psychology is the single most underestimated factor in trading performance. The Trading Psychology Center at Tradeverse City addresses the emotional and behavioral patterns that destroy profitable setups — and teaches you to replace them with the disciplined, consistent mindset of a professional trader."
      educationalContent={{
        heading: 'Why Psychology Determines Trading Success',
        paragraphs: [
          'Studies consistently show that most traders fail not because they lack knowledge but because they lack emotional discipline. Fear causes premature exits. Greed leads to holding losing trades too long. Overconfidence results in oversized positions. FOMO (Fear of Missing Out) triggers impulsive entries without analysis.',
          'At Tradeverse City\'s Trading Psychology Center, we teach traders to recognize these destructive patterns and systematically replace them with process-driven behavior. You\'ll learn how the brain processes risk, why it creates irrational responses in trading contexts, and how to rewire these responses through structured habit-building.',
          'The concept of a Trading Plan is central to psychological discipline. A well-constructed trading plan removes decision-making from the heat of the moment — it pre-defines your entry criteria, stop-loss level, position size, and profit target before you enter any trade. We teach you to build and follow your own personalized trading plan.',
          'We cover psychological biases that affect traders — confirmation bias, loss aversion, anchoring, and the gambler\'s fallacy — and show you concrete techniques to counteract each one. Journaling, post-trade analysis, and performance metrics are taught as tools for continuous psychological improvement.',
          'Trading is a performance activity, much like professional sports. Mental training, visualization, and building mental resilience are as important as technical skills. The Psychology Center equips you with a complete mental framework for long-term trading success.',
        ],
      }}
      learningCards={[
        { title: 'Fear & Greed in Trading', description: 'Understanding how fear and greed drive market movements and how they silently destroy individual trading performance.' },
        { title: 'Trading Plan Development', description: 'Building a personal trading plan that removes emotion from decision-making and creates consistent, repeatable behavior.' },
        { title: 'Dealing with Losses', description: 'Healthy psychological responses to losing trades — accepting losses as part of the process without emotional damage.' },
        { title: 'Overcoming FOMO', description: 'Recognizing and overcoming the Fear of Missing Out — one of the most common causes of impulsive, unplanned trades.' },
        { title: 'Cognitive Biases in Trading', description: 'Confirmation bias, loss aversion, anchoring, recency bias — how they manifest in trading and techniques to neutralize them.' },
        { title: 'Building Consistency', description: 'Creating daily pre-market routines, post-market reviews, and weekly performance assessments that build professional consistency.' },
        { title: 'Position Sizing & Emotional Control', description: 'How proper position sizing reduces emotional volatility and allows you to execute trades calmly without panic.' },
        { title: 'Trading Journal Mastery', description: 'The structure of an effective trading journal, what to record, and how to analyze your own trading behavior patterns.' },
        { title: 'Mindfulness for Traders', description: 'Practical mindfulness and breathing techniques adapted for trading environments to manage real-time stress and impulsive reactions.' },
      ]}
      benefits={[
        { title: 'Behavioral Pattern Recognition', description: 'Identify your specific psychological weaknesses through guided self-assessment and targeted exercises.' },
        { title: 'Personalized Trading Plan', description: 'Build your own written trading plan with mentor guidance via WhatsApp to structure your decision-making.' },
        { title: 'Journal Templates & Tools', description: 'Access structured trading journal templates to track both trade data and emotional state for continuous improvement.' },
        { title: 'Mindset Coaching', description: 'Receive psychological coaching through our WhatsApp and Telegram support channels.' },
        { title: 'Real-World Case Studies', description: 'Learn from documented examples of psychological failures and successes in real trading environments.' },
        { title: 'Long-Term Performance Focus', description: 'Build habits and mental frameworks designed for sustainable, long-term trading performance — not just short-term wins.' },
      ]}
      faqs={[
        { question: 'Why is psychology so important in trading?', answer: 'Even the most technically sound trading strategy will fail if executed with emotional inconsistency. Psychology determines whether you follow your rules during winning and losing streaks.' },
        { question: 'How does Tradeverse City teach trading psychology?', answer: 'Through a combination of educational content, self-assessment exercises, journaling frameworks, and direct mentorship via WhatsApp and Telegram.' },
        { question: 'What is a trading plan and why do I need one?', answer: 'A trading plan is a personal document that pre-defines your strategy, entry/exit rules, risk parameters, and daily routine. It removes emotional decision-making from live trading.' },
        { question: 'Can trading psychology be improved over time?', answer: 'Absolutely. Like any skill, psychological discipline improves with deliberate practice, reflection, and feedback. Our program is designed to create measurable improvement in trading consistency.' },
        { question: 'What is the relationship between risk management and psychology?', answer: 'They are deeply interconnected. Proper risk management (especially position sizing) reduces emotional pressure, which in turn makes disciplined execution easier. Our Risk Management Center covers this in detail.' },
        { question: 'How do I enroll in the Trading Psychology program?', answer: 'Contact Tradeverse City on WhatsApp for complete enrollment details, schedules, and personalized guidance.' },
      ]}
      relatedLinks={[
        { label: 'Risk Management Center', href: '/learning/risk-management-center' },
        { label: 'Trading Psychology Course', href: '/courses/trading-psychology' },
        { label: 'Risk Management Course', href: '/courses/risk-management' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
        { label: 'Beginner Hub', href: '/learning/beginner-hub' },
      ]}
    />
  )
}
