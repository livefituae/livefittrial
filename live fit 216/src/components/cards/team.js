/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Flex } from "theme-ui";
import Tilt from "react-parallax-tilt";
import { Link } from "components/link";
import Image from "next/image";

export default function TeamCard({
  src,
  altText = "team members",
  name,
  position,
  linkedIn,
}) {
  return (
    <a style={{ textDecoration: "none" }} href={linkedIn}>
      <Box sx={styles.card}>
        <Image
          src={src}
          alt={altText}
          width={400}
          height={400}
          sx={styles.img}
        />

        <Box
          sx={styles.wrapper}
          // style={{ position: "absolute" }}
        >
          <Heading sx={styles.wrapper.name}>{name}</Heading>
          <Text sx={styles.wrapper.position}>{position}</Text>
        </Box>
      </Box>
    </a>
  );
}

const styles = {
  card: {
    zIndex: 3,
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "column",
    background: "rgba(252, 219, 123, 0.20)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropilter: "blur(2.3px)",
    border: "1px solid rgba(252, 219, 123, 0.5)",
    boxShadow:
      " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    //make this one responsive
    minHeight: ["auto", "auto", "400px"],
  },

  img: {
    mx: "auto",
    // width: ["180px", "200px", null, null, null, "230px"],
    zIndex: 10,
    flex: "1",
    objectFit: "cover",
    borderRadius: "16px 16px 0 0 ",
  },
  wrapper: {
    width: "100%",
    // bottom: "0px",
    // left: "0",
    display: "flex",
    flexDirection: "column",
    p: "20px",

    name: {
      fontSize: [3, null, null, null, null, 4],
      color: "heading",
      lineHeight: 1.4,
      fontWeight: 700,
      // mb: [2, null, null, null, null, 3],
      zIndex: 10,
    },

    position: {
      fontSize: 1,
      color: "textSecondary",
      fontWeight: 400,
      zIndex: 10,
    },
  },
};
