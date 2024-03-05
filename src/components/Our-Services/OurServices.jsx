import React, { Fragment, useState } from "react";

import { OUR_SERVICES } from "../../data";
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";

const OurServices = () => {
  const [showContent, setShowContent] = useState("wedding");

  const handleSelectedTopic = (selectedTopic) => {
    setShowContent(selectedTopic);
  };

  return (
    <Fragment>
      <section id="our-services">
        <h2>.השירותים שאני מציעה</h2>
        <Tabs
          ButtonsContainer="menu"
          buttons={
            <>
              <Button
                isActive={showContent === "wedding"}
                onClick={() => handleSelectedTopic("wedding")}
              >
                תסרוקת אירועים מותאמת אישית
              </Button>
              <Button
                isActive={showContent === "shades"}
                onClick={() => handleSelectedTopic("shades")}
              >
                גוונים והדגשות
              </Button>
              <Button
                isActive={showContent === "haircut"}
                onClick={() => handleSelectedTopic("haircut")}
              >
                תספורת ועיצובים חדשניים
              </Button>
              <Button
                isActive={showContent === "revitalization"}
                onClick={() => handleSelectedTopic("revitalization")}
              >
                החייאת שיער וקרטין
              </Button>
            </>
          }
        ></Tabs>
      </section>

      <section id="services">
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
      </section>
    </Fragment>
  );
};

export default OurServices;
