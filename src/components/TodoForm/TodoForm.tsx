import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dateFormat from "dateformat";
import * as actions from '../../redux/todo/todo-action';
import { getEditItem, getEditItemStatus } from '../../redux/todo/todo-selectors';
import { toggleModal } from '../../redux/modal/modal-action';
import {
    Form,
    Input,
    Select,
    Textarea,
    Button
} from './TodoForm.styled';

type Change = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>;
   

export default function TodoForm() {
    const dispatch = useDispatch();
    const isEditedTodo = useSelector(getEditItemStatus);
    const editItem = useSelector(getEditItem);
    
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Task');
    const [content, setContent] = useState('');
    const [nameButton, setNameButton] = useState('Create note');

    useEffect(() => {
        if (isEditedTodo) {
            if (editItem) {
                setName(editItem.name);
                setCategory(editItem.category);
                setContent(editItem.content);
                setNameButton('Save changes');
            }
        }
    }, [isEditedTodo]);
    
    const handleChange = (e: Change) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'content':
                setContent(value);
                break;
            default:
                return;
        }
    }

     const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const datesFound = content.match(/\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g);
         let contentDates:string[] = [];
         let dates = ''
         if (datesFound !== null) {
             contentDates = datesFound.map(item => dateFormat(item, "m/d/yyyy"))
             dates = contentDates.join(', ');
         }
         
         if (isEditedTodo) {
            const id = editItem?.id;
            dispatch(actions.editTodo({ id, name, category, content, dates }));
            dispatch(actions.deleteEditItem());
            dispatch(toggleModal());
         } else {
             dispatch(actions.addTodo({ name, category, content, dates }));
             dispatch(toggleModal());
        }
        
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
                required
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
                rows={3}
                name="content"
                value={content}
                onChange={handleChange}
                required
                placeholder="Content..."></Textarea>
            <Button type="submit">{nameButton}</Button>
        </Form>
    )
}
