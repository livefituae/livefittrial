import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/banner";
import WhoWeAre from "sections/WhoWeAre";
import Satisfaction from "sections/Satisfaction";
import ContactUs from "sections/contactUs";
import OurMission from "sections/ourMission";
import OurVision from "sections/ourVision";
import Services from "sections/services";
import Map from "sections/map";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Our Trainers" description="Personal Trainers" />
        <Banner title="Our" accent="Services" />
        <Services />
        <ContactUs />
        <Map />
      </Layout>
    </ThemeProvider>
  );
}
