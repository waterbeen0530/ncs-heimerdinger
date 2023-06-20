import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function Index() {
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

  return (
    <Container>
      <Title>인증하기</Title>
      <Wrapper>
        <ImageBox>
          <ImageInput
            type="file"
            id="listImage"
            accept="image/*"
            onChange={fileChange}
          />
          {/* <Preview img={imgView}></Preview> */}
          <ImageLabel htmlFor="listImage" img={imgView}>
            <Image src="/imgs/create/camera.png" /> <br />
            이미지 업로드
            <br />
            {"("}click!{")"}
          </ImageLabel>
        </ImageBox>
        <TextArea placeholder="인증 내용을 입력해주세요!"></TextArea>
      </Wrapper>
      <Link href="/list">
        <Button>인증하기</Button>
      </Link>
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
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageInput = styled.input`
  display: none;
`;

const Preview = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.PURPLE1} url(${({ img }: { img: string }) => img})
    no-repeat center/cover;
`;

const ImageLabel = styled.label`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${theme.WHITE1};
  background: ${theme.PURPLE2} url(${({ img }: { img: string }) => img})
    no-repeat center/cover;
  cursor: pointer;

  &::after {
  }
`;

const Image = styled.img`
  width: 90px;
`;

const TextArea = styled.textarea`
  width: 510px;
  height: 320px;
  padding: 30px;
  border: none;
  border-radius: 20px;
  background-color: ${theme.WHITE1};
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.BLACK1};
  resize: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
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
