import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

export default function SignupForm({ onAddContact }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    
    const handleChange = e => {
        const {name, value} = e.target
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

     const handleSubmit = e => {
         e.preventDefault();
         dispatch(actions.addTodo({name, category, content}))
       // onAddContact({ name, number });
        reset();
    }

    const reset = () => {
        setName('');
        setCategory('');
        setContent('');
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
            <Select name="category" value={category} onChange={handleChange}>
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