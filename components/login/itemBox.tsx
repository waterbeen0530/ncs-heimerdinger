import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function ItemBox() {
  const router = useRouter();

  const onClickEvent = () => {
    console.log("aaaqqaa");
    toast.success("로그인에 성공하였습니다!");
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="/imgs/signup/logo.png" />
        <Signup>로그인</Signup>
        <InputBox>
          <Title>아이디</Title>
          <Input placeholder="아이디를 입력해주세요."></Input>
        </InputBox>
        <InputBox>
          <Title>비밀번호</Title>
          <Input placeholder="비밀번호를 입력해주세요."></Input>
        </InputBox>
        <ButtonBox>
          <Link href="/">
            <Button onClick={onClickEvent}>로그인</Button>
          </Link>
          <TextBox>
            <Content>하이머딩거가 처음이신가요?</Content>
            <Link href="/signup/first">
              <Login>회원가입</Login>
            </Link>
          </TextBox>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.BLACK1};
  text-align: center;
`;

const Wrapper = styled.div`
  width: 300px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Signup = styled.h1`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 700;
`;

const InputBox = styled.div`
  margin-top: 20px;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 14px;
  border: 1px solid ${theme.GRAY1};
  border-radius: 4px;
  outline: none;
  font-size: 12px;
`;

const ButtonBox = styled.div``;

const Button = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 50px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.WHITE1};
  background-color: ${theme.PURPLE1};
  cursor: pointer;
`;

const TextBox = styled.div`
  margin-top: 20px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p``;

const Login = styled.p`
  font-weight: 700;
  color: ${theme.PURPLE1};
`;
