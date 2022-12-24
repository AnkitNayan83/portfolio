import { Topbar } from "./components/topbar/Topbar";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Project } from "./components/projects/Project";
import { Courses } from "./components/courses/Courses";
import { Contact } from "./components/contact/Contact";
import "./app.scss";
import { Menu } from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <div className="wave w1"></div>
      <div className="wave w2"></div>
      <div className="wave w3"></div>
      <div className="wave w4"></div>
      <Topbar open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Project />
        <Courses />
        <Contact />
      </div>
    </div>
  );
}

export default App;
