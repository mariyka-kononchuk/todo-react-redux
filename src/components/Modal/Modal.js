import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import {Overlay, WindowModal} from './Modal.styled'
import {
    Overlay, WindowModal
} from './Modal.styled';
import {toggleModal} from '../../redux/modal/modal-action';
const modalRoot = document.querySelector('#modal-root');

function Modal({children }) {

    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);
    

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            toggleModal();
        }
    }

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            toggleModal();
        }
    }

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <WindowModal>
                    <button onClick={() => toggleModal()}>Close modal</button>
                    {children}
                </WindowModal>
            </Overlay>, modalRoot
        )
     
}

// Modal.propTypes = {
//     onClose:PropTypes.func.isRequired
// };

export default Modal;