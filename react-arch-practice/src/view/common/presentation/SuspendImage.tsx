import React, { Suspense } from "react";

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
