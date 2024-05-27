import { useCallback, useEffect } from "react";
import { CommonProps } from "../navigations";
import styled from "styled-components";
import { Colors } from "../assets/css/colors";
import image1 from "../assets/imgs/leaveMouse.png";
import image2 from "../assets/imgs/enterMouse.jpg";
import background from "../assets/imgs/background.jpg";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: no-repeat center center url(${background});
  background-size : cover !IMPORTANT;
`;

const ContentLayout = styled.div`
  transform: scale(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  font-size: 4vw;
  font-weight: bold;
  color: ${Colors.White};
`;

const ImgLayout = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 18vw;
  height: 20vw;
  margin: 4vh 0;
`;

const ImgText = styled.p`
  display: none;
  position: absolute;
  right: 10px;
  bottom: calc(4vh + 10px);
  font-size: 2vmin;
  font-weight: bold;
  color: ${Colors.Black};
  z-index: 1000;
`;

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
    navigation("/nonograms");
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
        <Text>Congratulation</Text>
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
        <Text>Haein's Birthday</Text>
      </ContentLayout>
    </Layout>
  );
};

export default Congratulation;