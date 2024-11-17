"use client"; // Error boundaries must be Client Components
import { useEffect } from "react";
// import ErrorPage from "@/app/ErrorPage";
// import { ErrorStatus } from "@/app/ErrorPage/constants";
import { notFound, useRouter } from "next/navigation";
import Box from "@mui/material/Box";


export default function Error({
                                error,
                                reset
                              }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const {} = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  if (!pageExist) return notFound();

  return (
    <Box className={"h-[calc(100vh-523px)] flex flex-col items-center justify-center"}>
      <button className={"text-black"}
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
      >
        <div className={" text-xl !text-red"}>Something went wrong!, {error.cause}</div>
        <div className={" text-lg !text-red"}>{error.message}</div>
        Try again
      </button>
    </Box>
  );
}
