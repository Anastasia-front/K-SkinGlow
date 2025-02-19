import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './types';

export const Portal = ({ children, wrapperId }: PortalProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLElement;
    let portalCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
      portalCreated = true;
    }

    setPortalElement(element);

    // cleaning up the portal element
    return () => {
      // delete the programmatically created element
      if (portalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  const createWrapperAndAppendToBody = (elementId: string) => {
    const element = document.createElement('div');
    element.setAttribute('id', elementId);
    document.body.appendChild(element);
    return element;
  };

  // portalElement state will be null on the very first render.
  if (!portalElement) return null;

  return createPortal(children, portalElement);
};
