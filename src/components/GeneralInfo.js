import React, {Component} from "react";

class GeneralInfo extends Component {
    render() {
        const {name, title, email, phone, address} = this.props;

        return(
            <section id="general-info-content">
                <div id="general-name">{name}</div>
                <div id="general-title">{title}</div>
                
                <div id="general-contact-info">
                    <div id="general-email">
                        <span className="icon-container">
                            <span className="fa-solid fa-envelope"></span>
                        </span>
                        {email}
                    </div>
                    <div id="general-phone">
                        <span className="icon-container">
                            <span className="fa-solid fa-phone"></span>
                        </span>
                        {phone}
                    </div>
                    <div id="general-address">
                        <span className="icon-container">
                            <span className="fa-solid fa-address-book"></span>
                        </span>
                        {address}
                    </div>
                </div>
            </section>
        );
    }
}

export default GeneralInfo;
