// // "use client";
// import MaterialTable from "material-table";
// import React from "react";
// import { Todo } from "utils/types";

// interface IProps {
//   todoData: Array<Todo>;
// }

// export const TodoTable = (props: IProps) => {
//   const { todoData } = props;
//   return (
//     <div style={{ maxWidth: "100%" }}>
//       <MaterialTable
//         columns={[
//           { title: "Todo", field: "todo" },
//           { title: "Description", field: "description" },
//           { title: "Gender", field: "gender" },
//           {
//             title: "Age",
//             field: "age",
//           },
//           {
//             title: "Martial Status",
//             field: "martial_status",
//           },
//           { title: "Completed", field: "completed" },
//         ]}
//         data={todoData}
//         title="Todo Table"
//       />
//     </div>
//   );
// };
