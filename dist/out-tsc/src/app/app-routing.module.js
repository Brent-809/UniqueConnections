import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GroupResolver } from './resolvers/groupResolver';
import { GroupInfoResolver } from './resolvers/groupInfoResolver';
const routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
    },
    {
        path: '',
        loadChildren: () => import('./pages/home/tabs/tabs.module').then((m) => m.TabsPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'registerold',
        loadChildren: () => import('./pages/auth/register/register.module').then((m) => m.RegisterPageModule),
    },
    {
        path: 'welcome',
        loadChildren: () => import('./pages/auth/welcome/welcome.module').then((m) => m.WelcomePageModule),
    },
    {
        path: 'notif',
        loadChildren: () => import('./pages/home/notif/notif.module').then((m) => m.NotifPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'newuser',
        loadChildren: () => import('./pages/auth/newuser/newuser.module').then((m) => m.NewuserPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'newuser1',
        loadChildren: () => import('./pages/auth/newuser1/newuser1.module').then((m) => m.Newuser1PageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'newuser2',
        loadChildren: () => import('./pages/auth/newuser2/newuser2.module').then((m) => m.Newuser2PageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'newuser3',
        loadChildren: () => import('./pages/auth/newuser3/newuser3.module').then((m) => m.Newuser3PageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'create-group',
        loadChildren: () => import('./pages/home/create-group/create-group.module').then((m) => m.CreateGroupPageModule),
    },
    {
        path: 'general',
        loadChildren: () => import('./pages/home/categories/general/general.module').then((m) => m.GeneralPageModule),
    },
    {
        path: 'group/:id',
        loadChildren: () => import('./pages/chats/group/group.module').then((m) => m.GroupPageModule),
        resolve: {
            group: GroupResolver,
        },
    },
    {
        path: 'group-info/:id',
        loadChildren: () => import('./pages/chats/group-info/group-info.module').then(m => m.GroupInfoPageModule),
        resolve: {
            group: GroupInfoResolver,
        },
    },
    {
        path: 'view-all',
        loadChildren: () => import('./pages/home/categories/view-all/view-all.module').then((m) => m.ViewAllPageModule),
    },
    {
        path: 'loading',
        loadChildren: () => import('./overlays/loading/loading.module').then(m => m.LoadingPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/auth/registration/register1/register1.module').then(m => m.Register1PageModule)
    },
    {
        path: 'register2',
        loadChildren: () => import('./pages/auth/registration/register2/register2.module').then(m => m.Register2PageModule)
    },
    {
        path: 'register3',
        loadChildren: () => import('./pages/auth/registration/register3/register3.module').then(m => m.Register3PageModule)
    },
    {
        path: 'register4',
        loadChildren: () => import('./pages/auth/registration/register4/register4.module').then(m => m.Register4PageModule)
    },
    {
        path: 'error',
        loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
    },
    {
        path: 'splash',
        loadChildren: () => import('./overlays/splash/splash.module').then(m => m.SplashPageModule)
    },
    {
        path: 'addfriend',
        loadChildren: () => import('./pages/friends/add/add.module').then(m => m.AddPageModule)
    },
];
export let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        ],
        exports: [RouterModule],
    })
], AppRoutingModule);
//# sourceMappingURL=app-routing.module.js.map