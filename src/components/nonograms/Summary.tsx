import styled from "styled-components";
import { CenterLayout } from "../../assets/css/common";
import { Colors } from "../../assets/css/colors";

const ContentLayout = styled.div`
  width: 80%;
  height: auto;
  color: ${Colors.White};
  margin-bottom: 200px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 4vmin;
  font-weight: bold;
  margin-bottom: 60px;
`;

const SummaryText = styled.p`
  text-align: center;
  font-size: 2vmin;
  margin-bottom: 10px;
`;

const Summary = () => {
  return (
    <CenterLayout>
      <ContentLayout>
        <Title>노노그램</Title>
        <SummaryText>일본에서 개발된 퍼즐, 한국에서는 "네모로직", "네모네모로직"으로 불리기도 하는 퍼즐 게임.</SummaryText>
        <SummaryText>영어로는 Nonograms(노노그램), Picross(피크로스), Griddlers 등으로 불린다.</SummaryText>
        <SummaryText>평면만 있으면 할수 있는 게임으로 스도쿠와 함께 신문 같은 데서 찾아볼 수 있다. </SummaryText>
        <SummaryText>규칙은 X×Y 크기[1]의 직사각형[2]에 각각 적혀 있는 숫자를 보고 숨어 있는 숫자를 예측해서 지우고 그려 나가면서 그림을 만들어 가는 게임.</SummaryText>
        <SummaryText>1988년에 니시오 테츠야[3]와, 이시다 노부코[4]가 각각 창안하였다.</SummaryText>
        <SummaryText>거의 비슷한 시기에 발표가 돼서 논쟁에 휩쓸리기도 했지만, 현재는 양쪽이 '같은 방식의 게임을 창작했다'로 인정한 상태.</SummaryText>
      </ContentLayout>
    </CenterLayout>
  );
};

export default Summary;