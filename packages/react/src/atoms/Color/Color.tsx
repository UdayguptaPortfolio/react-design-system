import React from "react";
import { Spacing } from "@designsystem/foundation";

export interface ColorProps {
  hexCode?: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FunctionComponent<ColorProps> = ({
  hexCode,
  height = Spacing.sm,
  width = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height} `;
  return <div style={{ backgroundColor: hexCode }} className={className}></div>;
};

export default Color;
