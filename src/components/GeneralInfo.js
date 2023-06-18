import React, {Component} from "react";

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
        const {name, title, email, phone, address} = this.props;

        return (
            <form
                action=""
                method="set"
                onSubmit={this.handleEditSubmit}
            >
                <div className="custom-input">
                    <label>
                        <input type="text" name="name" placeholder=" " defaultValue={name} required />
                        <span>Name</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="title" placeholder=" " defaultValue={title} required />
                        <span>Title</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="email" name="email" placeholder=" " defaultValue={email} required />
                        <span>Email</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="tel" name="phone" placeholder=" " defaultValue={phone} required />
                        <span>Phone</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="address" placeholder=" " defaultValue={address} required />
                        <span>Address</span>
                    </label>
                </div>
                <div className="form-btn-container">
                    <button type="submit">Add</button>
                    <button 
                        type="button"
                        onClick={this.handleEditCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        );
    }

    renderGeneralInfo() {
        const {name, title, email, phone, address} = this.props;

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
                    <div id="general-address">
                        <span className="icon-container">
                            <span className="fa-solid fa-address-book"></span>
                        </span>
                        {address}
                    </div>
                </div>

                <div id="general-info-edit-btn-container">
                    <button type="button" onClick={this.handleEditClick}>
                        <span className="fa-solid fa-pen-to-square"></span>
                        Edit General Info
                    </button>
                </div>
            </section>
        );
    }

    render() {
        return this.state.displayEditForm 
            ? this.renderEditForm() 
            : this.renderGeneralInfo();
    }
}

export default GeneralInfo;
