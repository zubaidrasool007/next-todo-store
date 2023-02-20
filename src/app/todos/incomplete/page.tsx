import React from "react";
import axios from "axios";
import { CompletedTodos } from "@/components/CompletedTodos";
import { InCompleteTodos } from "@/components/InCompleteTodos";

const getInompletedTodos = async () => {
  const url = `http://localhost:3000/api/todos/incomplete`;
  const incompleteTodosData = await axios.get(url).then((res) => res.data);
  return incompleteTodosData;
};
// export const page = async () => {
//   const todoData = await getTodos();
//   return (
//     <div>
//     </div>
//   );
// };

export default async function Page() {
  // Fetch data directly in a Server Component
  const inCompleteTodos = await getInompletedTodos();

  return <InCompleteTodos inCompleteTodos={inCompleteTodos} />;
}
