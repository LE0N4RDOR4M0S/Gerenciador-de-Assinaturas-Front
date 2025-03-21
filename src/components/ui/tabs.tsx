"use client"

import React, { useState } from 'react';
import "src/globals.css";
// Definindo os tipos das props para Tabs
interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultValue }) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue || "");

  return (
    <div className="w-full">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { selectedTab, setSelectedTab })
          : child
      )}
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="flex border-b border-gray-200">
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, value, selectedTab, setSelectedTab }) => {
  const isSelected = selectedTab === value;

  return (
    <button
      onClick={() => setSelectedTab(value)}
      className={`py-2 px-4 text-sm font-medium text-gray-700 focus:outline-none ${isSelected ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  selectedTab: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({ children, value, selectedTab }) => {
  if (selectedTab !== value) return null;

  return <div className="p-4">{children}</div>;
};
