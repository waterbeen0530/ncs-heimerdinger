import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Image src="/imgs/header/logo.png" />
        </Link>
        <TextBox>
          <Link href="/create">
            <Text>인증하기</Text>
          </Link>
          <Link href="/list">
            <Text>인증목록</Text>
          </Link>
        </TextBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.BACK1};
`;

const Wrapper = styled.div`
  width: 1000px;
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 140px;
`;

const TextBox = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
