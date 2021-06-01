import React from "react";
import styled from "styled-components";
import { FontSize } from "../../../constant/common/size";

type Props = {
  text: string;
};

function Text({ text }: Props) {
  return <MediumText>{text}</MediumText>;
}

export default Text;

export const SmallText = styled.span`
  font-size: ${FontSize.small};
`;

export const MediumText = styled.span`
  font-size: ${FontSize.medium};
`;
