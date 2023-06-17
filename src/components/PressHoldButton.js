import React, { Component } from "react";
import { clamp } from "../utilities";

class PressHoldButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            timeoutRef: null,
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.timeoutRef !== this.state.timeoutRef) {
            clearTimeout(prevState.timeoutRef);
        }

        if (prevState.isPressed !== this.state.isPressed) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    timeoutRef: null,
                };
            });

            if (this.state.isPressed) {
                this.repeat();
            }
        }
    };

    componentWillUnmount = () => {
        clearTimeout(this.state.timeoutRef);

        this.setState((prevState) => {
            return {
                ...prevState,
                timeoutRef: null,
            };
        });
    };

    repeat = (delay = this.props.delayMax) => {
        this.props.onMouseDown();

        const newDelay = clamp(
            delay / this.props.speedFactor,
            this.props.delayMin,
            this.props.delayMax
        );

        const timeout = setTimeout(() => {
            this.repeat(newDelay);
        }, newDelay);
        
        this.setState((prevState) => {
            return {
                ...prevState,
                timeoutRef: timeout,
            };
        });
    };

    handleOnMouseDown = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isPressed: true,
            };
        });
    };

    handleOnMouseUp = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isPressed: false,
            };
        });
    };

    render = () => {
        return (
            <button
                id={this.props.id}
                className={this.props.className}
                title={this.props.title}
                aria-label={this.props['aria-label']}
                onMouseDown={this.handleOnMouseDown}
                onMouseUp={this.handleOnMouseUp}
            >
                {this.props.children}
            </button>
        );
    };
}

PressHoldButton.defaultProps = {
    delayMax: 300,
    delayMin: 20,
    speedFactor: 1.3,
};

export default PressHoldButton;