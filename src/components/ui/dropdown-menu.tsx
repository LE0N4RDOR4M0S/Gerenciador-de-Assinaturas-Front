"use client";

import "src/globals.css"
import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu>
        {trigger}
        <ChevronDown className="w-4 h-4 ml-2" />
      </Menu>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function DropdownMenuContent({ children }: { children: ReactNode }) {
  return <div className="py-1">{children}</div>;
}

export function DropdownMenuItem({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`block w-full text-left px-4 py-2 text-sm ${
            active ? "bg-gray-100" : ""
          }`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}

export function DropdownMenuLabel({ children }: { children: ReactNode }) {
  return <div className="px-4 py-2 text-xs text-gray-500">{children}</div>;
}

export function DropdownMenuSeparator() {
  return <div className="border-t border-gray-300 my-1" />;
}
