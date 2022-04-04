import { Suspense, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Flex,
  Heading,
  Image,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Canvas } from "react-three-fiber";
import Model from "./VrModel";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

function VrHeadset() {
  return (
    <Suspense fallback={<div></div>}>
      <Flex justify="center" align="center">
        <div style={{ width: "90vw", height: "30vh" }}>
          <Canvas dpr={[1, 1.5]} shadows resize={{ scroll: false }}>
            <Environment preset="city" />
            <OrbitControls
              makeDefault
              autoRotate
              autoRotateSpeed={1.2}
              maxPolarAngle={Math.PI / 2.3}
              minPolarAngle={Math.PI / 2.3}
              enableZoom={false}
              enablePan={false}
            />
            <PerspectiveCamera makeDefault fov={45} position={[0, 0, 3]}>
              <spotLight
                position={[10, 10, 5]}
                angle={0.15}
                penumbra={1}
                intensity={10}
                castShadow
                shadow-mapSize={[2048, 2048]}
              />
            </PerspectiveCamera>
            <Model />
            <mesh
              receiveShadow
              rotation-x={-Math.PI / 2}
              position={[0, -0.59, 0]}
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial transparent color="black" opacity={0.4} />
            </mesh>
          </Canvas>
        </div>
      </Flex>
    </Suspense>
  );
}

export default function VrWordleMobile() {
  const ref = useRef();

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-30%" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex
      width="full"
      bg={"#E7520C"}
      ref={ref}
      justify="space-evenly"
      align="center"
      shadow="dark-lg"
    >
      <Flex
        direction="column"
        width="90vw"
        textAlign="justify"
        justify="space-evenly"
        align="center"
        margin={"5vw"}
      >
        <VrHeadset />
        <Heading as="h1" color={"white"} fontSize={"10vw"}>
          VR Wordle
        </Heading>
        <Flex height="5vh">
          <Image
            src="JavaScript-logo.png"
            height={"100%"}
            marginRight="0.5vw"
          />
          <Image src="React-icon.png" height={"100%"} marginRight="0.5vw" />
          <Image src="Three.js_Icon.png" height={"100%"} marginRight="0.5vw" />
          <Image src="WebXr.png" height={"100%"} marginRight="0.5vw" />
          <Image src="Postgresql.png" height={"100%"} marginRight="0.5vw" />
        </Flex>
        <Flex
          direction={"column"}
          align="center"
          color="white"
          fontSize={"4vw"}
          width="90vw"
        >
          <Box boxShadow="inner" p="5" rounded="md" marginTop="5vw">
            In a two weeks sprint with a team of four developers, I was tasked
            with recreating the popular game Wordle in VR. I wanted an
            experience that was accessible in a browser and so created the game
            using technologies such as React, Three.js, React Three Fiber, React
            XR ( built upon WebXR ) and Postgresql.
          </Box>
          <SlideFade
            in={inViewport}
            offsetX="100px"
            transition={{
              enter: { delay: 0.5, duration: 0.6 },
              exit: { duration: 0.6 },
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Box
              shadow="dark-lg"
              borderWidth="2px"
              width="80vw"
              style={{ transform: "rotate(1deg)" }}
              margin="5vw"
            >
              <img src="wordle.png" alt="wordle" />
            </Box>
          </SlideFade>
          <Accordion
            allowToggle
            width="90vw"
            display={"flex"}
            justifyContent="center"
          >
            <AccordionItem
              _expanded={{ display: "flex", justifyContent: "center" }}
              border={"none"}
            >
              <AccordionButton
                _focus={{ border: 0 }}
                _expanded={{ display: "flex", justifyContent: "center" }}
              >
                More
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Box boxShadow="inner" p={5} rounded="md" marginTop="5vw">
                  The project was coded in Javascript and was produced in an
                  Agile team through continuous deployment, using professional
                  methods such as a Kanban-style ticket system, daily stand-ups
                  and wrap-ups, pair programming and consistent code reviews all
                  whilst working remotely. Because of this, I had to ensure that
                  communication between my team remained strong as we only had
                  one headset between us and testing had to be organised well in
                  advance. This project gave me the opportunity to develop
                  something completely new to me and gave me experience in how
                  to overcome technical limitations to provide a user experience
                  that I was proud of. I had a lot of fun with this project and
                  particularly enjoyed how it allowed me to think of my work
                  through the eyes of a user and how to give them the best
                  possible experience. A deployed version of the game can be
                  played at{" "}
                  <a
                    style={{ textDecoration: "underline" }}
                    href="https://wrdle.netlify.app/"
                  >
                    https://wrdle.netlify.app/
                  </a>{" "}
                  .
                </Box>
                <p
                  style={{
                    fontSize: "3vw",
                    color: "white",
                    marginTop: "1vh",
                  }}
                >
                  VR Headset Model (
                  <a
                    style={{ textDecoration: "underline" }}
                    href="https://skfb.ly/6QTYV"
                  >
                    https://skfb.ly/6QTYV
                  </a>
                  ) by Vitamin is licensed under Creative Commons Attribution
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <SlideFade
          in={inViewport}
          offsetX="100px"
          transition={{
            enter: { delay: 0.7, duration: 0.6 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Box
            shadow="dark-lg"
            borderWidth="2px"
            width="90vw"
            style={{ transform: "rotate(-1deg)" }}
            margin="5vw"
          >
            <img src="grabbing.png" alt="wordle" />
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  );
}
