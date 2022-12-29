import { KeyboardArrowDown } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import "./intro.scss";

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ankit Nayan</h1>
          <h3>
            A
            <Typewriter
              options={{
                strings: [
                  "MERN Developer",
                  "Problem Solver(DSA)",
                  "Blockchain Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
};
