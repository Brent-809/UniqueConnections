import { TestBed, waitForAsync } from '@angular/core/testing';
import { EventsPage } from './events.page';
describe('EventsPage', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(), {
        fixture = TestBed.createComponent(EventsPage),
        component = fixture.componentInstance,
        fixture, : .detectChanges()
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=events.page.spec.js.map