import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { StoryAvatarComponent } from "./story-avatar/story-avatar.component";
import { MessageListItemComponent } from "./message-list-item/message-list-item.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { CommentItemComponent } from "./comment-item/comment-item.component";
import { NotificationItemComponent } from "./notification-item/notification-item.component";
import { EventCardComponent } from "./event-card/event-card.component";
import { SplashComponent } from "./splash/splash.component";
import { FilterUsersComponent } from "./filter-users/filter-users.component";
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [
            StoryAvatarComponent,
            MessageListItemComponent,
            ContactCardComponent,
            CommentItemComponent,
            NotificationItemComponent,
            EventCardComponent,
            SplashComponent,
            FilterUsersComponent
        ],
        imports: [CommonModule, IonicModule.forRoot()],
        exports: [
            StoryAvatarComponent,
            MessageListItemComponent,
            ContactCardComponent,
            CommentItemComponent,
            NotificationItemComponent,
            EventCardComponent,
            SplashComponent,
            FilterUsersComponent
        ],
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map