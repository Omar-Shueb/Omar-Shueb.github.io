import { Suspense, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Canvas } from "react-three-fiber";
import Model from "./VrModel";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

function VrHeadset(props) {
  return (
    <Flex justify="center" align="center">
      <SlideFade
        in={props.inViewport}
        offsetX="-100px"
        transition={{
          enter: { delay: 0.5, duration: 0.6 },
          exit: { duration: 0.6 },
        }}
        whileHover={{ scale: 1.5 }}
      >
        <Suspense fallback={<div></div>}>
          <div style={{ width: "30vw", height: "40vh" }}>
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
        </Suspense>
      </SlideFade>
    </Flex>
  );
}

export default function VrWordle() {
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
      overflow={"scroll"}
    >
      <Flex justify="center" direction="column" width="50vw" textAlign="left">
        <VrHeadset inViewport={inViewport} />
        <Heading as="h1" size="3xl" color={"white"} textAlign={"left"}>
          VR Wordle
        </Heading>
        <Flex height="5vh" margin="1vh">
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
        <Box
          color="white"
          width={"40vw"}
          textAlign="justify"
          marginTop={"2vh"}
          fontSize="small"
        >
          <p>
            In a two weeks sprint with a team of four developers, I was tasked
            with recreating the popular game Wordle in VR. I wanted an
            experience that was accessible in a browser and so created the game
            using technologies such as React, Three.js, React Three Fiber, React
            XR ( built upon WebXR ) and Postgresql. The project was coded in
            Javascript and was produced in an Agile team through continuous
            deployment, using professional methods such as a Kanban-style ticket
            system, daily stand-ups and wrap-ups, pair programming and
            consistent code reviews all whilst working remotely. Because of
            this, I had to ensure that communication between my team remained
            strong as we only had one headset between us and testing had to be
            organised well in advance. This project gave me the experience to
            develop something completely new to me and allowed me the
            opportunity to discover how to overcome technical limitations to
            provide a user experience that I was proud of. I had a lot of fun
            with this project and particularly enjoyed how it allowed me to
            think of my work through the eyes of a user and how to give them the
            best possible experience. A deployed version of the game can be
            played at{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://wrdle.netlify.app/"
            >
              https://wrdle.netlify.app/
            </a>{" "}
            .
          </p>
          <p style={{ fontSize: "x-small", color: "white", marginTop: "1vh" }}>
            VR Headset Model (
            <a
              style={{ textDecoration: "underline" }}
              href="https://skfb.ly/6QTYV"
            >
              https://skfb.ly/6QTYV
            </a>
            ) by Vitamin is licensed under Creative Commons Attribution
          </p>
        </Box>
      </Flex>
      <Flex
        direction="column"
        justify="space-evenly"
        align="center"
        height="100vh"
        width="30vw"
      >
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
            width={400}
            style={{ transform: "rotate(2deg)" }}
          >
            <img src="wordle.png" alt="wordle" height={300} />
          </Box>
        </SlideFade>
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
            width={400}
            style={{ transform: "rotate(-1deg)" }}
          >
            <img src="grabbing.png" alt="wordle" height={300} />
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  );
}
