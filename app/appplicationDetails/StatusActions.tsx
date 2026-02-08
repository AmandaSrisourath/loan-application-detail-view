"use client";

import { Button } from "@/components/ui/button";
import { Check, FileSearch, X } from "lucide-react";
import { toast } from "sonner";
import { Status } from "../types";

type StatusActionsProps = {
  currentStatus: Status;
  setStatus: (status: Status) => void;
};

export default function StatusActions({
  currentStatus,
  setStatus,
}: StatusActionsProps) {
  const iconStyles = "h-4 w-4";

  if (currentStatus === Status.Pending) {
    return (
      <div className="flex justify-end">
        <Button
          variant="secondary"
          onClick={() => {
            setStatus(Status.UnderReview);
            toast.info("Application under review!");
          }}
        >
          <FileSearch className={iconStyles} />
          Under Review
        </Button>
      </div>
    );
  }

  if (currentStatus === Status.UnderReview) {
    return (
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          onClick={() => {
            setStatus(Status.Approved);
            toast.success("Application approved!");
          }}
        >
          <Check className={iconStyles} />
          Approve
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            setStatus(Status.Rejected);
            toast.error("Application rejected!");
          }}
        >
          <X className={iconStyles} />
          Reject
        </Button>
      </div>
    );
  }
}
