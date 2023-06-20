import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Deco() {
  return (
    <Container>
      <Image src="/imgs/signup/background.png" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background-color: ${theme.BACK1};
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  border-radius: 20px 0 0 20px;
`;
