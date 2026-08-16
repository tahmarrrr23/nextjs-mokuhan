"use client";

export default function RouteError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <section>
      <p>Something went wrong</p>
      <button type="button" onClick={retry}>
        Try again
      </button>
    </section>
  );
}
