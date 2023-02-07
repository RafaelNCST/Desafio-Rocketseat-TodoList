import React, { useEffect, useState } from "react";
import {
  ListBody,
  TextContainer,
  List,
  TextCount,
  CountContainer,
  TextBlankSpace,
  Text,
  ContainerBlankList,
} from "./styles";
import { Image } from "../../styles.App";
import clipboardImage from "../../assets/images/Clipboard.svg";
import { ListItem } from "./ListItem.tsx";
import { dataInterface } from "../../App";

interface ListComponentProps {
  data: dataInterface[];
  handleChangeData: (newData: dataInterface[]) => void;
}

export const ListComponent: React.FC<ListComponentProps> = ({
  data,
  handleChangeData,
}) => {
  const checkedItens = data
    .filter((item) => item.isMark === true)
    .map((item) => item.id);

  return (
    <ListBody>
      <TextContainer>
        <TextContainer>
          <Text colortext="BLUE">Tarefas criadas</Text>
          <CountContainer widthcount="2">
            <TextCount>{data.length}</TextCount>
          </CountContainer>
        </TextContainer>
        <TextContainer>
          <Text colortext="PURPLE_DARK">concluídas</Text>
          <CountContainer widthcount="5">
            <TextCount>
              {data.length > 0
                ? `${checkedItens.length} de ${data.length}`
                : data.length}
            </TextCount>
          </CountContainer>
        </TextContainer>
      </TextContainer>

      {data.length > 0 ? (
        <List isbordertop={false}>
          {data.map(({ content, id, isMark }) => {
            return (
              <ListItem
                data={data}
                content={content}
                id={id}
                handleChangeData={handleChangeData}
                isMark={isMark}
              />
            );
          })}
        </List>
      ) : (
        <List isbordertop>
          <ContainerBlankList>
            <Image src={clipboardImage} widthImage={3.5} heightimage={3.5} />
            <TextBlankSpace ismargintop isbold>
              Você ainda não tem tarefas cadastradas
            </TextBlankSpace>
            <TextBlankSpace ismargintop={false} isbold={false}>
              Crie tarefas e organize seus itens a fazer
            </TextBlankSpace>
          </ContainerBlankList>
        </List>
      )}
    </ListBody>
  );
};
