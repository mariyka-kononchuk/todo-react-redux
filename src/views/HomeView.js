import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import EditTodoForm from '../components/EditTodoForm';
import Modal from '../components/Modal';
import {getModalStatus} from '../../src/redux/modal/modal-selectors';

export default function HomeView() {
    const openModal = useSelector(getModalStatus);
     return (
        <div>
             <Section>
                <TodoList />
                {openModal &&
                    <Modal>
                         {/* <TodoForm /> */}
                         <EditTodoForm />
                    </Modal>}
            </Section>
        </div>
    )
}