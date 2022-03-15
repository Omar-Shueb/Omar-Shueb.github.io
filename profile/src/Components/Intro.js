import { Heading, SlideFade, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function Intro() {
  const ref = useRef();

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-30%" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <>
      <Flex
        height="100vh"
        width="100vw"
        bg={"#E7520C"}
        ref={ref}
        justify="center"
        align="center"
        shadow="dark-lg"
        overflow={"scroll"}
      >
        <SlideFade
          in={inViewport}
          offsetY="100px"
          transition={{
            enter: { delay: 0.3, duration: 0.6 },
            exit: { duration: 0.6 },
          }}
        >
          <div style={{ marginBottom: "30%", color: "white" }}>
            <Heading as="h1" size="3xl" isTruncated>
              Welcome To My Profile
            </Heading>
            <Heading>Scroll Down</Heading>
            <Heading>↓</Heading>
          </div>
        </SlideFade>
      </Flex>
    </>
  );
}
