import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import GeneralInfoForm from "./GeneralInfoForm";

class GeneralInfoSection extends Component {
    render() {
        return (
            <article id="general-info-section">
                <GeneralInfo
                    name="Indiana Jones"
                    email="henryjonesjr@princeton.edu"
                    phone="(609) 258-0103"
                />
                <GeneralInfoForm />
            </article>
        );
    }
}

export default GeneralInfoSection;
