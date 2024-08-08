import { useEffect, useRef, useState } from 'react';
import { Wrapper } from 'src/components/layout';
import { useFocusModal } from 'src/hooks';
import { Icon } from '../Icon';
import { ModalBackdrop, ModalContent } from './styles';

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
  triggerElementRef: React.RefObject<HTMLElement>;
  modalHeadingRef?: React.RefObject<HTMLHeadingElement>;
};

export const Modal = ({ showModal, onClose, children, triggerElementRef, modalHeadingRef }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [labelledbyId, setLabelledbyId] = useState<string>('');

  // use the focus trap hook on the modal ref, and only run when the modal is open
  useFocusModal(modalRef);

  useEffect(() => {
    if (!showModal && triggerElementRef.current) {
      triggerElementRef.current.focus();
    }

    if (showModal && modalHeadingRef?.current?.id) {
      setLabelledbyId(modalHeadingRef.current.id);
    }
  }, [showModal, triggerElementRef, modalHeadingRef]);

  if (!showModal) {
    return null;
  }

  return (
    <ModalBackdrop onClick={onClose} role="dialog" aria-modal="true" aria-labelledby={labelledbyId} ref={modalRef}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>
          <Icon name="close" />
        </button>
        <Wrapper>{children}</Wrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};
