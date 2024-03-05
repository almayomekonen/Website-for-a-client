import React, { Fragment } from "react";
import ClientFeedback from "../Client/ClientFeedback";
import { CLIENTS_WORKS } from "../../data";

const ClientsFeedback = () => {
  return (
    <Fragment>
      <h2>!עבודות שלי</h2>
      <section id="clients-feedbacks">
        <ul>
          {CLIENTS_WORKS.map((client) => (
            <ClientFeedback key={client.title} {...client} />
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default ClientsFeedback;
