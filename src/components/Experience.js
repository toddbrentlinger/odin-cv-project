import React, { Component } from "react";
import { createDateSpanString } from "../utilities";

class Experience extends Component {
    render() {
        const {companyName, positionTitle, mainTasks, startDate, endDate} = this.props;

        const mainTaskComponents = mainTasks.map((task, index) => <li key={index}>{task}</li>);

        return (
            <li className="experience">
                <div>{positionTitle}</div>
                <div>{companyName}</div>
                <div>{createDateSpanString(startDate, endDate)}</div>
                <ul>{mainTaskComponents}</ul>
            </li>
        );
    }
}

export default Experience;
