import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import VrWordle from "./VrWordle";
import WorldBank from "./WorldBank";
import MachineLearning from "./MachineLearning";
import IntroMobile from "./IntroMobile";
import AboutMeMobile from "./AboutMeMobile";
import VrWordleMobile from "./VrWordleMobile";
import MachineLearningMobile from "./MachineLearningMobile";
import WorldBankMobile from "./WorldBankMobile";

export default function Profile() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    return isMobile ? children : null;
  };

  const NavBar = () => {
    return (
      <Flex
        bg={"#E7520C"}
        position={"fixed"}
        width="full"
        height="3vh"
        marginTop="97vh"
        zIndex={1}
        justify="space-evenly"
        color="white"
      >
        <Box
          as={Button}
          height="3vh"
          bg={"#E7520C"}
          _hover={{ backgroundColor: "#cb480b" }}
        >
          <a href="https://www.linkedin.com/in/omar-shueb-713b0821a/">
            LinkedIn
          </a>
        </Box>
        <Box
          as={Button}
          height="3vh"
          bg={"#E7520C"}
          _hover={{ backgroundColor: "#cb480b" }}
        >
          {" "}
          <a href="https://github.com/Omar-Shueb">GitHub</a>
        </Box>
      </Flex>
    );
  };

  const MobileMenu = () => {
    return (
      <Box position={"fixed"} marginTop="5vw" marginLeft="5vw" zIndex={2}>
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} />
          <MenuList>
            <MenuItem>
              <a href="https://www.linkedin.com/in/omar-shueb-713b0821a/">
                LinkedIn
              </a>
            </MenuItem>
            <MenuItem>
              <a href="https://github.com/Omar-Shueb">GitHub</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  };

  return (
    <Box overflow={"hidden"}>
      <Desktop>
        <NavBar />
        <Intro />
        <AboutMe />
        <VrWordle />
        <MachineLearning />
        <WorldBank />
      </Desktop>
      <Mobile>
        <MobileMenu />
        <IntroMobile />
        <AboutMeMobile />
        <VrWordleMobile />
        <MachineLearningMobile />
        <WorldBankMobile />
      </Mobile>
    </Box>
  );
}
