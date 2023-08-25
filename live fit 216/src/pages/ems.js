import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
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
import Banner from "components/banner";

import one from "assets/images/ems//sectionOne.jpg";
import two from "assets/images/ems//sectionTwo.jpg";
import three from "assets/images/ems//sectionThree.jpg";
import { Link } from "components/link";
import Button from "components/form/button";
import ContactUs from "sections/contactUs";

import Map from "sections/map";

const sectionOne = {
  subTitle: "Our Clients Report Up to 12 Kgs. (27 lbs) lost in 12 Sessions",
  description:
    "Yes, it can be that fast! We’re confident to claim it will be faster than your conventional workout programs that makes you spend hours in the gym without seeing any results.Fat loss is one of the most common, yet challenging fitness goals. EMS is an incredibly effective method of targeting fat due to the penetrative effects of the low electrical impulse. The technology burns fat up to 3x faster than conventional training.What makes us different from other EMS companies? Our coaches are certified Personal Trainers + our EMS system, complements the special  workouts that we design for our client’s body = amplified workouts that will definitely bring you your fitness goals. There are endless possibilities and the good news is, it won’t take much from your precious time. 20 Minutes once or twice a week will get you that new body.",
  title: " Weightloss Program",
};
const sectionTwo = {
  subTitle: "We focus on muscle mass growth so we can zap those fats.",
  description:
    "Our Body Toning Program is specially designed to improve the quality of the muscle tissue by eliminating the excess fat and strengthening specific parts of the body. Using a variety of techniques from body weight to free weights to develop strength in the muscles through resistance exercise With LiveFit EMS Training, maximum performance increases by up to 30% in just a few weeks, and muscle mass grows by up to 14% in just a few months. Using state of the art EMS technology, our training sessions will get you your target body shape, in as little time and effort as possible.",
  title: "Body Toning Program",
};
const sectionThree = {
  description:
    "This program is not just about those that want to build larger muscles. It has also been designed for those that want to strengthen their muscles after an injury. With EMS, strengthen and tone up to five times faster than conventional training at stimulating deep tissue muscle growth. Improve muscular strength by gradually increasing the ability to resist force through the use of free weights, exercise machines, or the person’s own body weight.Most men assume, especially body-builders, that EMS is not for them In reality, EMS training is a good supplementary to grow muscle mass.",
  title: "Strength Training Program",
};

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Ems" description="Personal Trainers" />
        <Banner title="Find Out More" accent="EMS" />
        <section sx={styles.coreFeature}>
          <Container sx={styles.containerBox}>
            <Box sx={styles.thumbnail}>
              <Image src={one} alt="Thumbnail" />
            </Box>
            <Box sx={styles.contentBox}>
              <Box sx={styles.headingTop}>
                <TextFeature
                  subTitle={sectionOne.subTitle}
                  title={sectionOne.title}
                />
                <Text>{sectionOne.description}</Text>{" "}
              </Box>
            </Box>
          </Container>
        </section>
        <section sx={styles.coreFeature}>
          <Container sx={styles.containerBox}>
            <Box sx={styles.contentBox}>
              <Box sx={styles.headingTop}>
                <TextFeature
                  subTitle={sectionTwo.subTitle}
                  title={sectionTwo.title}
                />
                <Text>{sectionTwo.description}</Text>{" "}
              </Box>
            </Box>
            <Box sx={styles.thumbnail}>
              <Image src={two} alt="Thumbnail" />
            </Box>
          </Container>
        </section>
        <section sx={styles.coreFeature}>
          <Container sx={styles.containerBox}>
            <Box sx={styles.thumbnail}>
              <Image src={three} alt="Thumbnail" />
            </Box>
            <Box sx={styles.contentBox}>
              <Box sx={styles.headingTop}>
                <TextFeature
                  subTitle={sectionThree.subTitle}
                  title={sectionThree.title}
                />
                <Text>{sectionThree.description}</Text>{" "}
              </Box>
            </Box>
          </Container>
        </section>
        <ContactUs />
        <Map />
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  coreFeature: {
    py: [60, 80, 100, 120, 150, 150],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
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
