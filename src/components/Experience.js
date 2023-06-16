import React, { Component } from "react";
import { createDateSpanString } from "../utilities";

class Experience extends Component {
    render() {
        const {companyName, positionTitle, mainTasks, startDate, endDate} = this.props;

        const mainTaskComponents = mainTasks.map((task, index) => <li key={index}>{task}</li>);

        return (
            <li className="experience">
                <div className="experience-position">{positionTitle}</div>
                <div className="experience-company">{companyName}</div>
                <div className="experience-date">{createDateSpanString(startDate, endDate)}</div>
                <ul className="experience-task-list">{mainTaskComponents}</ul>
            </li>
        );
    }
}

export default Experience;
