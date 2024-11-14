export const trackEvent = (action: string, params: { [key: string]: any }) => {
if (typeof window !== 'undefined' && window.gtag) {
window.gtag('event', action, params);
}
};