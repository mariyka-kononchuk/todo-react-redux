import React, {FC} from 'react';
//import PropTypes from 'prop-types';
import {Button} from './IconButton.styled';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

//onClick: React.FunctionComponent;

const IconButton:FC<Props> = ({ children, onClick }) => {
    return (
    <Button type ="button" onClick={onClick}>
        {children}
    </Button>)
}

// IconButton.defaultProps = {
//     onClick: () => null,
//     children: null,
// };

// IconButton.propTypes = {
//     onClick: PropTypes.func,
//     children: PropTypes.node
// }

export default IconButton; 
