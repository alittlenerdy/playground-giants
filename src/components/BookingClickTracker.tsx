'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

/**
 * Records a `generate_lead` event when anyone clicks through to Cal.com.
 * Added 2026-09-03.
 *
 * WHY THIS EXISTS. Booking is the site's real capture mechanism: there are 15
 * Cal.com calls to action, including one in the header that appears on every
 * page. Every one of them is a plain external link, and the booking itself
 * completes on cal.com, off this domain. So GA4 could never see a booking, and
 * `keyEvents: 0` was what it had to report even in a month where bookings
 * happened. The click is the last moment the signal is ours to record.
 *
 * WHY A DELEGATED LISTENER RATHER THAN AN `onClick` ON EACH BUTTON. Most of
 * these render through `NeonButton`, which is a server component. Giving it a
 * click handler would force it and all 15 call sites across the client
 * boundary, a large change for a measurement fix. A single capture-phase
 * listener covers every booking link that exists today and every one added
 * later, including the raw anchors that do not use NeonButton at all.
 *
 * ⚠️ This measures INTENT, not a booking. It fires when someone leaves for
 * Cal.com, and cannot know whether they completed. The count of real bookings
 * lives in the Cal.com account and has to be read there; the gap between the
 * two numbers is the drop-off, which is currently unmeasurable in either
 * direction.
 *
 * ⚠️ Firing it is necessary and not sufficient. GA4 only counts an event as a
 * conversion once somebody marks it as a KEY EVENT in Admin. Until then the
 * property keeps reporting zero while the event arrives correctly, which reads
 * exactly like this code not working.
 */
export default function BookingClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      // `anchor.href` is already absolute. Parsing rather than substring
      // matching so a path that merely contains "cal.com" cannot count.
      let hostname: string
      try {
        hostname = new URL(anchor.href).hostname
      } catch {
        return
      }
      if (hostname !== 'cal.com' && !hostname.endsWith('.cal.com')) return

      trackEvent('generate_lead', {
        method: 'cal_booking',
        // Which of the two booking types, and which page sent them, are the
        // only attribution we get. Recorded at the one moment we still can.
        link_url: anchor.href,
        source_page: window.location.pathname
      })
    }

    // Capture phase, so a handler that stops propagation cannot silently cost
    // us the event.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
