import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import App from "../App";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

describe("GitHub Pages routing", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/website_portfolio_projects/");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders the home page when the app is opened from the repository subpath", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Marycynthia Okeke/i })).toBeInTheDocument();
  });
});
