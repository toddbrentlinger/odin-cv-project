import React, {Component} from "react";

class GeneralInfo extends Component {
    render() {
        return(
            <section>
                <h2>General Info</h2>
                <div id="general-name">{this.props.name}</div>
                <div id="general-email">{this.props.email}</div>
                <div id="general-phone">{this.props.phone}</div>
            </section>
        );
    }
}

export default GeneralInfo;
