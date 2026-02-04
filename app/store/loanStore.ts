import { create } from "zustand";
import { Status, StatusHistory } from "../types";

type LoanStore = {
  id: string;
  applicationName: string;
  loanAmout: number;
  loanPurpose: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  applicationDate: string;
  currentStatus: Status;
  statusHistory: Array<StatusHistory>;
};

const initialState = {
  id: "APP-2024-001",
  applicationName: "Sarah Mitchell",
  loanAmout: 250000,
  loanPurpose: "Home Purchase",
  annualIncome: 95000,
  employmentStatus: "Full-time",
  creditScore: 720,
  applicationDate: "2024-12-15",
  currentStatus: Status.Pending,
  statusHistory: [
    {
      status: Status.Pending,
      timestamp: "2024-12-15T09:30:00Z",
      notes: "Application submitted",
    },
  ],
};

const useLoanStore = create<LoanStore>(() => initialState);

export default useLoanStore;
