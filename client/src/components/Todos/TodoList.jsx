import { Button, Card, CardHeader, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  getSelectTodoData,
  getSelectedTodo,
  getTodoTitleList,
} from "../../redux/actions";
import AddIcon from "@mui/icons-material/Add";
import { Link, Navigate, useNavigate } from "react-router-dom";
export const TodoList = () => {
  const todoTitleList = useSelector((state) => state?.todo.todoTitleList);
  const userExist = useSelector((state) => state?.userExist);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userExist) {
      dispatch(getTodoTitleList());
    }
  }, [todoTitleList.length === 0]);

  const locale = "en";

  const today = new Date();

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  const getTodo = (item) => {
    dispatch(getSelectTodoData(item._id));
    dispatch(addNewTodo(false));
  };
  const handleNewTodo = () => {
    const payload = {
      id: "",
      title: "",
      description: "",
      date: "",
      user: "",
    };
    dispatch(getSelectedTodo(payload));
    dispatch(addNewTodo(true));
  };
  return (
    <>
      <Card
        sx={{
          width: "26vw",
          height: "84.9vh",
          margin: "1em",
        }}
      >
        <div>
          <CardHeader
            sx={{
              bgcolor: "#cfcdcd  !important",
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".5rem",
              color: "#323131",
              marginBottom: "1em",
            }}
            title="Todo List"
            subheader={wish + date + " " + time}
          />
          <Button
            startIcon={<AddIcon />}
            fontSize="large"
            variant="contained"
            onClick={() => (userExist ? handleNewTodo() : navigate("/login"))}
          >
            Add Todo
          </Button>
          <br />
          <br />
          <div
            style={{
              overflowY: "auto",
              maxHeight: "65vh",
              // marginBottom: "5rem",
              bottom: "200px",
            }}
          >
            <Stack spacing={1} justifyContent="center" alignItems="center">
              {todoTitleList.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    width: "90%",
                    fontWeight: 700,
                    opacity: "0.8",
                  }}
                  variant="outlined"
                  color="inherit"
                  onClick={() => getTodo(item)}
                >
                  {item?.title}
                </Button>
              ))}
            </Stack>
          </div>
        </div>
      </Card>
    </>
  );
};
