import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

export const ContainerWrapper: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container
      maxW={{
        base: "100vw",
        sm: "500px",
        md: "900px",
        lg: "1250px",
        xl: "70vw",
      }}
      {...props}
      marginLeft="auto"
      marginRight="auto"
    >
      {children}
    </Container>
  );
};

export default ContainerWrapper;
