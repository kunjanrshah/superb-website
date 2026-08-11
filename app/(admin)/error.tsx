"use client";

import ErrorFallback from "@/components/ErrorFallback/ErrorFallback";

export default function AdminError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <ErrorFallback error={error} retry={retry} section="admin page" />;
}