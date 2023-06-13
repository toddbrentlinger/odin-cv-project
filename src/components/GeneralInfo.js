import React, {Component} from "react";

class GeneralInfo extends Component {
    render() {
        const {name, email, phone} = this.props;

        return(
            <section>
                <div id="general-name">{name}</div>
                <div id="general-email">{email}</div>
                <div id="general-phone">{phone}</div>
            </section>
        );
    }
}

export default GeneralInfo;
