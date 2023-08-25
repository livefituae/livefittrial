import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "components/form/input";
import Error from "components/form/error";
import { Box, Button, Container, Grid, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import { Input as ThemeInput } from "theme-ui";
import upload from "assets/images/icons/upload.webp";
import bg from "assets/images/aboutUs/cardBg.png";
import blob from "assets/images/blobMesh.svg";
import phone from "assets/images/contact/phone.svg";
import email from "assets/images/contact/email.svg";
import instagram from "assets/images/contact/instagram.svg";
import whatssapp from "assets/images/contact/whatssapp.svg";
import Image from "components/image";

const widgets = [
  {
    id: 1,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfnbcpPxHMwMvrFlgkdMcGlFXwMwjHHHrlvBzzrKJqkvfHTRfRHBqqPCmDscTfKNjmnFnq",
    iconSrc: <Image src={email} alt="email icon" />,
    altText: "email",
    title: "livefituaedubai@gmail.com",
  },

  {
    id: 3,
    link: "tel:+971585507100",
    iconSrc: <Image src={phone} alt="phone icon" />,
    altText: "Phone",
    title: <p>+971585507100</p>,
  },
  {
    id: 2,
    link: "https://wa.me/<+971585507100> ",
    iconSrc: <Image src={whatssapp} alt="whatsapp icon" />,
    altText: "whatsapp",
    title: "+971585507100",
  },

  {
    id: 4,
    link: "https://instagram.com/livefit.uae?igshid=MzRlODBiNWFlZA==",
    iconSrc: <Image src={instagram} alt="instagram icon" />,
    altText: "LiveFit UAE",
    title: <p>@livefit.uae</p>,
  },
];

const ContactUs = () => {
  return (
    <Box as="section" sx={styles.section} id="ContactUs">
      <Container sx={styles.container}>
        <SectionHeading
          title="Contact Us"
          description="To get in touch with any inquiries you may have about Live Fit, feel free to email us at livefituaedubai@gmail.com or reach us via phone or WhatsApp at +971585507100. If you're interested in personal training sessions, please fill out the form below, and our team will contact you within 24 hours."
        />
        <Grid sx={styles.widgets}>
          {widgets.map((item) => (
            <a key={item.id} sx={styles.widgets.link} href={item.link}>
              <Box sx={styles.widgets.widgetItem}>
                <span sx={styles.widgets.svg}>{item.iconSrc}</span>
                <Box sx={styles.widgets.infoWrapper}>
                  <Text as="p">{item.title}</Text>
                </Box>
              </Box>
            </a>
          ))}
        </Grid>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
            phone: "",
            success: false,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required."),
            phone: Yup.number("")
              .required("Phone number is required.")
              .typeError("Phone Must be a Number"),

            email: Yup.string()
              .email("Invalid email")
              .required("Email is required."),
            message: Yup.string().required("Message is required."),
          })}
          onSubmit={async (
            { name, email, message, phone },
            { setSubmitting, resetForm, setFieldValue }
          ) => {
            try {
              const data = JSON.stringify({
                name,
                email,
                message,
                phone,
              });
              const config = {
                // "Content-Type": "application/json",
                "content-type": "multipart/form-data",
                // "content-type": resume.type,
                // "content-length": `${resume.size}`,
              };
              const formData = new FormData();
              formData.append("name", name);
              formData.append("email", email);
              formData.append("message", message);
              formData.append("phone", phone);

              fetch("https://getform.io/f/3ebb0b75-63de-43e8-bdac-96b9e4bdcb03", {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "multipart/form-data",
                },
              })
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

              setSubmitting(false);
              setFieldValue("success", true);
              setTimeout(() => {
                resetForm();
                setFieldValue("resume", "");
              }, 1000);
            } catch (err) {
              setSubmitting(false);
              setFieldValue("success", false);
              alert(`Something went wrong, please try again ${err}`); // eslint-disable-line
            }
          }}
        >
          {({ values, touched, errors, setFieldValue, isSubmitting }) => {
            return (
              <Form>
                <Box sx={styles.inputField}>
                  <Input
                    as={FastField}
                    type="text"
                    name="name"
                    component="input"
                    aria-label="name"
                    placeholder="Name*"
                    error={touched.name && errors.name}
                  />
                  <ErrorMessage component={Error} name="name" />
                </Box>

                <Box sx={styles.inputField}>
                  <Input
                    as={FastField}
                    type="text"
                    name="phone"
                    component="input"
                    aria-label="phone"
                    placeholder="Phone number*"
                    error={touched.phone && errors.phone}
                  />
                  <ErrorMessage component={Error} name="phone" />
                </Box>
                <Box sx={styles.inputField}>
                  <Input
                    id="email"
                    aria-label="email"
                    component="input"
                    as={FastField}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    error={touched.email && errors.email}
                  />
                  <ErrorMessage component={Error} name="email" />
                </Box>

                <Box sx={styles.inputField}>
                  <Field
                    as="textarea"
                    className={`${
                      touched.message && errors.message
                        ? "text__area error"
                        : "text__area"
                    }`}
                    aria-label="message"
                    id="message"
                    rows="8"
                    name="message"
                    placeholder="How can we help you today ? *"
                    error={touched.message && errors.message}
                  />
                  <ErrorMessage component={Error} name="message" />
                </Box>
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none !important" }}
                />

                {values.success && (
                  <Box sx={styles.inputField}>
                    <Box sx={styles.center}>
                      <h4>
                        Your message has been successfully sent, I will get back
                        to you ASAP!
                      </h4>
                    </Box>
                  </Box>
                )}
                <Box sx={styles.buttonWrapper}>
                  <Button
                    sx={styles.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "isSubmiting ..." : "submit"}
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    pt: [120, null, null, null, 160, 160],
    pb: [120, null, null, null, 160, 160],
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: "contain",
  },
  container: {
    width: ["100%", "95%", "80%", "70%", "60%"],
    maxWidth: "700px !important",
    h3: {
      color: "primary",
    },
  },
  widgets: {
    px: [4, 0, 3, null, 7, 10],
    width: ["100%", "100%"],
    mx: "auto",
    gridGap: ["30px 10px", "20px 20px"],
    gridTemplateColumns: ["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"],
    a: {
      textDecoration: "none",
      color: "text",
      width: "100%",
    },
    mt: "0px",
    mb: "10px",
    img: {
      width: ["40px", "50px", "60px"],
      height: ["40px", "50px", "60px"],
    },
    widgetItem: {
      textAlign: "center",
      // mb: ["20px", "20px", "auto"],
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },
      "& a": {
        textDecoration: "none",
        color: "text",
      },

      p: {
        fontSize: [1, "15px"],
        fontWeight: 500,
        lineHeight: 1.6,
        color: "heading_secondary",
      },
    },
  },
  inputField: {
    position: "relative",
    marginBottom: "1rem",
    ".error": {
      borderColor: "  #ff4136 !important",
      outlineColor: "#ff4136 !important ",
      borderWidth: "2px !important",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
    ".text__area": {
      width: " 100%",
      borderRadius: "7px",
      marginBottom: "0.5rem",
      transition: "0.3s",
      color: "text",
      backdropFilter: "blur(16px) saturate(180%)",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      border: "1px solid rgba(000, 000, 000, 0.5)",
      p: ["20px !important ", "30px"],
      transition: "0.3s",
      outlineColor: "accent",
      fontSize: ["12px", "16px"],
      "&:focus": {
        borderColor: "primary",
        outline: "primary 2px solid",
        boxShadow: "0 0 0 2px primary",
      },
      "&:placeholder": {
        color: "#a7a7a7",
      },
      "&:focus": {
        "&:focus": {
          borderColor: "primary",
          boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          // outline: "none",
        },
      },
      "&:placeholder-shown": {
        fontSize: 2,
      },
    },
  },
  buttonWrapper: {
    "@media screen and (max-width: 640px)": {
      textAlign: "center",
    },
    button: {
      mt: 30,
      display: "block",
      textDecoration: "none",
      color: "white",
      fontSize: ["16px", null, null, 2],
      letterSpacings: "-0.15px",
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacings: "-0.15px",
      "@media screen and (max-width: 640px)": {
        width: "100%",
        mx: "auto",
      },
    },
  },
  fileUpload: {
    // padding: "5px",
    backdropFilter: "blur(16px) saturate(180%)",
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(000, 000, 000, 0.5)",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",
    color: "black",
    backgroundImage: `url(${upload})`,
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    animation: `all ease-out infinite  6000ms `,
    cursor: "pointer",
    "&:autofill": {
      color: "white !important ",
    },
    "&:hover": {
      backgroundColor: "#e4e9fa66",
    },
    "&:placeholder": {
      color: "#a7a7a7",
    },
    "&::file-selector-button": {
      marginRight: "20px",
      border: "none",
      background: "transparent",
      padding: "10px 20px",
      borderRadius: "10px",
      color: "#a7a7a7",
      fontSize: "bold",
      cursor: "pointer",
      transition: "background .2s ease-in-out",
    },

    "&::file-selector-button:hover": {
      background: "transparent",
    },
  },
  error: {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(000, 000, 000, 0.5)",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",
    color: "text",
    backgroundImage: `url(${upload})`,
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    "&:autofill": {
      color: "white !important ",
    },

    "&:placeholder": {
      color: "#a7a7a7",
    },
    "&::file-selector-button": {
      marginRight: "20px",
      border: "none",
      background: "transparent",
      padding: "10px 20px",
      borderRadius: "10px",
      color: "#000",
      cursor: "pointer",
      transition: "background .2s ease-in-out",
    },

    "&::file-selector-button:hover": {
      background: "transparent",
    },
    borderColor: "  #ff4136 !important",
    outlineColor: "#ff4136 !important ",
    borderWidth: "2px !important",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
};

export default ContactUs;
