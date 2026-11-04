import Script from "next/script";
import { adConfig } from "@/content/ads";

export function AdSenseScript() {
  if (!adConfig.adsenseClientId) {
    return null;
  }

  return (
    <Script
      id="adsense-init"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adConfig.adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}
