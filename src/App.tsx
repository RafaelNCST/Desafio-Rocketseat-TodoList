import { useState } from "react";
import { BodyScreen, Header, Image, Text, TextContainer } from "./styles.App";
import RocketImage from "./assets/images/rocket.svg";
import { AddFormComponent, ListComponent } from "./components";

export interface dataInterface {
  id: string;
  content: string;
  isMark: boolean;
}

export const App = () => {
  const [data, setData] = useState<dataInterface[]>([]);

  const handleChangeData = (newData: dataInterface[]) => {
    setData(newData);
  };

  return (
    <BodyScreen className="App">
      <Header>
        <Image
          src={RocketImage}
          heightimage={2.25}
          widthImage={1.375}
          alt="logo site"
        />
        <TextContainer>
          <Text colortext="BLUE">to</Text>
          <Text colortext="PURPLE_DARK">do</Text>
        </TextContainer>
      </Header>
      <AddFormComponent data={data} handleChangeData={handleChangeData} />
      <ListComponent data={data} handleChangeData={handleChangeData} />
    </BodyScreen>
  );
};
