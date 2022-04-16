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
  Icon,
  Name,
  Date,
  Category,
  Content,
  Dates,
  ButtonsWrapper,
  UnpackButton
} from './TodoListItem.styled';

export default function TodoListItem({ todo }) {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Icon>
        <IconButton>
          {<TodoIcon width="18" height="18" fill="black" />}
        </IconButton>
      </Icon>
      <Name>{todo.name}</Name>
      <Date>{todo.date}</Date>
      <Category>{todo.category}</Category>
      <Content>{todo.content}</Content>
      <Dates>{todo.dates}</Dates>

      {location.pathname === '/home' ?
        <ButtonsWrapper>
          <IconButton>
              {<EditIcon width="18" height="18" fill="black" onClick={() => {
                dispatch(toggleModal());
                dispatch(actions.addEditItem(todo));
              }} />}
          </IconButton>
          <IconButton>
            {<ArchiveIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.archiveTodo(todo.id))} />}
          </IconButton>
          <IconButton>
            {<DeleteIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.deleteTodo(todo.id))} />}
          </IconButton>      
        </ButtonsWrapper>
        :
        <UnpackButton onClick={() => dispatch(actions.unpackTodo(todo.id))}>Unpack</UnpackButton>}
    </Wrapper>  
  )
} 




// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

