import {
  Flex,
  Box,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
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
        width="45vw"
        textAlign="justify"
        justify="space-evenly"
        align="center"
      >
        <Flex width="45vw" justify="space-evenly">
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
              <Image src="/wordle.png" height="20vh" />
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
              <Image src="/worldbank-graph.png" height="20vh" />
            </Box>
          </SlideFade>
        </Flex>
        <Box>
          <Heading as="h1" size="3xl" color={"#E7520C"}>
            About Me
          </Heading>
          <Heading as="h5" size={"md"} color={"#E7520C"}>
            Who am I?
          </Heading>
          I'm Omar Shueb, and I'm a junior developer in JavaScript, SQL and
          Python. I love learning new skills and picking up new experiences, no
          matter how challenging they are! Recently, I undertook a software
          engineering course at Sigma Labs; a professional software engineering
          programme with an emphasis on the professional skills to ensure that I
          can hit the ground running in a professional development team and
          learn new technologies quickly.
        </Box>
      </Flex>
      <Flex
        direction="column"
        width="45vw"
        height="80vh"
        justify={"center"}
        align="center"
        textAlign={"justify"}
      >
        Over a 12 week course I learned and received a wealth of experience in
        the multiple steps of a production cycle, with skills and practices such
        as:
        <br />
        <UnorderedList stylePosition={"inside"} styleType="circle">
          <br />
          <ListItem>Front End / Back End Development</ListItem>
          <Divider />
          <ListItem>JavaScript, SQL and Python</ListItem>
          <Divider />
          <ListItem>Using and Developing API's</ListItem>
          <Divider />
          <ListItem>React</ListItem>
          <Divider />
          <ListItem>Continuous Deployment / Integration</ListItem>
          <Divider />
          <ListItem>Kanban-Style Ticket Systems</ListItem>
          <Divider />
          <ListItem>Pair Programming</ListItem>
          <Divider />
          <ListItem>Daily Stand Ups and Wrap Ups</ListItem>
          <Divider />
          <ListItem>Professional Digital Communications</ListItem>
          <Divider />
          <ListItem>Growth Mindset</ListItem>
          <Divider />
          <ListItem>Agile and Waterfall Development Cycles</ListItem>
          <Divider />
          <ListItem>Development in a Team and Effective Code Reviews</ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}
