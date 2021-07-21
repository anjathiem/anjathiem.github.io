import { Flex } from "@chakra-ui/react";
import DefaultHeadline from "../default-headline";
import React, { useEffect, useState } from "react";
import { Heart } from "../Icons/heart";
import ContainerWrapper from "../container";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY >= 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Flex
      height="120px"
      width="100%"
      borderColor={scroll ? "brand" : undefined}
      backgroundColor={scroll ? "white" : "brand"}
      textColor={scroll ? "brand" : "white"}
      borderBottom={scroll ? "2px" : "unset"}
      position="fixed"
      transition="all 0.5s ease"
      zIndex="100"
    >
      <ContainerWrapper
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <DefaultHeadline size="m" marginBottom="0">
          Anja Thiem
        </DefaultHeadline>
        <Flex width="50%" justifyContent="space-around">
          <DefaultHeadline size="s" marginBottom="0">
            Portfolio
          </DefaultHeadline>
          <DefaultHeadline size="s" marginBottom="0">
            Über mich
          </DefaultHeadline>
          <DefaultHeadline size="s" marginBottom="0">
            Kontakt
          </DefaultHeadline>
          <Heart boxSize="60px" />
        </Flex>
      </ContainerWrapper>
    </Flex>
  );
};
