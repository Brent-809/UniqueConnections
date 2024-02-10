import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NotificationItemComponent } from './notification-item.component';
describe('NotificationItemComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationItemComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(NotificationItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notification-item.component.spec.js.map