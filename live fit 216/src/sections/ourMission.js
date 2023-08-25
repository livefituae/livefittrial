/** @jsxRuntime classic */
/** @jsx jsx */ import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Flex,
} from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import satisfaction from "assets/images/satisfaction.jpg";
import { NavLink } from "components/link";
import Button from "components/form/button";

const data = {
  subTitle: "",
  title: "Our Mission",
  description:
    "Children are constantly encouraged to climb, dance, play and explore.  But have you noticed how this stops when we grow up? Our main option as adults is the gym. Dance classes, playgrounds, and creative body movement classes for adults are difficult to find. At Live Fit, our mission is to change that. We think adults should be able to climb, dance, play...and fly! Our goal is to use the joy of circus arts to support adults of any age, size, color, fitness background, sexual orientation or gender identity on their movement journey.",
};

export default function OurMission() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
            <Text>{data.description}</Text>{" "}
            <Flex sx={styles.buttonGroup}>
              <NavLink
                path="services"
                label={
                  <Button variant="primary" sx={styles.btnPrimary}>
                    Browse More
                  </Button>
                }
              />{" "}
            </Flex>
          </Box>
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={satisfaction} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [1, 2, 2, 2, 6, 7],
    position: "relative",
  },
  buttonGroup: {
    alignItems: "start",
    justifyContent: ["center", "center", "center", "start"],
    marginTop: [4, 4, 4, 6],
  },
  btnPrimary: {
    width: ["100px", "auto"],
    fontSize: [1, null],
    display: "block",
    height: "35px",
    marginRight: "20px",
  },
  ouMission: {},
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  thumbnail: {
    img: {
      borderRadius: "10px",
    },
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
