import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
let ChatService = class ChatService {
    constructor(socket, apiService) {
        this.socket = socket;
        this.apiService = apiService;
    }
    newMessageNotification(message, sender, groupId) {
        this.sendMessage(message, sender, groupId).subscribe((response) => {
            this.apiService.sendMessageNotification(message, sender);
        });
    }
    sendMessage(message, sender, groupId) {
        return new Observable((observer) => {
            this.socket.emit("newMessage", { content: message, sender, groupId }, (response) => {
                observer.next(response);
                observer.complete();
            });
        });
    }
    getAllMessages(groupId) {
        return this.socket.fromEvent(`allMessages-${groupId}`);
    }
    getNewMessage() {
        return this.socket.fromEvent("newMessage");
    }
    joinGroup(groupId) {
        this.socket.emit("joinGroup", { groupId });
    }
    leaveGroup(groupId) {
        this.socket.emit("leaveGroup", { groupId });
    }
};
ChatService = __decorate([
    Injectable({
        providedIn: "root",
    })
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map