import {selector} from 'recoil'
import { todoAtom } from '../atoms/todoAtom'
import { filterAtom } from '../atoms/filterAtom';

export const filteredTodosSelector = selector({
    key: "filteredTodoSelector",
    get: ({get}) =>{
        const todos = get(todoAtom);
        const filter = get(filterAtom);
        return todos.filter(todo => todo.title.includes(filter) || todo.description.includes(filter))
    }
})