import styled from "styled-components";

export const ImgWrapper = styled.img<{ width: number; height: number }>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  border: 1px solid;
`;
