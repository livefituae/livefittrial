/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container, Heading, Text, Button, Box } from "theme-ui";
import Image from "components/image";
import mesh from "assets/images/meshTwo.png";

import banner from "assets/images/bannerTwo.jpg";
import { Link } from "components/link";
import { keyframes } from "@emotion/react";

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
          <Heading as="h1">LIVE FIT </Heading>
          <Text as="p">
          Welcome to our premier personal trainers service in Dubai, where we are Dedicated to helping you achieve your fitness goals and transform your lifestyle. Our team of highly qualified and experienced trainers is here to guide and motivate you every step of the way.
          </Text>
          <Flex sx={styles.buttonGroup}>
            <Link
              path="/contact-us"
              label={
                <Button variant="primary" sx={styles.btnPrimary}>
                  BOOK NOW
                </Button>
              }
            />
          </Flex>
        </div>
        <Image src={banner} alt="Live fit " sx={styles.illustration} />
      </Container>
      {/* <Box sx={styles.fader}></Box> */}
    </section>
  );
};

export default Banner;

// const bg = keyframes`
//   0% {
//     background: url(${mesh}) no-repeat center center;
//     background-size: cover;
//   }
//   25% {
//     background: url(${mesh01}) no-repeat center center;
//     background-size: cover;
//   }
//   50% {
//     background: url(${mesh02}) no-repeat center center;
//     background-size: cover;
//   }
//   75% {
//     background: url(${mesh03}) no-repeat center center;
//     background-size: cover;
//   }
//   100% {
//     background: url(${mesh}) no-repeat center center;
//     background-size: cover;
//   }
// `;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [140, null, null, null, 140, 140],
    // animation: `${bg} ease-out infinite  6000ms `,
    height: "100vh",
    background: `url(${mesh})`,
    backgroundSize: "cover",
  },
  fader: {
    height: "200px",
    width: "100%",
    zIndex: "5",
    position: "absolute",
    bottom: "0px",
    left: 0,
    transform: "rotateX(180deg)",
    display: ["none", "none", "block", "block", "block", "block"],
    // display: "none",
    // need to make it responsive
  },
  container: {
    display: "flex",
    alignItems: ["center", "center", "center", "flex-start"],
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "row", "row"],
    py: ["20px", "30px", "30px", "50px", "160px"],
  },
  content: {
    maxWidth: ["100%", "100%", "100%", "60%", "100%", 510],
    textAlign: "center",
    py: ["0px", "16px"],
    mr: [0, 0, 0, 0, 0, "100px"],
    mb: ["20px", "20px", "50px", "0"],
    textAlign: ["center", "center", "center", "left"],
    zIndex: "10",

    h1: {
      fontSize: [4, 5, 6, 7, 7],
      lineHeight: [1.1, 1.35],
      fontWeight: "bold",
      mb: ["20px", "20px", "20px", "60px"],
    },
    p: {
      fontSize: [1, null, null, 2],
      marginTop: [3, null, null, 5],
      fontWeight: "500",
    },
  },
  buttonGroup: {
    alignItems: "start",
    justifyContent: ["center", "center", "center", "start"],
    marginTop: [4, 4, 4, 6],
  },
  btnPrimary: {
    // width: ["100px", "auto"],
    fontSize: [1, null],
    display: "block",
    height: "35px",
    marginRight: "20px",
  },
  outline: {
    // width: ["100px", "auto"],
    fontSize: [1, null],
    display: "block",
    height: "35px",
  },

  illustration: {
    // height: ["100%", "60vh", "65vh", "70vh"],
    width: "100%",
    height: "auto",
    zIndex: "10",
    objectFit: "contain",
    borderRadius: "15px",
  },
};
