import React from "react";
import axios from "axios";
import { TodoMain } from "@/components/TodoMain";
import { TodoDetail } from "@/components/TodoDetail";

const getSingleTodo = async (id: any) => {
  const url = `http://localhost:3000/api/todos/${id}`;
  const singleTodo = await axios.get(url).then((res) => res.data);
  return singleTodo;
};

export default async function Page(props: any) {
  const todoId = props.params.id;
  const isEdit = props.searchParams.isEdit;
  // // Fetch data directly in a Server Component
  const singleTodo = await getSingleTodo(todoId);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "6rem",
      }}
    >
      {isEdit === "true" ? (
        <TodoMain editedTodo={singleTodo} />
      ) : (
        <TodoDetail todoDetail={singleTodo} />
      )}
    </div>
  );
}
