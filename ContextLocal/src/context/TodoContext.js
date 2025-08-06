import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed:false,
    }],
    addTodo:(todo) => {},
    updateTodo:(id,toto) => {},
    deleteTodo:(id) => {},
    toggleTodo:(id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}
