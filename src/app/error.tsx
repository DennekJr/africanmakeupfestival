// app/error.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <Box sx={{ textAlign: "center", padding: "50px" }} className="!text-red-500">
      <h3 style={{ color: "red" }}>Something went wrong</h3>
      <p style={{ color: "red" }}>{error.message}</p>
      <Button
        variant="outlined"
        sx={{ marginTop: "20px" }}
        onClick={() => reset()}
        // className="!bg-red-500 hover:!bg-red-700 !text-white font-bold py-2 px-4 rounded"
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
