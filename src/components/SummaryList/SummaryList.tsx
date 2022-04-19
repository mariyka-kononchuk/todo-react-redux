import React from 'react';
import { useSelector } from 'react-redux';
import { getSummaryData} from '../../redux/todo/todo-selectors';
import SummaryListItem from '../SummaryListItem';
import {
  HeaderWrapper,
  Category,
  StatusWrapper,
  Status,
  List,
  ListItem
} from './SummaryList.styled';

export default function Summary() {
  const summaryData = useSelector(getSummaryData);

  return (
    <>
      <HeaderWrapper>
        <Category>Note category</Category>
          <StatusWrapper>
            <Status>Active</Status>
            <Status>Archived</Status>
          </StatusWrapper>
      </HeaderWrapper>
      <List>
        {summaryData.map((item) => (
          <ListItem key={item.category}  >
              <SummaryListItem item ={item} />
          </ListItem>
        ))}
      </List>
    </>
  )
} 


