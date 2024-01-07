import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";
import { Message } from "./chats-api.service";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(
    private socket: Socket,
    private apiService: ApiService
  ) {}

  newMessageNotification(message: string, sender: string, groupId: string) {
    this.sendMessage(message, sender, groupId).subscribe((response) => {
      this.apiService.sendMessageNotification(message, sender);
    });
  }

  sendMessage(
    message: string,
    sender: string,
    groupId: string
  ): Observable<Message> {
    return new Observable((observer) => {
      this.socket.emit(
        "newMessage",
        { content: message, sender, groupId },
        (response: Message) => {
          observer.next(response);
          observer.complete();
        }
      );
    });
  }

  getAllMessages(groupId: string): Observable<any[]> {
    return this.socket.fromEvent(`allMessages-${groupId}`);
  }

  getNewMessage(): Observable<any> {
    return this.socket.fromEvent("newMessage");
  }

  joinGroup(groupId: string): void {
    this.socket.emit("joinGroup", { groupId });
  }

  leaveGroup(groupId: string): void {
    this.socket.emit("leaveGroup", { groupId });
  }
}
