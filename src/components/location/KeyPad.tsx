import styled from "styled-components";
import { Colors } from "../../assets/css/colors";
import { button } from "../../assets/constants/button";

const ButtonLayout = styled.div`
  width: 100%;
  height: 70%;
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
  font-size: 1.5vw;
  font-weight: bold;
`;

const Number = styled.p`

`;

const TextLayout = styled.div`

`;

const English = styled.p`

`;

const KeyPad = () => {
  return (
    <ButtonLayout>
      {button.map((text, i) => (
        <Button key={i}>
          <Number>
            {text}
          </Number>
          <TextLayout>
            <English></English>
          </TextLayout>
        </Button>
      ))}
    </ButtonLayout>
  )
};

export default KeyPad;