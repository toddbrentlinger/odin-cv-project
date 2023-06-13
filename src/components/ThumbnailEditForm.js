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

    render() {
        const {handleSubmit, handleCancel} = this.props;
        const {imageUrl, size, posX, posY} = this.state;

        return (
            <Modal handleCancel={handleCancel}>
                <h2>Edit Thumbnail</h2>
                <section id="thumbnail-edit-controller">
                    <button id="arrow-up-container" className="arrow" onClick={this.decreasePosY}>
                        <span className="fa-solid fa-arrow-up"></span>
                    </button>
                    <button id="arrow-down-container" className="arrow" onClick={this.increasePosY}>
                        <span className="fa-solid fa-arrow-down"></span>
                    </button>
                    <button id="arrow-left-container" className="arrow" onClick={this.decreasePosX}>
                        <span className="fa-solid fa-arrow-left"></span>
                    </button>
                    <button id="arrow-right-container" className="arrow" onClick={this.increasePosX}>
                        <span className="fa-solid fa-arrow-right"></span>
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
                    <div className="custom-input">
                        <label>
                            <input type="number" name="size" placeholder=" " value={size} onChange={this.handleInputChange} />
                            <span>Size (Percentage)</span>
                        </label>
                    </div>
                    <input type="hidden" name="posX" placeholder=" " value={posX} onChange={this.handleInputChange} />
                    <input type="hidden" name="posY" placeholder=" " value={posY} onChange={this.handleInputChange} /> 
                    {/* <div className="custom-input">
                        <label>
                            <input type="number" name="posX" placeholder=" " value={posX} onChange={this.handleInputChange} />
                            <span>X-coord Position</span>
                        </label>
                    </div>
                    <div className="custom-input">
                        <label>
                            <input type="number" name="posY" placeholder=" " value={posY} onChange={this.handleInputChange} />
                            <span>Y-coord Position</span>
                        </label>
                    </div> */}
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
