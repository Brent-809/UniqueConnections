import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ExplorePageRoutingModule } from "./explore-routing.module";
import { ExplorePage } from "./explore.page";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { FollowCardComponent } from "../../../components/follow-card/follow-card.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { StoryCardComponent } from "../../../components/story-card/story-card.component";
import { UtilsModule } from "../../../utils/utils.module";
import { GroupCardComponent } from "../../../components/group-card/group-card.component";
export function playerFactory() {
    return player;
}
export let ExplorePageModule = class ExplorePageModule {
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
            UtilsModule,
        ],
    })
], ExplorePageModule);
//# sourceMappingURL=explore.module.js.map