import { __decorate } from "tslib";
// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
export let ChatService = class ChatService {
    constructor(socket) {
        this.socket = socket;
    }
    sendMessage(message, sender, groupId) {
        this.socket.emit('newMessage', { content: message, sender, groupId });
    }
    getAllMessages(groupId) {
        return this.socket.fromEvent(`allMessages-${groupId}`);
    }
    getNewMessage() {
        return this.socket.fromEvent('newMessage');
    }
    joinGroup(groupId) {
        this.socket.emit('joinGroup', { groupId });
    }
    leaveGroup(groupId) {
        this.socket.emit('leaveGroup', { groupId });
    }
};
ChatService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ChatService);
//# sourceMappingURL=chat.service.js.map