import React, { Component } from "react";
import { createDateSpanString } from "../utilities";
import Modal from "./Modal";
import ExperienceForm from "./ExperienceForm";

class Experience extends Component {
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
        this.props.handleDelete(this.props.experienceObj.id);

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
        this.props.handleEditSubmit(e, this.props.experienceObj.id);

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
                    <p>Are you sure you want to delete this experience?</p>
                    <div className="experience">
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
                <ExperienceForm
                    experienceObj={this.props.experienceObj}
                    handleSubmit={this.handleEditSubmit}
                    handleCancel={this.handleEditCancel}
                    formName={`experience-edit-${this.props.experienceObj.id}`}
                    formTitle="Edit Experience"
                />
            </Modal>
        );
    }

    renderProperties() {
        const {companyName, positionTitle, mainTasks, startDate, endDate} = this.props.experienceObj;

        const mainTaskComponents = mainTasks.map((task, index) => <li key={index}>{task}</li>);

        return (
            <>
                <div className="experience-position">{positionTitle}</div>
                <div className="experience-company">{companyName}</div>
                <div className="experience-date">{createDateSpanString(startDate, endDate)}</div>
                <ul className="experience-task-list">{mainTaskComponents}</ul>
            </>
        );
    }

    render() {
        return (
            <li className="experience">
                {this.renderProperties()}
                <div className="edit-btn-container">
                    <button
                        onClick={this.handleEditClick}
                        aria-label="Edit experience"
                        title="Edit experience"
                    >
                        <span className="fa-solid fa-pen-to-square"></span>
                    </button>
                    <button
                        onClick={this.handleDeleteClick}
                        aria-label="Delete experience"
                        title="Delete experience"
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

export default Experience;
