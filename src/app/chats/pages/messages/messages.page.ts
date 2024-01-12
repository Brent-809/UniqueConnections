import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../friends/add/add.page";
import { ChatsApiService } from "../../chats-api.service";
import { SocketService } from "src/app/shared/services/socket.service";

interface Group {
  _id: string;
  name: string;
  image: string;
  category: string;
}

@Component({
  selector: "app-messages",
  templateUrl: "./messages.page.html",
  styleUrls: ["./messages.page.scss"],
})
export class MessagesPage implements OnInit {
  joinedGroups: Group[] = [];
  users: any[] = [];
  currentUserId: string | undefined;

  friendRequestsIds: any[] = [];

  pendingFriendRequests: { [userId: string]: User } = {};

  friendIds: User[] = [];

  pendingUsersCount!: number;

  constructor(
    private apiService: ChatsApiService,
    private router: Router,
    private socketService: SocketService
  ) {}

  async ngOnInit() {
    await this.getGroupsAndGroupById();

    this.currentUserId = this.apiService.getUserIdFromToken();
    this.socketService.onFriendRequestReceived((data) => {
      this.ngOnInit();
    });

    this.apiService.getUserById(this.currentUserId).subscribe((response) => {
      this.friendRequestsIds = response.pendingFriendRequests;
    });

    this.apiService.getAllUsers().subscribe((response) => {
      const allUserFriendIds = Array.from(
        new Set(
          response.reduce(
            (result: string | any[], user: { userFriendIds: any }) =>
              result.concat(user.userFriendIds),
            [] as string[]
          )
        )
      );

      this.users = response
        .filter((user: User) => user.verified)
        .filter((user: User) => user._id !== this.currentUserId)
        .filter((user: User) => !user.isNewUser)
        .filter((user: User) => allUserFriendIds.includes(user._id));

      // Ensure that 'response.pendingFriendRequests' is defined and an array
      if (Array.isArray(this.friendRequestsIds)) {
        // Map user IDs to user objects
        this.friendRequestsIds.forEach((userId: string) => {
          const user = this.users.find((u) => u._id === userId);
          if (user) {
            this.pendingFriendRequests[userId] = user;
          }
        });

        // Count and log the number of pending users
        const pendingUsersCount = Object.keys(
          this.pendingFriendRequests
        ).length;
        this.pendingUsersCount = pendingUsersCount;
      }
    });
  }

  async getGroupsAndGroupById() {
    const userId = this.apiService.getUserIdFromToken();

    try {
      const groupIds = await this.apiService
        .getGroupsByuser(userId)
        .toPromise();
      const groupPromises = groupIds.map((id: string) =>
        this.apiService.getGroupId(id).toPromise()
      );
      const groups = await Promise.all(groupPromises);
      this.joinedGroups = groups;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  goToGroup = (groupId: string) => {
    const userId = this.apiService.getUserIdFromToken();

    if (!userId) {
      console.error("User ID not found in token");
      return;
    }

    this.apiService.getUserById(userId).subscribe(
      (user) => {
        this.currentUserId = user;
        const joinedGroups = user.joinedGroups;

        if (joinedGroups.includes(groupId)) {
          this.router.navigate(["/group/", groupId]);
        }
      },
      (error) => {
        console.error("Error fetching user details:", error);
      }
    );
  };
}
