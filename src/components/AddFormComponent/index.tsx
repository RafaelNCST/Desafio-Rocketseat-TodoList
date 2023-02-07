import React, { useState } from "react";
import { ButtonCreate, FormContainer, Input } from "./styles";
import { Image } from "../../styles.App";
import PlusImage from "../../assets/images/plus.svg";
import { dataInterface } from "../../App";

interface AddFormComponentProps {
  data: dataInterface[];
  handleChangeData: (newData: dataInterface[]) => void;
}

export const AddFormComponent: React.FC<AddFormComponentProps> = ({
  data,
  handleChangeData,
}) => {
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    const newItem = {
      id: String(data.length),
      content: input,
      isMark: false,
    };

    const copyData = [...data];
    copyData.push(newItem);

    handleChangeData(copyData);
  };

  return (
    <FormContainer htmlFor="InputAddItem">
      <Input
        id="InputAddItem"
        type="text"
        aria-label="Item da lista a criar"
        maxLength={245}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setInput(e.target.value)}
      />
      <ButtonCreate
        type="button"
        title="Criar uma tarefa"
        onClick={handleAddItem}
      >
        Criar
        <Image src={PlusImage} widthImage={1} heightimage={1} alt="" />
      </ButtonCreate>
    </FormContainer>
  );
};
