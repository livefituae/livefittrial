/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
// import logo from "assets/images/logo.png";
// import logoDark from "assets/images/logo-dark.png";
import logoDark from "assets/images/logo.png";
import logo from "assets/images/logo.png";
import Image from "next/image";

export default function Logo({ isSticky, light, dark, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {light ? (
        <Image width={100} height={50} src={logo} alt="Live Fit logo" />
      ) : dark ? (
        <Image width={100} height={50} src={logoDark} alt="Live Fit logo" />
      ) : (
        <Image
          width={100}
          height={50}
          src={isSticky ? logoDark : logo}
          alt="Live Fit logo"
        />
      )}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    width: "100px",

    img: {
      width: "100px",
      height: "50px",
      objectFit: "contain",
    },
  },
};
