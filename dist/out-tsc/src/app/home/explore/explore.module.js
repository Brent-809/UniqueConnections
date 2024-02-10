import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ExplorePageRoutingModule } from "./explore-routing.module";
import { ExplorePage } from "./explore.page";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { FollowCardComponent } from "../../shared/components/follow-card/follow-card.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { StoryCardComponent } from "../../shared/components/story-card/story-card.component";
import { GroupCardComponent } from "../../shared/components/group-card/group-card.component";
export function playerFactory() {
    return player;
}
let ExplorePageModule = class ExplorePageModule {
};
ExplorePageModule = __decorate([
    NgModule({
        declarations: [
            ExplorePage,
            GroupCardComponent,
            StoryCardComponent,
            FollowCardComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ExplorePageRoutingModule,
            LottieModule.forRoot({ player: playerFactory }),
        ],
    })
], ExplorePageModule);
export { ExplorePageModule };
//# sourceMappingURL=explore.module.js.map