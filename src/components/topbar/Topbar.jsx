import { Article, GitHub, LinkedIn, Mail } from "@mui/icons-material";
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
            <Mail className="icon" />
            <span>ankitnayan83@gmail.com</span>
            <a
              href="https://drive.google.com/file/d/1b4IoxNDNCvV_AkReRGU0SxK3SuVVBOZ4/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="right">
          <div className="quick">
            <a
              href="https://github.com/AnkitNayan83"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="iconR" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-nayan-816337221/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="iconR" />
            </a>
            <a
              href="https://leetcode.com/ankitnayan83/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/leetcode.png" alt="" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/ankitnayan83/practice"
              target="_blank"
              rel="noopener noreferrer"
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
