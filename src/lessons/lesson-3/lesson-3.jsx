import React from "react";
import { Lesson3_paragraph, Lesson3_section, Lesson3_title } from "./styled";
import { Lesson1_container } from "../lesson-1/styled";
import Container from "../../components/container/container";
import { Lesson2_hr } from "../lesson-2/styled";

export default function Lesson_3() {
  return (
    <React.Fragment>
      <Lesson3_section>
        <Container>
          <Lesson1_container>
            <Lesson3_title>3-chi dars `Use State`</Lesson3_title>
            <Lesson2_hr />
            <Lesson3_paragraph>Savol Use State o'zi nimaga kerak-?</Lesson3_paragraph>
            <Lesson3_paragraph>Use state bizga birorta bir  ma'lumot o'zgarganda funkasiyani qayta render qilish xususiyatiga ega hook lardan biri <strong>"USE STATE"</strong> hooki hisoblanadi !</Lesson3_paragraph>
          </Lesson1_container>
        </Container>
      </Lesson3_section>
    </React.Fragment>
  );
}
