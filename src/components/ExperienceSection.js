import React, { Component } from "react";
import Experience from "./Experience";
import uniqid from "uniqid";

class ExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experienceList: [
                {
                    id: uniqid(),
                    companyName: "Princeton University",
                    positionTitle: "Professor of Archaeology",
                    mainTasks: [
                        "Conduct research in a particular field of knowledge and present findings in professional journals, books, electronic media, or at professional conferences.",
                        "Keep abreast of developments in the field by reading current literature, talking with colleagues, and participating in professional conferences.",
                        "Prepare and deliver lectures to undergraduate or graduate students on topics such as research methods, urban anthropology, and language and culture.",
                        "Initiate, facilitate, and moderate classroom discussions.",
                        "Evaluate and grade students' class work, assignments, and papers.",
                    ],
                    startDate: 1925,
                    endDate: "",
                },
                {
                    id: uniqid(),
                    companyName: "Princeton University",
                    positionTitle: "Archaeologist",
                    mainTasks: [
                        "Assessing aerial photography, geographical survey data and historical records to identify locations for potential dig sites.",
                        "Overseeing and documenting the extraction of artifacts at dig sites to maintain an accurate record and reduce the chances of damage during excavation.",
                        "Identifying items from the excavation, analyzing and dating them.",
                        "Creating computer-generated assessments and simulations of excavated locations to create estimated examples of the historical structures and civilization.",
                        "Managing staff during both the excavation work and the recording and analysis of artifacts.",
                        "Collecting data into a database and performing analysis to further understanding of the area and cultures being studied.",
                        "Writing reports, academic papers and presentations on discoveries to share information.",
                        "Assessing developer planning applications to ensure that any proposed construction will not disrupt potentially valuable archeological sites.",
                        "Developing scientific hypotheses based on analysis of data, then testing these theories through excavation, further research and analysis.",
                        "Conducting interviews and coordinating with other experts in the region and time period being studied to improve the accuracy of any assessments and projections.",
                        "Working in a museum or school setting, providing education about historical items and societies.",
                    ],
                    startDate: 1925,
                    endDate: "",
                },
                {
                    id: uniqid(),
                    companyName: "US Intelligence",
                    positionTitle: "Intelligence Agent",
                    mainTasks: [
                        "Analyze intelligence collected around the world in order to identify threats and make decisions.",
                        "Develop assessments based on all available information.",
                        "Develop relationships, manage networks, and facilitate information sharing with contacts in the intelligence and law enforcement community.",
                        "Apply knowledge of a specific region's culture, history, and language to combat and stay ahead of threats.",
                    ],
                    startDate: 1939,
                    endDate: 1945,
                },
                {
                    id: uniqid(),
                    companyName: "Colosimo restaurant",
                    positionTitle: "Waiter",
                    mainTasks: [
                        "Welcome and seat guests, take guest orders, communicate them effectively to the kitchen and in addition, memorize the menu and offer recommendations to upsell appetizers, desserts, or drinks."
                    ],
                    startDate: 1920,
                    endDate: 1920,
                },
                {
                    id: uniqid(),
                    companyName: "French Intelligence",
                    positionTitle: "Intelligence Agent",
                    mainTasks: [
                        "Analyze intelligence collected around the world in order to identify threats and make decisions.",
                        "Develop assessments based on all available information.",
                        "Develop relationships, manage networks, and facilitate information sharing with contacts in the intelligence and law enforcement community.",
                        "Apply knowledge of a specific region's culture, history, and language to combat and stay ahead of threats.",
                    ],
                    startDate: 1917,
                    endDate: 1918,
                },
                {
                    id: uniqid(),
                    companyName: "Belgian Intelligence",
                    positionTitle: "Intelligence Agent",
                    mainTasks: [
                        "Analyze intelligence collected around the world in order to identify threats and make decisions.",
                        "Develop assessments based on all available information.",
                        "Develop relationships, manage networks, and facilitate information sharing with contacts in the intelligence and law enforcement community.",
                        "Apply knowledge of a specific region's culture, history, and language to combat and stay ahead of threats.",
                    ],
                    startDate: 1917,
                    endDate: 1917,
                },
                {
                    id: uniqid(),
                    companyName: "",
                    positionTitle: "Soda Jerk",
                    mainTasks: [
                        "Operate the soda fountain in a drugstore.",
                        "Repar and serve soda drinks and ice cream sodas.",
                    ],
                    startDate: 1916,
                    endDate: 1916,
                },
            ],
        };
    }

    render() {
        const experienceComponents = this.state.experienceList.map((experienceInst) => {
            return (
                <Experience
                    key={experienceInst.id}
                    companyName={experienceInst.companyName}
                    positionTitle={experienceInst.positionTitle}
                    mainTasks={experienceInst.mainTasks}
                    startDate={experienceInst.startDate}
                    endDate={experienceInst.endDate}
                />
            );
        });

        return (
            <article id="experience-section">
                <h2>Experience</h2>
                <ul>
                    {experienceComponents}
                </ul>
            </article>
        );
    }
}

export default ExperienceSection;
