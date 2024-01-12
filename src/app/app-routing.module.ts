import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./shared/guards/auth.guard";
import { GroupResolver } from "./shared/resolvers/groupResolver";
import { GroupInfoResolver } from "./shared/resolvers/groupInfoResolver";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./auth/pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./home/tabs/tabs.module").then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./auth/pages/welcome/welcome.module").then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: "notif",
    loadChildren: () =>
      import("./notifications/notif/notif.module").then(
        (m) => m.NotifPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "newuser",
    loadChildren: () =>
      import("./auth/pages/new-user/newuser/newuser.module").then(
        (m) => m.NewuserPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "newuser1",
    loadChildren: () =>
      import("./auth/pages/new-user/newuser1/newuser1.module").then(
        (m) => m.Newuser1PageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "newuser2",
    loadChildren: () =>
      import("./auth/pages/new-user/newuser2/newuser2.module").then(
        (m) => m.Newuser2PageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "newuser3",
    loadChildren: () =>
      import("./auth/pages/new-user/newuser3/newuser3.module").then(
        (m) => m.Newuser3PageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "create-group",
    loadChildren: () =>
      import("./chats/pages/groups/create-group/create-group.module").then(
        (m) => m.CreateGroupPageModule
      ),
  },
  {
    path: "general",
    loadChildren: () =>
      import("./chats/pages/categories/general/general.module").then(
        (m) => m.GeneralPageModule
      ),
  },
  {
    path: "group/:id",
    loadChildren: () =>
      import("./chats/pages/groups/group/group.module").then(
        (m) => m.GroupPageModule
      ),
    resolve: {
      group: GroupResolver,
    },
  },
  {
    path: "userchat/:id",
    loadChildren: () =>
      import("./chats/pages/friends/chat/chat.module").then(
        (m) => m.ChatPageModule
      ),
    resolve: {
      group: GroupResolver,
    },
  },
  {
    path: "group-info/:id",
    loadChildren: () =>
      import("./chats/pages/groups/group-info/group-info.module").then(
        (m) => m.GroupInfoPageModule
      ),
    resolve: {
      group: GroupInfoResolver,
    },
  },
  {
    path: "view-all",
    loadChildren: () =>
      import("./chats/pages/categories/view-all/view-all.module").then(
        (m) => m.ViewAllPageModule
      ),
  },
  {
    path: "loading",
    loadChildren: () =>
      import("./shared/overlays/loading/loading.module").then(
        (m) => m.LoadingPageModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./auth/pages/registration/register1/register1.module").then(
        (m) => m.Register1PageModule
      ),
  },
  {
    path: "register2",
    loadChildren: () =>
      import("./auth/pages/registration/register2/register2.module").then(
        (m) => m.Register2PageModule
      ),
  },
  {
    path: "register3",
    loadChildren: () =>
      import("./auth/pages/registration/register3/register3.module").then(
        (m) => m.Register3PageModule
      ),
  },
  {
    path: "register4",
    loadChildren: () =>
      import("./auth/pages/registration/register4/register4.module").then(
        (m) => m.Register4PageModule
      ),
  },
  {
    path: "error",
    loadChildren: () =>
      import("./shared/pages/error/error.module").then(
        (m) => m.ErrorPageModule
      ),
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./shared/overlays/splash/splash.module").then(
        (m) => m.SplashPageModule
      ),
  },
  {
    path: "addfriend",
    loadChildren: () =>
      import("./chats/pages/friends/add/add.module").then(
        (m) => m.AddPageModule
      ),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chats/pages/friends/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./home/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./home/activity/activity.module').then( m => m.ActivityPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
