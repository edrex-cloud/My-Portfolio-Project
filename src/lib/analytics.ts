declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const isYourOwnVisit = () => {
  if (typeof window === "undefined") return false;

  const hostname = window.location.hostname.toLowerCase();
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
  const isPreview = hostname.includes("lovable") || hostname.includes("netlify") || hostname.includes("vercel");

  return isLocalhost || isPreview;
};

export const initAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    return;
  }

  if (isYourOwnVisit()) {
    return;
  }

  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer?.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: `${window.location.pathname}${window.location.hash}`,
  });

  const trackPageView = () => {
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.hash}`,
    });
  };

  trackPageView();
  window.addEventListener("hashchange", trackPageView);
};
