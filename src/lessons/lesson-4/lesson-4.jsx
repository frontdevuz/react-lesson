import React, { useState } from "react";
import {
  Lesson2_hr,
  Lesson2_paragraph,
  Lesson2_section,
} from "../lesson-2/styled";
import Container from "../../components/container/container";
import { Lesson1_container, Lesson1_title } from "../lesson-1/styled";
import { Lesson3_p } from "../lesson-3/styled";
import Button from "../../components/button/button";
export default function Lesson_4() {
  const [events, setEvents] = useState([
    { title: "title-1", id: 1 },
    { title: "title-2", id: 2 },
    { title: "title-3", id: 3 },
  ]);
  const SetDelete = (id) => {
    const FilteredEvent = events.filter((item) => {
      item.id !== id;
    });
    setEvents(FilteredEvent);
  };
  return (
    <React.Fragment>
      <Lesson2_section>
        <Container>
          <Lesson1_container>
            <Lesson1_title>
              4-chi dars Ma'lumotlarni list ko'rinishida chiqarish
            </Lesson1_title>
            <Lesson2_hr />
            <Lesson2_paragraph>
              {events.map((item, index) => (
                <div>
                  <Lesson3_p key={index}>
                     {item.title}
                  </Lesson3_p>
                  <Button onClick={() => SetDelete(item.id)}>Delete</Button>
                </div>
              ))}
            </Lesson2_paragraph>
          </Lesson1_container>
        </Container>
      </Lesson2_section>
    </React.Fragment>
  );
}
