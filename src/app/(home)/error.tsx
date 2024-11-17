"use client"; // Error boundaries must be Client Components
import { useEffect } from "react";
import ErrorPage from "@/app/ErrorPage";
import { ErrorStatus } from "@/app/ErrorPage/constants";

export default function Error({error}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorPage status={ErrorStatus.ERROR} />;
}
