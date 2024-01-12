import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "explore",
        loadChildren: () =>
          import("../explore/explore.module").then((m) => m.ExplorePageModule),
      },
      {
        path: "messages",
        loadChildren: () =>
          import("../../chats/pages/messages/messages.module").then(
            (m) => m.MessagesPageModule
          ),
      },
      {
        path: "events",
        loadChildren: () =>
          import("../events/events.module").then((m) => m.EventsPageModule),
      },
      {
        path: "activity",
        loadChildren: () =>
          import("../activity/activity.module").then((m) => m.ActivityPageModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../profile/profile.module").then((m) => m.ProfilePageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/explore",
        pathMatch: "full",
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "tabs/explore",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
