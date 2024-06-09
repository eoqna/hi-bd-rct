import styled from "styled-components";
import { Colors } from "../../assets/css/colors";
import { button } from "../../assets/constants/button";

const ButtonLayout = styled.div`
  width: 100%;
  height: 60%;
  background: ${Colors.White};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

const Button = styled.div`
  display: flex;
  width: 5vw;
  height: 5vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.DarkGray};
  border-radius: 50%;
  color: ${Colors.White};
  background: ${Colors.DarkGray};
`;

const Number = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 4px;
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const English = styled.p`
  font-size: 0.8vw;
  font-weight: bold;
`;

const KeyPad = () => {
  return (
    <ButtonLayout>
      {button.map((v, i) => (
        <Button key={i}>
          <Number>
            {v.number}
          </Number>
          <TextLayout>
            <English>{v.text}</English>
          </TextLayout>
        </Button>
      ))}
    </ButtonLayout>
  )
};

export default KeyPad;