import React, {Component} from "react";
import Modal from "./Modal";

class ThumbnailEditForm extends Component {
    constructor(props) {
        const {imageUrl, size, posX, posY} = props;

        super(props);

        this.formId = 'thumbnail-edit-form';

        this.state = {
            imageUrl: imageUrl,
            size: size,
            posX: posX,
            posY: posY,
        };
    }

    handleClear = () => {
        this.setState({
            imageUrl: "",
            size: 100,
            posX: 0,
            posY: 0,
        });
    };

    handleInputChange = (e) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.name === 'imageUrl' ? e.target.value : Number(e.target.value),
            };
        });
    };

    increasePosX = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                posX: prevState.posX + 1,
            };
        });
    };

    decreasePosX = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                posX: prevState.posX - 1,
            };
        });
    };

    increasePosY = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                posY: prevState.posY + 1,
            };
        });
    };

    decreasePosY = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                posY: prevState.posY - 1,
            };
        });
    };

    increaseSize = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                size: prevState.size + 1,
            };
        });
    };

    decreaseSize = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                size: prevState.size - 1,
            };
        });
    };

    render() {
        const {handleSubmit, handleCancel} = this.props;
        const {imageUrl, size, posX, posY} = this.state;

        return (
            <Modal handleCancel={handleCancel}>
                <h2>Edit Thumbnail</h2>
                <section id="thumbnail-edit-controller">
                    <button id="arrow-up-container" className="arrow" onClick={this.decreasePosY} title="Move Up" aria-label="Move thumbnail up">
                        <span className="fa-solid fa-arrow-up"></span>
                    </button>
                    <button id="arrow-down-container" className="arrow" onClick={this.increasePosY} title="Move Down" aria-label="Move thumbnail down">
                        <span className="fa-solid fa-arrow-down"></span>
                    </button>
                    <button id="arrow-left-container" className="arrow" onClick={this.decreasePosX} title="Move Left" aria-label="Move thumbnail left">
                        <span className="fa-solid fa-arrow-left"></span>
                    </button>
                    <button id="arrow-right-container" className="arrow" onClick={this.increasePosX} title="Move Right" aria-label="Move thumbnail right">
                        <span className="fa-solid fa-arrow-right"></span>
                    </button>
                    <button id="scale-up-container" className="scale" onClick={this.increaseSize} title="Scale Up" aria-label="Scale thumbnail up">
                        <span className="fa-solid fa-plus"></span>
                    </button>
                    <button id="scale-down-container" className="scale" onClick={this.decreaseSize} title="Scale Down" aria-label="Scale thumbnail down">
                        <span className="fa-solid fa-minus"></span>
                    </button>
                    <div 
                        id="thumbnail"
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: `${size}%`,
                            backgroundPositionX: posX,
                            backgroundPositionY: posY,
                        }}
                    ></div>
                </section>
                <form 
                    action=""
                    method="set"
                    onSubmit={handleSubmit}
                    name="thumbnail-edit"
                    id={this.formId}
                >
                    <div className="custom-input">
                        <label>
                            <input type="url" name="imageUrl" placeholder=" " value={imageUrl} onChange={this.handleInputChange} />
                            <span>Image URL</span>
                        </label>
                    </div>

                    <input type="hidden" name="posX" value={posX} onChange={this.handleInputChange} />
                    <input type="hidden" name="posY" value={posY} onChange={this.handleInputChange} /> 
                    <input type="hidden" name="size" value={size} onChange={this.handleInputChange} />

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
            </Modal>
        );
    }
}

export default ThumbnailEditForm;
