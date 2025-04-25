import {types} from 'mobx-state-tree';
import {flow, Instance} from 'mobx-state-tree';
import {
  deleteTodosAPI,
  fetchTodosAPI,
  fetchTodosAPILimitAndSkip,
  postTodosAPI,
  updateTodosAPI,
} from '../api/Api';

export const Todo = types.model('Todo', {
  id: types.identifierNumber,
  todo: types.string,
  completed: types.boolean,
});

export type TodoType = Instance<typeof Todo>;

export const RootStore = types
  .model('RootStore', {
    todos: types.array(Todo),
    curInputTodo: types.model({
      todo: types.string,
      completed: types.boolean,
      editTodoId: types.maybeNull(types.number),
    }),
    isEdit: types.boolean,
    skip: types.number,
    limit: types.number,
    hasTodo: types.boolean,
    error: types.string,
  })
  .actions(self => ({
    handleInputChange(
      field: 'todo' | 'completed' | 'editTodoId',
      value: string | boolean | number | null,
    ): void {
      self.curInputTodo[field] = value;
    },
    setCurrInputTodo(
      title: string,
      completed: boolean,
      editTodoId: number | null,
    ): void {
      self.curInputTodo.todo = title;
      self.curInputTodo.completed = completed;
      self.curInputTodo.editTodoId = editTodoId;
    },
    setIsEdit(value: boolean): void {
      self.isEdit = value;
    },
    setError(value: string): void {
      self.error = value;
    },
    clearTodo(): void {
      self.curInputTodo.todo = '';
      self.curInputTodo.completed = false;
      self.curInputTodo.editTodoId = null;
    },
    editTodo(newTodo: TodoType): void {
      self.isEdit = true;
      self.curInputTodo.todo = newTodo.todo;
      self.curInputTodo.completed = newTodo.completed;
      self.curInputTodo.editTodoId = newTodo.id;
    },
  }))
  .actions(self => ({
    fetchTodos: flow(function* () {
      try {
        const response = yield fetchTodosAPI();
        console.log(response);
        self.todos = response;
      } catch (error) {
        console.error('Failed to fetch todos', error);
      }
    }),
    postTodos: flow(function* (todo: string, completed: boolean) {
      if (todo.length < 3) {
        console.warn('enter a valid todo');
        self.setError('Enter a valid todo');
        return false;
      }
      const newTodo = {
        todo: todo,
        completed: completed,
        userId: 5,
      };
      try {
        const response = yield postTodosAPI(newTodo);
        console.log(response);

        self.todos.splice(
          0,
          0,
          Todo.create({
            id: response.id,
            todo: response.todo,
            completed: response.completed,
          }),
        );
        console.log(
          'Current todos:',
          self.todos.map(t => t.todo),
        );
        self.clearTodo();
        return true;
      } catch (error) {
        console.error('Failed to post todo', error);
        self.setError('Failed to post todo');
        return false;
      }
    }),
    deleteTodos: flow(function* (id: number) {
      try {
        const response = yield deleteTodosAPI(id);
        console.log(response);
        self.todos.replace(self.todos.filter(t => t.id !== id));
      } catch (error) {
        console.error('Faild to delete todo', error);
        self.setError('Failed to delete todo');
      }
      self.clearTodo();
      self.setIsEdit(false);
    }),
    updateTodos: flow(function* (
      id: number | null,
      title: string,
      completed: boolean,
    ) {
      try {
        const updatedTodo = {
          todo: title,
          completed: completed,
        };
        const response = yield updateTodosAPI(id, updatedTodo);
        console.log(response);
        const find = self.todos.find(todo => todo.id === response.id);
        if (find) {
          find.todo = response.todo;
          find.completed = response.completed;
        }
        self.clearTodo();
        self.setIsEdit(false);
        return true;
      } catch (error) {
        console.error('Failed to update todo', error);
        self.setError('Failed to update todo');
        self.clearTodo();
        self.setIsEdit(false);
        return false;
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
        response.forEach((todo: TodoType) => {
          self.todos.push(Todo.create(todo));
        });
        self.skip = self.skip + self.limit;
        if (response.length < self.limit) {
          self.hasTodo = false;
        }
      } catch (error) {
        console.error('Failed to fetch todos by limit and skip', error);
        self.setError('Failed to fetch todos by limit and skip');
      }
    }),
  }));

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      todos: [],
      curInputTodo: {
        todo: '',
        completed: false,
        editTodoId: null,
      },
      isEdit: false,
      skip: 1,
      limit: 10,
      hasTodo: true,
      error: '',
    });
  }
  return rootStore;
}
