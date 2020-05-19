import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    entities: [
        {
            title: "Titlaoo1",
            image: "/assets/images/stefan2.PNG",

            description: {
                label: "Your personal information",
            }
        }, {
            title: "Titlaoo2",
            image: "/assets/images/stefan2.PNG",

            description: {
                label: "Your personal information",
            }
        }]
};

function getEntities() {
    let getEndpointUrl = `https://localhost:44382/posts`;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", getEndpointUrl, false);
    xhttp.send();

    let entities = JSON.parse(xhttp.responseText);
    return entities.map(e => {
        return { title: e.title, image: e.image, description: { label: e.description } }
    });
}

export default class HomeController extends ContainerController {


    constructor(element) {
        super(element);

        let entities = getEntities();
        model.entities = entities;
        this.model = this.setModel(model);
    }
}