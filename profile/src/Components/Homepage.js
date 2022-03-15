import React from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import VrWordle from "./VrWordle";
import WorldBank from "./WorldBank";
import { Box } from "@chakra-ui/react";
import MachineLearning from "./MachineLearning";

export default function Homepage() {
  return (
    <Box>
      <Intro />
      <AboutMe />
      <VrWordle />
      <MachineLearning />
      <WorldBank />
    </Box>
  );
}
