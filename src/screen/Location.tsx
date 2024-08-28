import styled from "styled-components";
import { CommonProps } from "../navigations";
import { Colors } from "../assets/css/colors";
import Message from "../components/location/Message";
import KeyPad from "../components/location/KeyPad";

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

const Location = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  
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

export default Location;