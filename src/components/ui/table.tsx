"use client";
import React, { ReactNode } from 'react';
import "src/globals.css"


interface TableProps {
  children?: ReactNode
}

export function Table({ children }: TableProps) {
  return <table className="table">{children}</table>
}

export const TableHeader: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
      {children}
    </thead>
  );
};

export const TableRow: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <tr className="border-b">{children}</tr>;
};

export const TableHead: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <th className="px-4 py-2 text-sm">{children}</th>;
};

export const TableBody: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableCell: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <td className="px-4 py-2 text-sm">{children}</td>;
};
