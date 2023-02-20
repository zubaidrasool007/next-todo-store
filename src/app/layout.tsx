"use client";
import "./globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  width: "25%",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Link href={"/"}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Add
                  </Typography>
                </Link>
                <Link href={"/todos"}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    All
                  </Typography>
                </Link>
                <Link href={"/todos/completed"}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Completed
                  </Typography>
                </Link>
                <Link href={"/todos/incomplete"}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Incomplete
                  </Typography>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {children}
      </body>
    </html>
  );
}
