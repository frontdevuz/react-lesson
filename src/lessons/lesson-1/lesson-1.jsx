import React, { useState } from "react";
import Container from "../../components/container/container";
import {
  Lesson1_button,
  Lesson1_container,
  Lesson1_section,
  Lesson1_title,
  Lesson1_button_div,
} from "./styled";

import Button from "./../../components/button/button";

export default function Lesson_1() {
  const Event = "Events";
  const Title = "Welcome to my web app";
  let click = (e) => {
    console.log("You clicked me 👍");
    console.log("This is title  of my web site", Title);
    console.log(e);
  };
  const [essey, setEssey] = useState("");
  const Yoz = () => setEssey((essey, "Sen 'meni bos' degan buttonni bosding"));
  let Ochir = () => setEssey((essey,null));
  return (
    <React.Fragment>
      <Lesson1_section>
        <Container>
          <Lesson1_container>
            <Lesson1_title style={{ marginBottom: "2rem" }}>
              1-chi dars Eventlar ya'ni onClick onChange va h.k{" "}
            </Lesson1_title>
            <Lesson1_title>{Title}</Lesson1_title>
            <Lesson1_title>{Event}</Lesson1_title>
            <Lesson1_button_div>
              {/* <Lesson1_button onClick={click}>Meni bos</Lesson1_button> */}
              {/* <Lesson1_button
                onClick={() => {
                  console.log("Meni bos");
                }}
              >
                Click me
              </Lesson1_button> */}
              <Button onClick={() => console.log("Meni bos")}>Meni bos</Button>
              <Button onClick={(e) => console.log(e)}>
                Event haqida ma'lumot
              </Button>
              <Button onClick={Yoz}>Bos</Button>
              <Button onClick={Ochir}>Ochir</Button>
            </Lesson1_button_div>
            <Lesson1_title>{essey}</Lesson1_title>
          </Lesson1_container>
        </Container>
      </Lesson1_section>
    </React.Fragment>
  );
}
