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
import { Colors } from "../assets/css/colors";
import { secondMedal } from "../assets/constants/medal";

const Second = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const [ img, setImg ] = useState(tv);
  const [ show, setShow ] = useState(false);

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
    navigation("/third");
  }, []);

  const onClickReject = useCallback(() => {
    setTimeout(() => {
      const agreeButton = document.querySelector(".agree_button") as HTMLElement;
      const rejectButton = document.querySelector(".reject_button") as HTMLElement;

      rejectButton.style.display = "none";
      agreeButton.style.background = Colors.DARK.HOVER;
      agreeButton.style.color = Colors.White;

      setTimeout(() => {
        navigation("/third");
      }, 1000);
    }, 2000);
  }, []);

  return (
    <Layout>
      <Img src={img} alt="saw" />
      {show &&
        <ContentLayout>
          {secondMedal.map((item) => (
            <Medal key={item.right} $right={item.right} src={item.src} alt="empty medal" />
          ))}
          <TextLayout>
            <Text className="first_text">
              첫 번째 문제를 용케도 풀어냈군. 칭찬해주지
            </Text>
            <Text className="second_text">
              두 번째 게임을 시작하지, 준비됐나?
            </Text>
            <ButtonLayout className="button_layout">
              <Button $type="left" className="agree_button" onClick={onClickAgree}>좋다</Button>
              <Button $type="right" className="reject_button" onClick={onClickReject}>싫다</Button>
            </ButtonLayout>
          </TextLayout>
        </ContentLayout>
      }
    </Layout>
  );
};

export default Second;