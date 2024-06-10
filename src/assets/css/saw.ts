import styled from "styled-components";
import { Colors } from "./colors";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${Colors.Background};
`;

export const Img = styled.img`
  width: 16vw;
  height: 12vw;
  margin: 4vh 0;
`;

export const ContentLayout = styled.div`
  display: flex;
  width: 80%;
  height: 30%;
  background: ${Colors.White};
  border: 4px solid black;
  border-radius: 18px;
`;

export const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 140px);
  margin: 6px;
  height: calc(100% - 80px);
  background: ${Colors.White};
  border: 4px solid black;
  border-radius: 10px;
  padding: 30px 60px;
`;

export const Text = styled.p`
  display: none;
  font-size: 2.4vw;
  font-weight: bold;
  width: 100%;
  height: 35%;
`

export const ButtonLayout = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30%;
`;

export const Button = styled.button<{ $type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: bold;
  width: ${(props) => props.$type === "bar" ? "100%" : "46%"};
  height: 100%;
  border: 3px solid black;
  border-radius: 6px;
  cursor: pointer;
  background: #ccc;
  transition: all 0.3s ease-in;
  &:hover {
    background: ${Colors.DARK.HOVER};
    color: ${Colors.White};
  }
  &:focus {
    background: ${Colors.DARK.HOVER};
    color: ${Colors.White};
  }
`;

export const Medal = styled.img<{ $right: number }>`
  position: absolute;
  top: 1vh;
  background: ${Colors.Background};
  right: ${(props) => props.$right}px;
  width: 70px;
  height: 70px;
`;