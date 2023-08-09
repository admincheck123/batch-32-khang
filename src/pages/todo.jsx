import React from "react";

import AddTodo from "componets/todo/add";

import ListTodo from "componets/todo/list";
import Action from "componets/todo/action";

function TodoPage(props) {
  return (
    <div>
      <AddTodo />
      <ListTodo />
      <Action />
    </div>
  );
}

export default TodoPage;