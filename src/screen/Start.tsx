import styled from "styled-components";
import { Colors } from "../assets/css/colors";
import tv from "../assets/imgs/tv.gif";
import saw from "../assets/imgs/saw.jpg";
import { useEffect, useState } from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${Colors.Background};
`;

const Img = styled.img`
  width: 16vw;
  height: 12vw;
  margin: 4vh 0;
`;

const ContentLayout = styled.div`
  display: flex;
  width: 80%;
  height: 30%;
  background: ${Colors.White};
  border: 4px solid black;
  border-radius: 18px;
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 140px);
  margin: 6px;
  height: calc(100% - 80px);
  background: ${Colors.White};
  border: 4px solid black;
  border-radius: 10px;
  padding: 30px 60px;
`;

const Text = styled.p`
  font-size: 2.4vw;
  font-weight: bold;
  width: 100%;
  height: 35%;
`

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30%;
`;

const Button = styled.button<{ $type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: bold;
  width: 46%;
  height: 100%;
  border: 3px solid black;
  border-radius: 6px;
  cursor: pointer;
  background: #ccc;
  &:hover {
    background: ${Colors.DARK.HOVER};
    color: ${Colors.White};
  }
`;

const Start = () => {
  const [ img, setImg ] = useState(tv);

  useEffect(() => {
    setTimeout(() => {
      setImg(saw);
    }, 4000);
  }, []);

  return (
    <Layout>
      <Img src={img} alt="saw" />
      <ContentLayout>
        <TextLayout>
          <Text>
            해인, 넌 너무 귀여워서 모든 사람들을 힘들게 했지.
          </Text>
          <Text>
            속죄할 기회를 주도록 하지, 어때 게임을 시작해보겠나?
          </Text>
          <ButtonLayout>
            <Button $type="left">좋다</Button>
            <Button $type="right">싫다</Button>
          </ButtonLayout>
        </TextLayout>
      </ContentLayout>
    </Layout>
  );
};

export default Start;