import styled from "styled-components";
import background from "../imgs/background.jpg";
import { Colors } from "./colors";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: no-repeat center center url(${background});
  background-size : cover !IMPORTANT;
`;

export const ContentLayout = styled.div`
  transform: scale(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.span<{ $color: string, $text: string }>`
  font-size: 5vw;
  font-weight: bold;
  color: ${(props) => props.$color};
  margin-right: ${(props) => props.$text === "의" && "20px"};
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: ${Colors.Black};
`;

export const ImgLayout = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 18vw;
  height: 20vw;
  margin: 4vh 0;
`;

export const ImgText = styled.p`
  display: none;
  position: absolute;
  right: 10px;
  bottom: calc(4vh + 10px);
  font-size: 2vmin;
  font-weight: bold;
  color: ${Colors.Black};
  z-index: 1000;
`;