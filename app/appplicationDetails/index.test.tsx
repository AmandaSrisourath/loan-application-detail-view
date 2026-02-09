import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import useLoanStore from "../store/loanStore";
import { Status } from "../types";
import ApplicationDetails from "./index";

describe("ApplicationDetails - Full Status Flow", () => {
  beforeEach(() => {
    useLoanStore.setState({
      applicationName: "Jane Doe",
      annualIncome: 100000,
      employmentStatus: "Full-time",
      creditScore: 500,
      loanAmount: 700000,
      loanPurpose: "Home Purchase",
      applicationDate: "2024-12-15",
      currentStatus: Status.Pending,
      statusHistory: [],
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("should transition from Pending -> Under Review -> Approved", async () => {
    const user = userEvent.setup();

    // Start with Pending status
    render(<ApplicationDetails />);
    let badge = screen.getByText(Status.Pending);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-gray-100", "text-gray-600");

    // Click Under Review button
    const underReviewButton = screen.getByRole("button", {
      name: /under review/i,
    });
    await user.click(underReviewButton);

    badge = screen.getByText(Status.UnderReview);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-blue-50", "text-blue-600");

    // Click Approve button
    const approveButton = screen.getByRole("button", {
      name: /approve/i,
    });
    await user.click(approveButton);

    badge = screen.getByText(Status.Approved);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-green-50", "text-green-600");
  });

  it("should transition from Pending -> Under Review -> Rejected", async () => {
    const user = userEvent.setup();

    // Start with Pending status
    render(<ApplicationDetails />);
    let badge = screen.getByText(Status.Pending);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-gray-100", "text-gray-600");

    // Click Under Review button
    const underReviewButton = screen.getByRole("button", {
      name: /under review/i,
    });
    await user.click(underReviewButton);

    badge = screen.getByText(Status.UnderReview);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-blue-50", "text-blue-600");

    // Click Reject button
    const rejectButton = screen.getByRole("button", {
      name: /reject/i,
    });
    await user.click(rejectButton);

    badge = screen.getByText(Status.Rejected);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-red-50", "text-red-600");
  });
});
