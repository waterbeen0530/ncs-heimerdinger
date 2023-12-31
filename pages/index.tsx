import Header from "@/components/common/header";
import ItemBox from "@/components/main/itemBox";
import TitleBox from "@/components/main/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <TitleBox />
        <ItemBox />
      </Wrapper>
      <Background src="/imgs/main/background.png" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-color: ${theme.BACK1};
`;

const Wrapper = styled.div`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Background = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 620px;
  z-index: 0;
`;
