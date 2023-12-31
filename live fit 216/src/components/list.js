/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Flex, Box, IconButton } from "theme-ui";

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text, isAvailable }, i) => (
        <Flex
          className={isAvailable ? "open" : "closed"}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}
    </Box>
  );
}
const styles = {
  listIcon: {
    width: [25, "35px"],
    height: "auto",
    color: "accent",
    padding: 0,
    fontSize: [2, 5],
    marginLeft: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    marginTop: [1, "2px"],
  },
};
