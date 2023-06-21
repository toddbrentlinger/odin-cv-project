import React, {Component} from "react";
import { createDateSpanString } from "../utilities";
import Modal from "./Modal";
import EducationForm from "./EducationForm";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDeleteConfirm: false,
            displayEditForm: false,
        };
    }

    handleDeleteClick = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayDeleteConfirm: true,
                displayEditForm: false,
            };
        });
    };

    handleDeleteConfirm = () => {
        this.props.handleDelete(this.props.educationObj.id);
        
        this.setState((prevState) => {
            return {
                ...prevState,
                displayDeleteConfirm: false,
            };
        });
    };

    handleDeleteCancel = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayDeleteConfirm: false,
            };
        });
    };

    handleEditClick = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayDeleteConfirm: false,
                displayEditForm: true,
            };
        });
    };

    handleEditSubmit = (e) => {
        this.props.handleEditSubmit(e, this.props.educationObj.id);

        this.setState((prevState) => {
            return {
                ...prevState,
                displayEditForm: false,
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

    renderDeleteConfirm() {
        return (
            <Modal handleCancel={this.handleDeleteCancel}>
                <section className="confirm-modal-content">
                    <p>Are you sure you want to delete this education?</p>
                    <div className="education">
                        {this.renderProperties()}
                    </div>
                    <div className="confirm-btn-container">
                        <button onClick={this.handleDeleteConfirm}>Yes</button>
                        <button onClick={this.handleDeleteCancel}>No</button>
                    </div>
                </section>
            </Modal>
        );
    }

    renderEditForm() {
        return (
            <Modal handleCancel={this.handleEditCancel}>
                <EducationForm
                    educationObj={this.props.educationObj}
                    handleSubmit={this.handleEditSubmit}
                    handleCancel={this.handleEditCancel}
                    formName={`education-edit-${this.props.educationObj.id}`}
                    formTitle="Edit Education"
                />
            </Modal>
        );
    }

    renderProperties() {
        const {schoolName, titleOfStudy, startDate, endDate} = this.props.educationObj;

        return (
            <>
                <div className="education-name">{schoolName}</div>
                <div className="education-study">{titleOfStudy}</div>
                <div className="education-date">{createDateSpanString(startDate, endDate)}</div>
            </>
        );
    }

    render() {
        return (
            <li className="education">
                {this.renderProperties()}
                <div className="edit-btn-container">
                    <button
                        onClick={this.handleEditClick}
                        aria-label="Edit education"
                        title="Edit education"
                    >
                        <span className="fa-solid fa-pen-to-square"></span>
                    </button>
                    <button
                        onClick={this.handleDeleteClick}
                        aria-label="Delete education"
                        title="Delete education"
                    >
                        <span className="fa-solid fa-trash"></span>
                    </button>
                </div>
                {
                    this.state.displayEditForm ? this.renderEditForm() : null
                }
                {
                    this.state.displayDeleteConfirm ? this.renderDeleteConfirm() : null
                }
            </li>
        );
    }
}

export default Education;
