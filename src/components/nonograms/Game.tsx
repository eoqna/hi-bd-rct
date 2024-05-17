import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/css/colors";
import background from "../../assets/imgs/nonograms.png";
import { CommonProps } from "../../navigations";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.Background};
`;

const Title = styled.p`
  color: ${Colors.White};
  text-align: center;
  font-size: 4vmin;
  font-weight: bold;
  margin-bottom: 60px;
`;

const TableLayout = styled.div`
  position: relative;
  width: 664px;
  height: 664px;
  background: no-repeat url(${background});
`;

const Table = styled.table`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Tr = styled.tr`
  user-select: none;
`;

const Td = styled.td<{ $clicked: string }>`
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid ${Colors.Black};
  color: ${(props) => props.$clicked === "1" ? Colors.Black : (props.$clicked === "0" ? Colors.White : Colors.DarkGray)};
  background: ${(props) => props.$clicked === "1" ? Colors.Black : (props.$clicked === "0" ? Colors.White : Colors.DarkGray)};
  cursor: pointer;
`;

const Text = styled.h1<{ $text: string }>`
  font-size: 4vmin;
  font-weight: bold;
  color: ${(props) => props.$text === "땡!" ? Colors.Red : Colors.Green};
`;

const catAnswer = [
  ['2', '1', '2', '2', '2', '2', '2', '2', '2', '1', '2', '2', '2', '2', '2'],
  ['2', '1', '1', '2', '2', '2', '2', '2', '1', '1', '2', '2', '2', '2', '2'],
  ['2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2'],
  ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2'],
  ['2', '1', '2', '1', '1', '2', '1', '1', '2', '1', '2', '2', '2', '2', '2'],
  ['1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '2', '2', '2'],
  ['2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2'],
  ['2', '2', '1', '1', '1', '1', '1', '1', '1', '2', '2', '1', '1', '1', '2'],
  ['2', '2', '2', '2', '1', '1', '1', '1', '2', '2', '2', '1', '2', '1', '2'],
  ['2', '2', '2', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '1', '2'],
  ['2', '2', '2', '1', '1', '1', '1', '1', '1', '2', '2', '2', '1', '1', '2'],
  ['2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '2'],
  ['2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2'],
  ['2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2'],
  ['2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2'],
];

const realAnswer = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '0'],
  ['1', '1', '0', '0', '1', '0', '1', '0', '1', '1', '0', '0', '1', '0', '1'],
  ['0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1'],
  ['0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1'],
  ['0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1'],
  ['0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '0'],
  ['0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

const init = [
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
];

const Game = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const [ tableData, setTableData ] = useState(init);
  const [ result, setResult ] = useState("땡!");

  const onClickColumn = useCallback((rowIndex: number, cellIndex: number, data: string) => {
    setTableData(prevArray => {
      const newArray = prevArray.map(row => row.slice());
      newArray[rowIndex][cellIndex] = (data === "0" ? "1" : "0");
      return newArray;
    });
  }, [tableData]);

  const onRightClickColumn = useCallback((e: React.MouseEvent<HTMLTableDataCellElement>, rowIndex: number, cellIndex: number, data: string) => {
    e.preventDefault();

    setTableData(prevArray => {
      const newArray = prevArray.map(row => row.slice());
      newArray[rowIndex][cellIndex] = (data === "2" ? "0" : "2");
      return newArray;
    });
  }, [tableData]);

  const onClickClearButton = useCallback(() => {
    setTableData(init);
    setResult("땡!");
  }, [tableData]);

  useEffect(() => {
    if( JSON.stringify(tableData) === JSON.stringify(catAnswer) ) {
      setResult("정답!");
    }

    if( JSON.stringify(tableData) === JSON.stringify(realAnswer) ) {
      navigation("/");
    }
  }, [tableData, result]);

  return (
    <Layout>
      <Title>게임하기</Title>
      <TableLayout>
        <Table>
          <tbody>
            {tableData.map((tr, idx) => (
              <Tr key={`tr__${idx}`}>
                {tr.map((td, index) => (
                  <Td 
                    key={`td__${index}`} 
                    $clicked={td} 
                    onClick={() => onClickColumn(idx, index, td)}
                    onContextMenu={(e) => onRightClickColumn(e, idx, index, td)}
                  >
                    {td}
                  </Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableLayout>
      <br/>
      <Text $text={result}>{result}</Text>
      <button onClick={onClickClearButton}>Reset</button>
    </Layout>
  );
};

export default Game;