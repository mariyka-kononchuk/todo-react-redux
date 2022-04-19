import React, {FC} from 'react';
import {Button} from './IconButton.styled';

interface Props  {
  children: React.ReactNode;
  onClick: () => void;
};

const IconButton:FC<Props> = ({ children, onClick }) => {
    return (
    <Button type ="button" onClick={onClick}>
        {children}
    </Button>)
}

export default IconButton; 
