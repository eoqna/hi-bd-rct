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

const Second = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
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
    navigation("/location");
  }, []);

  const onClickReject = useCallback(() => {
    setTimeout(() => {
      if( agreeBtnRef.current && rejectBtnRef.current ) {
        rejectBtnRef.current.style.display = "none";
        agreeBtnRef.current.style.background = Colors.DARK.HOVER;
        agreeBtnRef.current.style.color = Colors.White;
      }
      setTimeout(() => {
        navigation("/location");
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
            <Text ref={firstTextRef}>
              첫 번째 문제를 용케도 풀어냈군. 칭찬해주지
            </Text>
            <Text ref={secondTextRef}>
              두 번째 게임을 시작하지, 준비됐나?
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