import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EventCardComponent } from './event-card.component';
describe('EventCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventCardComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(EventCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=event-card.component.spec.js.map