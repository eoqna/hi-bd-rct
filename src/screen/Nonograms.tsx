import styled from "styled-components";
import Summary from "../components/nonograms/Summary";
import Game from "../components/nonograms/Game";
import { CommonProps } from "../navigations";
import Explanation from "../components/nonograms/Explanation";

const Layout = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Nonograms = ({ navigation }: CommonProps.ComponentProps) => {
  return (
    <Layout>
      <Summary />
      <Explanation />
      <Game navigation={navigation} />
    </Layout>
  );
};

export default Nonograms;