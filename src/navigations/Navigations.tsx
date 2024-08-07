import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Nonograms from "../screen/Nonograms";
import Congratulation from "../screen/Congratulation";
import { Colors } from "../assets/css/colors";
import Start from "../screen/Start";
import Second from "../screen/Second";
import Third from "../screen/Third";
import Endding from "../screen/Endding";
import Location from "../screen/Location";
import Locker from "../screen/Locker";

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
          <Route path="/start" element={<Start navigation={navigation} />}/>
          <Route path="/nonograms" element={<Nonograms navigation={navigation} />} />
          <Route path="/second" element={<Second navigation={navigation} />} />
          <Route path="/location" element={<Location navigation={navigation} />} />
          <Route path="/third" element={<Third navigation={navigation} />} />
          <Route path="/locker" element={<Locker navigation={navigation} />} />
          <Route path="/endding" element={<Endding navigation={navigation} />} />
        </Routes>
      </ContentLayout>
    </Layout>
  );
};

export default Navigations;