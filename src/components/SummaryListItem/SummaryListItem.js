import React from 'react';
import Icon from '../Icon/Icon.tsx';
import {
  IconWrapper,
  StatusWrapper,
  Category,
  Status
} from './SummaryListItem.styled';

export default function TodoListItem({ item }) {
  return (
    <>
      <IconWrapper>
          {/* {<Icon width="20" height="20" fill="whitesmoke" category = {item.category} />} */}
      </IconWrapper>
      <Category>{item.category}</Category>
      <StatusWrapper>
          <Status>{item.active}</Status>
          <Status>{item.archived}</Status>
      </StatusWrapper>
    </>  
  )
} 


