import tv from "../assets/imgs/tv.gif";
import saw from "../assets/imgs/saw.jpg";
import { useCallback, useEffect, useState } from "react";
import { CommonProps } from "../navigations";
import { 
  Button, ButtonLayout, 
  ContentLayout, Img, 
  Layout, Medal, Text, 
  TextLayout,
} from "../assets/css/saw";
import { firstMedal } from "../assets/constants/medal";

const Start = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const [ img, setImg ] = useState(tv);
  const [ show, setShow ] = useState(false);
  const [ text, setText ] = useState("쫄;");

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
      setText("거절은 거절.");

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
          {firstMedal.map((item) => (
            <Medal key={item.right} $right={item.right} src={item.src} alt="empty medal" />
          ))}
          <TextLayout>
            <Text className="first_text">
              금메달 3개를 모으면 보물이 있는 위치를 알려주도록하지.
            </Text>
            <Text className="second_text">
              쫄?
            </Text>
            <ButtonLayout className="button_layout">
              <Button $type="left" onClick={onClickAgree}>?</Button>
              <Button $type="right" onClick={onClickReject}>{text}</Button>
            </ButtonLayout>
          </TextLayout>
        </ContentLayout>
      }
    </Layout>
  );
};

export default Start;