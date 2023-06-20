import React, { Component } from "react";

class ExperienceForm extends Component {
    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    };

    handleCancel = () => {
        this.props.handleCancel();
    };

    render() {
        const {companyName, positionTitle, mainTasks, startDate, endDate, formName, formTitle} = this.props;

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
                            <input type="text" name="company" placeholder=" " defaultValue={companyName} required autoFocus />
                            <span>Company Name</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="text" name="position" placeholder=" " defaultValue={positionTitle} required />
                            <span>Position Title</span>
                        </label>
                    </div>
                    <div className="custom-textarea">
                        <label>
                            <textarea type="text" name="tasks" placeholder=" " rows={3} required>
                                {mainTasks}
                            </textarea>
                            <span>Main Tasks</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="text" name="startDate" placeholder=" " defaultValue={startDate} required />
                            <span>Start Date</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="text" name="endDate" placeholder=" " defaultValue={endDate} />
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

ExperienceForm.defaultProps = {
    formName: 'experience-create',
    formTitle: 'Add New Experience',
};

export default ExperienceForm;
