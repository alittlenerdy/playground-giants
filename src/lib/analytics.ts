// GA4 helpers. Added 2026-09-03.
//
// One home for the `gtag` global so it is declared once rather than in every
// file that wants to send an event.
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
  }
}

/**
 * Send one GA4 event.
 *
 * Optional-chained on purpose: `gtag` is simply absent when the GA4 script did
 * not load, whether from a blocker or a failed CDN fetch. Analytics must never
 * be able to throw inside a user action, least of all one that is a lead.
 */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  window.gtag?.('event', name, params)
}
