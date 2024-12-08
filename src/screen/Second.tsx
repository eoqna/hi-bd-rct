import tv from "../assets/imgs/tv.gif";
import saw from "../assets/imgs/saw.jpg";
import { useCallback, useEffect, useRef, useState } from "react";
import { CommonProps } from "../navigations";
import { 
  Button, ButtonLayout, 
  ContentLayout, Img, 
  Layout, Medal, Text, 
  TextLayout,
} from "../assets/css/saw";
import { Colors } from "../assets/css/colors";
import { secondMedal } from "../assets/constants/medal";

const Second = ({ navigation }: CommonProps.ComponentProps) => {
  const [ img, setImg ] = useState(tv);
  const [ show, setShow ] = useState(false);
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const secondTextRef = useRef<HTMLParagraphElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const agreeBtnRef = useRef<HTMLButtonElement>(null);
  const rejectBtnRef = useRef<HTMLButtonElement>(null);

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
      if (firstTextRef.current) firstTextRef.current.style.display = "block";
    }, 4000);

    return () => {
      clearTimeout(firstTextTimer);
    };
  }, []);

  useEffect(() => {
    const secondTextTimer = setTimeout(() => {
      if (secondTextRef.current) secondTextRef.current.style.display = "block";
    }, 6000);

    return () => {
      clearTimeout(secondTextTimer);
    };
  }, []);

  useEffect(() => {
    const buttonLayoutTimer = setTimeout(() => {
      if (layoutRef.current) layoutRef.current.style.display = "flex"
    }, 8000);

    return () => {
      clearTimeout(buttonLayoutTimer);
    };
  }, []);

  const onClickAgree = useCallback(() => {
    navigation("/message");
  }, []);

  const onClickReject = useCallback(() => {
    setTimeout(() => {
      if (agreeBtnRef.current && rejectBtnRef.current) {
        rejectBtnRef.current.style.display = "none";
        agreeBtnRef.current.style.background = Colors.DARK.HOVER;
        agreeBtnRef.current.style.color = Colors.White;
      }
      setTimeout(() => {
        navigation("/message");
      }, 1000);
    }, 2000);
  }, []);

  return (
    <Layout>
      <Img src={img} alt="saw" />
      {show &&
        <ContentLayout>
          {secondMedal.map((medal) => (
            <Medal key={medal.right} $right={medal.right} src={medal.src} alt="gold medal" />
          ))}
          <TextLayout>
            <Text ref={firstTextRef}>
              쉬운 문제인데 이렇게나 오래 걸리다니...
            </Text>
            <Text ref={secondTextRef}>
              시간이 없으니 바로 두 번째 게임을 시작하도록 하지
            </Text>
            <ButtonLayout ref={layoutRef}>
              <Button ref={agreeBtnRef} onClick={onClickAgree}>좋다</Button>
              <Button ref={rejectBtnRef} onClick={onClickReject}>싫다</Button>
            </ButtonLayout>
          </TextLayout>
        </ContentLayout>
      }
    </Layout>
  );
};

export default Second;