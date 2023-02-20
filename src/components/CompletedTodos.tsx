"use client";
import { Button, Checkbox } from "@mui/material";
import React from "react";
import { Todo } from "utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IProps {
  completedTodos: Array<Todo>;
}
export const CompletedTodos = (props: IProps) => {
  const { completedTodos } = props;
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
      <h3>Completed Todos</h3>
      {/* MAPPING OVER THE TODOS */}
      {completedTodos?.map((t) => (
        <div
          key={t._id}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5px",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              name="completed"
              defaultChecked={t.completed}
              onChange={(e) => {
                let todo: Todo = {
                  todo: t.todo,
                  completed: e.target.checked,
                };
                router.push(`todos/incomplete`);
                updateTodoData(t?._id, todo);
              }}
            />
            <p>{t?.todo}</p>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
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
    </div>
  );
};
