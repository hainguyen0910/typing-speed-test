import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Logo from "./Logo";

function Header(props) {
  const { title } = props;
  return (
    <Flex justifyContent="space-between" p="4" alignItems="center">
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
