import React, {FC} from 'react';
import { SectionStyled } from './Section.styled';

type Props = {
  children: React.ReactNode;
};
const Section:FC<Props> = ({ children }) => <SectionStyled>{children}</SectionStyled>;

export default Section;