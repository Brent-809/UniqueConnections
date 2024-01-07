import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { IonContent } from "@ionic/angular";
import { DeleteConfirmationComponent } from "../../../components/delete-confirmation/delete-confirmation.component";
export let GroupPage = class GroupPage {
    constructor(fb, route, router, apiService, chatService, socketService, modalController) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.chatService = chatService;
        this.socketService = socketService;
        this.modalController = modalController;
        this.messages = [];
    }
    ngOnInit() {
        this.initMessageForm();
        this.fetchGroupDetails();
        this.fetchCurrentUserDetails();
        this.fetchInitialMessages();
        this.socketService.onMessageReceived((message) => {
            console.log("Received message:", message);
        });
    }
    initMessageForm() {
        this.messageForm = this.fb.group({
            message: [null],
        });
    }
    fetchCurrentUserDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = this.apiService.getUserIdFromToken();
            if (userId) {
                try {
                    const userDetails = yield this.apiService
                        .getUserById(userId)
                        .toPromise();
                    if (userDetails) {
                        this.currentUser = userDetails;
                    }
                }
                catch (error) {
                    console.error("Error retrieving user details:", error);
                }
            }
            else {
                console.error("User ID not found in token");
            }
        });
    }
    getMessageContentClass(sender) {
        return sender === this.currentUser.profileImg
            ? "bg-blue-100"
            : "bg-white";
    }
    fetchGroupDetails() {
        this.route.paramMap
            .pipe(switchMap((params) => {
            const groupId = params.get("id");
            if (groupId) {
                this.groupId = groupId;
                return this.apiService.getGroupById(groupId);
            }
            else {
                console.error("Invalid group ID");
                return [];
            }
        }))
            .subscribe((response) => {
            if (response &&
                response._id &&
                response.name &&
                response.description &&
                response.image) {
                this.name = response.name;
                this.img = response.image;
                this.desc = response.description;
            }
            else {
                console.error("Group details not found");
            }
            this.chatService.joinGroup(this.groupId);
            this.listenForMessages();
        }, (error) => {
            console.error("Error retrieving group details:", error);
        });
    }
    submitMessage() {
        const messageControl = this.messageForm.get("message");
        if (messageControl &&
            messageControl.value &&
            messageControl.value.trim() !== "") {
            this.socketService.sendMessage(messageControl.value);
            this.apiService
                .sendMessage(messageControl.value, this.currentUser.profileImg, this.groupId)
                .subscribe(() => {
                this.messageForm.reset();
                this.scrollToBottom();
            }, (error) => {
                console.error("Error sending message:", error);
            });
        }
    }
    listenForMessages() {
        this.chatService.getNewMessage().subscribe((message) => {
            if (message.groupId === this.groupId) {
                this.messages.push(message);
                this.scrollToBottom();
            }
        });
    }
    fetchInitialMessages() {
        this.apiService.getGroupMessages(this.groupId).subscribe((messages) => {
            this.messages = messages;
            this.scrollToBottom();
        }, (error) => {
            console.error("Error fetching initial messages:", error);
        });
    }
    scrollToBottom() {
        this.content.scrollToBottom();
    }
    groupInfo() {
        this.router.navigateByUrl("/group-info/" + this.groupId);
    }
    openChatPopup(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: DeleteConfirmationComponent,
                componentProps: {
                    message: message, // Pass the clicked message to the popup component
                },
            });
            return yield modal.present();
        });
    }
    Leave() {
        console.log('Leave function is called!');
    }
};
__decorate([
    ViewChild(IonContent)
], GroupPage.prototype, "content", void 0);
GroupPage = __decorate([
    Component({
        selector: "app-group",
        templateUrl: "./group.page.html",
        styleUrls: ["./group.page.scss"],
    })
], GroupPage);
//# sourceMappingURL=group.page.js.map