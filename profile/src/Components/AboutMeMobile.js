import {
  Flex,
  Box,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function AboutMeMobile() {
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
      width="full"
      shadow="dark-lg"
      justify="space-evenly"
      align="center"
    >
      <Flex
        direction="column"
        width="90vw"
        textAlign="justify"
        justify="space-evenly"
        align="center"
        margin={"5vw"}
      >
        <Box fontSize={"4vw"}>
          <Heading as="h1" size="3xl" color={"#E7520C"} fontSize={"10vw"}>
            About Me
          </Heading>
          <Heading as="h5" size={"md"} color={"#E7520C"} fontSize={"8vw"}>
            Who am I?
          </Heading>
          <SlideFade
            in={inViewport}
            offsetY="100px"
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
              margin="5vw"
            >
              <Image src="/wordle.png" width="90vw" />
            </Box>
          </SlideFade>
          <br />
          <Container boxShadow="inner" p="5" rounded="md">
            I'm Omar Shueb, and I'm a junior developer in JavaScript, SQL and
            Python. I love learning new skills and picking up new experiences,
            no matter how challenging they are! Recently, I undertook a software
            engineering course at Sigma Labs; a professional software
            engineering programme with an emphasis on the professional skills to
            ensure that I can hit the ground running in a professional
            development team and learn new technologies quickly. <br />
          </Container>
          <SlideFade
            in={inViewport}
            offsetY="100px"
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
              margin="5vw"
            >
              <Image src="/worldbank-graph.png" width="90vw" />
            </Box>
          </SlideFade>{" "}
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                Over a 12 week course I learned and received a wealth of
                experience in the multiple steps of a production cycle, with
                skills and practices such as:
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                boxShadow="inner"
                p="5"
                rounded="md"
                marginTop="5vw"
              >
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
                  <ListItem>
                    Development in a Team and Effective Code Reviews
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Flex>
  );
}
