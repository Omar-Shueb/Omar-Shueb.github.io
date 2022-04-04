import { Heading, SlideFade, Flex, Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import Abstract from "./Abstract";

export default function Intro() {
  const ref = useRef();

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-10%" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex
      height="97vh"
      width="100vw"
      bg={"#E7520C"}
      ref={ref}
      justify="center"
      align="center"
      shadow="dark-lg"
    >
      <Box
        position={"absolute"}
        zIndex={1}
        width="100vw"
        height={"50vh"}
        marginTop="35vh"
      >
        <Abstract />
      </Box>
      <SlideFade
        in={inViewport}
        offsetY="100px"
        transition={{
          enter: { delay: 0.3, duration: 0.6 },
          exit: { duration: 0.6 },
        }}
      >
        <Box style={{ marginBottom: "30%", color: "white" }}>
          <Heading as="h1" size="3xl" isTruncated>
            Welcome To My Profile
          </Heading>
          <Heading>Omar Shueb</Heading>
          <Heading>↓</Heading>
        </Box>
      </SlideFade>
    </Flex>
  );
}
