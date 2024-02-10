import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { environment } from "../../../environments/environment";
let SocketService = class SocketService {
    constructor() {
        this.socket = io(environment.apiUrl);
        this.socket.on("connect", () => {
        });
        this.socket.on("disconnect", () => {
        });
    }
    sendMessage(message) {
        this.socket.emit("send_message", message); // Assuming your socket event is named "send_message"
    }
    onMessageReceived(callback) {
        this.socket.on("receive_message", async (message) => {
            callback(message);
        });
    }
    sendFriendRequestAction(action, senderId) {
        this.socket.emit("friendRequest", { action, senderId });
    }
    onFriendRequestReceived(callback) {
        this.socket.on("friendRequest", (data) => {
            callback(data);
        });
    }
};
SocketService = __decorate([
    Injectable({
        providedIn: "root",
    })
], SocketService);
export { SocketService };
//# sourceMappingURL=socket.service.js.map