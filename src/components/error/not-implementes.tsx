"use client"

import { FaTools } from "react-icons/fa";

export default function NotImplements() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-primary">Em desenvolvimento</h1>
        <p className="text-lg text-muted-foreground text-center">
          A funcionalidade ainda não foi implementada, aguarde enquanto trabalhamos nela.
        </p>
        <FaTools className="text-9xl text-muted-foreground" />
      </div>
    </div>
  )
}