import ITodo from '../../interfaces/todo.interface';
interface IModal  {
    editedItem?: ITodo;
    isOpen: boolean
}

interface IState {
    todos: {
        items: ITodo[];
        editItem?: {
            data?: ITodo;
            isEdited: boolean;
        }
    };
    modal: IModal;
}
export const getModalStatus = (state:IState) => state.modal.isOpen
