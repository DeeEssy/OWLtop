import { withLayout } from "../layouts/DefaultLayout/DefaultLayout";
import React, { useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "@/components/index";

const Home = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState(4);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button withArrow onClick={() => setCounter(counter + 1)} primary>
        button
      </Button>
      <Button withArrow ghost>
        button
      </Button>
      <Ptag margin="10px 0 0 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        consequatur nam nesciunt inventore architecto sed vitae esse nemo a
        excepturi laudantium illum, labore ex. Explicabo debitis distinctio amet
        iure illum? Soluta iusto exercitationem architecto in ab. Accusantium
        sed consectetur illo quo architecto amet, placeat quos sit sequi, vel
        quae, laborum iure! Ullam, eveniet perferendis tempora qui aspernatur
        rerum consequuntur asperiores.
      </Ptag>
      <Tag color="red">test</Tag>
      <Tag size="large" color="green">
        test
      </Tag>
      <Tag size="large" color="grey">
        test
      </Tag>
      <Tag size="large" color="primary">
        test
      </Tag>
      <Tag size="large" url="https://www.youtube.com/" color="primary">
        test
      </Tag>
      <Rating isEditable setRating={setRating} rating={rating} />
    </>
  );
};

export default withLayout(Home);
