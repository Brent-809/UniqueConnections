import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io(environment.apiUrl);

    this.socket.on("connect", () => {
    });

    this.socket.on("disconnect", () => {
    });
  }

  sendMessage(message: any) {
    this.socket.emit("send_message", message); // Assuming your socket event is named "send_message"
  }

  onMessageReceived(callback: (message: string) => void) {
    this.socket.on("receive_message", async (message: string) => {
      callback(message);
    });
  }

  sendFriendRequestAction(action: string, senderId: string) {
    this.socket.emit("friendRequest", { action, senderId });
  }

  onFriendRequestReceived(callback: (data: any) => void) {
    this.socket.on("friendRequest", (data: any) => {
      callback(data);
    });
  }
}
