import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
// import ServicesTwo from "sections/servicesTwo";
import WhoWeAre from "sections/WhoWeAre";
import Satisfaction from "sections/Satisfaction";

import ContactUs from "sections/contactUs";
import Map from "sections/map";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Live Fit" description="Personal Trainers" />
        <Banner />
        <WhoWeAre />
        <Satisfaction />

        <Services />
        {/* <ServicesTwo /> */}

        <ContactUs />
        <Map />
      </Layout>
    </ThemeProvider>
  );
}
