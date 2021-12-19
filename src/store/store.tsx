import { createStore } from "redux"

export interface IState {
    list: string[],
    path: string[],
    listPath: string[]
}

const initialState: IState = {
    list: [],
    path: ['C:', 'Folder'],
    listPath: []
}

interface IAction {
    type: string,
    payload: string
}

const cd: IAction = {
    type: 'cd',
    payload: 'name'
}

const cdBack: IAction = {
    type: 'out',
    payload: '..'
}

const print: IAction = {
    type: 'print',
    payload: 'text'
}

const reducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case 'cd':
            if (action.payload === 'cd') {
                return state
            } else if (action.payload === '..') {
                return {
                    ...state,
                    list: [...state.list, action.payload],
                    path: state.path.slice(0, state.path.length - 1),
                    listPath: [...state.listPath, state.path.join('\\') + '\\ cd ..'],
                }
            }
            return {
                ...state,
                list: [...state.list, action.payload],
                path: [...state.path, action.payload],
                listPath: [...state.listPath, state.path.join('\\') + '\\ cd' + ' ' + action.payload],
            }
        case 'print':
            return {
                ...state,
                list: [...state.list, action.payload],
                listPath: [...state.listPath, state.path.join('\\') + '\\ print' + ' ' + action.payload, action.payload]
            }
        default:
            return state
    }
}
export const store = createStore(reducer)