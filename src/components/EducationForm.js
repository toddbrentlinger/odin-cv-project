import React, { Component } from "react";

class EducationForm extends Component {
    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    };

    handleCancel = () => {
        this.props.handleCancel();
    };

    render() {
        const {schoolName, titleOfStudy, startDate, endDate} = this.props.educationObj;
        const {formName, formTitle} = this.props;

        return (
            <section id={`${formName}-form`}>
                <h3>{formTitle}</h3>
                <form
                    action=""
                    method="set"
                    onSubmit={this.handleSubmit}
                    name={formName}
                >
                    <div className="custom-input">
                        <label>
                            <input type="text" name="name" placeholder=" " defaultValue={schoolName} required autoFocus />
                            <span>School Name</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="text" name="subject" placeholder=" " defaultValue={titleOfStudy} required />
                            <span>Subject</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="number" name="startDate" placeholder=" " defaultValue={startDate} required />
                            <span>Start Date</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="number" name="endDate" placeholder=" " defaultValue={endDate} />
                            <span>End Date (optional)</span>
                        </label>
                    </div>
                    
                    <div className="form-btn-container">
                        <button type="submit">Add</button>
                        <button 
                            type="button"
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

EducationForm.defaultProps = {
    educationObj: {},
    formName: 'education-create',
    formTitle: 'Add New Education',
};

export default EducationForm;
