import React from "react";
// layouts
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className="">
      <Header />

      {children}
    </main>
  );
};

export default Layout;
