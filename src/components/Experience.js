import React, { Component } from "react";
import { createDateSpanString } from "../utilities";

class Experience extends Component {
    render() {
        const {companyName, positionTitle, mainTasks, startDate, endDate} = this.props;

        return (
            <li className="experience">
                <div>{companyName}</div>
                <div>{positionTitle}</div>
                <div>{mainTasks}</div>
                <div>{createDateSpanString(startDate, endDate)}</div>
            </li>
        );
    }
}

export default Experience;
