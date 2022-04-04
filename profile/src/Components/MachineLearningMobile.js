import { Flex, Box, Heading, Image, AspectRatio } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function MachineLearningMobile() {
  const ref = useRef();

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-30%" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex ref={ref} width="full" justify={"space-evenly"}>
      <Flex
        direction="column"
        justify="center"
        width="90vw"
        textAlign="left"
        margin="5vw"
      >
        <Heading as="h1" fontSize={"10vw"} color={"#E7520C"}>
          Predicting Materials With Machine Learning
        </Heading>
        <Flex height="5vh" margin="1vh">
          <Image src="Python.png" height={"100%"} marginRight="0.5vw" />
          <Image src="Jupyter.png" height={"100%"} marginRight="0.5vw" />
          <Image src="Scikit.png" height={"100%"} marginRight="0.5vw" />
          <Image src="Matplotlib.png" height={"100%"} marginRight="0.5vw" />
        </Flex>
        <Flex
          color={"#E7520C"}
          textAlign="justify"
          width="90vw"
          marginTop={"2vh"}
          direction="column"
          justify={"center"}
          align="center"
          fontSize={"4vw"}
        >
          <Box boxShadow="inner" p="5" rounded="md">
            This was the project for my dissertation at university where I
            explored how machine learning could be used in the prediction of
            material properties. The problem set out was that there are too many
            material with unknown properties to experiment on, and so an
            algorithm which could predict the best candidates for a particular
            application would save both time and money. Over six months I
            collected data and developed multiple machine learning algorithms to
            predict these properties. To achieve this I used Python 3, Jupyter
            Notebook, Sci-kit Learn and MatPlotLib. I chose these technologies
            as they are powerful yet simple to use and allowed me to quickly
            create successful models. I explored using different models such as
            Multi-Layered Perception networks and Support Vector Machines, as
            well as researching in depth into the mathematics behind the models
            in order to best utilise the tools I had available.
          </Box>
          <SlideFade
            in={inViewport}
            offsetX="100px"
            transition={{
              enter: { delay: 0.5, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <AspectRatio ratio={1} height={"90vw"} width={"90vw"} margin="5vw">
              <Box
                shadow="dark-lg"
                style={{ transform: "rotate(1deg)" }}
                borderWidth="2px"
                borderColor={"#E7520C"}
                height={"90vw"}
              >
                <Image src="HoF.png" alt="graph" height={"90vw"} />
              </Box>
            </AspectRatio>
          </SlideFade>{" "}
          <Box boxShadow="inner" p="5" rounded="md">
            {" "}
            In the end, I was able to create multiple successful models which
            could predict the Heat of Formation of Perovskite crystals, added to
            an active area of research and thoroughly enjoyed picking up a new
            skill set.
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
