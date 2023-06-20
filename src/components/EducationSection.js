import React, {Component} from "react";
import Education from "./Education";
import uniqid from "uniqid";
import EducationForm from "./EducationForm";
import Modal from "./Modal";

class EducationSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList: [
                {
                    id: uniqid(),
                    schoolName: "University of Paris (Sorbonne)",
                    titleOfStudy: "Linguistics (Graduate)",
                    startDate: 1922,
                    endDate: 1925,
                },
                {
                    id: uniqid(),
                    schoolName: "University of Chicago",
                    titleOfStudy: "Archaeology (Undergraduate)",
                    startDate: 1920,
                    endDate: 1922,
                }
            ],
            displayCreateForm: false,
        };
    }

    handleCreateSubmit = (e) => {
        e.preventDefault();

        const newEducation = {
            id: uniqid(),
            schoolName: e.target.elements.name.value,
            titleOfStudy: e.target.elements.subject.value,
            startDate: Number(e.target.elements.startDate.value),
            endDate: e.target.elements.endDate.value
                ? Number(e.target.elements.endDate.value)
                : null,
        };

        const newEducationList = [
            ...this.state.educationList,
            newEducation,
        ];

        newEducationList.sort((a,b) => {
            // If both end dates are null, sort by start date
            if (a.endDate === null && b.endDate === null) {
                return b.startDate - a.startDate;
            }

            // If reach this point, at least one end date is NOT null
            // If one end date is null, sort that one first
            if (a.endDate === null) {
                return -1;
            }
            if (b.endDate === null) {
                return 1;
            }

            // If reach this point, both end dates are NOT null
            // Sort by end date, most recent date first
            return b.endDate - a.endDate;
        });

        this.setState((prevState) => {
            return {
                ...prevState,
                educationList: newEducationList,
                displayCreateForm: false,
            };
        });
    };

    handleCreateClick = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayCreateForm: true,
            };
        });
    };

    handleCreateCancel = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayCreateForm: false,
            };
        });
    };

    handleEditSubmit = (e, educationId) => {
        e.preventDefault();

        // Create copy of education list
        const newEducationList = [...this.state.educationList];

        // Find matching education obj with matching id
        const educationToEdit = newEducationList.find((educationObj) => educationObj.id === educationId);
        
        // Return if no match was found
        if (educationToEdit === undefined) { return; }

        // Edit values of matching education object 
        educationToEdit.schoolName = e.target.elements.name.value;
        educationToEdit.titleOfStudy = e.target.elements.subject.value;
        educationToEdit.startDate = Number(e.target.elements.startDate.value);
        educationToEdit.endDate = e.target.elements.endDate.value 
            ? Number(e.target.elements.endDate.value)
            : null;

        // Sort new education list
        newEducationList.sort((a,b) => {
            // If both end dates are null, sort by start date
            if (a.endDate === null && b.endDate === null) {
                return b.startDate - a.startDate;
            }

            // If reach this point, at least one end date is NOT null
            // If one end date is null, sort that one first
            if (a.endDate === null) {
                return -1;
            }
            if (b.endDate === null) {
                return 1;
            }

            // If reach this point, both end dates are NOT null
            // Sort by end date, most recent date first
            return b.endDate - a.endDate;
        });

        this.setState((prevState) => {
            return {
                ...prevState,
                educationList: newEducationList,
            };
        });
    };

    renderCreateForm() {
        return (
            <Modal handleCancel={this.handleCreateCancel}>
                <EducationForm 
                    handleSubmit={this.handleCreateSubmit} 
                    handleCancel={this.handleCreateCancel}
                />
            </Modal>
        );
    }

    render() {
        const educationComponents = this.state.educationList.map((educationInst) => {
            return (
                <Education
                    key={educationInst.id}
                    educationObj={educationInst}
                    handleEditSubmit={this.handleEditSubmit}
                />
            );
        });

        return (
            <article id="education-section">
                <h2>Education</h2>
                <ul>
                    {educationComponents}
                </ul>
                {
                    this.state.displayCreateForm 
                        ? this.renderCreateForm() 
                        : (
                            <div className="edit-btn-container">
                                <button type="button" onClick={this.handleCreateClick}>
                                    <span className="fa-solid fa-plus"></span>
                                    Add Education
                                </button>
                            </div>
                        )
                }
            </article>
        );
    }
}

export default EducationSection;
