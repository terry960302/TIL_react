import React from "react";
import * as StyledText from "./Text.styled";

type Props = {
  text: string;
};

function Text({ text }: Props) {
  return <StyledText.MediumText>{text}</StyledText.MediumText>;
}

export default Text;
