import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function TitleBox() {
  return (
    <Container>
      <Greet>chlfml님, 안녕하세요!</Greet>
      <Title>
        오늘 목표는 무엇인가요?
        <br />
        목표를 기록하고 인증해보세요!
      </Title>
      <Content>
        Heimerdinger는 원활한 목표 달성을 위해 목표를 <br />
        기록하고 인정할 수 있는 서비스를 제공합니다.
      </Content>
      <Link href="/create">
        <Button>바로가기</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div``;

const Greet = styled.div`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 700;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 34px;
  font-weight: 700;
  line-height: 50px;
`;

const Content = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 130px;
  height: 46px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.WHITE1};
  background-color: ${theme.PURPLE2};
  cursor: pointer;
`;
