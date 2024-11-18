// app/error.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

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
    </Box>
  );
}
