import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Thumbnail from "./Thumbnail";

class GeneralInfoSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Indiana Jones",
            title: "Archaeologist-Adventurer",
            email: "henryjonesjr@princeton.edu",
            phone: "(609) 258-0103",
            location: "Princeton, New Jersey",
            thumbnail: {
                url: "https://theenchantedmanor.com/wp-content/uploads/2016/06/Professor-Henry-Jones-Jr.jpg",
                size: 110,
                posX: 0,
                posY: 0,
            },
        };
    }

    handleEditSubmit = (e) => {
        e.preventDefault();

        this.setState((prevState) => {
            return {
                ...prevState,
                name: e.target.elements.name.value,
                title: e.target.elements.title.value,
                email: e.target.elements.email.value,
                phone: e.target.elements.phone.value,
                location: e.target.elements.location.value,
            };
        });
    };

    handleThumbnailEditSubmit = (e) => {
        e.preventDefault();
        
        this.setState((prevState) => {
            return {
                ...prevState,
                thumbnail: {
                    url: e.target.elements.imageUrl.value,
                    size: Number(e.target.elements.size.value),
                    posX: Number(e.target.elements.posX.value),
                    posY: Number(e.target.elements.posY.value),
                },
            };
        });
    };

    render() {
        const {name, title, email, phone, location, thumbnail} = this.state;

        return (
            <article id="general-info-section">
                <Thumbnail
                    imageUrl={thumbnail.url}
                    size={thumbnail.size}
                    posX={thumbnail.posX}
                    posY={thumbnail.posY}
                    handleEditSubmit={this.handleThumbnailEditSubmit}
                />
                <GeneralInfo
                    name={name}
                    title={title}
                    email={email}
                    phone={phone}
                    location={location}
                    handleEditSubmit={this.handleEditSubmit}
                />
            </article>
        );
    }
}

export default GeneralInfoSection;
