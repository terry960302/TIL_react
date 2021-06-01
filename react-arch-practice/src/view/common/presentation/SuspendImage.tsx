import React, { Suspense } from "react";
import styled from "styled-components";

type Props = {
  url: string;
  fallbackUrl: string;
  alt: string;
};

function SuspendImage({ url, fallbackUrl, alt }: Props) {
  return (
    <Suspense fallback={fallbackUrl}>
      <img src={url} alt={alt} />
    </Suspense>
  );
}

export default SuspendImage;

export const ImgWrapper = styled.img<{ width: number; height: number }>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  border: 1px solid;
`;
