import React, { useEffect} from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';
import { toggleModal } from '../../redux/modal/modal-action';
import { deleteEditItem } from '../../redux/todo/todo-action';
import IconButton from '../IconButton/IconButton';
import {Overlay, WindowModal, IconWrapper} from './Modal.styled';

interface Props  {
  children: React.ReactNode;
};

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

function Modal ({children }:Props) {
    const dispatch = useDispatch();
    useEffect(() => {
        window.addEventListener('keydown',(event: Event) => handleKeyDown);
        return () => {
        window.removeEventListener('keydown', (event: Event) => handleKeyDown);
        };
  },[]);
    
    const closeModal = () => {
        dispatch(toggleModal());
        dispatch(deleteEditItem());
    }
    const handleKeyDown = (e:React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    }

    const handleBackdropClick = (e:React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    }

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <WindowModal>
                <IconWrapper>
                    <IconButton onClick={() => closeModal()}>
                        {<CloseIcon
                            sx={{
                                color: grey[900],
                                fontSize: 25,
                                "&:hover": {
                                color: grey[500],
                                }
                            }}
                             />}
                    </IconButton>
                </IconWrapper>
                {children}
            </WindowModal>
        </Overlay>, modalRoot
    )   
}

export default Modal;