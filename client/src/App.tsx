import React from "react";
// Layout
import Layout from "./components/layout";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />

      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default App;
