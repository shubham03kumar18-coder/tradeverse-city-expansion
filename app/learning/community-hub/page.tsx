import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Learning Hub | Tradeverse City',
  description: 'Join Tradeverse City\'s Community Learning Hub — connect with fellow traders, share analysis, participate in discussions, and grow together.',
}

export default function CommunityHubPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Community Learning Hub"
      heroBadge="Learning Platform"
      heroTitle="Community Learning Hub — Grow Together, Trade Better"
      heroSubtitle="Trading is more powerful when you learn alongside others. Join a community that sharpens your edge."
      heroDescription="The Community Learning Hub at Tradeverse City brings traders together in a structured, supportive environment. Share analysis, discuss market ideas, participate in group learning sessions, and benefit from the collective intelligence of an active community of developing and experienced traders."
      educationalContent={{
        heading: 'The Power of Community in Trading Education',
        paragraphs: [
          'Trading can feel like a solitary pursuit — but the traders who grow fastest are those who learn in community. Peer discussion challenges your assumptions, exposes you to alternative analytical frameworks, and creates accountability that accelerates skill development far beyond self-study alone.',
          'Tradeverse City\'s Community Learning Hub is built around active participation. We believe that explaining a concept to someone else is one of the most powerful ways to deepen your own understanding. When community members share their trade analyses and receive feedback, everyone learns — the analyst from critique, the reviewer from teaching.',
          'Our community is structured to avoid the noise and misinformation that plagues most public trading groups. Discussions are moderated, based on structured analysis, and focused on education rather than tips. We have strict community guidelines that ensure quality of discourse and prevent the kind of speculative "tipster" culture that harms developing traders.',
          'The Community Hub integrates with WhatsApp and Telegram communities where daily market discussions, chart sharing, and mentorship interactions take place. These live channels provide real-time community engagement between formal learning sessions.',
          'Community Learning Hub also hosts peer review sessions where members can submit their trade analyses for group discussion — a powerful practice for developing analytical confidence and receiving diverse feedback on your thinking.',
        ],
      }}
      learningCards={[
        { title: 'WhatsApp Learning Groups', description: 'Dedicated WhatsApp groups organized by skill level — beginner, intermediate, and advanced trader discussions.' },
        { title: 'Telegram Analysis Channel', description: 'Our active Telegram channel for daily market commentary, chart sharing, and educational discussions.' },
        { title: 'Peer Chart Review', description: 'Submit your chart analyses to the community for structured peer review and mentor feedback.' },
        { title: 'Group Learning Sessions', description: 'Scheduled group sessions covering specific topics, live chart walkthroughs, and Q&A with mentors.' },
        { title: 'Trade Idea Sharing', description: 'Share well-reasoned trade ideas with the community — with entry rationale, risk management, and clear technical basis.' },
        { title: 'Accountability Partners', description: 'Connect with accountability partners who help you stay disciplined, track your journal, and celebrate progress.' },
        { title: 'Market Debate Forums', description: 'Structured debates on market direction, sector outlook, and trading strategy — building analytical thinking skills.' },
        { title: 'Success Stories & Case Studies', description: 'Community members share their learning milestones, successful trades, and lessons from mistakes.' },
        { title: 'Mentor Access', description: 'Regular direct access to Tradeverse City mentors for guidance, analysis feedback, and career direction.' },
      ]}
      benefits={[
        { title: 'Structured Community Environment', description: 'A moderated, education-focused community — no noise, no tips culture, no speculative chatter. Pure learning focus.' },
        { title: 'Accountability & Consistency', description: 'Community participation creates the social accountability that helps traders maintain discipline through challenging periods.' },
        { title: 'Diverse Analytical Perspectives', description: 'Exposure to multiple trading styles and analytical approaches broadens your market understanding significantly.' },
        { title: 'WhatsApp & Telegram Integration', description: 'Real-time community interaction via active WhatsApp and Telegram channels.' },
        { title: 'Mentor-Led Discussions', description: 'Regular mentor participation in community discussions ensures quality and corrects misunderstandings early.' },
        { title: 'Networking with Traders', description: 'Build lasting connections with traders at all stages of their journey — from beginners to consistently profitable traders.' },
      ]}
      faqs={[
        { question: 'How do I join the Tradeverse City community?', answer: 'Community access is provided as part of the Tradeverse City learning program. Contact us on WhatsApp to join.' },
        { question: 'Is the community moderated?', answer: 'Yes. All community spaces are actively moderated by Tradeverse City team members to maintain quality, accuracy, and respectful discourse.' },
        { question: 'Can I share trade ideas in the community?', answer: 'Yes — we encourage members to share well-analyzed trade ideas with clear rationale, entry/exit levels, and risk management. Tips without analysis are not permitted.' },
        { question: 'Are community sessions recorded?', answer: 'For details on session recordings and replay access, contact Tradeverse City on WhatsApp.' },
        { question: 'What makes Tradeverse City\'s community different from other trading groups?', answer: 'Our community is education-first, mentor-moderated, and structured for learning — not for tips distribution or speculative pumping.' },
        { question: 'Is the community available to beginner traders?', answer: 'Absolutely. We have dedicated beginner spaces with mentors specifically supporting newer traders. Every level of experience is welcome and supported.' },
      ]}
      relatedLinks={[
        { label: 'Beginner Hub', href: '/learning/beginner-hub' },
        { label: 'Learning Resources Library', href: '/learning/resources-library' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
        { label: 'Trading Psychology Center', href: '/learning/trading-psychology-center' },
      ]}
    />
  )
}
