import { createSummaryData } from '../../utils/createSummaryData';
import IState from '../../interfaces/state.interface';

export const getActiveTodos = (state:IState) => state.todos.items.filter((todo => todo.status === 'active'));
export const getArchiveTodos = (state:IState) => state.todos.items.filter((todo => todo.status === 'archived'));
export const getEditItem = (state: IState) => state.todos.editItem?.data
export const getEditItemStatus = (state:IState) => state.todos.editItem?.isEdited;
export const getSummaryData = (state:IState) => createSummaryData(state.todos.items);