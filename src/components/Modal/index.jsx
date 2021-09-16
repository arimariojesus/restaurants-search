import React, { useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './styles';

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsq(e) {
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsq);

    return () => {
      window.removeEventListener('keydown', onEsq);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClik(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClik}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
