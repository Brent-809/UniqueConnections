var FilterUsersComponent_1;
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FilterUsersComponent = FilterUsersComponent_1 = class FilterUsersComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    onSearchChange(event) {
    }
    async openFilterModal() {
        const modal = await this.modalCtrl.create({
            component: FilterUsersComponent_1,
        });
        modal.present();
    }
};
FilterUsersComponent = FilterUsersComponent_1 = __decorate([
    Component({
        selector: 'app-filter-users',
        templateUrl: './filter-users.component.html',
        styleUrls: ['./filter-users.component.scss'],
    })
], FilterUsersComponent);
export { FilterUsersComponent };
//# sourceMappingURL=filter-users.component.js.map