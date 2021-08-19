/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import Logo from "components/Logo";
import NavItem from "components/NavItem";
import Sidebar from "components/Sidebar";
import React from "react";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

export default function Swibc() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <Sidebar
        integrations={integrations}
        display={{ base: "none", md: "unset" }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Header title="typing speed test" />

        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Box
            borderWidth="4px"
            borderStyle="dashed"
            rounded="md"
            minH="90vh"
          />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
