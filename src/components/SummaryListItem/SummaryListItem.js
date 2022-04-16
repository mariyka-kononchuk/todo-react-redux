import React from 'react';
import Icon from '../Icon';
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




// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

