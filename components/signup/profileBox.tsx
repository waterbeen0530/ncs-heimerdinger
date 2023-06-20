import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function ProfileBox() {
  const [imgView, setImgView] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const router = useRouter();

  const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    setImgFile(theFile);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  const onClickEvent = () => {
    console.log("aaaqqaa");
    toast.success("회원가입에 성공하였습니다!");
    router.push("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="/imgs/signup/logo.png" />
        <Signup>회원가입</Signup>
        <Profile>
          <Image
            type="file"
            id="profile"
            accept="image/*"
            onChange={fileChange}
          />
          <Preview img={imgView}></Preview>
          <ImageLabel htmlFor="profile">이미지 업로드</ImageLabel>
        </Profile>
        <ButtonBox>
          <Button onClick={onClickEvent}>회원가입</Button>
          <TextBox>
            <Content>기존 회원이신가요?</Content>
            <Link href="/login">
              <Login>로그인</Login>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Profile = styled.div``;

const Image = styled.input`
  display: none;
`;

const Preview = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 44px;
  border-radius: 50%;
  background: ${theme.PURPLE1} url(${({ img }: { img: string }) => img})
    no-repeat center/cover;
`;

const ImageLabel = styled.label`
  width: 160px;
  height: 40px;
  margin-top: 30px;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.WHITE1};
  background-color: ${theme.PURPLE2};
  cursor: pointer;
`;

const ButtonBox = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 30px;
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
