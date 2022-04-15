import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/todo/todo-action';
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
    Button
} from './TodoList.styled';
import TodoListItem from '../TodoListItem';
import {getTodos} from '../../redux/todo/todo-selectors';

export default function TodoList  () {
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();
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
                <IconButton>
                    {<ArchiveIcon width="18" height="18" fill="black" onClick={() => dispatch(actions.addTodo(todos.id))} />}
                </IconButton>
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
            <Button onClick={() => dispatch(actions.addTodo(todos.id))}>Create note</Button>
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

 