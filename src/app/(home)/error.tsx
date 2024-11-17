"use client"; // Error boundaries must be Client Components
import { ErrorStatus } from "@/app/ErrorPage/constants";
import { useEffect } from "react";
import ErrorPage from "@/app/ErrorPage";

export default function Error({
                                error,
                                reset
                              }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorPage status={error.message} />;
}
