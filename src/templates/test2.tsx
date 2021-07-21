import React from "react";
import { ContainerWrapper as Container } from "../components/container";
import { Section } from "../components/section";

export interface Test2Props {
  headline: string;
}

export const Test2 = ({ headline }: Test2Props) => {
  return (
    <Section height="500vh">
      <Container>{headline}</Container>
    </Section>
  );
};
