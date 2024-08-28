import styled from "styled-components";
import { CenterLayout } from "../../assets/css/common";
import { Colors } from "../../assets/css/colors";
import gameImg from "../../assets/imgs/nonograms_fake.png";
import { useCallback, useRef, useState } from "react";

const ContentLayout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.White};
  margin-bottom: 300px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 4vmin;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Img = styled.img`
  width: 240px;
  height: 240px;
  cursor: pointer;
  transform: scale(1);
`;

const Explanation = () => {
  const [ size, setSize ] = useState(2.8);
  const imgRef = useRef<HTMLImageElement>(null);

  const onClickFakeImg = useCallback(() => {
    if (imgRef.current) imgRef.current.style.transform = `scale(${size})`;
    setSize(prev => prev === 1 ? 2.8 : 1);
  }, [size]);

  return (
    <CenterLayout>
      <ContentLayout>
        <Title>게임 예시</Title>
        <Img ref={imgRef} src={gameImg} alt="게임예시" onClick={onClickFakeImg} />
      </ContentLayout>
    </CenterLayout>
  );
};

export default Explanation;