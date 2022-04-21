import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from '../../redux/todo/todo-action';
import {toggleModal} from '../../redux/modal/modal-action';
import IconButton from '../IconButton/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import ITodo from '../../interfaces/todo.interface';
import { grey } from '@mui/material/colors';
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
    let todos: ITodo[] = [];
    const dispatch = useDispatch();
    const location = useLocation();
    if (location.pathname === '/home') {
        todos = activeTodos;
    }
    if (location.pathname === '/archive') {
        todos = archivedTodos;
    }
    return (
        <>
            <HeaderWrapper>
                <Name>Name</Name>
                <InfoTitle>Created</InfoTitle>
                <InfoTitle>Category</InfoTitle>
                <InfoTitle>Content</InfoTitle>
                <InfoTitle>Dates</InfoTitle>
                <ButtonsWrapper>
                    <StyledLink to="/archive">
                        {<ArchiveIcon
                        sx={{
                            color: grey[100],
                            fontSize: 32,
                            "&:hover": {
                            color: grey[700],
                        }
                        }}/>}
                    </StyledLink>
                    <IconButton onClick={() => dispatch(actions.deleteAllTodo())}>
                        {<DeleteIcon
                        sx={{
                            color: grey[100],
                            fontSize: 32,
                            "&:hover": {
                            color: grey[700],
                        }
                            }}
                             />}
                    </IconButton>
                </ButtonsWrapper>
            </HeaderWrapper>
            <List>
            {todos.map((todo) => (
                <ListItem key={todo.id}  >
                    <TodoListItem todo={todo} />
                </ListItem>
            ))}
            </List>
            {location.pathname === '/home' ?
                <Button onClick={() => dispatch(toggleModal())}>Create note</Button>:
                <StyledLink to="/home">
                    <Button>Home</Button>
                </StyledLink>}
        </>
    )
}


 