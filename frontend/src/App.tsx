import { useEffect, useState } from "react";

type ApiState = "checking" | "ready" | "unavailable";

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export default function App() {
  const [apiState, setApiState] = useState<ApiState>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${apiUrl}/api/health`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Health check failed");
        }
        setApiState("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setApiState("unavailable");
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="shell">
      <section className="card" aria-labelledby="page-title">
        <div className="eyebrow">Take-home starter</div>
        <h1 id="page-title">RoomReserve</h1>
        <p className="lede">
          Build a meeting-room reservation system for a shared office. The
          starter applications are connected; the product is yours to implement.
        </p>

        <div className={`status status--${apiState}`} role="status">
          <span className="status__dot" aria-hidden="true" />
          {apiState === "checking" && "Checking the FastAPI service…"}
          {apiState === "ready" && "React is connected to FastAPI."}
          {apiState === "unavailable" &&
            "The FastAPI service is unavailable. Check Docker Compose."}
        </div>

        <p className="instructions">
          Read <code>README.md</code> before you begin. FastAPI documentation is
          available at <a href={`${apiUrl}/docs`}>{apiUrl}/docs</a>.
        </p>
      </section>
    </main>
  );
}
