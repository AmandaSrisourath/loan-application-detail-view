import { create } from "zustand";
import { Status, StatusHistory } from "../types";

type LoanStore = {
  id: string;
  applicationName: string;
  loanAmount: number;
  loanPurpose: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  applicationDate: string;
  currentStatus: Status;
  statusHistory: Array<StatusHistory>;
  setStatus: (status: Status) => void;
};

const initialState = {
  id: "APP-2024-001",
  applicationName: "Sarah Mitchell",
  loanAmount: 250000,
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

const useLoanStore = create<LoanStore>((set) => ({
  ...initialState,
  setStatus: (status: Status) =>
    set((state) => ({
      currentStatus: status,
      statusHistory: [
        ...state.statusHistory,
        {
          status,
          timestamp: new Date().toISOString(),
          notes: `Status changed to ${status}`,
        },
      ],
    })),
}));

export default useLoanStore;
