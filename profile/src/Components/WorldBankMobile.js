import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function WorldBankMobile() {
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
      bg="#E7520C"
      justify="space-evenly"
      align="center"
    >
      <Flex
        direction="column"
        justify={"center"}
        align="center"
        width="90vw"
        margin="5vw"
      >
        <Heading as="h1" fontSize={"10vw"} color={"white"}>
          World Bank Indicators
        </Heading>
        <Flex justify={"flex-end"} height="5vh" margin="1vh">
          <Image
            src="JavaScript-logo.png"
            height={"100%"}
            marginRight="0.5vw"
          />
          <Image src="React-icon.png" height={"100%"} marginRight="0.5vw" />
          <Image src="Deno.svg" height={"100%"} marginRight="0.5vw" />
          <Image src="Postgresql.png" height={"100%"} marginRight="0.5vw" />
        </Flex>
        <SlideFade
          in={inViewport}
          offsetX="-100px"
          transition={{
            enter: { delay: 0.6, duration: 0.6 },
            exit: { duration: 0.6 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Box
            shadow="dark-lg"
            style={{ transform: "rotate(1deg)" }}
            borderWidth="2px"
            borderColor={"white"}
            margin="2vh"
            width={"90vw"}
          >
            <Image src="worldbank-home.png" alt="home" width={"90vw"} />
          </Box>
        </SlideFade>
        <Box
          color={"white"}
          textAlign="justify"
          width={"90vw"}
          fontSize={"4vw"}
        >
          <Box boxShadow="inner" p="5" rounded="md">
            For this project, working in a team of three developers in a single
            week sprint I created an Analytics Dashboard using a 1.4GB database
            of indicators from the World Bank. For this, a back-end server had
            to be made to keep track of user log in details and their search
            history. The technologies used in this project include; JavaScript,
            React, ReCharts, SQLite 3, PostgreSql and Deno. Again this was in an
            agile development team using all the aforementioned professional
            methods, with user stories being defined before development started.
            One challenge I had to overcome in this project was the large
            volumes of data that had to be processed and presented while still
            keeping the website fast and responsive. Again I really enjoyed this
            project due to the focus being on user experience and because of
            this having to think in new and innovative ways.
          </Box>
        </Box>
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
            shadow="dark-lg"
            style={{ transform: "rotate(-1deg)" }}
            borderWidth="2px"
            borderColor={"white"}
            margin="2vh"
            width={"90vw"}
          >
            <Image src="worldbank-graph.png" alt="graph" width="90vw" />
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  );
}
