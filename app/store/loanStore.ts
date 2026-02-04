import { create } from "zustand";

enum Status {
  Pending = "Pending",
  UnderReview = "Under Review",
  Approved = "Approved",
  Rejected = "Rejected",
}

type StatusHistory = {
  status: Status;
  timestamp: string;
  notes: string;
};

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

const useLoanStore = create<LoanStore>(() => ({
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
}));

export default useLoanStore;
