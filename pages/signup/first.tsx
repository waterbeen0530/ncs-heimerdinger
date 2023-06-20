import Deco from "@/components/signup/deco";
import ItemBox from "@/components/signup/itemBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function First() {
  return (
    <Container>
      <Wrapper>
        <Deco />
        <ItemBox />
      </Wrapper>
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
  background-color: ${theme.WHITE1};
`;

const Wrapper = styled.div`
  width: 980px;
  height: 550px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.WHITE1};
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
