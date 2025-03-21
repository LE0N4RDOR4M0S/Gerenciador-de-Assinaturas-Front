"use client";
import React from 'react';
import "src/globals.css"
// Componente Table
export const Table: React.FC = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">{children}</table>
    </div>
  );
};

// Componente TableHeader
export const TableHeader: React.FC = ({ children }) => {
  return (
    <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
      {children}
    </thead>
  );
};

// Componente TableRow
export const TableRow: React.FC = ({ children }) => {
  return <tr className="border-b">{children}</tr>;
};

// Componente TableHead
export const TableHead: React.FC = ({ children }) => {
  return <th className="px-4 py-2 text-sm">{children}</th>;
};

// Componente TableBody
export const TableBody: React.FC = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// Componente TableCell
export const TableCell: React.FC = ({ children }) => {
  return <td className="px-4 py-2 text-sm">{children}</td>;
};
