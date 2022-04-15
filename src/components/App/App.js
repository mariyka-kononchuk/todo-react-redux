import React from 'react';
import { useSelector} from 'react-redux';
import s from './App.module.css';
import Container from '../Container';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import Modal from '../Modal';
import {getModalStatus} from '../../redux/modal/modal-selectors';

export default function App() {
  const openModal = useSelector(getModalStatus);
  console.log('openModal',openModal)
  
  // const [openModal, setOpenModal] = useState(false);
  // const toggleModal = () => setOpenModal(state => !state);
    return (
      <Container>
          {/* <button onClick={() => toggleModal()}>Open Modal</button> */}
          {openModal &&
            <Modal>
              <TodoForm />
            </Modal>}
          <TodoList />
      </Container>
    );
}


