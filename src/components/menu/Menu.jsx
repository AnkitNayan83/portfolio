import { Contacts, Home, School, TextSnippet, Work } from "@mui/icons-material";
import "./menu.scss";

export const Menu = ({ open, setOpen }) => {
  return (
    <div className={"menu " + (open ? "active" : "")}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">{open ? <>Home</> : <Home />}</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#portfolio">{open ? <>Project's</> : <Work />}</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#project">{open ? <>About Me</> : <TextSnippet />}</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#courses">{open ? <>Courses</> : <School />}</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">{open ? <>Contact</> : <Contacts />}</a>
        </li>
      </ul>
    </div>
  );
};
