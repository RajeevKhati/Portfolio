import React from "react";

interface SectionHeadingProps {
  heading: string;
}

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-medium mb-8">{heading}</h2>;
};
