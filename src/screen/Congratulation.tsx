import { useCallback, useEffect } from "react";
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

  useEffect(() => {
    scaleUp();
  }, []);

  const scaleUp = useCallback(() => {
    const text = document.querySelector(".title-layout") as HTMLElement;

    text.style.transition = "all 1.3s ease-in";
    text.style.transform = "scale(1)";
  }, []);

  const onClickImg = useCallback(() => {
    navigation("/start");
  }, []);

  const onMouseEnterImg = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const imgText = document.querySelector(".img-text") as HTMLElement;

    imgText.style.display = "block";
    e.currentTarget.src = image2;
  }, []);
  
  const onMouseLeaveImg = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const imgText = document.querySelector(".img-text") as HTMLElement;
    imgText.style.display = "none";
    e.currentTarget.src = image1;
  }, []);

  return (
    <Layout>
      <ContentLayout className="title-layout">
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
          <ImgText className="img-text">Click Me !</ImgText>
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