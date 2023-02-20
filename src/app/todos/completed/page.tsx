import React from "react";
import axios from "axios";
import { CompletedTodos } from "@/components/CompletedTodos";

const getCompletedTodos = async () => {
  const url = `http://localhost:3000/api/todos/completed`;
  const completedTodosData = await axios.get(url).then((res) => res.data);
  return completedTodosData;
};

export default async function Page() {
  // Fetch data directly in a Server Component
  const completedTodos = await getCompletedTodos();
  // Forward fetched data to your Client Component

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "6rem",
      }}
    >
      <CompletedTodos completedTodos={completedTodos} />
    </div>
  );
}
