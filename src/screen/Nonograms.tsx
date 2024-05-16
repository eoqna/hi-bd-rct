import styled from "styled-components";
import Game from "../components/nonograms/Game";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Nonograms = () => {
  return (
    <Layout>
      <Game />
    </Layout>
  );
};

export default Nonograms;