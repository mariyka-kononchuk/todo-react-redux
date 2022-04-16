import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from '../../redux/todo/todo-action';
import { toggleModal } from '../../redux/modal/modal-action';

import IconButton from '../IconButton';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as ArchiveIcon } from '../../icons/archive.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ReactComponent as TodoIcon } from '../../icons/buy.svg';

import {
  Wrapper,
  Category,
  Status
} from './SummaryListItem.styled';

export default function TodoListItem({ item }) {
  
  return (
    <>
      {/* <Icon>
        <IconButton>
          {<TodoIcon width="18" height="18" fill="black" />}
        </IconButton>
      </Icon> */}
      
      <Category>{item.category}</Category>
      <Wrapper>
          <Status>{item.active}</Status>
          <Status>{item.archived}</Status>
      </Wrapper>
      

    </>  
  )
} 




// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

