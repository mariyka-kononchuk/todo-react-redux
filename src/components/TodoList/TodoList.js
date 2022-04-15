import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from '../../redux/todo/todo-action';
import {toggleModal} from '../../redux/modal/modal-action';
import IconButton from '../IconButton';
import { ReactComponent as ArchiveIcon } from '../../icons/archive.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import {
    HeaderWrapper,
    Name,
    InfoTitle,
    ButtonsWrapper,
    List,
    ListItem,
    Button,
    StyledLink
} from './TodoList.styled';
import TodoListItem from '../TodoListItem';
import { getActiveTodos, getArchiveTodos } from '../../redux/todo/todo-selectors';


export default function TodoList() {
    const activeTodos = useSelector(getActiveTodos);
    const archivedTodos = useSelector(getArchiveTodos);
    let todos = [];
    const dispatch = useDispatch();
    const location = useLocation();
    if (location.pathname === '/home') {
        todos = activeTodos;
    }
    if (location.pathname === '/archive') {
        todos = archivedTodos;
    }
    console.log(todos)
    return (
        <div>
            <HeaderWrapper>
                <Name>Name</Name>
                <InfoTitle>Created</InfoTitle>
                <InfoTitle>Category</InfoTitle>
                <InfoTitle>Content</InfoTitle>
                <InfoTitle>Dates</InfoTitle>
                <ButtonsWrapper>
                    <StyledLink to="/archive">
                        {<ArchiveIcon width="18" height="18" fill="black"  />}
                    </StyledLink>
                <IconButton>
                    {<DeleteIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.deleteTodo(todos.id))} />}
                </IconButton>
                </ButtonsWrapper>
            </HeaderWrapper>
            <List>
            {todos.map((todos) => (
                <ListItem key={todos.id}  >
                    <TodoListItem todos={todos} />
                </ListItem>
            ))}
            </List>
            {location.pathname === '/home' ?
                <Button onClick={() => dispatch(toggleModal())}>Create note</Button>:
                null}
        </div>
    )
}



// ContactList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string,
//         })
//     ),
// };

 