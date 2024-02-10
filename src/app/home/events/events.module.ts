import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EventsPageRoutingModule } from "./events-routing.module";

import { EventsPage } from "./events.page";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { register } from "swiper/element";
register()

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [EventsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventsPageModule {}
