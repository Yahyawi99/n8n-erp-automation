import React from "react";
// Layout
import Layout from "./components/layout";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";

const App: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex  font-wdxl">
      <Sidebar />

      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default App;
