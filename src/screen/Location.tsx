import styled from "styled-components";
import { CommonProps } from "../navigations";
import { Colors } from "../assets/css/colors";
import Message from "../components/location/Message";
import ButtonPad from "../components/location/ButtonPad";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundLayout = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background: ${Colors.LightGray};
`;

const SecondGame = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  
  return (
    <Layout>
      <BackgroundLayout>
        <Message>
        </Message>
        <ButtonPad>
          
        </ButtonPad>
      </BackgroundLayout>
      
    </Layout>
  );
};

export default SecondGame;