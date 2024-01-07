import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExplorePage } from './explore.page';
const routes = [
    {
        path: '',
        component: ExplorePage
    }
];
export let ExplorePageRoutingModule = class ExplorePageRoutingModule {
};
ExplorePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ExplorePageRoutingModule);
//# sourceMappingURL=explore-routing.module.js.map