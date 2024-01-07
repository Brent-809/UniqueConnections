var FilterUsersComponent_1;
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
export let FilterUsersComponent = FilterUsersComponent_1 = class FilterUsersComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    onSearchChange(event) {
    }
    openFilterModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: FilterUsersComponent_1,
            });
            modal.present();
        });
    }
};
FilterUsersComponent = FilterUsersComponent_1 = __decorate([
    Component({
        selector: 'app-filter-users',
        templateUrl: './filter-users.component.html',
        styleUrls: ['./filter-users.component.scss'],
    })
], FilterUsersComponent);
//# sourceMappingURL=filter-users.component.js.map