import { LearningPageTemplate } from '@/components/learning-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beginner Hub | Tradeverse City',
  description: 'Start your stock market journey with Tradeverse City\'s Beginner Hub. Learn market fundamentals, basic concepts, and build a strong trading foundation.',
}

export default function BeginnerHubPage() {
  return (
    <LearningPageTemplate
      breadcrumb="Beginner Hub"
      heroBadge="Learning Platform"
      heroTitle="Beginner Hub — Your Gateway to the Stock Market"
      heroSubtitle="Start smart. Build a foundation that carries you through every level of trading."
      heroDescription="The Beginner Hub at Tradeverse City is thoughtfully designed for anyone who is new to the stock market. Whether you have zero financial knowledge or some basic awareness, our structured beginner program takes you through every essential concept — one step at a time."
      educationalContent={{
        heading: 'Why Start with the Beginner Hub?',
        paragraphs: [
          'The biggest mistake most new traders make is rushing into the market without proper foundational knowledge. They see profit opportunities, jump in, and then face losses that could have been entirely avoided with the right education.',
          'At Tradeverse City\'s Beginner Hub, we believe that a trader\'s long-term success is built on how well they understand the basics. Concepts like market structure, how stock exchanges work, what drives stock prices, and the basic principles of buying and selling form the bedrock of every trading strategy.',
          'Our beginner curriculum covers the Indian stock market ecosystem including NSE and BSE, the role of SEBI, how trading accounts work, what Demat accounts are, and the mechanics of placing your first trade. We also introduce you to different asset classes — equity, derivatives, commodities, and currencies.',
          'Beyond mechanics, we focus on building the right mindset. Trading is a professional skill, not gambling. The Beginner Hub introduces you to the concept of process-driven trading — where consistency in approach matters more than chasing individual trades.',
          'By the time you complete this module, you will have a clear map of the stock market landscape, understand the terminology used by professional traders, and feel confident moving into more advanced topics like technical analysis and trading strategies.',
        ],
      }}
      learningCards={[
        {
          title: 'Stock Market Basics',
          description: 'What is a stock market, how it functions, who the participants are, and how prices move in response to supply and demand.',
        },
        {
          title: 'NSE, BSE & Market Indices',
          description: 'Understanding the difference between NSE and BSE, how Sensex and Nifty 50 are calculated, and why indices matter to traders.',
        },
        {
          title: 'Demat & Trading Accounts',
          description: 'How to open a trading account, what a Demat account holds, and how orders are placed and executed in real time.',
        },
        {
          title: 'Order Types Explained',
          description: 'Market orders, limit orders, stop-loss orders, and bracket orders — when and how to use each one effectively.',
        },
        {
          title: 'Understanding Asset Classes',
          description: 'Equities, derivatives, bonds, commodities, and currencies — a comprehensive overview of every financial instrument.',
        },
        {
          title: 'Market Timings & Sessions',
          description: 'Pre-market, regular session, and post-market trading. How global market timings influence Indian markets.',
        },
        {
          title: 'SEBI & Regulatory Framework',
          description: 'India\'s market regulator SEBI, its role in investor protection, and key regulations every trader must know.',
        },
        {
          title: 'Reading a Stock Quote',
          description: 'Interpreting live stock data — bid/ask spread, volume, 52-week high/low, circuit breakers, and P/E ratios.',
        },
        {
          title: 'Bull & Bear Markets',
          description: 'What defines a bull market and a bear market, historical cycles, and how to position yourself in each phase.',
        },
      ]}
      benefits={[
        { title: 'Structured Learning Path', description: 'Progress through a carefully sequenced curriculum that builds knowledge logically, avoiding the overwhelm that derails most beginners.' },
        { title: 'Real Market Context', description: 'Every concept is explained with reference to real Indian market examples — no abstract theory.' },
        { title: 'WhatsApp & Telegram Support', description: 'Direct access to mentors via WhatsApp and Telegram for doubts, guidance, and progress tracking.' },
        { title: 'Foundation for Advanced Learning', description: 'The Beginner Hub prepares you perfectly for Technical Analysis, Risk Management, and Trading Psychology modules.' },
        { title: 'No Prior Knowledge Required', description: 'Designed from ground zero — you need no background in finance, accounting, or economics to begin.' },
        { title: 'Interactive Learning Materials', description: 'Visual learning cards, concept diagrams, and real chart examples to reinforce every lesson.' },
      ]}
      faqs={[
        { question: 'Who is the Beginner Hub designed for?', answer: 'The Beginner Hub is for complete newcomers to the stock market — students, salaried professionals, business owners, or anyone curious about trading who has no prior experience.' },
        { question: 'Do I need to know mathematics or accounting?', answer: 'No. The Beginner Hub uses plain-language explanations and visual aids to make every concept accessible. Basic arithmetic is sufficient.' },
        { question: 'How long does the beginner course take to complete?', answer: 'For complete details on course duration, schedule, and structure, please contact Tradeverse City on WhatsApp.' },
        { question: 'Will I be able to start trading after this module?', answer: 'Yes — by the end of the Beginner Hub, you will have the foundational knowledge to open a trading account and understand how markets function. For mentorship on your first trades, our WhatsApp guidance is available.' },
        { question: 'Is this course updated for current market conditions?', answer: 'Tradeverse City continuously updates all course content to reflect current SEBI regulations, market conditions, and trading tools.' },
        { question: 'How does Tradeverse City support students after the course?', answer: 'Students get ongoing access to our WhatsApp and Telegram communities where you can ask questions, share analyses, and receive mentor feedback.' },
      ]}
      relatedLinks={[
        { label: 'Technical Analysis Center', href: '/learning/technical-analysis-center' },
        { label: 'Risk Management Center', href: '/learning/risk-management-center' },
        { label: 'Trading Psychology Center', href: '/learning/trading-psychology-center' },
        { label: 'Stock Market Fundamentals Course', href: '/courses/stock-market-fundamentals' },
        { label: 'Candlestick Analysis Course', href: '/courses/candlestick-analysis' },
      ]}
    />
  )
}
