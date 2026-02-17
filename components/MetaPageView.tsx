'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { metaPageView } from '@/lib/metaPixel';

export default function MetaPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const didInit = useRef(false);

  useEffect(() => {
    // Base pixel already fires an initial PageView; avoid double-firing on first render.
    if (!didInit.current) {
      didInit.current = true;
      return;
    }
    metaPageView();
  }, [pathname, searchParams]);

  return null;
}


