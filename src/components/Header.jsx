import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function Header(props) {
  const { title, sidebar } = props;
  return (
    <Flex justifyContent="space-between" p="4" alignItems="center">
      <Button
        onClick={sidebar.onToggle}
        display={{ base: "unset", md: "none" }}
      >
        <GiHamburgerMenu />
      </Button>

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
      >
        <Text as={"span"} color={"red.400"}>
          {title.toUpperCase()}
        </Text>
      </Heading>
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Header;
