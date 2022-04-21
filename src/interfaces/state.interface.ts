import ITodo from './todo.interface'
interface IModal  {
    editedItem?: ITodo;
    isOpen: boolean
}

export default interface IState {
    todos: {
        items: ITodo[];
        editItem?: {
            data?: ITodo;
            isEdited: boolean;
        }
    };
    modal: IModal;
}