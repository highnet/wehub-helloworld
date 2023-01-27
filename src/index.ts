import BaseExtension from "wehub";

export default class Helloworld extends BaseExtension {
    activate() {
        console.log("Activated ", this.extensionName);
    }
}