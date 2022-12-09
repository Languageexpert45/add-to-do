import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // Поле `reducers` позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;

      // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
      // Под капотом, он не мутирует состояние напрямую, а использует библиотеку Immer, которая
      // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        completed: false,
      };
    },

    toggleCompleteness: (state, { payload }) => {
      const { id } = payload;
      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },

    removeTodo: (state, action) => {
      const targetTodo = action.payload.id;

      state.allIds = state.allIds.filter(item => item !== targetTodo)
    },

    filterCompleted: (state, todos) => {
      const targetTodos = todos.payload.filter(item => item = item.completed);
      const targetIds = targetTodos.map(item => item = item.id);

      state.allIds = targetIds;
    },

    filterNotCompleted: (state, todos) => {
      const targetTodos = todos.payload.filter(item => item = item.completed === false);
      const targetIds = targetTodos.map(item => item = item.id);

      state.allIds = targetIds;
    },


  },
});


export const { addTodo, toggleCompleteness, removeTodo, filterCompleted, filterNotCompleted } = todoSlice.actions;

export default todoSlice.reducer;
