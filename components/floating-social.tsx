'use client'

import { WhatsAppIcon, TelegramIcon, InstagramIcon } from './navbar'

export function FloatingSocial() {
  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-3"
      role="complementary"
      aria-label="Quick contact buttons"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919318336747"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-end gap-2"
      >
        <span className="hidden group-hover:block bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
          WhatsApp Us
        </span>
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
          <WhatsAppIcon size={22} />
        </span>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/+919318336747"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on Telegram"
        className="group flex items-center justify-end gap-2"
      >
        <span className="hidden group-hover:block bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
          Telegram
        </span>
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#229ED9] text-white shadow-lg hover:scale-110 transition-transform">
          <TelegramIcon size={22} />
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/tradeverse_city/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram @tradeverse_city"
        className="group flex items-center justify-end gap-2"
      >
        <span className="hidden group-hover:block bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
          @tradeverse_city
        </span>
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white shadow-lg hover:scale-110 transition-transform">
          <InstagramIcon size={22} />
        </span>
      </a>
    </div>
  )
}
