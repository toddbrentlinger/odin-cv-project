import React, { Component } from "react";

class GeneralInfoForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    handleClear() {

    }

    render() {
        const {name = "", email = "", phone = ""} = this.props;

        return (
            <form
                action=""
                method="set"
                onSubmit={this.handleSubmit}
            >
                <div class="custom-input">
                    <label>
                        <input type="text" name="name" placeholder=" " value={name} required autoFocus />
                        <span>Name</span>
                    </label>
                </div>
                <div class="custom-input">
                    <label>
                        <input type="email" name="email" placeholder=" " value={email} required />
                        <span>Email</span>
                    </label>
                </div>
                <div class="custom-input">
                    <label>
                        <input type="tel" name="phone" placeholder=" " value={phone} required />
                        <span>Phone</span>
                    </label>
                </div>
                <div className="form-btn-container">
                    <button type="submit">Add</button>
                    <button 
                        type="button"
                        onClick={this.handleClear}
                    >
                        Clear
                    </button>
                </div>
            </form>
        );
    }
}

export default GeneralInfoForm;
