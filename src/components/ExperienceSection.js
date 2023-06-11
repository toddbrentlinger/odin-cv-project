import React, { Component } from "react";
import Experience from "./Experience";
import uniqid from "uniqid";

class ExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experienceList: [
                {
                    id: uniqid(),
                    companyName: "Princeton University",
                    positionTitle: "Associate Dean",
                    mainTasks: [],
                    startDate: 1957,
                    endDate: "",
                },
                {
                    id: uniqid(),
                    companyName: "Princeton University",
                    positionTitle: "Professor of Archaeology",
                    mainTasks: [],
                    startDate: 1925,
                    endDate: "",
                },
                {
                    id: uniqid(),
                    companyName: "Princeton University",
                    positionTitle: "Archaeologist",
                    mainTasks: [],
                    startDate: 1925,
                    endDate: "",
                },
                {
                    id: uniqid(),
                    companyName: "US Intelligence",
                    positionTitle: "Intelligence Agent",
                    mainTasks: [],
                    startDate: 1939,
                    endDate: 1945,
                },
                {
                    id: uniqid(),
                    companyName: "French Intelligence",
                    positionTitle: "Intelligence Agent",
                    mainTasks: [],
                    startDate: 1917,
                    endDate: 1918,
                },
                {
                    id: uniqid(),
                    companyName: "Belgian Intelligence",
                    positionTitle: "Intelligence Agent",
                    mainTasks: [],
                    startDate: 1917,
                    endDate: 1917,
                },
                {
                    id: uniqid(),
                    companyName: "",
                    positionTitle: "Waiter",
                    mainTasks: [],
                    startDate: 1920,
                    endDate: 1920,
                },
                {
                    id: uniqid(),
                    companyName: "",
                    positionTitle: "Soda Jerk",
                    mainTasks: [],
                    startDate: 1916,
                    endDate: 1916,
                },
            ],
        };
    }

    render() {
        const experienceComponents = this.state.experienceList.map((experienceInst) => {
            return (
                <Experience
                    key={experienceInst.id}
                    companyName={experienceInst.companyName}
                    positionTitle={experienceInst.positionTitle}
                    mainTasks={experienceInst.mainTasks}
                    startDate={experienceInst.startDate}
                    endDate={experienceInst.endDate}
                />
            );
        });

        return (
            <article id="experience-section">
                <h2>Experience</h2>
                <ul>
                    {experienceComponents}
                </ul>
            </article>
        );
    }
}

export default ExperienceSection;
