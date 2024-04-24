import { RefObject } from "react";

export interface TodoItem{
    name: string | number|boolean;
    id:number
}

export interface TodoListProps{
    todos?: TodoItem[]
}

export interface AddTodoProps{
  addTodoItem(value:string):void;
}
