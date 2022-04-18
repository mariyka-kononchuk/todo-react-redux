import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import * as actions from '../../redux/todo/todo-action';
import { toggleModal } from '../../redux/modal/modal-action';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon.tsx';

import {
  IconWrapper,
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
    <>
      <IconWrapper>
        {/* {<Icon width="20" height="20" fill="whitesmoke" category = {todo.category} />} */}
      </IconWrapper>
      <Name>{todo.name}</Name>
      <Date>{todo.date}</Date>
      <Category>{todo.category}</Category>
      <Content>{todo.content}</Content>
      <Dates>{todo.dates}</Dates>

      {location.pathname === '/home' ?
        <ButtonsWrapper>
          <IconButton>
            {<EditIcon
              sx={{
                color: grey[700],
                fontSize: 25,
                "&:hover": {
                  color: grey[500],
                }
              }}
              onClick={() => {
                dispatch(toggleModal());
                dispatch(actions.addEditItem(todo));
              }} />}
          </IconButton>
          <IconButton>
            {<ArchiveIcon
              sx={{
                color: grey[700],
                fontSize: 25,
                "&:hover": {
                  color: grey[500],
                }
              }}
              onClick={() => dispatch(actions.archiveTodo(todo.id))} />}
          </IconButton>
          <IconButton>
            {<DeleteIcon
              sx={{
                color: grey[700],
                fontSize: 25,
                "&:hover": {
                  color: grey[500],
                }
              }}
              onClick={() => dispatch(actions.deleteTodo(todo.id))} />}
          </IconButton>
        </ButtonsWrapper>
        :
        <ButtonsWrapper>
          <UnpackButton onClick={() => dispatch(actions.unpackTodo(todo.id))}>Unpack</UnpackButton>
        </ButtonsWrapper>}
        
    </>  
  )
} 




// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

