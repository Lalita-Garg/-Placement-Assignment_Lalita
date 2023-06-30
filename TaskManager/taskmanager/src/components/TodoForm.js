import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Form,
  Button,
  InputGroup
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const {dispatch} = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault();
    if(todoString === ""){
        return alert("Plese enter a todo")
    }
    const todo = {
        todoString,
        id: v4()
    }
    dispatch({
        type: ADD_TODO,
        payload: todo
    })
    setTodoString("")
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Your Todo Here"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
          />
          <Button color="warning">ADD</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
