import styled from "styled-components";
import { Colors } from "../assets/css/colors";
import tv from "../assets/imgs/tv.gif";
import saw from "../assets/imgs/saw.jpg";
import { useCallback, useEffect, useState } from "react";
import { CommonProps } from "../navigations";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${Colors.Background};
`;

const Img = styled.img`
  width: 16vw;
  height: 12vw;
  margin: 4vh 0;
`;

const ContentLayout = styled.div`
  display: flex;
  width: 80%;
  height: 30%;
  background: ${Colors.White};
  border: 4px solid black;
  border-radius: 18px;
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 140px);
  margin: 6px;
  height: calc(100% - 80px);
  background: ${Colors.White};
  border: 4px solid black;
  border-radius: 10px;
  padding: 30px 60px;
`;

const Text = styled.p`
  display: none;
  font-size: 2.4vw;
  font-weight: bold;
  width: 100%;
  height: 35%;
`

const ButtonLayout = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30%;
`;

const Button = styled.button<{ $type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: bold;
  width: 46%;
  height: 100%;
  border: 3px solid black;
  border-radius: 6px;
  cursor: pointer;
  background: #ccc;
  transition: all 0.3s ease-in;
  &:hover {
    background: ${Colors.DARK.HOVER};
    color: ${Colors.White};
  }
  &:focus {
    background: ${Colors.DARK.HOVER};
    color: ${Colors.White};
  }
`;

const Start = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const [ img, setImg ] = useState(tv);
  const [ show, setShow ] = useState(false);
  const [ text, setText ] = useState("싫다");

  useEffect(() => {
    const timer = setTimeout(() => {
      setImg(saw);
      setShow(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const firstTextTimer = setTimeout(() => {
      const firstText = document.querySelector(".first_text") as HTMLElement;
      firstText.style.display = "block";
    }, 4000);

    return () => {
      clearTimeout(firstTextTimer);
    };
  }, []);

  useEffect(() => {
    const secondTextTimer = setTimeout(() => {
      const secondText = document.querySelector(".second_text") as HTMLElement;
      secondText.style.display = "block";
    }, 6000);

    return () => {
      clearTimeout(secondTextTimer);
    };
  }, []);

  useEffect(() => {
    const buttonLayoutTimer = setTimeout(() => {
      const buttonLayout = document.querySelector(".button_layout") as HTMLElement;
      buttonLayout.style.display = "flex";
    }, 8000);

    return () => {
      clearTimeout(buttonLayoutTimer);
    };
  }, []);

  const onClickAgree = useCallback(() => {
    navigation("/nonograms");
  }, []);

  const onClickReject = useCallback(() => {
    setTimeout(() => {
      setText("좋다");

      setTimeout(() => {
        navigation("/nonograms");
      }, 1000);
    }, 2000);
  }, [text]);

  return (
    <Layout>
      <Img src={img} alt="saw" />
      {show &&
        <ContentLayout>
          <TextLayout>
            <Text className="first_text">
              해인, 넌 너무 귀여워서 모든 사람들을 힘들게 했지.
            </Text>
            <Text className="second_text">
              속죄할 기회를 주도록 하지, 어때 게임을 시작해보겠나?
            </Text>
            <ButtonLayout className="button_layout">
              <Button $type="left" onClick={onClickAgree}>좋다</Button>
              <Button $type="right" onClick={onClickReject}>{text}</Button>
            </ButtonLayout>
          </TextLayout>
        </ContentLayout>
      }
    </Layout>
  );
};

export default Start;