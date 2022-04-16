import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '../IconButton';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as ArchiveIcon } from '../../icons/archive.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ReactComponent as TodoIcon } from '../../icons/buy.svg';
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
  console.log('summary', summaryData)
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




// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

