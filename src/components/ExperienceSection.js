import React, { Component } from "react";
import Experience from "./Experience";

class ExperienceSection extends Component {
    render() {
        return (
            <article id="experience-section">
                <h2>Experience</h2>
                <Experience 
                    companyName="Princeton University"
                    positionTitle="Professor of Archaeology"
                    mainTasks={[

                    ]}
                    startDate="1925"
                    endDate=""
                />
            </article>
        );
    }
}

export default ExperienceSection;
