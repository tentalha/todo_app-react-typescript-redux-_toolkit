import {createSlice, PayloadAction} from "@reduxjs/toolkit";
//Types
import {todoItems, todoTyped} from "./todo.typed";

const initialState: todoItems = {
    todos: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, {payload}: PayloadAction<todoTyped>) => {
            state.todos.push(payload);
        },
        removeTodo: (state, {payload}: PayloadAction<number>) => {
            state.todos = state.todos.filter(item => item.id !== payload);
        }

    }
});
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;


