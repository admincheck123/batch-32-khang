import React from "react";

import MullitipleOpen from "./multipleOpen";
import OpenAtTime from "./openAtATime";

export default function ButtonAccordions(props) {
  return (
    <div className="d-flex flex-row">
      <OpenAtTime className="me-5" />

      <MullitipleOpen />
    </div>
  );
}