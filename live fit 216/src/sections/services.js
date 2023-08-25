/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image as Img, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import ValuesCardColumn from "components/cards/value.js";
import one from "assets/images/services/one.jpg";
import { keyframes } from "@emotion/react";

const data = [
  {
    id: 1,
    imgSrc: one,
    altText:
      "HIIT, or High-Intensity Interval Training, is a dynamic exercise method that involves short bursts of intense activity followed by brief recovery periods. It's designed to maximize calorie burn, improve cardiovascular fitness, and enhance overall endurance.",
    title: "HIIT",
  },
  {
    id: 2,
    imgSrc: one,
    altText:
      "Circuit training is a versatile workout approach that involves moving through a series of different exercises or stations, targeting various muscle groups. It combines strength training and cardiovascular exercises, providing a well-rounded and efficient workout that improves strength, endurance, and overall fitness levels.",
    title: "CIRCUIT",
  },
  {
    id: 3,
    imgSrc: one,
    altText:
      "Kickboxing is a high-energy martial arts-inspired workout that combines punches, kicks, and knee strikes. It offers a full-body workout while enhancing cardiovascular endurance, strength, and coordination. Kickboxing training helps improve self-defense skills, burn calories, and build lean muscle.",
    title: "KICKBOXING",
  },
  {
    id: 4,
    imgSrc: one,
    altText:
      "Kettlebell training is a dynamic and effective workout method that utilizes a cast-iron weight with a handle called a kettlebell. It involves a variety of exercises that combine strength training, cardiovascular conditioning, and flexibility. Kettlebell workouts help improve strength, power, endurance, and overall functional fitness.",
    title: "KETTLEBELL",
  },
  {
    id: 5,
    imgSrc: one,
    altText:
      "Boxing is a powerful combat sport and full-body workout that involves punches, footwork, and defensive techniques. It offers an intense cardio workout while enhancing strength, agility, speed, and coordination. Boxing training not only builds physical fitness but also sharpens focus, relieves stress, and boosts self-confidence.",
    title: "BOXING",
  },
  {
    id: 6,
    imgSrc: one,
    altText:
      "Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation. It promotes flexibility, balance, and strength while fostering relaxation and inner harmony. Through mindful movement and breath awareness, yoga cultivates a sense of overall well-being, reduces stress, improves posture, and enhances mental clarity.",
    title: "YOGA",
  },
  {
    id: 7,
    imgSrc: one,
    altText:
      "Strength training is a form of exercise focused on increasing muscular strength and endurance. It involves resistance exercises using weights, machines, or bodyweight to challenge the muscles. Strength training helps build lean muscle mass, improve bone density, enhance functional fitness, and boost metabolism. It plays a vital role in improving overall physical performance and supporting a healthy and active lifestyle.",
    title: "STRENGTH",
  },
  {
    id: 8,
    imgSrc: one,
    altText:
      "Bodyweight training is a versatile form of exercise that relies solely on using your own body as resistance. It involves performing a variety of movements such as push-ups, squats, lunges, and planks, among others. Bodyweight training helps improve strength, endurance, flexibility, and overall body control. It can be done anywhere, requires minimal equipment, and is an effective way to enhance functional fitness and achieve a balanced physique.",
    title: "BODYWEIGHT",
  },
  {
    id: 9,
    imgSrc: one,
    altText:
      "Animal strength training is a unique and engaging approach to fitness that draws inspiration from animal movements and behaviors. It involves exercises that mimic the movements of various animals, such as bear crawls, crab walks, frog jumps, and gorilla squats. Animal strength training improves mobility, agility, coordination, and overall functional strength. It adds an element of fun and creativity to workouts while enhancing muscle tone, endurance, and body awareness.",
    title: "ANIMALSTRENGTH",
  },
  {
    id: 10,
    imgSrc: one,
    altText:
      "Pre-natal exercise refers to physical activity specifically designed for pregnant women to support their overall health and well-being during pregnancy. It involves safe and modified exercises that focus on maintaining strength, flexibility, and cardiovascular fitness while considering the unique needs and changes in the body during pregnancy. Pre-natal exercise helps promote healthy weight management, reduces pregnancy discomfort, improves posture, boosts energy levels, and prepares the body for labor and postpartum recovery. It is important to consult with healthcare professionals and work with certified pre-natal fitness instructors for a safe and tailored exercise program.",
    title: "PRE-NATAL",
  },
  {
    id: 11,
    imgSrc: one,
    altText:
      "Post-natal exercise refers to physical activity that supports the recovery and well-being of women after childbirth. It involves gentle and progressive exercises designed to help restore strength, tone muscles, regain flexibility, and enhance overall fitness levels. Post-natal exercise focuses on rebuilding core strength, addressing any muscle imbalances, improving posture, and promoting mental well-being. It can aid in regaining pre-pregnancy fitness, boosting energy levels, reducing postpartum symptoms, and supporting the transition to motherhood. It is important to consult with healthcare professionals and work with certified post-natal fitness instructors to ensure a safe and appropriate exercise routine based on individual needs and postpartum recovery progress. ",
    title: "POST-NATAL",
  },
  {
    id: 12,
    imgSrc: one,
    altText:
      "Bootcamp workouts are dynamic and intense group exercise sessions that combine elements of strength training, cardiovascular exercises, and interval training. They often take place outdoors or in a gym setting and are led by experienced instructors. Bootcamp workouts are designed to challenge participants both physically and mentally, pushing them to their limits and fostering a sense of camaraderie and motivation within the group. These workouts typically involve a variety of exercises, such as calisthenics, running, plyometrics, and circuit training. Bootcamp training helps improve overall fitness, build strength, increase endurance, burn calories, and enhance mental resilience.",
    title: "BOOTCAMP",
  },
];

