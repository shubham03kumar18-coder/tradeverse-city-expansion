import { CoursePageTemplate } from '@/components/course-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stock Market Fundamentals Course | Tradeverse City',
  description: 'Build a solid foundation in stock market basics with Tradeverse City\'s Stock Market Fundamentals course — market structure, equity, indices, and more.',
}

export default function StockMarketFundamentalsPage() {
  return (
    <CoursePageTemplate
      breadcrumb="Stock Market Fundamentals"
      level="Beginner"
      heroTitle="Stock Market Fundamentals"
      heroSubtitle="The foundation everything else is built upon."
      heroDescription="This foundational course covers everything a new market participant needs to understand before placing a single trade. From market structure and exchange mechanics to equity instruments and index construction, Stock Market Fundamentals provides the complete starting framework for your trading career."
      whatYouWillLearn={[
        'How stock markets function — buyers, sellers, market makers, and exchanges',
        'The structure of NSE and BSE and how they differ',
        'How Nifty 50, Bank Nifty, Sensex, and sectoral indices are constructed',
        'Different types of financial instruments — equity, debt, derivatives, ETFs',
        'How to open and operate a Demat and trading account',
        'Market timings, circuit breakers, and trading sessions',
        'IPO process — how companies list and what it means for traders',
        'Corporate actions — dividends, splits, bonuses, and rights issues',
        'SEBI regulations and investor protection framework',
        'How global markets influence Indian equities',
        'Reading a stock quote and understanding order books',
        'Basics of fundamental analysis — P/E, EPS, market cap, book value',
      ]}
      whyItMatters={{
        heading: '',
        paragraphs: [
          'Without understanding how the stock market actually works, every technical pattern and strategy you learn is built on an unstable foundation. Traders who skip the fundamentals often misinterpret market moves, misuse order types, or fail to understand why certain price levels are respected.',
          'Stock Market Fundamentals is not just theory — it is the operational knowledge that allows you to navigate markets confidently. Understanding corporate actions prevents costly mistakes during bonus or split periods. Understanding circuit breakers prevents panic during extreme market moves. Understanding index construction explains why Nifty 50 behaves differently from a mid-cap stock.',
          'This course also introduces the regulatory environment — SEBI, exchanges, depositories (NSDL and CDSL), and clearing corporations. Knowing who regulates what and what protections exist as a trader makes you a more confident and informed market participant.',
        ],
      }}
      realApplications={[
        'Opening and funding a trading account with the right broker type and account structure',
        'Understanding why certain large-cap stocks disproportionately influence index movements',
        'Correctly interpreting the impact of dividend announcements and ex-dividend dates on stock prices',
        'Using circuit breaker information to make informed decisions during volatile market sessions',
        'Reading IPO red herring prospectuses to evaluate listing potential',
        'Identifying how global macro events (US Fed decisions, oil prices) translate to Indian market impact',
        'Understanding how FII and DII flows affect market direction at the index level',
        'Using exchange holiday calendars and settlement cycles to plan trades correctly',
      ]}
      learningOutcomes={[
        'Explain how Indian stock exchanges function and how trades are settled',
        'Navigate a trading platform confidently and place different order types correctly',
        'Read and interpret live stock quotes, order books, and market depth',
        'Understand the construction and significance of major Indian indices',
        'Identify the impact of corporate actions on stock prices and adjust analysis accordingly',
        'Describe SEBI\'s regulatory framework and its relevance to retail traders',
        'Connect global market events to Indian equity market behavior',
      ]}
      commonMistakes={[
        'Confusing a trading account with a Demat account — they serve different purposes',
        'Ignoring the ex-dividend date and being surprised by price adjustments',
        'Using market orders during illiquid conditions and getting poor fills',
        'Not understanding T+1 settlement and attempting to use unsettled funds',
        'Treating all stocks equally regardless of liquidity and market cap differences',
        'Ignoring SEBI regulations around margin and F&O trading requirements',
        'Misunderstanding circuit breakers as trading signals rather than risk control mechanisms',
        'Not accounting for STT, brokerage, and other transaction costs in profit calculations',
      ]}
      faqs={[
        { question: 'Is this course suitable for complete beginners?', answer: 'Absolutely. This is the ideal starting point for anyone entering the stock market with zero prior knowledge. No financial background is required.' },
        { question: 'What is the difference between NSE and BSE?', answer: 'NSE (National Stock Exchange) and BSE (Bombay Stock Exchange) are India\'s two primary stock exchanges. NSE has higher trading volumes and hosts the Nifty 50 index; BSE is older and hosts the Sensex. Most stocks are listed on both.' },
        { question: 'Do I need to open a Demat account before taking this course?', answer: 'No. The course teaches you everything about the account opening process. You can open accounts at any stage during or after the learning program.' },
        { question: 'How long does this course take to complete?', answer: 'For complete course duration and schedule details, contact Tradeverse City on WhatsApp.' },
        { question: 'Will this course teach me how to pick stocks?', answer: 'This course builds the foundational knowledge needed to understand stock analysis. Dedicated technical analysis and fundamental research courses build on this base.' },
        { question: 'How do I enroll?', answer: 'Contact Tradeverse City on WhatsApp for enrollment information, fees, and course schedules.' },
      ]}
      relatedLinks={[
        { label: 'Candlestick Analysis', href: '/courses/candlestick-analysis' },
        { label: 'Technical Analysis Course', href: '/courses/technical-analysis' },
        { label: 'Beginner Hub', href: '/learning/beginner-hub' },
        { label: 'Risk Management Course', href: '/courses/risk-management' },
      ]}
    />
  )
}
