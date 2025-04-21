import { types } from "mobx-state-tree";
import { flow } from "mobx-state-tree";
import { deleteTodosAPI, fetchTodosAPI, fetchTodosAPILimitAndSkip, postTodosAPI, updateTodosAPI } from "../api/Api";

export const Todo = types.model('Todo', {
    id: types.identifierNumber,
    todo: types.string,
    completed: types.boolean,
});

export const RootStore = types.model('RootStore', {
    todos: types.array(Todo),
    curInputTodo: types.model({
        todo: types.string,
        completed: types.boolean,
        editTodoId: types.maybeNull(types.number)
    }),
    isEdit: types.boolean,
    skip: types.number,
    limit: types.number,
    hasTodo: types.boolean,
}).actions(self => ({
    handleInputChange(field, value) {
        self.curInputTodo[field] = value;
    },
    setCurrInputTodo(title, completed, editTodoId) {
        self.curInputTodo.todo = title,
            self.curInputTodo.completed = completed,
            self.curInputTodo.editTodoId = editTodoId;
    },
    clearTodo() {
        self.setCurrInputTodo('', false, null)
        self.setIsEdit(false);
    },
    editTodo(newTodo) {
        self.setIsEdit(true);
        self.setCurrInputTodo(newTodo.todo, newTodo.completed, newTodo.id)
    },
    setIsEdit(value) {
        self.isEdit = value;
    },
    fetchTodos: flow(function* () {
        try {
            const response = yield fetchTodosAPI();
            console.log(response);
            self.todos = response;
        } catch (error) {
            console.error('Failed to fetch todos', error);
        }
    }),
    postTodos: flow(function* (todo, completed) {
        if (!todo) {
            console.warn('enter a valid todo')
            return;
        }
        const newTodo = {
            todo: todo,
            completed: completed,
            userId: 5
        }
        try {
            const response = yield postTodosAPI(newTodo);
            console.log(response);

            self.todos.splice(0, 0, Todo.create({
                id: response.id,
                todo: response.todo,
                completed: response.completed
            }));
            console.log("Current todos:", self.todos.map(t => t.todo));
            self.clearTodo();
        } catch (error) {
            console.error('Failed to post todo', error)
        }
    }),
    deleteTodos: flow(function* (id) {
        try {
            const response = yield deleteTodosAPI(id);
            console.log(response);
            self.todos.replace(self.todos.filter(t => t.id !== id));
        } catch (error) {
            console.error('Faild to delete todo', error);
        }
    }),
    updateTodos: flow(function* (id, title, completed) {
        try {
            const updatedTodo = {
                todo: title,
                completed: completed
            }
            const response = yield updateTodosAPI(id, updatedTodo);
            console.log(response);
            const find = self.todos.find((todo) => todo.id === response.id);
            if (find) {
                find.todo = response.todo;
                find.completed = response.completed;
            }
            self.clearTodo();
        } catch (error) {
            console.error('Failed to update todo', error);
        }
    }),
    fetchTodosLimitAndSkip: flow(function* () {
        console.log('onEnd');
        if (self.hasTodo === false) {
            return;
        }
        try {
            const response = yield fetchTodosAPILimitAndSkip(self.skip, self.limit);
            console.log(response);
            // self.todos = response;
            response.forEach((todo) => {
                self.todos.push(Todo.create(todo))
            })
            self.skip = self.skip + self.limit;
            if (response.length < self.limit) {
                self.hasTodo = false;
            }
        } catch (error) {
            console.error('Failed to fetch todos by limit and skip', error);
        }
    })
}));

let rootStore;
export function useStore() {
    if (!rootStore) {
        rootStore = RootStore.create({
            todos: [],
            curInputTodo: {
                todo: '',
                completed: false,
                editTodoId: null
            },
            isEdit: false,
            skip: 1,
            limit: 10,
            hasTodo: true,
        });
    }
    return rootStore;
}
