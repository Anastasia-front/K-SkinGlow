import { useEffect } from 'react';

// a comma-seperated list of css selectors for focusable elements
const FOCUSABLE_ELEMENTS =
  'a[href], area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[tabindex="0"],[contenteditable]';

export const useFocusModal = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const focusableElements = ref.current?.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);

    if (focusableElements?.length) {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            /* shift + tab */
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            /* tab */
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      firstElement.focus();

      document.addEventListener('keydown', handleTabKey);

      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [ref]);
};
