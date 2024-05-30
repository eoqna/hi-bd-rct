import styled from "styled-components";
import { CommonProps } from "../navigations";
import { Colors } from "../assets/css/colors";

const Layout = styled.div`
  display: felx;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.Background};
`;

const Third = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;

  return (
    <Layout>
      
    </Layout>
  );
};

export default Third;

