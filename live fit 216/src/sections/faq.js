/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-heading";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "What is EMS?",
    contents: (
      <div>
        Electro Muscular Stimulation or EMS is an electrical impulse applied
        locally, which stimulates the muscles and causes a physiological
        contraction. This is a replication of the natural process controlled by
        the brain. Natural muscle contractions actively use the nervous system
        resulting in significant nerve fatigue. Its main objective is to
        strengthen the muscle either in addition to exercise or as part of
        muscle rehabilitation.
      </div>
    ),
  },
  {
    title: "How Can EMS Help in My Fitness?",
    contents: (
      <div>
        There are a number of ways!
        <br />
        1. Fitness is one of those things that you put off when life gets really
        busy. With LiveFit EMS Training, we slash your workout to 20 minutes
        instead of an hour and you only have to do it 2x a week so if you’re a
        busy person, EMS should be a part of your lifestyle.
        <br />
        2.EMS stimulates your muscles to contract, making it more effective when
        you’re trying to build your muscles.
        <br />
        3. EMS is Personal Training on overdrive. This means if you’re a
        beginner, it will get you fit faster and if you train as an athlete, it
        will give you that extra stimulant to get you to perform better.
      </div>
    ),
  },
  {
    title: `Is EMS Training Safe?`,
    contents: (
      <div>
        It is absolutely safe. Electric Muscle Stimulation has been used by
        chiropractors, physicians and osteopaths for decades, but only recently
        has it started to make headway in personal training. The machines use
        very low voltage electrical impulse. We advise you to not do EMS
        Functional Training if you are/have: Pregnant Heart pacemaker Severe
        circulatory disorder & arterial circulatory disorder
      </div>
    ),
  },
  {
    title: `What Kind of Training Can I Do with the EMS System?`,
    contents: (
      <div>
        In 20 minutes, this includes the warm up exercise, cardio, endurance,
        strength training and cool down or ‘massage’ mode. As Personal Trainers,
        we design programs suited to your fitness goal. We are using Visionbody
        EMS System, the leader in wireless EMS training. Nothing hinders your
        movement because it’s wireless so the programs consists of compound
        exercises, functional training, weights training, MMA training and
        basically all types of training.
      </div>
    ),
  },
  {
    title: `How Long Will It Take To See Results?`,
    contents: (
      <div>
        Clients usually report visible results within four to six sessions. It
        can take a little longer, or shorter, depending on your body weight and
        body composition when you come for your first session.
      </div>
    ),
  },
  {
    title: `Where is LiveFit Located?`,
    contents: (
      <div>
        You can find us in the State of the Art, gym facility – Ground Floor,
        Pharaoh’s Club, Pyramids WAFI, Dubai UAE. Call or WhatsApp us at
        0585507100 for more information.
      </div>
    ),
  },
  {
    title: `Do I Need To Be A Gym Member to Train in the Facilities?`,
    contents: (
      <div>
        You don’t have to be a member to train inside the gyms this is included
        in your EMS package. However if you wish to attend the classes and use
        the facility even without sessions, you will need to sign up for a
        membership.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={styles.faq}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  faq: {
    py: ["100px", "130px"],
  },
};
