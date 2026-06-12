import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InlineCTA } from '@/components/cta-section'
import Link from 'next/link'
import { ChevronRight, CheckCircle, AlertTriangle, ChevronDown, Target, BookOpen, TrendingUp, Award } from 'lucide-react'

interface CoursePageProps {
  breadcrumb: string
  level: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  whatYouWillLearn: string[]
  whyItMatters: {
    heading: string
    paragraphs: string[]
  }
  realApplications: string[]
  learningOutcomes: string[]
  commonMistakes: string[]
  faqs: { question: string; answer: string }[]
  relatedLinks?: { label: string; href: string }[]
}

export function CoursePageTemplate({
  breadcrumb,
  level,
  heroTitle,
  heroSubtitle,
  heroDescription,
  whatYouWillLearn,
  whyItMatters,
  realApplications,
  learningOutcomes,
  commonMistakes,
  faqs,
  relatedLinks,
}: CoursePageProps) {
  const levelColors: Record<string, string> = {
    Beginner: 'bg-green-900/30 text-green-400 border-green-800',
    Intermediate: 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
    Advanced: 'bg-red-900/30 text-red-400 border-red-800',
    'All Levels': 'bg-gold/10 text-gold border-gold/30',
  }

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
              <Link href="/courses/stock-market-fundamentals" className="hover:text-gold transition-colors">Courses</Link>
              <ChevronRight size={12} aria-hidden="true" />
              <span className="text-gold">{breadcrumb}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[level] ?? levelColors['All Levels']}`}>
                  {level}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Trading Course</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-5 leading-tight text-balance">{heroTitle}</h1>
              <p className="text-lg text-gold font-medium mb-4">{heroSubtitle}</p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">{heroDescription}</p>

              <div className="bg-muted/30 border border-border rounded-xl p-5 text-sm text-muted-foreground">
                <p>For complete course details, fees, schedules, enrollment information, and mentorship guidance, contact Tradeverse City on WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-16 px-4 sm:px-6 bg-card border-y border-border" aria-labelledby="learn-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-gold" size={24} aria-hidden="true" />
              <h2 id="learn-heading" className="font-serif text-2xl sm:text-3xl font-bold">What You Will Learn</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatYouWillLearn.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <InlineCTA />
          </div>
        </section>

        {/* Why This Skill Matters */}
        <section className="py-16 px-4 sm:px-6" aria-labelledby="why-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="text-gold" size={24} aria-hidden="true" />
              <h2 id="why-heading" className="font-serif text-2xl sm:text-3xl font-bold">Why This Skill Matters</h2>
            </div>
            <div className="space-y-5">
              {whyItMatters.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Real Market Applications */}
        <section className="py-16 px-4 sm:px-6 bg-card border-y border-border" aria-labelledby="applications-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-gold" size={24} aria-hidden="true" />
              <h2 id="applications-heading" className="font-serif text-2xl sm:text-3xl font-bold">Real Market Applications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {realApplications.map((app) => (
                <div key={app} className="bg-background border border-border rounded-xl p-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 px-4 sm:px-6" aria-labelledby="outcomes-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-gold" size={24} aria-hidden="true" />
              <h2 id="outcomes-heading" className="font-serif text-2xl sm:text-3xl font-bold">Learning Outcomes</h2>
            </div>
            <p className="text-muted-foreground mb-6">Upon completing this course, you will be able to:</p>
            <ul className="space-y-3">
              {learningOutcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" aria-hidden="true" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 sm:px-6 bg-card border-y border-border" aria-labelledby="mistakes-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="text-gold" size={24} aria-hidden="true" />
              <h2 id="mistakes-heading" className="font-serif text-2xl sm:text-3xl font-bold">Common Mistakes to Avoid</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonMistakes.map((mistake) => (
                <div key={mistake} className="flex items-start gap-3 bg-background border border-border rounded-xl p-4">
                  <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{mistake}</span>
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

        {/* Related */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="py-10 px-4 sm:px-6 bg-muted/30 border-t border-border" aria-labelledby="related-heading">
            <div className="max-w-7xl mx-auto">
              <h2 id="related-heading" className="font-semibold text-sm uppercase tracking-widest text-gold mb-5">Related Courses & Topics</h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm text-foreground/70 bg-card border border-border px-4 py-2 rounded-lg hover:border-gold/50 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card border border-border rounded-2xl p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                Ready to Enroll in This Course?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
                For complete course details, fees, schedules, enrollment information, and mentorship guidance, contact Tradeverse City on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/message/your-whatsapp" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold text-background font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                  <WAIcon /> WhatsApp Enquiry
                </a>
                <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity">
                  <TGIcon /> Telegram Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function TGIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}
