import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';
import { toggleModal } from '../../redux/modal/modal-action';
import { deleteEditItem } from '../../redux/todo/todo-action';
import IconButton from '../IconButton';
import {Overlay, WindowModal, IconWrapper} from './Modal.styled';

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
                <IconWrapper>
                    <IconButton>
                        {<CloseIcon
                            sx={{
                                color: grey[900],
                                fontSize: 25,
                                "&:hover": {
                                color: grey[500],
                                }
                            }}
                            onClick={() => closeModal()} />}
                    </IconButton>
                </IconWrapper>
                {children}
            </WindowModal>
        </Overlay>, modalRoot
    )   
}

// Modal.propTypes = {
//     onClose:PropTypes.func.isRequired
// };

export default Modal;