import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => undefined)));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the interview starter", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "RoomReserve" })).toBeInTheDocument();
    expect(screen.getByText("Checking the FastAPI service…")).toBeInTheDocument();
  });
});
