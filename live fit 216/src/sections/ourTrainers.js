/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image as Img, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import coach from "assets/images/ourTrainers/one.jpg";
import TeamCard from "components/cards/team";

const data = [
  {
    id: 1,
    imgSrc: coach,
    position:
       " Are you ready to take your fitness journey to the next level? Look no further! I am an experienced personal trainer based in Dubai with over 10 years of expertise in helping individuals like you achieve their fitness goals. With a diverse background in swimming, calisthenics, and various sports, I bring a unique and well-rounded approach to your training sessions. My passion for fitness and commitment to your success drive me to design personalized workout programs tailored specifically to your needs and aspirations. Whether you're looking to improve your strength, boost your endurance, or enhance your overall athletic performance, I will guide and motivate you every step of the way. With my extensive experience in swimming, I can provide specialized training sessions that focus on technique refinement, speed, and endurance in the water. Additionally, my expertise in calisthenics and sports training allows me to create dynamic and engaging workouts that challenge both your body and mind. I believe in the power of building a strong client-trainer relationship, which is why I prioritize clear communication, active listening, and understanding your unique circumstances. Together, we will set realistic goals, track your progress, and celebrate every milestone achieved along the way. Join me on this transformative fitness journey and let's unlock your full potential. Whether you're a beginner or an experienced individual, I am here to support and guide you towards a healthier, fitter, and more confident version of yourself. Get in touch with me today and let's embark on this incredible fitness adventure together! " 
      
      
      ,
    name: "Abdelrahman Tarek",
    linkedIn: "#",
  },
/*  {
    id: 2,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 3,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 4,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 5,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 6,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 7,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 8,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  },
  {
    id: 9,
    imgSrc: coach,
    position:
      "Michael Gerard Tyson is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike and Kid Dynamite in his early career.",
    name: "mike tyson",
    linkedIn: "#",
  }, */
];

const OurTrainers = () => {
  return (
    <section sx={styles.section} id="team">
      <Container>
        <Box sx={styles.grid}>
          <Box>
            <SectionHeading
              sx={styles.heading}
              slogan="Meet"
              title="Our Trainers"
              description="OUR Live Fit PERSONAL TRAINERS ARE THE BEST IN DUBAI. THEY'RE FITNESS EXPERTS WHO ARE HANDPICKED FOR THEIR INCREDIBLE KNOWLEDGE AND EXPERIENCE, GUARANTEEING RESULTS FOR EVERY CLIENT THAT WE TAKE ON. START YOUR FITNESS JOURNEY WITH Live Fit TODAY"
            />
          </Box>
        </Box>
        <Grid sx={styles.valuesGrid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              alt={item.name}
              name={item.name}
              position={item.position}
              linkedIn={item.linkedIn}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default OurTrainers;

const styles = {
  section: {
    pt: [80, null, null, null, 100, 100],
    pb: [80, null, null, null, 100, 100],
    position: "relative",
    // background:
    //   "linear-gradient(180deg, rgba(5, 112, 218, 0) 0%, rgba(5, 112, 218, 0.2) 54.48%, rgba(5, 112, 218, 0) 100%)",
    "&:after": {
      content: '""',
      position: "relative",
      //   backgroundImage: `url(${waves})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      opacity: "0.6",
      backgroundRepeat: "no-repeat",
      top: "0px",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "-1",
      "@media only screen and (max-width: 768px)": {
        // display: "none",
      },
    },
  },

  grid: {},
  valuesGrid: {
    mt: ["20px", "40px", "40px"],
    px: ["20px", "20px", "20px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "20px 20px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "100%", "100%"],
    mx: "auto",
  },
  illustration: {
    alignItems: "center",
    img: {
      borderRadius: "10px",
    },
  },
  heading: {
    // textAlign: ["center", "center", "center", "center", "left"],
    h3: {
      // fontSize: [3, null, null, 6, 10, 11],
      // lineHeight: 1.53,
      color: "primary",
    },
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: ["center", null, null, "unset"],
    mt: [4, null, null, 10],
    img: {
      maxWidth: ["120px", null, null, "none"],
      width: ["120px", "120px", "200px"],
      transition: "all 0.3s ease-in-out 0s",
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(0.8)",
        transform: "scale(1.1)",
      },
    },
    appStore: {
      transform: "scale(0.9)",
      "&:hover": {
        transform: "scale(1) !important",
      },
    },
  },
};
