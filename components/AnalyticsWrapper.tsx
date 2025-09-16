"use client";

import { getConsent } from "@/lib/cookies";
import Script from "next/script";

export default function AnalyticsWrapper() {
  const consent = getConsent();

  if (consent !== "accepted") return null;

  return (
    <>
      {/* Google Analytics loads only if accepted */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_ID');
        `}
      </Script>
    </>
  );
}
