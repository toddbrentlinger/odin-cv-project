import React, {Component} from "react";
import { createDateSpanString } from "../utilities";

class Education extends Component {
    render() {
        const {schoolName, titleOfStudy, startDate, endDate} = this.props;

        return (
            <li className="education">
                <div>{schoolName}</div>
                <div>{titleOfStudy}</div>
                <div>{createDateSpanString(startDate, endDate)}</div>
            </li>
        );
    }
}

export default Education;
