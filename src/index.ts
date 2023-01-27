import BaseExtension, { SocketIoSocket } from "wehub";

export default class Helloworld extends BaseExtension {
  private _ticks: number = 0;
  static DEFAULT_OPTIONS = {
    option: "value",
  };
  static NAMESPACE = "helloworld";
  activate() {
    console.log("[Helloworld]: Activated", this.extensionName);
    console.log("[Helloworld]: Option is", this.options["option"]);
    if (MODE.isDevelopment()) {
      console.log("[Helloworld]: I'm in development mode");
    }
    this.registerMethod(this.logMessage);
    setInterval(() => {
      this.sockets.emit("hello-client", String(this._ticks++));
    }, 2000);
  }
  logMessage(message: any, socket: SocketIoSocket) {
    console.log("Received message: " + message);
  }
}
