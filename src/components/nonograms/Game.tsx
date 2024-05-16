import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Layout = styled.div``;

const Tr = styled.tr`
  user-select: none;
`;

const Td = styled.td`
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
`;

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

const Game = () => {
  const [ tableData, setTableData ] = useState(init);

  useEffect(() => {
    console.log(tableData);
  }, []);

  const onClickColumn = useCallback((rowIndex: number, cellIndex: number) => {
    // setTableData({ 
    //   ...tableData, 
    //  [[rowIndex][cellIndex]]: "1",
    // });
  }, []);

  return (
    <Layout>
      <table>
        <tbody>
          {tableData.map((tr, idx) => (
            <Tr key={`tr__${idx}`}>
              {tr.map((td, index) => (
                <Td key={`td__${index}`} onClick={(e) => onClickColumn(idx, index)}>
                  {td}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Game;