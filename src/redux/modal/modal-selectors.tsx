import IState from '../../interfaces/state.interface';

export const getModalStatus = (state:IState) => state.modal.isOpen
