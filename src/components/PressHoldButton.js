import React, { Component } from "react";

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

    repeat = () => {
        this.props.onMouseDown();

        const timeout = setTimeout(this.repeat, this.props.delay);
        
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
    delay: 500,
};

export default PressHoldButton;