import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import TodoList from '../components/TodoList';
import Modal from '../components/Modal';
import TodoForm from '../components/TodoForm';
import SummaryList from '../components/SummaryList';
import { getModalStatus } from '../../src/redux/modal/modal-selectors';


export default function HomeView() {
    const openModal = useSelector(getModalStatus);
     return (
        <div>
            <Section>
                <TodoList />
                {openModal &&
                     <Modal>
                          <TodoForm />
                    </Modal>}
            </Section>
            <Section>
                <SummaryList /> 
            </Section>
        </div>
    )
}