const Services = () => {
  return (
    <section sx={styles.section} id="services">
      <Container>
        <Box sx={styles.grid}>
          <Box>
            <SectionHeading
              sx={styles.heading}
              slogan="Our Services"
              title="PERSONAL TRAINING"
              description= "At LiveFit , we have carefully selected top-notch personal trainers from across the world to deliver an exceptional and personable experience to our valued clients. Our team comprises specialists in various fields, including resistance training . "
            />
          </Box>
        </Box>
        <Grid sx={styles.valuesGrid}>
          {data.map((item) => (
            <ValuesCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.altText}
            />
          ))}
        </Grid>
        {/* <ul sx={styles.boxArea}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </Container>
    </section>
  );
};

export default Services;

// const animate = keyframes`
// 0% {
//   transform: translateY(0) rotate(0deg);
//   opacity: 1;
// }
// 100% {
//   transform: translateY(-1000px) rotate(360deg);
//   opacity: 0;
// }
// `;
const styles = {
  section: {
    pt: [120, null, null, null, 160, 160],
    pb: [120, null, null, null, 160, 160],
    position: "relative",
    background:
      "linear-gradient(109.02deg, #fffaec 0%, rgba(255, 244, 217, 0.50) 118.35%)",
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
      "repeat(4,1fr)",
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
      lineHeight: 1.53,
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
  boxArea: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    zIndex: -1,
    li: {
      position: " absolute",
      display: " block",
      listStyle: " none",
      width: "25px",
      height: "25px",
      background: "#7e03f4",
      // animation: `${animate} 20s linear infinite`,
      bottom: "-150px",
      borderRadius: "10px",

      "&:nth-child(1)": {
        left: "86%",
        backgroundColor: "transparent",
        animationDelay: "0s",
        width: "100px",
        height: "90px",

        "&:after": {
          position: "absolute",
          content: '""',
          left: "50px",
          top: "0",
          width: "50px",
          height: "80px",
          background: "#1f76a8",
          borderRadius: "50px 50px 0 0",
          transform: "rotate(-45deg)",
          transformOrigin: "0 100%",
        },
        "&:before": {
          position: "absolute",
          content: '""',
          left: "50px",
          top: "0",
          width: "50px",
          height: "80px",
          background: "#1f76a8",
          borderRadius: "50px 50px 0 0",
          transform: "rotate(-45deg)",
          transformOrigin: "0 100%",
        },
        "&:after": {
          left: "0",
          transform: "rotate(45deg)",
          transformOrigin: "100% 100%",
        },
      },
      "&:nth-child(2)": {
        left: " 12%",
        width: " 30px",
        height: " 30px",
        animationDelay: " 1.5s",
        animationDuration: " 10s",
      },
      "&:nth-child(3)": {
        left: " 50%",
        width: " 100px",
        height: " 100px",
        animationDelay: " 5.5s",
        borderRadius: "50%",
      },
      "&:nth-child(4)": {
        right: "82%",
        animationDelay: "8.50s",
        animationDuration: " 15s",
        backgroundColor: "transparent",
        width: "0px",
        height: "0px",
        borderRight: "60px solid transparent",
        borderTop: "60px solid #0379f4",
        borderLeft: "60px solid #0379f4",
        borderBottom: "60px solid #0379f4",
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
      },
      "&:nth-child(5)": {
        left: "95%",
        width: " 40px",
        height: " 40px",
        animationDelay: " 0s",
      },
      "&:nth-child(6)": {
        right: "55%",
        width: "0",
        height: "0",
        animationDelay: " 13.5s",
        background: "transparent",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "50px solid #f403a9",
        margin: "2rem",
        borderRadius: "0",
      },
      "&:nth-child(7)": {
        right: "90%",
        width: "0",
        height: "0",
        animationDelay: " 9.5s",
        background: "transparent",
        borderLeft: "100px solid transparent",
        borderRight: "100px solid transparent",
        borderBottom: "100px solid #f403a9",
        margin: "2rem",
        borderRadius: "0",
      },
      "&:nth-child(8)": {
        left: "25%",
        animationDelay: "2.5s",
        background: "transparent",
        display: "block",
        color: "#f44e03",
        width: "0px",
        height: "0px",
        borderRight: "100px solid transparent",
        borderBottom: "70px solid #f44e03",
        borderLeft: "100px solid transparent",
        transform: "rotate(35deg)",

        "&:before": {
          borderBottom: "80px solid #f44e03",
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          position: "absolute",
          height: "0",
          width: "0",
          top: "-45px",
          left: "-65px",
          display: "block",
          content: `""`,
          transform: "rotate(-35deg)",
        },
        "&:after": {
          position: "absolute",
          display: "block",
          color: "#f44e03",
          top: "3px",
          left: "-105px",
          width: "0px",
          height: "0px",
          borderRight: "100px solid transparent",
          borderBottom: "70px solid #f44e03",
          borderLeft: "100px solid transparent",
          transform: "rotate(-70deg)",
          content: `""`,
        },
      },
      "&:nth-child(9)": {
        right: "22%",
        animationDelay: " 1.5s",
        animationDuration: " 15s",
        backgroundColor: "transparent",
        width: "0px",
        height: "0px",
        borderRight: "60px solid transparent",
        borderTop: "60px solid #98cdf9",
        borderLeft: "60px solid #98cdf9",
        borderBottom: "60px solid #98cdf9",
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
      },
      "&:nth-child(10)": {
        right: "15%",
        animationDelay: "16.5s",
        background: "transparent",
        display: "block",
        color: "#03f4df",
        width: "0px",
        height: "0px",
        borderRight: "100px solid transparent",
        borderBottom: "70px solid #03f4df",
        borderLeft: "100px solid transparent",
        transform: "rotate(35deg)",

        "&:before": {
          borderBottom: "80px solid #03f4df",
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          position: "absolute",
          height: "0",
          width: "0",
          top: "-45px",
          left: "-65px",
          display: "block",
          content: `""`,
          transform: "rotate(-35deg)",
        },
        "&:after": {
          position: "absolute",
          display: "block",
          color: "#03f4df",
          top: "3px",
          left: "-105px",
          width: "0px",
          height: "0px",
          borderRight: "100px solid transparent",
          borderBottom: "70px solid #03f4df",
          borderLeft: "100px solid transparent",
          transform: "rotate(-70deg)",
          content: `""`,
        },
      },
    },
  },
};
