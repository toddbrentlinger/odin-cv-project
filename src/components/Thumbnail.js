import React, { Component } from "react";
import ThumbnailEditForm from "./ThumbnailEditForm";

class Thumbnail extends Component {
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
                displayEditForm: !prevState.displayEditForm,
            };
        });
    };

    handleEditCancel = () => {
        console.log('Thumbnail edit cancel!');
        this.setState({
            displayEditForm: false,
        });
    };

    handleEditSubmit = (e) => {
        console.log('Thumbnail edit submit (inside Thumbnail)!');

        this.props.handleEditSubmit(e);

        this.setState({
            displayEditForm: false,
        });
    };

    render() {
        const {imageUrl, size = 100, posX = 0, posY = 0} = this.props;

        return (
            <section id="thumbnail-container">
                <div 
                    id="thumbnail"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: `${size}%`,
                        backgroundPositionX: posX,
                        backgroundPositionY: posY,
                    }}
                >
                    {imageUrl ? null : <span className="fa-solid fa-person"></span>}
                    <button onClick={this.handleEditClick}>
                        <span
                            className="fa-solid fa-pen-to-square"
                            aria-label="Edit thumbnail"
                            title="Edit thumbnail"
                        ></span>
                    </button>
                </div>
                {this.state.displayEditForm 
                    ? (
                        <ThumbnailEditForm 
                            imageUrl={imageUrl}
                            size={size}
                            posX={posX}
                            posY={posY}
                            handleSubmit={this.handleEditSubmit}
                            handleCancel={this.handleEditCancel}
                        />
                    )
                    : null
                }
            </section>
        );
    }
}

export default Thumbnail;
