import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Nonograms from "../screen/Nonograms";
import Congratulation from "../screen/Congratulation";
import { Colors } from "../assets/css/colors";
import Start from "../screen/Start";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.Background};
`;

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <ContentLayout>
        <Routes>
          <Route index element={<Congratulation navigation={navigation} />} />
          <Route path="start" element={<Start />}/>
          <Route path="/nonograms" element={<Nonograms navigation={navigation} />} />
        </Routes>
      </ContentLayout>
    </Layout>
  );
};

export default Navigations;