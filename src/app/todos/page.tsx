import React from "react";
import axios from "axios";
import { TodoList } from "@/components/TodoList";

const getTodos = async () => {
  const url = `http://localhost:3000/api/todos`;
  const todosData = await axios.get(url).then((res) => res.data);
  return todosData;
};

export default async function Page() {
  // Fetch data directly in a Server Component
  const todoData = await getTodos();
  // Forward fetched data to your Client Component
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "6rem",
      }}
    >
      <TodoList todoData={todoData} />
    </div>
  );
}
