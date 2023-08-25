/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Box, Flex, Text, Container } from "theme-ui";
import { NavLink } from "components/link";
import Logo from "components/logo";
import Script from "next/script";

const navItems = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "about-us",
    label: "About Us",
  },
  {
    path: "services",
    label: "Services",
  },
  {
    path: "our-trainers",
    label: "Our Trainers",
  },

  {
    path: "ems",
    label: "EMS",
  },
  {
    path: "faq",
    label: "FAQ",
  },
];

export default function Footer() {
  return (
    <Box sx={styles.footerWrapper}>
      <Box sx={styles.fader}></Box>
      <Box as="footer" sx={styles.footer}>
        <Container sx={styles.container}>
          <Flex sx={styles.content}>
            <Flex sx={styles.copyright}>
              <Logo white style={{ zIndex: "10" }} />
              <Text as="span">
                All right reserved - Copyright by {new Date().getFullYear()}{" "}
                Live Fit
              </Text>
            </Flex>

            <Flex as="ul" sx={styles.nav}>
              {navItems?.map((item, i) => (
                <li key={i}>
                  <NavLink path={item.path} label={item.label} />
                </li>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

const styles = {
  footerWrapper: {
    position: "relative",
    background: "rgba( 0, 0, 0, 0.35 )",
  },
  fader: {
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
    height: "200px",
    width: "100%",
    zIndex: "10",
    position: "absolute",
    top: "0px",
    left: 0,
  },
  footer: {
    // backgroundColor: "background",
    position: "relative",
    pt: [120, null, null, null, 100, 100],
  },
  content: {
    zIndex: "10",
    alignItems: "center",
    display: ["block", null, null, null, "flex"],
    justifyContent: "space-between",
    paddingTop: "20px",
    paddingBottom: "60px",
    textAlign: ["center", null, null, null],
    zIndex: "10",
    position: "relative",
    "@media only screen and (max-width: 400px)": {
      // pb: 50,
    },
  },
  copyright: {
    display: ["block", "flex"],
    alignItems: "center",
    justifyContent: ["center", null, null, null],
    span: {
      zIndex: "10",

      fontSize: "14px",
      lineHeight: [1.8, null, null, 1.29],
      marginTop: 1,
      display: "inline-flex",
      ml: "20px",
    },
  },
  nav: {
    listStyle: "none",
    alignItems: "center",
    padding: 0,
    zIndex: "10",

    // display: ['flex'],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, null, null],
    mt: [5, 5, null, null, 0],
    li: {
      "+ li": {
        marginLeft: [4],
      },
      "@media only screen and (max-width: 400px)": {
        mb: 4,
      },
      a: {
        display: "inline-flex",
        cursor: "pointer",
        textAlign: "right",
        textDecoration: "none",
      },
    },
  },
};
