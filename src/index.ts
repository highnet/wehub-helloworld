import BaseExtension, { SocketIoSocket } from "wehub";

// https://wissen.wetouch.at/wehub-tutorial-pt-4-extensions/ Catch-All Methods

export default class Helloworld extends BaseExtension {
  private _ticks: number = 0;
  private _tickRate: number = 20000;
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
    this.registerMethod(this.statusFromClient, "sendStatus");

    setInterval(() => {
      this.sockets.emit("hello-client", String(this._ticks++));
    }, this._tickRate);
  }
  logMessage(message: any, socket: SocketIoSocket) {
    console.log("Received message: " + message);
  }
  statusFromClient(statusCode: string) {
    console.log(statusCode);
  }
}
