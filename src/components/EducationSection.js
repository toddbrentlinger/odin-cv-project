import React, {Component} from "react";
import Education from "./Education";
import uniqid from "uniqid";

class EducationSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList: [
                {
                    id: uniqid(),
                    schoolName: "University of Paris (Sorbonne)",
                    titleOfStudy: "Linguistics (Graduate)",
                    startDate: "1922",
                    endDate: "1925",
                },
                {
                    id: uniqid(),
                    schoolName: "University of Chicago",
                    titleOfStudy: "Archaeology (Undergraduate)",
                    startDate: "1920",
                    endDate: "1922",
                }
            ],
        };
    }

    render() {
        const educationComponents = this.state.educationList.map((educationInst) => {
            return (
                <Education
                    key={educationInst.id}
                    schoolName={educationInst.schoolName}
                    titleOfStudy={educationInst.titleOfStudy}
                    startDate={educationInst.startDate}
                    endDate={educationInst.endDate}
                />
            );
        });

        return (
            <article id="education-section">
                <h2>Education</h2>
                <ul>
                    {educationComponents}
                </ul>
            </article>
        );
    }
}

export default EducationSection;
