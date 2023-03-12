import React from "react";
import { EmployeeButtons, EmployeeList } from "./RenderPropDemo";
import { BaseComponent } from "./RenderPropsImplStyle";
import { BarContextDemoClass } from "./BarContextDemoClass";
import { KitKatBarProvider } from "./KITKATCONTEXT/KitKatBarProvider";
import { KitKatBarGrandFather } from "./KITKATCONTEXT/KitKatBar";
import RegularTodoComponent from "./Todo/RegularTodoComponent";
import RenderPropsTodos from "./Todo/RenderPropsTodos";
import { ToDoProvider, TodoListAsKid } from "./Todo/ContexTodoDemo";
import { TodoHookProvider } from "./Todo/UseContextTodoDemo";

class ParentForContext extends React.Component {
  render() {
    return (
      <div>
        <EmployeeButtons />
        <div>
          <EmployeeList />
        </div>
      </div>
    );
    // return (<div>
    // {
    //   /*<BaseComponent/> */
    // }
    // {
    //    <BarContextDemoClass/> 
    // }
    // </div>)
    // return (
    //   <KitKatBarProvider> <KitKatBarGrandFather/> </KitKatBarProvider>

    // );
    // return (<RegularTodoComponent/>)
    //return <RenderPropsTodos/>
    //return <ToDoProvider/>
    //  return (
    //    <ToDoProvider>
    //      <TodoListAsKid/>
    //    </ToDoProvider>
    //  )
    //return <TodoHookProvider />;
  }
}

export default ParentForContext;
