/* eslint-disable react-hooks/rules-of-hooks */
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavItem = (props) => {
  const { icon, children, path, ...rest } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      isActive={(match, location) => {
        if (location.pathname === path) setIsActive(true);
        else setIsActive(false);
      }}
      to={path}
    >
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("gray.100", "gray.500"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        bg={isActive && useColorModeValue("orange.100", "orange.400")}
        color={isActive && useColorModeValue("gray.900", "gray.200")}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: useColorModeValue("gray.600", "gray.300"),
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};

export default NavItem;
