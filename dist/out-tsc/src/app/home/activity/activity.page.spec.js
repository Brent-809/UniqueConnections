import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivityPage } from './activity.page';
describe('ActivityPage', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(), {
        fixture = TestBed.createComponent(ActivityPage),
        component = fixture.componentInstance,
        fixture, : .detectChanges()
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=activity.page.spec.js.map