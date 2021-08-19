import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaRss } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Sidebar = (props) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Logo h="10" />
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          Whistle
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize={{ base: "sm", md: "md" }}
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome} path="/">
          Home
        </NavItem>
        <NavItem icon={FaRss} path="/typing-speed-test">
          Typing speed test
        </NavItem>
        <NavItem icon={HiCollection} path="/text-practice">
          Text Practice
        </NavItem>
      </Flex>
    </Box>
  );
};

export default Sidebar;
