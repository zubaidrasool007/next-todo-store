"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Todo } from "utils/types";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import CardHeader from "@mui/material/CardHeader";
import Link from "next/link";

interface IProps {
  todoDetail?: Todo;
}
export const TodoDetail = (props: IProps) => {
  const { todoDetail } = props;
  const router = useRouter();
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>Title</h3>
            {todoDetail?.todo}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>Description</h3>
            {todoDetail?.description ? (
              todoDetail?.description
            ) : (
              <NotGiven todoDetail={todoDetail} />
            )}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>Gender</h3>
            {todoDetail?.gender ? (
              <ul>
                <li> {todoDetail?.gender}</li>
              </ul>
            ) : (
              <NotGiven todoDetail={todoDetail} />
            )}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>Martial Status</h3>
            {todoDetail?.martial_status ? (
              <ul>
                <li> {todoDetail?.martial_status}</li>
              </ul>
            ) : (
              <NotGiven todoDetail={todoDetail} />
            )}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>Age</h3>
            {todoDetail?.age ? (
              todoDetail?.age
            ) : (
              <NotGiven todoDetail={todoDetail} />
            )}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>Todo Status</h3>
            {todoDetail?.completed === true ? "Completed" : "Incomplete"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              router.push("/todos");
            }}
          >
            All Todos
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export const NotGiven = (props: IProps) => {
  const { todoDetail } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <p>Not Given</p>
      <Link
        href={{
          pathname: `/todos/${todoDetail?._id}`,
          query: { isEdit: true },
        }}
      >
        <AddIcon fontSize="small" />
      </Link>
    </div>
  );
};
