import { createSummaryData } from '../../utils/createSummaryData';
import ITodo from '../../interfaces/todo.interface';

interface IModal  {
    editedItem?: ITodo;
    isOpen:boolean
}

interface IState {
    todos: {
        items: ITodo[];
        editItem?: {
            data?: ITodo;
            isEdit: boolean;
        }
    };
    modal: IModal;
}

export const getActiveTodos = (state:IState) => state.todos.items.filter((todo => todo.status === 'active'));
export const getArchiveTodos = (state:IState) => state.todos.items.filter((todo => todo.status === 'archived'));
export const getEditItem = (state: IState) => {
    if ( state.todos.editItem?.data) {
        return state.todos.editItem.data
    };
    return
}
export const getEditItemStatus = (state:IState) => state.todos.editItem?.isEdit;
export const getSummaryData = (state:IState) => createSummaryData(state.todos.items);