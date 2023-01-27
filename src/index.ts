import BaseExtension from "wehub";

export default class Helloworld extends BaseExtension {
  static DEFAULT_OPTIONS = {
    option: "value",
  };
  activate() {
    console.log("[Helloworld]: Activated", this.extensionName);
    console.log("[Helloworld]: Option is", this.options["option"]);
    if (MODE.isDevelopment()) {
      console.log("[Helloworld]: I'm in development mode");
    }
  }
}
