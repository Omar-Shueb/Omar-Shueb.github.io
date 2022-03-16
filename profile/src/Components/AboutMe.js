import { Flex, Box, Container, Heading, Image } from "@chakra-ui/react";
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
      justify="space-evenly"
      align="center"
    >
      <Flex
        direction="column"
        height="80vh"
        width="50vw"
        textAlign="left"
        justify="space-evenly"
      >
        <Flex width={"50vw"} justify="space-evenly">
          <SlideFade
            in={inViewport}
            offsetX="-100px"
            transition={{
              enter: { delay: 0.5, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Box
              style={{ transform: "rotate(-1deg)" }}
              borderWidth="2px"
              borderColor={"#E7520C"}
            >
              <Image src="/wordle.png" height="25vh" />
            </Box>
          </SlideFade>
          <SlideFade
            in={inViewport}
            offsetX="-100px"
            transition={{
              enter: { delay: 0.5, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Box
              style={{ transform: "rotate(1deg)" }}
              borderWidth="2px"
              borderColor={"#E7520C"}
            >
              <Image src="/worldbank-graph.png" height="25vh" />
            </Box>
          </SlideFade>
        </Flex>
        <Box>
          <Heading as="h5" size={"md"} color={"#E7520C"}>
            Who am I?
          </Heading>
          I'm Omar Shueb, and I'm a junior developer in JavaScript, SQL and
          Python. I love learning new skills and picking up new experiences, no
          matter how challenging they are! Recently, I undertook a software
          engineering course at Sigma Labs; a professional s/w engineering
          programme with an emphasis on the professional.
        </Box>
      </Flex>
      <Flex
        direction="column"
        width="40vw"
        textAlign="right"
        justify="center"
        align="flex-end"
      >
        <Heading as="h1" size="3xl" color={"#E7520C"}>
          About Me
        </Heading>
        <Container style={{ textAlign: "justify", width: "40vw" }}>
          Over a 12 week course I learned and received a wealth of experience
          in:
          <br />
          <ul style={{ marginLeft: "2vw" }}>
            <li>Front End / Back End Development</li>
            <li>JavaScript, SQL and Python</li>
            <li>Using and Developing API's</li>
            <li>React</li>
            <li>Continuous Deployment / Integration</li>
          </ul>
          I also was immersed in a number of professional skills and practices
          such as:
          <ul style={{ marginLeft: "2vw" }}>
            <li>Kanban-Style Ticket Systems</li>
            <li>Pair Programming</li>
            <li>Daily Stand Ups and Wrap Ups</li>
            <li>Professional Digital Communications</li>
            <li>Growth Mindset</li>
            <li>Agile and Waterfall Development Cycles</li>
            <li>Development in a Team and Effective Code Reviews</li>
          </ul>
        </Container>
      </Flex>
    </Flex>
  );
}
