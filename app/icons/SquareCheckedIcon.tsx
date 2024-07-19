import React from "react";
import { IconProps } from "./IconProps";

export interface SquareCheckedIconProps extends IconProps {}

export const SquareCheckedIcon = ({size = 24, width, height, ...props}: SquareCheckedIconProps) => {
  return (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
     <path d="M9 11L12 14L22 4" />
     <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" />
    </g>
  </svg>
  )
};
