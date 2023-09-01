import React, { useState } from "react";
import { Lesson1_section } from "../lesson-1/styled";
import { Lesson1_container, Lesson1_title } from "../lesson-1/styled";
import Container from "../../components/container/container";
import Button from "./../../components/button/button";
import { Lesson5_list } from "./styled";
import { Lesson2_hr } from "./../lesson-2/styled";
export default function Lesson_5() {
  const [array, setArray] = useState([
    {
      id: 1,
      name: "Jack",
      surname: "Frost",
      age: "21",
    },
    {
      id: 2,
      name: "Huston",
      surname: "Bakker",
      age: "17",
    },
    {
      id: 3,
      name: "Alisa",
      surname: "Orlova",
      age: "23",
    },
    {
      id: 4,
      name: "Pavel",
      surname: "Durov",
      age: "24",
    },
  ]);

  //Delete ites=ms
  const SetDelete = (id) => {
    const FilteredEvent = array.filter((item) => {
      return item.id !== id;
    });
    setArray(FilteredEvent)
  };
  return (
    <React.Fragment>
      <Lesson1_section>
        <Container>
          <Lesson1_container>
            <Lesson1_title>5-chi dars Delete items </Lesson1_title>
            <Lesson2_hr/>
            {/* {array.map((item, index) => (
              <Lesson5_list key={index}>
                {item.id}-{item.name}-{item.surname}- age-{item.age}________
                <Button onClick={() => SetDelete(item.id)}>Delete item</Button>
                <Lesson2_hr />
              </Lesson5_list>
            ))} */}


          </Lesson1_container>
        </Container>
      </Lesson1_section>
    </React.Fragment>
  );
}
