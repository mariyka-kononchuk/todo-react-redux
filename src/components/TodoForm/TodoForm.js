import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dateFormat from "dateformat";
import * as actions from '../../redux/todo/todo-action';
import {
    Form,
    Input,
    Select,
    Option,
    Textarea,
    Button
} from './TodoForm.styled';
//import PropTypes from 'prop-types';

export default function SignupForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Task');
    const [content, setContent] = useState('');
    //const [dates, setDates] = useState('');
    
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
         
        dispatch(actions.addTodo({name, category, content, dates}))
        reset();
    }

    const reset = () => {
        setName('');
        setCategory('Task');
        setContent('');
       // setDates('');
    }

    return (
        // <form  onSubmit={handleSubmit} >
        //         <label >
        //             <span>Name</span>
        //             <input
                        
        //                 type="text"
        //                 name="name"
        //                 value={name}
        //                 onChange={handleChange}
        //                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        //                 required
        //             />
        //         </label>
        //         <label >
        //             <span >Number</span>
        //             <input
                        
        //                 type="tel"
        //                 name="number"
        //                 value={number}
        //                 onChange={handleChange}
        //                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //                 title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        //                 required
        //             />
        //         </label>
        //         <button  type="submit">Add contact</button>
        //     </form>
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