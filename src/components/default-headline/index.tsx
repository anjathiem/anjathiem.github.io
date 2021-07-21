import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

export interface DefaultHeadlineProps extends HeadingProps {
  size: "xs" | "s" | "m";
}
export const headingSizes = {
  xs: { base: "lg", sm: "xl", md: "2xl", lg: "2xl", xl: "2xl" },
  s: { base: "xl", md: "3xl", lg: "4xl", xl: "5xl" },
  m: { base: "2xl", md: "4xl", lg: "4xl", xl: "6xl" },
};

export const headingMarginBottom = {
  xs: { base: "2", sm: "3", md: "4", lg: "6" },
  s: { base: "4", md: "6", lg: "10" },
  m: { base: "5", md: "7", lg: "12" },
};

export const DefaultHeadline: React.FC<DefaultHeadlineProps> = ({
  as,
  size,
  children,
  ...props
}) => {
  return (
    <Heading
      as={as}
      fontFamily="Roboto"
      fontSize={headingSizes[size]}
      marginBottom={headingMarginBottom[size]}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default DefaultHeadline;
