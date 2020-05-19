import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

let model = {
    sectionTitle: {
        label: "New post"
    },
    title: {
        label: "Title",
        name: "name",
        required: true,
        placeholder: "Title here...",
        value: ''
    },
    content: {
        label: "Description",
        name: "email",
        required: true,
        placeholder: "Description here...",
        value: ''
    },
    file: {
        value: ''
    }
};

function saveFile(file, callback) {

    const saveEndpointUrl = `https://localhost:44382/posts/photo`;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        fetch(saveEndpointUrl, {
            method: 'POST',
            body: reader.result
        }).then((response) => response.json()).then(result => callback(result.id));
    }
    reader.onerror = error => reject(error);

}

function ajaxSave(params) {
    const saveEndpointUrl = `https://localhost:44382/posts`;

    return fetch(saveEndpointUrl + "?title=" + params.title + "&description=" + params.description + "&image=" + params.image, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return Promise.resolve();
    });
}

export default class InputFormController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(model);

        // Create expression
        this.model.addExpression('saveForm', function () {
            console.log("saveOrders");
        });

        this.on("update-avatar", (event) => {
            saveFile(event.data[0], (result) => {
                this.model.file.value = result;
            });
        });

        // Triggered by pressing the "Create order" button
        this.on('onSubmit', (e) => {
            var dataToSave = {
                title: this.model.title.value,
                description: this.model.content.value,
                image: this.model.file.value
            };

            ajaxSave(dataToSave);
        });
    }
}