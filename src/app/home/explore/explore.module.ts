import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule, ModalController } from "@ionic/angular";

import { ExplorePageRoutingModule } from "./explore-routing.module";

import { ExplorePage } from "./explore.page";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { LOTTIE_OPTIONS } from "ngx-lottie/lib/symbols";
import { FollowCardComponent } from "src/app/shared/components/follow-card/follow-card.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { StoryCardComponent } from "src/app/shared/components/story-card/story-card.component";
import { GroupCardComponent } from "src/app/shared/components/group-card/group-card.component";

export function playerFactory() {
  return player;
}

@NgModule({
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
export class ExplorePageModule {}
