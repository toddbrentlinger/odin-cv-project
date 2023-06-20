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
                url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/24883563_474515209616195_175625574350703270_o.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=111&ccb=1-7&_nc_sid=8024bb&_nc_ohc=iXYv1CfC8O4AX9wJ59L&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAMPdHJXyHK5IqWa3gIcSESr51SwqZmRMBlOBx__RfKHA&oe=64AECB4C",
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
