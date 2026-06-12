import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection, InlineCTA } from '@/components/cta-section'
import Link from 'next/link'
import { ChevronRight, CheckCircle, ChevronDown } from 'lucide-react'
import React from 'react'

interface LearningCard {
  title: string
  description: string
  icon?: React.ReactNode
}

interface FAQItem {
  question: string
  answer: string
}

interface Benefit {
  title: string
  description: string
}

interface LearningPageProps {
  breadcrumb: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroBadge: string
  educationalContent: {
    heading: string
    paragraphs: string[]
  }
  learningCards: LearningCard[]
  benefits: Benefit[]
  faqs: FAQItem[]
  relatedLinks?: { label: string; href: string }[]
}

export function LearningPageTemplate({
  breadcrumb,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroBadge,
  educationalContent,
  learningCards,
  benefits,
  faqs,
  relatedLinks,
}: LearningPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight size={12} aria-hidden="true" />
              <span className="text-gold">{breadcrumb}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                {heroBadge}
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-5 leading-tight text-balance">
                {heroTitle}
              </h1>
              <p className="text-lg text-gold font-medium mb-4">{heroSubtitle}</p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{heroDescription}</p>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-16 px-4 sm:px-6 bg-card border-y border-border" aria-labelledby="education-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="education-heading" className="font-serif text-2xl sm:text-3xl font-bold mb-8">{educationalContent.heading}</h2>
            <div className="space-y-5">
              {educationalContent.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
            <InlineCTA />
          </div>
        </section>

        {/* Learning Cards */}
        <section className="py-16 px-4 sm:px-6" aria-labelledby="cards-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="cards-heading" className="font-serif text-2xl sm:text-3xl font-bold mb-3">What You Will Explore</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Key topics and modules covered in this learning center.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningCards.map((card) => (
                <div key={card.title} className="bg-card border border-border rounded-xl p-6 hover:border-gold/40 transition-colors">
                  {card.icon && <div className="mb-4">{card.icon}</div>}
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Benefits */}
        <section className="py-16 px-4 sm:px-6 bg-card border-y border-border" aria-labelledby="benefits-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="benefits-heading" className="font-serif text-2xl sm:text-3xl font-bold mb-10 text-center">Student Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">{b.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 sm:px-6" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="font-serif text-2xl sm:text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none text-sm font-semibold text-foreground hover:text-gold transition-colors">
                    {faq.question}
                    <ChevronDown size={16} className="flex-shrink-0 group-open:rotate-180 transition-transform text-muted-foreground" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="py-10 px-4 sm:px-6 bg-muted/30 border-t border-border" aria-labelledby="related-heading">
            <div className="max-w-7xl mx-auto">
              <h2 id="related-heading" className="font-semibold text-sm uppercase tracking-widest text-gold mb-5">Related Topics</h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-foreground/70 bg-card border border-border px-4 py-2 rounded-lg hover:border-gold/50 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
