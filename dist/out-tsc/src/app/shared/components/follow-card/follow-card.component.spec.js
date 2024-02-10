import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FollowCardComponent } from './follow-card.component';
describe('FollowCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FollowCardComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FollowCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=follow-card.component.spec.js.map