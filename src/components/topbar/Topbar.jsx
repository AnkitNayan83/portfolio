import { GitHub, LinkedIn, Mail, Person } from "@mui/icons-material";
import "./topbar.scss";

export const Topbar = ({ open, setOpen }) => {
  return (
    <div className={"topbar " + (open ? "active" : "")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            positive.
          </a>
          <div className="iconContainer">
            <Person className="icon" />
            <span>7340069239</span>
            <Mail className="icon" />
            <span>ankitnayan83@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="quick">
            <a href="https://github.com/AnkitNayan83" target="_blank">
              <GitHub className="iconR" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-nayan-816337221/"
              target="_blank"
            >
              <LinkedIn className="iconR" />
            </a>
            <a href="https://leetcode.com/ankitnayan83/" target="_blank">
              <img src="/assets/leetcode.png" alt="" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/ankitnayan83/practice"
              target="_blank"
            >
              <img src="/assets/gfg.png" alt="" />
            </a>
          </div>
          <div className="options" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
