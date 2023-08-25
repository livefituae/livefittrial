/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Container, Flex, Box } from "theme-ui";
import PriceCard from "components/cards/price-card";
import SectionHeader from "components/section-heading";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/images/patternBG.png";

const packages = [
  {
    name: "Basic",
    description: "PT",
    buttonText: "Book Now",
    priceWithUnit: "$399/",

    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "4 SESSIONS - AED 1,199",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "8 SESSIONS - AED 2,199",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "12 SESSIONS - AED 2,999",
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: "All sessions are paid upfront in 4 week packages",
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: "*SPECIAL OFFER, OFF PEAK TRAINING: 10 SESSIONS FOR AED AED 1,999 ",
        isAvailable: false,
      },
    ],
  },

 /* {
    header: "Recommended",
    name: "Standard",
    description: "Lorem Ipsum",
    priceWithUnit: "$29.99/",
    buttonText: "Book Now",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Ultimate access to all course, exercises and assessments",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Free access for all kind of exercise corrections with downloads.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Total assessment corrections with free download access system",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Unlimited download of courses on the mobile app contents",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Download and print courses and exercises in PDF",
        isAvailable: true,
      },
    ],
  },
  {
    name: "Premium",
    description: "Lorem Ipsum",
    buttonText: "Book Now",
    priceWithUnit: "$39.99/",

    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Ultimate access to all course, exercises and assessments",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Free access for all kind of exercise corrections with downloads.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Total assessment corrections with free download access system",
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: "Unlimited download of courses on the mobile app contents",
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: "Download and print courses and exercises in PDF",
        isAvailable: false,
      },
    ],
  },*/
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <Box sx={styles.plansBox}>
          <SectionHeader
            title="MALE/FEMALE PERSONAL TRAINER"
            // slogan="Whats the function"
            isWhite={true}
          />
          <Flex
            sx={{
              justifyContent: "center",
              flexWrap: ["wrap", null, null, "nowrap"],
            }}
          >
            {packages.map((packageData) => (
              <PriceCard data={packageData} key={packageData.name} />
            ))}
          </Flex>
        </Box> 
         {/* <Box sx={styles.plansBox}>
          <SectionHeader
            title="TRAIN WITH A FRIEND"
            // slogan="Whats the function"
            isWhite={true}
          />
          <Flex
            sx={{
              justifyContent: "center",
              flexWrap: ["wrap", null, null, "nowrap"],
            }}
          >
            {packages.map((packageData) => (
              <PriceCard data={packageData} key={packageData.name} />
            ))}
          </Flex>
        </Box>
        <Box sx={styles.plansBox}>
          <SectionHeader
            title="KIDS CLASSES"
            // slogan="Whats the function"
            isWhite={true}
          />
          <Flex
            sx={{
              justifyContent: "center",
              flexWrap: ["wrap", null, null, "nowrap"],
            }}
          >
            {packages.map((packageData) => (
              <PriceCard data={packageData} key={packageData.name} />
            ))}
          </Flex>
            </Box> */}
             </Container>
    </section>
  );
}

const styles = {
  pricing: {
    // backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [70, null, 90, null, null, 100],
    position: "relative",
  },
  plansBox: {
    mt: "100px",
  },
};
