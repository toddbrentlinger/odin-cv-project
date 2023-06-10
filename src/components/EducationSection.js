import React, {Component} from "react";
import Education from "./Education";

class EducationSection extends Component {
    render() {
        return (
            <article id="education-section">
                <h2>Education</h2>
                <Education
                    schoolName="University of Chicago"
                    titleOfStudy="Archaeology"
                    startDate="1918"
                    endDate="1922"
                />
            </article>
        );
    }
}

export default EducationSection;
