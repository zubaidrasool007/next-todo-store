"use client";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { Todo } from "utils/types";
import * as yup from "yup";
import axios from "axios";

interface todos {
  editedTodo?: Todo;
}

export const TodoMain = (props: todos) => {
  const { editedTodo } = props;
  const router = useRouter();

  const postTodoData = (todo: any) => {
    const url = "http://localhost:3000/api/todos";
    axios.post(url, todo);
  };

  const updateTodoData = (id: any, todo: any) => {
    const url = `http://localhost:3000/api/todos/${id}`;
    axios.put(url, todo);
  };
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          todo: editedTodo?.todo || "",
          description: editedTodo?.description || "",
          gender: editedTodo?.gender || "",
          martialStatus: editedTodo?.martial_status || "",
          age: editedTodo?.age || null,
          completed: editedTodo?.completed || false,
        }}
        validationSchema={yup.object().shape({
          todo: yup.string().required("Please enter Todo"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          let todo: Todo = {
            todo: values.todo,
            completed: values.completed,
            description: values.description,
            gender: values.gender,
            martial_status: values.martialStatus,
            age: values.age,
          };

          // Make the API request
          if (editedTodo) {
            updateTodoData(editedTodo?._id, todo);
          } else {
            postTodoData(todo);
          }
          values.todo = "";
          router.push("/todos");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">Title</FormLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Title"
              name="todo"
              fullWidth
              onChange={handleChange}
              value={values.todo}
            />
            <FormLabel id="demo-row-radio-buttons-group-label">
              Description
            </FormLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="description"
              name="description"
              rows={4}
              multiline
              fullWidth
              onChange={handleChange}
              value={values.description}
            />

            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              // name="gender"
              onChange={handleChange}
              value={values.gender}
            >
              <FormControlLabel
                value="Female"
                name="gender"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                name="gender"
                value="Male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="Other"
                name="gender"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              <Checkbox
                name="completed"
                defaultChecked={values.completed}
                onChange={handleChange}
              />
              Do you want to add it in completed category?
            </FormLabel>

            <Button variant="contained" type="submit" disabled={isSubmitting}>
              {!editedTodo ? "Add Todo" : "Update Todo"}
            </Button>
            {errors.todo && touched.todo && errors.todo}
          </form>
        )}
      </Formik>
    </div>
  );
};
