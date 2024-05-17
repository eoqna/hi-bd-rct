import styled from "styled-components";
import { Colors } from "./colors";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const CenterLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.Background};
`;