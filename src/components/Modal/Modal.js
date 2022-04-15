import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import {Overlay, WindowModal} from './Modal.styled';
import { toggleModal } from '../../redux/modal/modal-action';
import { deleteEditItem } from '../../redux/todo/todo-action';
import IconButton from '../IconButton';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
const modalRoot = document.querySelector('#modal-root');


function Modal({children }) {
    const dispatch = useDispatch();
    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);
    
    const closeModal = () => {
        dispatch(toggleModal());
        dispatch(deleteEditItem());
    }
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            closeModal();
        }
    }

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    }

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <WindowModal>
                    <IconButton>
                        {<CloseIcon width="18" height="18" fill="black" onClick={() =>closeModal()} />}
                    </IconButton>
                    {children}
                </WindowModal>
            </Overlay>, modalRoot
        )
     
}

// Modal.propTypes = {
//     onClose:PropTypes.func.isRequired
// };

export default Modal;