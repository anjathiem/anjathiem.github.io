import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { ContainerWrapper as Container } from "../components/container";
import DefaultHeadline from "../components/default-headline";
import { Section } from "../components/section";
import DefaultText from "../components/default-text";

export interface HeroProps {
  imagePath: string;
}

export const Hero = ({ imagePath }: HeroProps) => {
  return (
    <Section backgroundColor="brand" paddingTop="120px">
      <Container height="calc(100vh - 120px)">
        <Box alignItems="center" display="grid" height="100%">
          <Flex height="75vh">
            <Image
              src={imagePath}
              objectFit="contain"
              height="100%"
              borderRadius="20px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
              _hover={{
                transition: "all .15s ease-in-out",
                transform: "translateY(-2px)",
              }}
            />
            <Box
              height="100%"
              borderRadius="20px"
              backgroundColor="white"
              width="100%"
              marginLeft="30px"
              padding="35px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
              _hover={{
                transition: "all .15s ease-in-out",
                transform: "translateY(-2px)",
              }}
            >
              <DefaultHeadline size="m" fontWeight="300" fontSize="70px">
                Hallo, ich bins - die beste Anja!
              </DefaultHeadline>
              <DefaultText>
                Hallo Mama, guck mal Mama, was ich hier an meinem letzten
                Arbeitstag mit Jakob mache.
              </DefaultText>
              <DefaultText>
                ‍‍In Kombination von emotionaler Intelligenz und systemischem
                Denken, schaffe ich es komplexe Projekte in der Konzeption und
                Umsetzung sorgfältig zu begleiten - und zwar so, dass sich jede
                Einheit abgeholt fühlt.
              </DefaultText>
              <DefaultText>
                Kick Off- Workshops, Retros oder Sprintplanungen werden unter
                ihrer Moderation zu effizienten und motivationssteigernden
                Begegnungen im Team.
              </DefaultText>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Section>
  );
};
