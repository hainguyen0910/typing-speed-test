/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { ROUTES } from "configs/routes";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  const sidebar = useDisclosure();

  return (
    <Router>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <Sidebar display={{ base: "none", md: "unset" }} />
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
          <Header title="typing speed test" sidebar={sidebar} />

          <Flex flexDir="column" justifyContent="space-between">
            {/* Add content here, remove div below  */}
            <Box
              as="main"
              p="4"
              m="2"
              borderWidth="4px"
              borderStyle="dashed"
              rounded="md"
              minH="84vh"
            >
              <Switch>
                {ROUTES.map((item, index) => (
                  <Route
                    name={item.name}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                    key={index}
                  />
                ))}
              </Switch>
            </Box>
            <Footer />
          </Flex>
        </Box>
      </Box>
    </Router>
  );
}
