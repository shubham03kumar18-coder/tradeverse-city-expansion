import { WhatsAppIcon, TelegramIcon, InstagramIcon } from './navbar'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = 'Ready to Start Your Trading Journey?',
  subtitle = 'For complete course details, fees, schedules, enrollment information, and mentorship guidance, contact Tradeverse City on WhatsApp.',
}: CTASectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-card border border-border rounded-2xl p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/919318336747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-background font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Enquiry
            </a>
            <a
              href="https://t.me/+919318336747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <TelegramIcon size={18} />
              Telegram Enquiry
            </a>
            <a
              href="https://www.instagram.com/tradeverse_city/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:text-gold hover:border-gold transition-colors"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InlineCTA() {
  return (
    <div className="mt-8 p-6 bg-muted border border-border rounded-xl">
      <p className="text-sm text-muted-foreground mb-4 text-center">
        For complete course details, fees, schedules, enrollment information, and mentorship guidance, contact Tradeverse City on WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
        <a
          href="https://wa.me/919318336747"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gold text-background font-semibold text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          <WhatsAppIcon /> WhatsApp Enquiry
        </a>
        <a
          href="https://t.me/+919318336747"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-semibold text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          <TelegramIcon /> Telegram Enquiry
        </a>
        <a
          href="https://www.instagram.com/tradeverse_city/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-secondary border border-border text-foreground font-semibold text-sm px-6 py-2.5 rounded-md hover:text-gold hover:border-gold transition-colors"
        >
          <InstagramIcon size={16} /> @tradeverse_city
        </a>
      </div>
    </div>
  )
}
