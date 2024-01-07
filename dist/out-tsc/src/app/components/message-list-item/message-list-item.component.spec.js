import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MessageListItemComponent } from './message-list-item.component';
describe('MessageListItemComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessageListItemComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MessageListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=message-list-item.component.spec.js.map