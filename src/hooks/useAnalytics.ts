import { useCallback } from 'react';

// Extend window object to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((page_title: string, page_location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: page_title,
        page_location: page_location,
      });
    }
  }, []);

  const trackPhoneCall = useCallback(() => {
    trackEvent('click', 'contact', 'phone_call');
  }, [trackEvent]);

  const trackEmailClick = useCallback(() => {
    trackEvent('click', 'contact', 'email_click');
  }, [trackEvent]);

  const trackServiceInquiry = useCallback((service: string) => {
    trackEvent('click', 'services', service);
  }, [trackEvent]);

  const trackContactForm = useCallback(() => {
    trackEvent('submit', 'contact', 'contact_form');
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackPhoneCall,
    trackEmailClick,
    trackServiceInquiry,
    trackContactForm,
  };
};