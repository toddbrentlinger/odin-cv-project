import React, {Component} from "react";

class Education extends Component {
    render() {
        return (
            <section className="education">
                <div>{this.props.schoolName}</div>
                <div>{this.props.titleOfStudy}</div>
                <div>{this.props.startDate} - {this.props.endDate}</div>
            </section>
        );
    }
}

export default Education;
