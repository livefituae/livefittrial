/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Button } from "theme-ui";
import { useState } from "react";
import Sticky from "react-stickynode";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import Logo from "components/logo";
import { Link, Link as NavLink } from "components/link";
import menuItems from "./header.data";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? "is-sticky" : ""}
        >
          <Container sx={styles.container}>
            <Logo light isSticky={state.isSticky} />
            <nav as="nav" sx={styles.navbar}>
              {menuItems.map(({ path, label }, i) => (
                <NavLink
                  key={i}
                  path={path}
                  label={label}
                  className={state.isSticky ? "is-sticky" : ""}
                />
              ))}
            </nav>
            <Link
              path="/contact-us"
              label={<Button variant="primary">BOOK NOW</Button>}
              sx={styles.joinUs}
            />
            <NavbarDrawer isSticky={state.isSticky} />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: [3],
    transition: "all 0.3s ease-in-out 0s",
    background: "rgba( 0, 0, 0, 0.35 )",
    "&.is-sticky": {
      background: "rgba( 0, 0, 0, 0.35 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 8px )",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    a: {
      color: "black",
      cursor: "pointer",
      display: ["flex"],
      fontWeight: 400,
      padding: 0,
      transition: "all 0.3s ease-in-out 0s",
      "+ a": {
        ml: [null, null, null, null, 3, 5],
      },
    },
    ".is-sticky": {
      color: "text",
    },
    ".active": {
      color: "primary",
    },
  },
  button: {
    display: ["none", null, null, null, "inline-flex"],
    minHeight: 45,
    px: "18px",
  },
  joinUs: {
    "@media screen and (max-width: 1024px)": {
      display: "none ",
    },
  },
};
