import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import GeneralInfoForm from "./GeneralInfoForm";

class GeneralInfoSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Indiana Jones",
            email: "henryjonesjr@princeton.edu",
            phone: "(609) 258-0103",
        };
    }

    render() {
        const {name, email, phone} = this.state;

        return (
            <article id="general-info-section">
                <GeneralInfo
                    name={name}
                    email={email}
                    phone={phone}
                />
                <GeneralInfoForm />
            </article>
        );
    }
}

export default GeneralInfoSection;
