"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Log the error to the console / an error reporting service.
    console.error("[GlobalErrorBoundary]", error);
  }, [error]);

  return (
    // global-error must include html and body tags
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: "#f8f9fa",
          color: "#212529",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem", maxWidth: "560px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
          <h1 style={{ fontSize: "1.75rem", margin: "0 0 0.75rem" }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
            A critical error occurred while rendering the application. The issue
            has been logged. Please try again, or reload the page.
          </p>

          <p
            style={{
              fontSize: "0.875rem",
              color: "#6c757d",
              margin: "0 0 1.5rem",
              wordBreak: "break-word",
            }}
          >
            Error: {error.message || "Unknown error"}
            {error.digest ? (
              <>
                <br />
                Digest: <code>{error.digest}</code>
              </>
            ) : null}
          </p>

          <button
            type="button"
            onClick={() => retry()}
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "#0d6efd",
              border: "none",
              borderRadius: "50rem",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}