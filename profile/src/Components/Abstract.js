import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl } from "@react-three/drei";
import { useInViewport } from "react-in-viewport";
import { SlideFade, Box } from "@chakra-ui/react";

function Image(props) {
  const ref = useRef();
  const group = useRef();
  useFrame((state, delta) => {
    group.current.position.x < -70
      ? (group.current.position.x = 20)
      : (group.current.position.x -= 0.01);
  });

  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, Math.random() * 3 - 2]}
        scale={[width * w - m * 0.2, 5, 1]}
        url={urls[0]}
      />
      <Image
        position={[0, 0, Math.random() * 3 - 2]}
        scale={[width * w - m * 0.2, 5, 1]}
        url={urls[1]}
      />
      <Image
        position={[width * w, 0, Math.random() * 3 - 2]}
        scale={[width * w - m * 0.2, 5, 1]}
        url={urls[2]}
      />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={["/worldbank-home.png", "/grabbing.png", "/worldbank-graph.png"]}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={["/wordle.png", "/worldbank-history.png", "/hands.png"]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={["/worldbank-home.png", "/grabbing.png", "/worldbank-graph.png"]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={["/wordle.png", "/worldbank-history.png", "/hands.png"]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={["/worldbank-home.png", "/grabbing.png", "/worldbank-graph.png"]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={["/wordle.png", "/worldbank-history.png", "/hands.png"]}
      />
    </>
  );
}

export default function Abstract() {
  const ref = useRef();
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-10%" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <SlideFade
      in={inViewport}
      offsetX="-100px"
      transition={{
        enter: { delay: 0.5, duration: 0.6 },
        exit: { duration: 0.6 },
      }}
      whileHover={{ scaleY: 1.1 }}
    >
      <Box height="50vh" width="100vw">
        <Canvas
          resize={{ scroll: false }}
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          ref={ref}
        >
          <Suspense fallback={null}>
            <Pages />

            <Preload />
          </Suspense>
        </Canvas>
      </Box>
    </SlideFade>
  );
}
