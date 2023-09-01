import React, { useState } from "react";
import {
  Lesson2_container,
  Lesson2_section,
  Lesson2_title,
  Lesson2_paragraph,
  Lesson2_hr,
} from "./styled";
import Container from "./../../components/container/container";
import Button from "./../../components/button/button";
export default function Lesson_2() {
  const [ism, setIsm] = useState("Izzatillo");
  const x = () => {
    setIsm("Jonh");
  };
  return (
    <React.Fragment>
      <Lesson2_section>
        <Container>
          <Lesson2_container>
            <Lesson2_title>2-chi dars `State`</Lesson2_title>
            <Lesson2_hr />
            <Lesson2_title>Bizga nega "state" kerak ?</Lesson2_title>
            <Lesson2_hr />
            <Lesson2_paragraph>
              Xo'sh state bizga nima uchun kerak -? Odatda har bir componentni
              kichik bir ma'lumotlar omborchasi bo'ladi va ana shu omborcha
              odatda state dep nomlanadi.
            </Lesson2_paragraph>
            <Lesson2_hr />
            <Lesson2_paragraph>
              Componentdagi ma'lumotlar <b>stateda saqlanadi</b> va <b>state</b>{" "}
              o'zgaruvchan bo'lishi mumkin !
            </Lesson2_paragraph>
            <Lesson2_hr />
            <Lesson2_paragraph>
              Odatda hooklar ya'ni state lar 'use' so'zi bilan boshlanadi !
            </Lesson2_paragraph>
            <Lesson2_hr />
            <Lesson2_paragraph>
              State bizga biron bir button bosish yokida backendan ma'lumot
              olishda o'zgarib turishi mumkin !
              <Lesson2_hr />
            </Lesson2_paragraph>
            <Lesson2_paragraph>My name is {ism}</Lesson2_paragraph>
            <Button onClick={x}>Meni bos</Button>
          </Lesson2_container>
        </Container>
      </Lesson2_section>
    </React.Fragment>
  );
}
