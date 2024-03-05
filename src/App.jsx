import React, { Fragment, useState } from "react";
import Button from "./components/Button/Button";
import ClientsFeedback from "./components/Clients/Clients";
import { OUR_SERVICES } from "./data";

const App = () => {
  const [showContent, setShowContent] = useState("wedding");

  const handleSelectedTopic = (selectedTopic) => {
    setShowContent(selectedTopic);
    console.log(selectedTopic);
  };

  return (
    <div>
      <main>
        <ClientsFeedback />
        <section id="our-services">
          <h2>.השירותים שאני מציעה</h2>
          <menu>
            <Button onClick={() => handleSelectedTopic("wedding")}>
              תסרוקת אירועים מותאמת אישית
            </Button>
            <Button onClick={() => handleSelectedTopic("shades")}>
              גוונים והדגשות
            </Button>
            <Button onClick={() => handleSelectedTopic("haircut")}>
              תספורת ועיצובים חדשניים
            </Button>
            <Button onClick={() => handleSelectedTopic("revitalization")}>
              החייאת שיער וקרטין
            </Button>
          </menu>
        </section>
        <section id="services">
          <Fragment>
            <h2>{OUR_SERVICES[showContent].title}</h2>
            <div className="center-images">
              <img
                className="clients-image"
                src={OUR_SERVICES[showContent].image}
                alt={OUR_SERVICES[showContent].title}
              />
            </div>
            <p>{OUR_SERVICES[showContent].description}</p>
            <pre></pre>
          </Fragment>
        </section>
      </main>
    </div>
  );
};
export default App;
