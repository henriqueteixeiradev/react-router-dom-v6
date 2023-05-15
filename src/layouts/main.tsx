import React from "react";
import { NavBar } from "../components";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}

export default Layout;
