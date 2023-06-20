import Header from "@/components/common/header";
import Index from "@/components/create";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Create() {
  return (
    <Container>
      <Header />
      <Index />
      <Background src="/imgs/main/background.png" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.BACK1};
`;

const Background = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 620px;
  z-index: 0;
`;
