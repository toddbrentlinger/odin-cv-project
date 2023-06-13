import React, { Component } from "react";

class Modal extends Component {
    handleModalOutsideClick = () => {
        this.props.handleCancel();
    };

    handleModalInsideClick = (e) => {
        e.stopPropagation();
    };

    render() {
        return (
            <div className="modal" onClick={this.handleModalOutsideClick} >
                <div 
                    className="modal-content"
                    onClick={this.handleModalInsideClick}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;
