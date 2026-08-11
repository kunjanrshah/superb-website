import Link from "next/link";
import { useEffect } from "react";

interface ErrorFallbackProps {
  error: Error & { digest?: string };
  retry: () => void;
  section?: string;
}

/**
 * Reusable error boundary fallback UI.
 *
 * Rendered by Next.js `error.js` / `global-error.js` special files when an
 * uncaught exception is thrown inside a route segment. It surfaces the error
 * message, the server-side digest (to correlate with server logs), and a
 * "Try again" action that re-renders the segment via the `retry()` function.
 */
export default function ErrorFallback({
  error,
  retry,
  section = "page",
}: ErrorFallbackProps) {
  useEffect(() => {
    // Log the error to the console / an error reporting service.
    console.error(`[ErrorBoundary:${section}]`, error);
  }, [error, section]);

  return (
    <main className="flex-1">
      <div className="container-fluid py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-octagon display-1 text-danger"></i>
              <h1 className="display-6 mt-3">Something went wrong</h1>
              <p className="mb-4">
                An unexpected error occurred while rendering this {section}. The
                issue has been logged. Please try again, or head back to the
                home page.
              </p>

              <p className="text-muted small mb-4">
                Error: {error.message || "Unknown error"}
                {error.digest ? (
                  <>
                    <br />
                    Digest: <code>{error.digest}</code>
                  </>
                ) : null}
              </p>

              <div className="d-flex justify-content-center gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-3 px-5"
                  onClick={() => retry()}
                >
                  Try Again
                </button>
                <Link
                  className="btn btn-outline-secondary rounded-pill py-3 px-5"
                  href="/"
                >
                  Go Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}