import React, { Fragment } from "react";

const Tabs = ({ children, buttons, ButtonsContainer }) => {
  return (
    <Fragment>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </Fragment>
  );
};
export default Tabs;
