"use client";

import ErrorFallback from "@/components/ErrorFallback/ErrorFallback";

export default function RootError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <ErrorFallback error={error} retry={retry} section="page" />;
}