import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/banner";
import ContactUs from "sections/contactUs";
import Map from "sections/map";
import Faq from "sections/faq";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="FAQ" description="Personal Trainers" />
        <Banner
          title="
Frequently Asked "
          accent="Questions"
        />
        <Faq />

        <ContactUs />
        <Map />
      </Layout>
    </ThemeProvider>
  );
}
