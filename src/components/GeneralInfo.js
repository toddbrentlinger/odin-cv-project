import React, {Component} from "react";
import Modal from "./Modal";
import GeneralInfoForm from "./GeneralInfoForm";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayEditForm: false,
        };
    }

    handleEditClick = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayEditForm: true,
            };
        });
    };

    handleEditCancel = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayEditForm: false,
            };
        });
    };

    handleEditSubmit = (e) => {
        this.props.handleEditSubmit(e);

        this.setState((prevState) => {
            return {
                ...prevState,
                displayEditForm: false,
            };
        });
    };

    renderEditForm() {
        const {name, title, email, phone, location} = this.props;

        return (
            <Modal handleCancel={this.handleEditCancel}>
                <GeneralInfoForm
                    name={name}
                    title={title}
                    email={email}
                    phone={phone}
                    location={location}
                    handleCancel={this.handleEditCancel} 
                    handleSubmit={this.handleEditSubmit} 
                />
            </Modal>
        );
    }

    render() {
        const {name, title, email, phone, location} = this.props;

        return (
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
                    <div id="general-location">
                        <span className="icon-container">
                            <span className="fa-solid fa-address-book"></span>
                        </span>
                        {location}
                    </div>
                </div>
                {
                    this.state.displayEditForm 
                        ? this.renderEditForm() 
                        : (
                            <div id="general-info-edit-btn-container" className="edit-btn-container">
                                <button type="button" onClick={this.handleEditClick}>
                                    <span className="fa-solid fa-pen-to-square"></span>
                                    Edit General Info
                                </button>
                            </div>
                        )
                }
            </section>
        );
    }
}

export default GeneralInfo;
