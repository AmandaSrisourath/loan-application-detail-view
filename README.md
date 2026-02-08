<div align="center">
  <img src="https://github.com/AmandaSrisourath/loan-application-detail-view/blob/master/public/logo.webp" alt="UME Logo">
</div>

# Loan Application Detail View

Loan application management interface built with Next.js, Zustand, and Shadcn UI. Displays applicant and loan details with a status management system.

## Setup

Install and run:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000)

Build for production:

```bash
bun run build
bun start
```

## How it works

- **Pending**: Shows "Under Review" button
- **Under Review**: Shows "Approve" and "Reject" buttons
- **Approved/Rejected**: Buttons are hidden

Status changes update a history. Badge color changes: gray → blue → green or red.

## What's used

- **Next.js**: React framework
- **Zustand**: Simple state management
- **Shadcn UI**: Component library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling

## Features

- Colour status badge
- Buttons to change status
- Toast feedback
- Type-safe fields with optional formatters
