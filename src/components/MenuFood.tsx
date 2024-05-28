import { useContext } from "react";
import { Card } from "./Card";
import { ApiContext } from "../provider/ApiProvider";

export function MenuFood() {
  const { apiData } = useContext(ApiContext);

  return (
    <div id="meals">
      {apiData.map((food) => (
        <Card
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          description={food.description}
          image={food.image}
        />
      ))}
    </div>
  );
}
