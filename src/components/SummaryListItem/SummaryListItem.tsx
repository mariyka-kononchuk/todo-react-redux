import React from 'react';
import Icon from '../Icon';
import ISummary from '../../interfaces/summary.interface';
import {
  IconWrapper,
  StatusWrapper,
  Category,
  Status
} from './SummaryListItem.styled';

interface Props {
  item: ISummary;
}
export default function SummaryListItem({ item }:Props) {
  return (
    <>
      <IconWrapper>
          {<Icon width="20" height="20" fill="whitesmoke" category = {item.category} />}
      </IconWrapper>
      <Category>{item.category}</Category>
      <StatusWrapper>
          <Status>{item.active}</Status>
          <Status>{item.archived}</Status>
      </StatusWrapper>
    </>  
  )
} 


