import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/todo/todo-action';
// import { deleteOperation } from '../../../redux/todo/todo-operations';
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
  ButtonsWrapper
} from './TodoListItem.styled';

export default function TodoListItem({ todos }) {
const dispatch = useDispatch();
return (
  <Wrapper>
    <Icon>
      <IconButton>
        {<TodoIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.addTodo(todos.id))} />}
      </IconButton>
    </Icon>
    <Name>{todos.name}</Name>
    <Date>{todos.date}</Date>
    <Category>{todos.category}</Category>
    <Content>{todos.content}</Content>
    <Dates>{todos.dates}</Dates>
    <ButtonsWrapper>
      <IconButton>
        {<EditIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.addTodo(todos.id))} />}
      </IconButton>
      <IconButton>
        {<ArchiveIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.addTodo(todos.id))} />}
      </IconButton>
      <IconButton>
        {<DeleteIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.addTodo(todos.id))} />}
      </IconButton>      
    </ButtonsWrapper>
  </Wrapper>  
  )
} 




// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

