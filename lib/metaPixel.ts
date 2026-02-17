type FbqFn = (action: string, eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

function hasFbq(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

export function metaTrack(eventName: string, params?: Record<string, unknown>) {
  if (!hasFbq()) return;
  window.fbq!('track', eventName, params);
}

export function metaTrackCustom(eventName: string, params?: Record<string, unknown>) {
  if (!hasFbq()) return;
  // Meta requires custom events via trackCustom
  window.fbq!('trackCustom', eventName, params);
}

export function metaPageView() {
  metaTrack('PageView');
}


