import { TestBed } from '@angular/core/testing';
import { ChatPage } from './chat.page';
describe('ChatPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        fixture = TestBed.createComponent(ChatPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat.page.spec.js.map