import bck from "./../assets/about_background.png";
import "./../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PageVariants = {
    initial: {
        x: "100vw"
    },
    visible: {
        x: 0,
        transition:{
            type: "tween",
            duration: 0.65,
        }
    }
}

type VariantsType = {
    initial: {
        x: string | number;
        visibility: string;
        opacity: number;
        height: number;
    },
    visible: {
        x: string | number;
        visibility: string;
        opacity: number;
        height: number;
        marginTop: string;
        marginBottom: string;
        transition: {
            delay: number;
            type: string;
            duration: number;
        },
    }
}

const About = () => {
  const Variants: VariantsType = {
    initial: {
      x: "100vw",
      visibility: "hidden",
      opacity: 0,
      height: 0,
    },
    visible: {
      x: 0,
      visibility: "visible",
      opacity: 1,
      height: 300,
      marginTop: "30px",
      marginBottom: "30px",
      transition: {
        delay: 0.2,
        type: "tween",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div className="about"
      variants={PageVariants}
      initial="initial"
      animate="visible"
    >
      <motion.img src={bck} className="about-background" alt="About background" 
        variants={Variants}
        initial="initial"
        animate="visible"
      />
      <div className="about-container flex column">
        <div className="abc">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>
        <div className="msg flex column">
          <p>Your destination is waiting. <br />Your van is ready.</p>
          <Link to="/vans"><button id="explore">Explore our vans</button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
