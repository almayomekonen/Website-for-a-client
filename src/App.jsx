import React from "react";
import ClientsFeedback from "./components/Clients/Clients";
import OurServices from "./components/Our-Services/OurServices";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ClientsFeedback />
        <OurServices />
      </main>
    </div>
  );
};
export default App;
