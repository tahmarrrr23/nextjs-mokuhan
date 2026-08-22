"use client";

import { globalFont } from "@/styles/fonts";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <title>Something went wrong | Mokuhan Next.js</title>
        <main>
          <section>
            <p>Something went wrong</p>
            <button type="button" onClick={retry}>
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
