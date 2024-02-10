import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ChatsApiService } from "src/app/chats/chats-api.service";
import { SocketService } from "src/app/shared/services/socket.service";

export interface User {
  name: string;
  email: string;
  username: string;
  verified: boolean;
  age: number;
  _id: string;
  chosen: string;
  isNewUser: string;
  profileImg: string;
  userFriendIds: { _id: string };
  active: boolean;
}

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  users: any[] = [];
  currentUserId: string | undefined;

  friendRequestsIds: any[] = [];

  pendingFriendRequests: { [userId: string]: User } = {};

  friendIds: string[] = [];

  filteredUsers: User[] = [];

  constructor(
    private apiService: ChatsApiService,
    private alertController: AlertController,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.currentUserId = this.apiService.getUserIdFromToken();
    this.socketService.onFriendRequestReceived((data) => {
      // Handle friend request received event if needed
    });

    this.apiService.getUserById(this.currentUserId).subscribe((response) => {
      this.friendRequestsIds = response.pendingFriendRequests;
      this.friendIds = response.userFriendIds;
    });
    this.getUsers();
    this.filteredUsers = this.users;
  }

  getUsers() {
    this.apiService.getAllUsers().subscribe((response) => {
      this.users = response
        .filter((user: User) => user.verified)
        .filter((user: User) => user._id !== this.currentUserId)
        .filter((user: User) => !user.isNewUser);

      // Ensure that 'response.pendingFriendRequests' is defined and an array
      if (Array.isArray(response.pendingFriendRequests)) {
        // Map user IDs to user objects
        this.pendingFriendRequests = response.pendingFriendRequests.reduce(
          (acc: { [x: string]: any; }, userId: string | number) => {
            const user = this.users.find((u) => u._id === userId);
            if (user) {
              acc[userId] = user;
            }
            return acc;
          },
          {}
        );

        // Count and log the number of pending users
        const pendingUsersCount = Object.keys(
          this.pendingFriendRequests
        ).length;
        console.log(`Number of pending users: ${pendingUsersCount}`);
      }
    });
  }

  async AddFriend(name: string, userFriendId: string) {
    const addFriendAlert = await this.alertController.create({
      header: "Voeg vriend toe",
      subHeader: "Wil je " + name + " toevoegen?",
      buttons: [
        {
          text: "Ja",
          role: "add",
          handler: () => {
            this.addFriendRequest(userFriendId); // Updated function name
          },
        },
        {
          text: "Nee",
          role: "Cancel",
        },
      ],
    });
    addFriendAlert.present();
  }

  async addFriendRequest(userFriendId: string) {
    try {
      this.apiService.addFriend(userFriendId).subscribe(() => {
        this.ngOnInit();
      });
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  }

  acceptFriendRequest(senderId: string) {
    this.apiService.confirmFriendRequest(senderId).subscribe(() => {
      console.log("Friend request approved");
    });
  }

  declineFriendRequest(senderId: string) {
    this.socketService.sendFriendRequestAction("decline", senderId);
  }

  onSearchChange(event: any) {
    const searchQuery = event.target.value.toLowerCase();

    if (searchQuery === "") {
      this.filteredUsers = [];
    } else {
      this.filteredUsers = this.users.filter((user: User) =>
        user.name.toLowerCase().includes(searchQuery)
      );
    }
  }
}
