import { __awaiter, __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { io } from "socket.io-client"; // Import directly the io function
import { environment } from "../../environments/environment";
export let SocketService = class SocketService {
    constructor() {
        this.socket = io(environment.apiUrl);
        this.socket.on("connect", () => {
            console.log("Connected to Socket.IO server");
        });
        this.socket.on("disconnect", () => {
            console.log("Disconnected from Socket.IO server");
        });
    }
    sendMessage(message) {
        this.socket.emit("send_message", message); // Assuming your socket event is named "send_message"
    }
    onMessageReceived(callback) {
        this.socket.on("receive_message", (message) => __awaiter(this, void 0, void 0, function* () {
            callback(message);
        }));
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
//# sourceMappingURL=socket.service.js.map