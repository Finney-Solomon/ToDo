import React from "react";
import { TodoHeader } from "../../commonComponents/TodoHeader";
import { Grid } from "@mui/material";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

export const TodoIndex = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: "0em", // Adjusted paddingTop
          marginBottom: "2em",
        }}
      >
        <Grid item xs={12} md={12} sm={12} zeroMinWidth>
          <TodoHeader />
        </Grid>
        <Grid item xs={4} md={4}>
          <TodoList />
        </Grid>
        <Grid item xs={8}>
          <TodoForm />
        </Grid>
      </Grid>
    </>
  );
};
