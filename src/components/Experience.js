import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <section className="experience">
                <div>{this.props.companyName}</div>
                <div>{this.props.positionTitle}</div>
                <div>{this.props.mainTasks}</div>
                <div>{this.props.startDate} - {this.props.endDate}</div>
            </section>
        );
    }
}

export default Experience;
