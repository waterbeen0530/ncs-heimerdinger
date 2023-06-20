import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export default function Index() {
  const listItem = [
    {
      img: "/imgs/list/dog.png",
      data: "23.06.20",
      title: "오운완",
    },
    {
      img: "/imgs/list/51nam.jpeg",
      data: "23.06.19",
      title: "앙기모띠",
    },
    { img: "/imgs/list/aws.png", data: "23.06.19", title: "이얏호" },
    { img: "/imgs/list/ppui.jpeg", data: "23.06.19", title: "오늘의 날씨" },
    { img: "/imgs/list/haha.png", data: "23.06.19", title: "test" },
    { img: "/imgs/list/haha.png", data: "23.06.19", title: "test" },
    { img: "/imgs/list/haha.png", data: "23.06.19", title: "test" },
  ];

  return (
    <Container>
      <Title>인증목록</Title>
      <Wrapper>
        <ListBox>
          {listItem.map((arr, i) => (
            <List key={i}>
              <Image src={arr.img} />
              <Date>{arr.data}</Date>
              <Text>{arr.title}</Text>
            </List>
          ))}
        </ListBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 1000px;
  height: 550px;
  margin-top: 50px;
  border: 1px solid ${theme.WHITE1};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 1000px;
    height: 550px;
    content: "";
    border-radius: 20px;
    z-index: -1;
    opacity: 0.5;
    background-color: ${theme.WHITE1};
  }
`;

const Title = styled.div`
  width: 100%;
  margin: 0 0 30px 140px;
  font-size: 26px;
  font-weight: 700;
  color: ${theme.BLACK1};
`;

const Wrapper = styled.div`
  width: 900px;
  height: 400px;
  padding-top: 150px;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const List = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  background-color: ${theme.WHITE1};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
`;

const Text = styled.div`
  margin: 10px 0 0 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.BLACK1};
`;

const Date = styled.div`
  margin: 16px 0 0 20px;
  font-size: 12px;
  font-weight: 500;
  color: ${theme.PURPLE2};
`;

const Button = styled.button`
  width: 300px;
  height: 54px;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.WHITE1};
  background-color: ${theme.PURPLE1};
  cursor: pointer;
`;
