import React, { JSX } from 'react';

// Definindo os tipos das props
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 p-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-gray-100 p-4">{children}</div>;
};

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="text-xl font-semibold text-gray-900">{children}</h3>;
};

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="text-sm text-gray-600">{children}</p>;
};

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-gray-100 p-4">{children}</div>;
};


export function ChartContainer({
  children,
  className,
  config,
}: {
  children: React.ReactNode;
  className?: string;
  config?: {
    revenue: { label: string; color: string };
    subscriptions: { label: string; color: string };
  };
}): JSX.Element {
  return (
    <div className={`chart-container ${className || ''}`}>
      {children}
    </div>
  );
}

export const ChartTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-white p-2 shadow-md">{children}</div>;
};

export const ChartTooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-sm text-gray-600">{children}</div>;
};
