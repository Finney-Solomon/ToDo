import { Button, Card, Input, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateSelectedTodoData,
  updateTodo,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state?.todo.selectedTodo);
  const navigate = useNavigate();
  const addNewTodo = useSelector((state) => state?.todo.isNew);
  const userExist = useSelector((state) => state?.userExist);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateTodo({ [name]: value }));
  };

  const handleSave = (e) => {
    dispatch(updateSelectedTodoData(selectedTodo));
  };

  const addNewTodoData = () => {
    dispatch(addTodo(selectedTodo));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(selectedTodo._id));
  };

  return (
    <Card
      sx={{
        width: "63.9vw",
        height: "84.9vh",
        background: "rgba(60, 80, 25, .07)",
        margin: "1em 1em 1em 0em",
      }}
    >
      <br />
      <header
        style={{
          background: "#323131  !important",
          letterSpacing: ".5rem",
          color: "#323131",
        }}
      >
        <Input
          name="title"
          placeholder="Title"
          style={{
            background: "#323131  !important",

            fontWeight: 900,
            fontSize: "x-larger",
            color: "#323131",
            display: "flex",
            alignItems: "left",
            padding: "0.5em",
          }}
          value={selectedTodo?.title}
          onChange={handleChange}
        />
      </header>
      <br />
      <Input
        name="description"
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Description"
        multiline
        minRows={25}
        style={{
          fontSize: "xx-larger",
          color: "#323131",
          display: "flex",
          alignItems: "left",
          padding: "0.5em",
        }}
        value={selectedTodo?.description}
        onChange={handleChange}
      />
      <br />
      {userExist ? (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#323131",
            alignItems: "flex-end",
            marginRight: "auto",
            padding: "em",
          }}
        >
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={addNewTodo ? addNewTodoData : handleSave}
            >
              {addNewTodo ? "Add " : "Save"}
            </Button>
          </Stack>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#323131",
            alignItems: "flex-end",
            marginRight: "auto",
            padding: "em",
          }}
        >
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="error"
              onClick={() => navigate("/login")}
            >
              Delete
            </Button>
            <Button variant="contained" onClick={() => navigate("/login")}>
              {addNewTodo ? "Add " : "Save"}
            </Button>
          </Stack>
        </div>
      )}
    </Card>
  );
};
