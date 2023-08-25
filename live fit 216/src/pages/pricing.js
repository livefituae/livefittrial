import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/banner";
import ContactUs from "sections/contactUs";
import Package from "sections/package";
import Map from "sections/map";

export default function Pricing() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Our Trainers" description="Personal Trainers" />
        <Banner title="Our" accent="Packages" />
        <Package />
        <ContactUs />
        <Map />
      </Layout>
    </ThemeProvider>
  );
}
