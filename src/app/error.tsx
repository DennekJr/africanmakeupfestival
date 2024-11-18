// app/error.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { notFound } from "@/app/ErrorPage/assets/svg";
import { Result } from "antd";


export enum ErrorStatus {
  NOT_FOUND = "Seems like you're lost ",
  ERROR = "Page crashed",
  UNAUTHORIZED = "Unauthorized",
  UNAUTHENTICATED = "Oops! You're not signed in",
  BOOKING_CLOSED = "We are currently closed",
}

export enum ErrorMessage {
  NOT_FOUND = "Page not found",
  ERROR = "Oops, an error occurred!",
  UNAUTHORIZED = `You're not authorized to view this resource`,
  UNAUTHENTICATED = "Please sign in to continue.",
  BOOKING_CLOSED = "Follow us on instagram @braidsbytifeh to see updates on when we open again.",
}

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);
  const extraButtons = [
    <Button variant="outlined" onClick={() => router.push("/")} key="home">
      Home
    </Button>
  ];

  return (
    <Box sx={{ textAlign: "center", padding: "50px" }}>
      <Typography variant="h3">Something went wrong</Typography>
      <Typography variant="body1">{error.message}</Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "20px" }}
        onClick={() => reset()}
      >
        Try Again
      </Button>
      <Button
        variant="outlined"
        sx={{ marginTop: "20px", marginLeft: "10px" }}
        onClick={() => router.push("/")}
      >
        Go to Homepage
      </Button>
      <Result className={styles["result-error"]} title={ErrorStatus.NOT_FOUND} subTitle={ErrorMessage.NOT_FOUND}
              icon={notFound} extra={extraButtons} />
    </Box>
  );
}
