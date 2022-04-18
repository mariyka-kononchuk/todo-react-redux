import React, {FC} from 'react';
import { ContainerStyled } from './Container.styled';

type Props = {
  children: React.ReactNode;
};

const Container:FC<Props> = ({ children }) => <ContainerStyled>{children}</ContainerStyled>;

export default Container;