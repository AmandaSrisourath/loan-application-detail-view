"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import useLoanStore from "../store/loan-store";
import { Status } from "../types";
import CardDetails, { Field } from "./components/card-details";
import StatusActions from "./components/status-actions";

export default function ApplicationDetails() {
  const {
    applicationName,
    annualIncome,
    employmentStatus,
    creditScore,
    loanAmount,
    loanPurpose,
    applicationDate,
    currentStatus,
    setStatus,
  } = useLoanStore();

  const applicantFields = [
    {
      label: "Name",
      value: applicationName,
    },
    {
      label: "Annual Income",
      value: annualIncome,
      format: (val: Field["value"]) => `$${Number(val).toLocaleString()}`,
    },
    {
      label: "Employment",
      value: employmentStatus,
    },
    {
      label: "Credit Score",
      value: creditScore,
    },
  ];

  const loanFields = [
    {
      label: "Loan Amount",
      value: loanAmount,
      format: (val: Field["value"]) => `$${Number(val).toLocaleString()}`,
    },
    {
      label: "Loan Purpose",
      value: loanPurpose,
    },
    {
      label: "Application Date",
      value: applicationDate,
      format: (val: Field["value"]) =>
        new Date(val).toLocaleDateString("en-AU"),
    },
  ];

  const statusStyles = {
    [Status.Pending]: "bg-gray-100 text-gray-600",
    [Status.UnderReview]: "bg-blue-50 text-blue-600",
    [Status.Approved]: "bg-green-50 text-green-600",
    [Status.Rejected]: "bg-red-50 text-red-600",
  };

  return (
    <Card className="w-full p-4">
      <Badge
        className={cn(
          "w-full h-16 rounded-lg text-lg",
          statusStyles[currentStatus],
        )}
      >
        {currentStatus}
      </Badge>

      <CardDetails title="Applicant Details" fields={applicantFields} />
      <CardDetails title="Loan Details" fields={loanFields} />

      <StatusActions currentStatus={currentStatus} setStatus={setStatus} />
    </Card>
  );
}
