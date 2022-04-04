import { Heading, SlideFade, Flex, Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function IntroMobile() {
  const ref = useRef();

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-30%" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex
      height="100vh"
      width="full"
      bg={"#E7520C"}
      ref={ref}
      justify="center"
      align="center"
      shadow="dark-lg"
    >
      <Flex width="90vw">
        <SlideFade
          in={inViewport}
          offsetY="100px"
          transition={{
            enter: { delay: 0.3, duration: 0.6 },
            exit: { duration: 0.6 },
          }}
        >
          <Box width="90vw" color="white">
            <Heading as="h1" fontSize={"8vw"}>
              Welcome To My Profile
            </Heading>
            <Heading fontSize={"6vw"}>Omar Shueb</Heading>
            <Heading fontSize={"6vw"}>↓</Heading>
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  );
}
