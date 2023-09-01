import React from "react";
import Lesson_1 from "./../lessons/lesson-1/lesson-1";
import Lesson_2 from "../lessons/lesson-2/lesson-2";
import Lesson_3 from "../lessons/lesson-3/lesson-3";
import Lesson_4 from "../lessons/lesson-4/lesson-4";
import { Components, Title } from "./styled";
import Lesson_5 from "../lessons/lesson-5/lesson-5";

export default function Folder() {
  let sarlavha = "React darslar";
  return (
    <React.Fragment>
      <Components>
        <Title>{sarlavha}</Title>
        <Lesson_1 />
        <Lesson_2 />
        <Lesson_3/>
        <Lesson_4/>
        <Lesson_5/>
      </Components>
    </React.Fragment>
  );
}
