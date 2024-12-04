import styled from "styled-components";
import { CommonProps } from "../navigations";
import { Colors } from "../assets/css/colors";
import Message from "../components/place/Message";
import KeyPad from "../components/place/KeyPad";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundLayout = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background: ${Colors.LightGray};
`;

const Place = ({ navigation }: CommonProps.ComponentProps) => {
  return (
    <Layout>
      <BackgroundLayout>
        <Message navigation={navigation}>
        </Message>
        <KeyPad />
      </BackgroundLayout>
    </Layout>
  );
};

export default Place;