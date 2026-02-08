"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type Field = {
  label: string;
  value: string | number;
  format?: (val: string | number) => string;
};

type CardDetailsProps = {
  title: string;
  fields: Field[];
};

function FieldItem({ label, value, format }: Field) {
  return (
    <div className="flex-col">
      <div className="text-muted-foreground font-medium">{label}</div>
      <div>{format ? format(value) : value}</div>
    </div>
  );
}

export default function CardDetails({ title, fields }: CardDetailsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {fields.map((field) => (
            <FieldItem key={field.label} {...field} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
