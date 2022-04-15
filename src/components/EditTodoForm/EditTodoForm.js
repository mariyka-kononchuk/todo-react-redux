import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dateFormat from "dateformat";
import * as actions from '../../redux/todo/todo-action';
import { getEditItem } from '../../redux/todo/todo-selectors';
import {
    Form,
    Input,
    Select,
    Option,
    Textarea,
    Button
} from './EditTodoForm.styled';


export default function EditTodoForm() {
    
    const dispatch = useDispatch();
    const editItem = useSelector(getEditItem);
    const id = editItem.id;

    const [name, setName] = useState(editItem.name);
    const [category, setCategory] = useState(editItem.category);
    const [content, setContent] = useState(editItem.content);
    
    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value.trim());
                break;
            case 'category':
                setCategory(value);
                break;
            case 'content':
                setContent(value.trim());
                break;
            default:
                return;
        }
    }

     const handleSubmit = e => {
         e.preventDefault();
         const datesFound = content.match(/\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g);
         let contentDates = [];
         let dates = ''
         if (datesFound !== null) {
             datesFound.map(item => contentDates.push(dateFormat(item, "m/d/yyyy")))
             dates = contentDates.join(', ');
         }
         
        dispatch(actions.editTodo({id, name, category, content, dates}))
        reset();
    }

    const reset = () => {
        setName('');
        setCategory('Task');
        setContent('');
    }

    return (       
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <Select
                name="category"
                value={category}
                onChange={handleChange}
                required>
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
            </Select>
            <Textarea
                rows="3"
                type="text"
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="Content..."></Textarea>
            <Button type="submit">Create note</Button>
        </Form>
        
        
    )
}
// const mapStateToProps = state => {
//     return {
//         contacts: state.contacts.items
//     }
// }

// const mapDispatchToProps = dispatch => {
   
//   return {
//     onAddContact: ({name, number}) => dispatch(actions.addContact({name, number})),
//   }
// }

// SignupForm.propTypes = {
//     onAddContact: PropTypes.func,
// };