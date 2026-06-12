import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Psychology Course | Tradeverse City',
  description: 'Master trading psychology with Tradeverse City — overcome fear, greed, and revenge trading to build the mental discipline of a professional trader.',
}

export default function TradingPsychologyPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Trading Psychology"
      level="All Levels"
      heroTitle="Trading Psychology"
      heroSubtitle="The market tests your mind before it rewards your method."
      heroDescription="You can have the best technical system in the world and still lose money consistently if you cannot execute it under pressure. Trading Psychology is the most underappreciated and most impactful course any trader can take. It examines the cognitive biases, emotional triggers, and behavioral patterns that undermine performance — and builds the mental infrastructure of a professional trader."
      whatYouWillLearn={[
        'Why 90% of retail traders fail and the psychological root causes',
        'The cognitive biases that sabotage trading — confirmation bias, recency bias, anchoring',
        'Fear and greed cycles — how market emotions move between capitulation and euphoria',
        'Overconfidence bias and how winning streaks create dangerous risk-taking behavior',
        'Loss aversion — why losses hurt twice as much as gains feel good',
        'Revenge trading — identifying triggers and building prevention protocols',
        'Building a rule-based trading process that removes discretionary emotion',
        'The pre-market mental preparation routine of professional traders',
        'Journaling as a psychological feedback loop for performance improvement',
        'Developing patience — the discipline to wait for A-grade setups only',
        'Handling drawdown periods without self-destructive account behavior',
        'Building consistency — process focus over results focus',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Two traders can use identical technical strategies and produce completely different results. The difference is never the strategy — it is the execution. And execution is almost entirely a psychological challenge. Fear makes you exit winning trades too early. Greed makes you hold losing trades too long. Revenge trading turns a manageable loss into a devastating one. These are not character flaws — they are predictable, universal human responses to financial uncertainty. They can be understood and managed.',
          'Professional traders from prop firms and hedge funds invest heavily in behavioral training because the data is clear: psychological breakdowns cost more capital than bad setups do. Learning to identify your personal psychological triggers, building a structured trading process that minimizes discretionary decisions, and developing the self-awareness to recognize when emotion is driving behavior — these are learnable skills with measurable impact on trading performance.',
          'This course is as much personal development as it is trading education. The frameworks and practices taught here will improve your decision-making not just in markets, but in any high-pressure, uncertain environment.',
        ],
      }}
      realApplications={[
        'Maintaining a structured trading journal that tracks emotional states alongside trade outcomes',
        'Building a pre-trade checklist that prevents entering setups that do not meet defined criteria',
        'Identifying personal revenge trading triggers and implementing a mandatory cooling-off protocol',
        'Developing a morning routine that prepares the mind for focused, disciplined market participation',
        'Reviewing losing streaks to separate execution failures from statistical variance',
        'Using a daily loss limit as a psychological circuit breaker before emotional decisions escalate',
        'Applying mindfulness practices to reduce cortisol-driven impulsive trading decisions',
        'Building a personal psychological profile to identify dominant biases and compensating routines',
      ]}
      learningOutcomes={[
        'Identify the specific cognitive biases most likely to impact your trading performance',
        'Build a rule-based trading process that reduces discretionary emotional decision-making',
        'Maintain a structured trading journal and extract actionable psychological insights from it',
        'Implement pre-market mental preparation and post-session review routines consistently',
        'Develop a drawdown response protocol that protects capital during psychological low periods',
        'Shift focus from trade outcomes to process quality as the primary performance metric',
      ]}
      commonMistakes={[
        'Believing that trading discipline comes naturally rather than being a practiced, built skill',
        'Reviewing performance only in terms of profit/loss without examining execution quality',
        'Not keeping a trading journal or only journaling trades — not thoughts and emotions',
        'Ignoring the physical factors — sleep, nutrition, stress — that directly impact decision quality',
        'Treating a winning streak as evidence of skill rather than examining if process was followed',
        'Minimizing small losses that individually seem harmless but collectively erode capital',
        'Holding losing trades because "I can\'t be wrong" rather than following the stop-loss rules',
        'Not separating trading capital from personal finances, increasing psychological pressure',
      ]}
      faqs={[
        { question: 'I have a good strategy but keep making mistakes in execution — is this course right for me?', answer: 'Yes. This is exactly the profile this course is designed for. Execution failures are almost always psychological. This course provides specific tools and frameworks to address the gap between knowing what to do and consistently doing it.' },
        { question: 'Do I need to have trading experience to take this course?', answer: 'No. While the course is most immediately impactful for those who have begun trading and noticed psychological patterns, the frameworks are valuable for beginners to build the right mental foundation from the start.' },
        { question: 'How is this different from motivational content about trading mindset?', answer: 'This course is evidence-based, drawing on behavioral economics, cognitive psychology, and the documented practices of professional trading firms. It provides specific, actionable tools — not general inspiration.' },
        { question: 'Can trading psychology really be learned or is it innate?', answer: 'Extensive research in behavioral finance and professional trader training demonstrates that trading discipline is a learned skill, not a personality trait. It requires deliberate practice and structured self-awareness — both of which this course develops.' },
        { question: 'How do I enroll in this course?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Risk Management', href: '/courses/risk-management' },
        { label: 'Trading Psychology Center', href: '/learning/trading-psychology-center' },
        { label: 'Swing Trading', href: '/courses/swing-trading' },
        { label: 'Intraday Trading', href: '/courses/intraday-trading' },
        { label: 'Community Learning Hub', href: '/learning/community-hub' },
      ]}
    />
  )
}
