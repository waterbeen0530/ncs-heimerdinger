import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function ItemBox() {
  return (
    <Container>
      <Profile src="/imgs/main/profile.png" />
      <TextBox>
        <Level>Lv.1</Level>
        <Max>최대 누적 인증 수: 5</Max>
        <Now>현재 누적 인증 수: 3</Now>
      </TextBox>
      <ButtonBox>
        <Button>인증하기</Button>
        <Button>인증하기</Button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 550px;
  border: 1px solid ${theme.WHITE1};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 550px;
    content: "";
    border-radius: 20px;
    z-index: -1;
    opacity: 0.5;
    background-color: ${theme.WHITE1};
  }
`;

const Profile = styled.img`
  width: 160px;
  margin-bottom: 20px;
`;

const TextBox = styled.div`
  color: ${theme.BLACK1};
  margin-bottom: 20px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Level = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const Max = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const Now = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const ButtonBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 300px;
  height: 56px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.WHITE1};
  background-color: ${theme.PURPLE1};
`;
