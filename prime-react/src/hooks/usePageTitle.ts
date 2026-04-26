import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Prime Steak & Grill` : 'Prime Steak & Grill';
    return () => { document.title = 'Prime Steak & Grill'; };
  }, [title]);
}
