import styled from "styled-components";
import { CommonProps } from "../navigations";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecondGame = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  
  return (
    <Layout>

    </Layout>
  );
};

export default SecondGame;