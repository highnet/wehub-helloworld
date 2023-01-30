import BaseExtension, { SocketIoSocket } from "wehub";

export default class Helloworld extends BaseExtension {
  static PLUGIN = "plugin.js"; // path is relative to project root

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
  onSocketConnect(socket: SocketIoSocket) {
    console.log("A NEW SOCKET CONNECTED");
  }

  onSocketDisconnect(socket: SocketIoSocket) {
    console.log("A SOCKET DISCONNECTED");
  }

  shutDown() {
    console.log("goodbye 🙂");
  }
}
