export enum Status {
  Pending = "Pending",
  UnderReview = "Under Review",
  Approved = "Approved",
  Rejected = "Rejected",
}

export type StatusHistory = {
  status: Status;
  timestamp: string;
  notes: string;
};
