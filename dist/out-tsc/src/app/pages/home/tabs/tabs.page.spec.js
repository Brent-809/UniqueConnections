import { __awaiter } from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page';
describe('TabsPage', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [TabsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TabsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tabs.page.spec.js.map