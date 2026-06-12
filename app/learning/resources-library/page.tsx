import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Resources Library | Tradeverse City',
  description: 'Access Tradeverse City\'s curated Learning Resources Library — trading books, glossary, market tools, reference materials, and educational guides.',
}

export default function ResourcesLibraryPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Learning Resources Library"
      heroBadge="Learning Platform"
      heroTitle="Learning Resources Library — Your Complete Trading Reference"
      heroSubtitle="Everything you need to learn, reference, and grow as a trader — in one place."
      heroDescription="The Learning Resources Library at Tradeverse City is a curated collection of educational materials, trading glossaries, reference guides, recommended books, and supplementary tools that support your trading education journey."
      educationalContent={{
        heading: 'Building a Well-Rounded Trading Education',
        paragraphs: [
          'Trading education doesn\'t end with a structured course. The best traders are lifelong learners who continuously deepen their knowledge through reading, research, and critical analysis of market behavior. The Learning Resources Library provides the supplementary materials that transform course learning into deep expertise.',
          'Our library includes a comprehensive trading glossary covering 200+ terms used in technical analysis, fundamental analysis, options trading, and market structure. Understanding the language of trading ensures you can consume any educational material, research report, or market commentary with full comprehension.',
          'We curate a reading list of the most impactful books in trading — from market classics like "Technical Analysis of the Financial Markets" by Murphy to modern works on trading psychology and risk management. These books are categorized by topic and skill level to help you choose what\'s right for your current stage.',
          'Reference materials include chart pattern handbooks, indicator parameter guides, earnings calendar templates, sector rotation frameworks, and market structure reference sheets. These are practical tools designed to be used alongside your actual trading activities.',
          'The library also houses a collection of case studies drawn from real market events — how to recognize and trade specific pattern breakouts, how major market reversals developed, and how institutional money flows influence price action at key levels.',
        ],
      }}
      learningCards={[
        { title: 'Trading Glossary A-Z', description: '200+ trading terms defined clearly — technical analysis, derivatives, market structure, order types, and more.' },
        { title: 'Recommended Reading List', description: 'Curated list of must-read trading books organized by topic — technical analysis, psychology, risk management, and market history.' },
        { title: 'Chart Pattern Reference', description: 'Quick reference guide covering 30+ chart patterns with identification criteria and trading strategies.' },
        { title: 'Indicator Parameters Guide', description: 'Optimal parameter settings for RSI, MACD, Bollinger Bands, Moving Averages, and other common indicators.' },
        { title: 'Market Calendar & Events', description: 'Key market events, earnings seasons, budget dates, RBI policy meetings, and global macro calendar.' },
        { title: 'Trading Plan Templates', description: 'Downloadable trading plan templates for different styles — intraday, swing, and positional traders.' },
        { title: 'Position Sizing Calculator', description: 'Step-by-step position sizing guide with worked examples for different account sizes and risk tolerances.' },
        { title: 'Case Studies Library', description: 'Real trade case studies documenting complete setups — entry rationale, risk management, and outcome analysis.' },
        { title: 'Sector Rotation Guide', description: 'Understanding economic cycles and how sectors rotate — a framework for identifying sector leadership at any market phase.' },
      ]}
      benefits={[
        { title: 'Lifetime Resource Access', description: 'Resources are continually updated and students retain access to the library throughout their learning journey.' },
        { title: 'Practical Reference Tools', description: 'Every resource is designed for practical application — not just reading, but active use alongside your trading.' },
        { title: 'Curated for Indian Markets', description: 'All resources are curated with specific relevance to NSE, BSE, and the Indian derivatives market.' },
        { title: 'Organized by Learning Stage', description: 'Resources are categorized by beginner, intermediate, and advanced to match your current knowledge level.' },
        { title: 'Regular Updates', description: 'New case studies, market analyses, and reference materials are added regularly to keep the library current.' },
        { title: 'WhatsApp Resource Support', description: 'Ask mentor questions about specific resources and get guidance on how to best apply them to your trading.' },
      ]}
      faqs={[
        { question: 'What type of materials are in the Learning Resources Library?', answer: 'The library includes trading glossaries, chart pattern references, recommended books, indicator guides, case studies, trading plan templates, and market calendars.' },
        { question: 'Are resources updated regularly?', answer: 'Yes. Tradeverse City regularly adds new case studies, market analyses, and reference materials to keep the library current with evolving market conditions.' },
        { question: 'Can I suggest resources to be added to the library?', answer: 'Absolutely. We encourage students to share useful resources via our WhatsApp and Telegram channels, and frequently curate community suggestions.' },
        { question: 'Are resources suitable for both beginners and advanced traders?', answer: 'Yes. All resources are tagged by difficulty level so you can identify materials appropriate to your current stage.' },
        { question: 'How do I access the Learning Resources Library?', answer: 'For access details and enrollment information, contact Tradeverse City on WhatsApp.' },
        { question: 'Which books does Tradeverse City recommend most highly?', answer: 'For a personalized reading list based on your current skill level and trading style, reach out to us on WhatsApp for mentor guidance.' },
      ]}
      relatedLinks={[
        { label: 'Beginner Hub', href: '/learning/beginner-hub' },
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
        { label: 'Community Learning Hub', href: '/learning/community-hub' },
        { label: 'Market Research Center', href: '/learning/market-research-center' },
      ]}
    />
  )
}
