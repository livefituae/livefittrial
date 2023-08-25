/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, useEffect } from "react";
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import SectionHeading from "components/section-heading";

const Map = () => {
  return (
    <Box id="map" as="section" sx={styles.map}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Where To Find Us"
          description="
          Live Fit delivers training sessions in Dubai, offering both in-home and gym-based options for your convenience."
        />
        <Box sx={styles.contentWrapper}>
          <iframe
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0328929645!2d54.89780759377546!3d25.075658348874505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1684670947674!5m2!1sen!2sae"
            
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default Map;

const styles = {
  map: {
    pt: [80, null, null, null, 120, 140],
    // pb: [80, null, null, null, 120, 140],
  },
  contentWrapper: {
    iframe: {
      borderRadius: "10px",
      border: "none",
    },
  },

  heading: {
    h3: {
      color: "primary",
    },
  },
};
