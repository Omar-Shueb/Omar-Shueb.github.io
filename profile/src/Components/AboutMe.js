import { Flex, Box, Container, Heading } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function AboutMe() {
  const ref = useRef();

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-30%" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex
      ref={ref}
      height="100vh"
      width="full"
      shadow="dark-lg"
      overflow={"scroll"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "10vw",
            marginTop: "5vh",
          }}
        >
          <SlideFade
            in={inViewport}
            offsetX="-100px"
            transition={{
              enter: { delay: 0.5, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
          >
            <Box p={5} shadow="2xl" borderWidth="1px">
              <img
                style={{
                  borderRadius: "10px",
                }}
                width={"320px"}
                src="Omar.jpg"
                alt="Omar Shueb"
                objectFit="cover"
              />
            </Box>
          </SlideFade>
        </div>
        <div
          style={{
            marginRight: "8vw",
            marginTop: "5vh",
            textAlign: "right",
          }}
        >
          <SlideFade
            in={inViewport}
            offsetX="100px"
            transition={{
              enter: { delay: 0.8, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
          >
            <Heading as="h1" size="3xl" color={"#E7520C"}>
              About Me
            </Heading>
          </SlideFade>
          <SlideFade
            in={inViewport}
            offsetX="150px"
            transition={{
              enter: { delay: 0.9, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
          >
            <Container
              style={{ textAlign: "left", width: "30vw", marginTop: "1vh" }}
            >
              <Heading as="h5" size={"md"} color={"#E7520C"}>
                Who am I?
              </Heading>
              My name's Omar Shueb, and I'm a junior developer in JavaScript and
              Python. I recently undertook a software engineering course at
              Sigma Labs; a professional s/w engineering programme with an
              emphasis on the professional. <br />
              <br /> Over a 12 week course I learned and received a wealth of
              experience in:
              <br />
              <ul>
                <li>Front End / Back End Development</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Using and Developing API's</li>
                <li>React</li>
                <li>Continuous Deployment / Integrationl</li>
              </ul>
            </Container>
          </SlideFade>
        </div>
      </div>
    </Flex>
  );
}
