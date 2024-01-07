import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from "../../../guards/auth.guard";
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'explore',
                loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule),
            },
            {
                path: 'messages',
                loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule)
            },
            {
                path: 'notif',
                loadChildren: () => import('../notif/notif.module').then(m => m.NotifPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/explore',
                pathMatch: 'full'
            }
        ],
        canActivate: [AuthGuard],
    },
    {
        path: '',
        redirectTo: 'tabs/explore',
        pathMatch: 'full'
    },
];
export let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);
//# sourceMappingURL=tabs-routing.module.js.map