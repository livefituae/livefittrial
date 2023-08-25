import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/banner";
import Services from "sections/services";

import ContactUs from "sections/contactUs";
import Map from "sections/map";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Our Trainers" description="Personal Trainers" />
        <Banner title=" BOOK YOUR FIRST SESSION" accent="Contact Us" />
        <ContactUs />
        <Map />
      </Layout>
    </ThemeProvider>
  );
}
