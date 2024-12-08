import { useCallback, useEffect, useState } from "react";
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
import music from "../../public/One_piece.mp3";
import useAppStore from "../store/useAppStore";

const PlayLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 60vh;
  font-size: 14vmin;
`;

const PlayIcon = styled.p`
  font-size: 14vmin;
  cursor: pointer;
`;

const Img = styled.img`
  height: 60%;
`;

const OnePiece = ({ navigation }: CommonProps.ComponentProps) => {
  const { isPlaying, setIsPlaying } = useAppStore();
  const [ audio ] = useState(new Audio(music));
  const [ path, setPath ] = useState(one);
  const [ imgs ] = useState([ one, two, three, four, five, six, seven, eight, nine ]);
  const [ activeIndex, setActiveIndex ] = useState(0);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [audio, isPlaying]);
  
  const nextSlice = useCallback(() => {
    if (activeIndex < imgs.length-1) {
      setPath(imgs[activeIndex + 1]);
      setActiveIndex(activeIndex + 1);
    } else {
      setIsPlaying(false);
      navigation("/congratulation");
    }
  }, [activeIndex]);

  /**
   * 10초 마다 자동 슬라이드
   */
  useInterval(() => {
    if (isPlaying) nextSlice();
  }, 1000 * 3);
  
  return (
    <CenterLayout>
      {!isPlaying ? (
        <PlayLayout>
          <PlayIcon onClick={() => setIsPlaying(true)}>▶</PlayIcon>
        </PlayLayout>
      ) : (
        <Img 
          src={path}
          alt="원피스"
        />
      )}
    </CenterLayout>
  );
};

export default OnePiece;