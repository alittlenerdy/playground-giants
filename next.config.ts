import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Legacy positioning cleanup, 2026-07-26.
  //
  // Both source pages sold the home-services / medspa offer that the
  // 2026-07-24 rewrite deliberately abandoned. They were 2 of 14 pages, so
  // 14% of the site was showing prospects a different company.
  //
  // Permanent (308) rather than temporary: the old URLs are not coming back,
  // and a permanent redirect is what passes any accumulated link equity to
  // the replacement. /calculator-home-services has a real successor;
  // /medspa-guide has none, so it goes to the entry offer instead of being
  // rewritten for a vertical no longer served.
  async redirects() {
    return [
      { source: '/calculator-home-services', destination: '/calculator', permanent: true },
      { source: '/medspa-guide', destination: '/workflow-audit', permanent: true }
    ];
  }
};

export default nextConfig;
