import React, { Component } from "react";
import GeneralInfoSection from "./components/GeneralInfoSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Odin CV Project</h1>
        </header>

        <main>
          <GeneralInfoSection />
          <hr />
          <EducationSection />
          <hr />
          <ExperienceSection />
        </main>

        <Footer
          initialYear={2023}
          sourceCodeUrl="https://github.com/toddbrentlinger/odin-cv-project"
        />
      </>
    );
  }
}

export default App;
