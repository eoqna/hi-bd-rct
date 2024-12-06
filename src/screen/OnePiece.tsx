import { useCallback, useState } from "react";
import { CenterLayout } from "../assets/css/common";
import { CommonProps } from "../navigations";
import one from "../assets/imgs/one_piece_01.png";
import two from "../assets/imgs/one_piece_02.png";
import three from "../assets/imgs/one_piece_03.png";
import four from "../assets/imgs/one_piece_04.png";
import five from "../assets/imgs/one_piece_05.png";
import six from "../assets/imgs/one_piece_06.png";
import seven from "../assets/imgs/one_piece_07.png";
import eight from "../assets/imgs/one_piece_08.png";
import nine from "../assets/imgs/one_piece_09.png";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";

const Img = styled.img`
  height: 60%;
`;

const OnePiece = ({ navigation }: CommonProps.ComponentProps) => {
  const [ path, setPath ] = useState(one);
  const [ imgs, setImgs ] = useState([ one, two, three, four, five, six, seven, eight, nine ]);

    /**
   * 광고 배너 자동 슬라이드 함수
   */
  const [ activeIndex, setActiveIndex ] = useState(0);
  
  const nextSlice = useCallback(() => {
    if (activeIndex < imgs.length-1) {
      setPath(imgs[activeIndex + 1]);
      setActiveIndex(activeIndex + 1);
    } else {
      navigation("/congratulation");
    }
  }, [activeIndex]);

  /**
   * 10초 마다 자동 슬라이드
   */
  useInterval(() => {
    nextSlice();
  }, 1000 * 3);
  
  return (
    <CenterLayout>
      <Img 
        src={path}
        alt="원피스"
      />
    </CenterLayout>
  );
};

export default OnePiece;