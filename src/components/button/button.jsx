import React from "react";
import { Buttonbek } from "./styled";

export default function Button(props) {
  const { onClick } = props;
  return (
    <React.Fragment>
      <Buttonbek onClick={onClick}>{props.children}</Buttonbek>
    </React.Fragment>
  );
}
