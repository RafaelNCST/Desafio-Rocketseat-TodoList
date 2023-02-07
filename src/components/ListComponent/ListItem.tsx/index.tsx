import React from "react";
import checkImage from "../../../assets/images/check.svg";
import { ListItemStyled, CheckCircle } from "./styles";
import { Image } from "../../../styles.App";
import { dataInterface } from "../../../App";
import { TrashSVG } from "../../../assets/images";

interface ListItemProps {
  data: dataInterface[];
  handleChangeData: (data: dataInterface[]) => void;
  content: string;
  id: string;
  isMark: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  data,
  handleChangeData,
  content,
  id,
  isMark,
}) => {
  const handleSelectItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const altClick = e.target.checked;
    let newData = [...data];
    newData[Number(id)].isMark = altClick;
    handleChangeData(newData);
  };

  const handleDeleteItem = (id: string) => {
    const clearArray = data.filter((item) => id !== item.id);
    handleChangeData(clearArray);
  };

  return (
    <ListItemStyled key={id} isMark={isMark}>
      <CheckCircle htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          aria-checked={isMark}
          defaultChecked={false}
          onChange={(e) => handleSelectItem(e)}
        />
        <span>
          {isMark ? (
            <Image src={checkImage} widthImage={0.8} heightimage={0.8} />
          ) : null}
        </span>
      </CheckCircle>
      <p>{content}</p>
      <button
        onClick={() => handleDeleteItem(id)}
        type="button"
        title="Deletar item da lista"
      >
        <TrashSVG />
      </button>
    </ListItemStyled>
  );
};
