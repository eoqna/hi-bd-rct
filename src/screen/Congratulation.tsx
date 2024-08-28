import { useCallback, useEffect, useRef } from "react";
import { CommonProps } from "../navigations";
import image1 from "../assets/imgs/leaveMouse.png";
import image2 from "../assets/imgs/enterMouse.jpg";
import { bottom, top } from "../assets/constants/title";
import { 
  ContentLayout,
  Img, ImgLayout, 
  ImgText, Layout, 
  Text, TextLayout 
} from "../assets/css/congratulation";

const Congratulation = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const layoutRef = useRef<HTMLDivElement>(null);
  const imgTextRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    scaleUp();
  }, []);

  const scaleUp = useCallback(() => {
    if( layoutRef.current ) {
      layoutRef.current.style.transition = "all 1.3s ease-in";
      layoutRef.current.style.transform = "scale(1)";
    }
  }, []);

  const onClickImg = useCallback(() => {
    navigation("/start");
  }, []);

  const onMouseEnterImg = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if( imgTextRef.current ) imgTextRef.current.style.display = "block";
    e.currentTarget.src = image2;
  }, []);
  
  const onMouseLeaveImg = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if( imgTextRef.current ) imgTextRef.current.style.display = "none";
    e.currentTarget.src = image1;
  }, []);

  return (
    <Layout>
      <ContentLayout ref={layoutRef}>
        <TextLayout>
          {top.map((item) => (
            <Text key={item.text} $color={item.color} $text={item.text}>{item.text}</Text>
          ))}
        </TextLayout>
        <ImgLayout>
          <Img 
            src={image1} 
            alt="HI" 
            onMouseEnter={(e) => onMouseEnterImg(e)} 
            onMouseLeave={(e) => onMouseLeaveImg(e)} 
            onClick={onClickImg} 
          />
          <ImgText ref={imgTextRef}>Click Me !</ImgText>
        </ImgLayout>
        <TextLayout>
          {bottom.map((item) => (
            <Text key={item.text} $color={item.color} $text={item.text}>{item.text}</Text>
          ))}
        </TextLayout>
      </ContentLayout>
    </Layout>
  );
};

export default Congratulation;