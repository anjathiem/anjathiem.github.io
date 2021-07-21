import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {}
export const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      marginBottom={{
        base: "8",
        sm: "14",
        md: "20",
        lg: "20",
        xl: "32",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
