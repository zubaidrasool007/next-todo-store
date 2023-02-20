"use client";
import { Button, Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Todo } from "utils/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import Link from "next/link";
// import { TodoTable } from "./TodoTable";

interface todos {
  todoData: Array<Todo>;
}

export const TodoList = (props: todos) => {
  const { todoData } = props;
  console.log("TodoData", todoData);
  const router = useRouter();

  const deleteTodo = async (id: any) => {
    const url = `http://localhost:3000/api/todos/${id}`;
    axios.delete(url);
  };

  const updateTodoData = (id: any, todo: any) => {
    const url = `http://localhost:3000/api/todos/${id}`;
    axios.put(url, todo);
  };

  return (
    <div>
      <h3>Todo List</h3>
      {/* MAPPING OVER THE TODOS */}
      {todoData?.map((t: Todo) => (
        <div
          key={t._id}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5px",
            justifyContent: "space-between",
            width: "800px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <Checkbox
                name="completed"
                defaultChecked={t.completed}
                onChange={(e) => {
                  let todo: Todo = {
                    todo: t.todo,
                    completed: e.target.checked,
                    description: "",
                    gender: "",
                    martial_status: "",
                    age: null,
                  };
                  updateTodoData(t._id, todo);
                }}
              />
              <p>{t?.todo}</p>
              <p>{t?.description ? t?.description : "Not Given"}</p>
              <p>{t?.gender ? t?.gender : "Not Given"}</p>
              <div>
                <Link
                  href={{
                    pathname: `/todos/${t._id}`,
                    query: { Detail: true },
                  }}
                >
                  <VisibilityIcon fontSize="small" color="primary" />
                </Link>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" color="success">
              <Link
                href={{ pathname: `/todos/${t._id}`, query: { isEdit: true } }}
              >
                Edit
              </Link>
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteTodo(t._id);
                router.push(`/todos`);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      {/* <TodoTable todoData={todoData} /> */}
    </div>
  );
};
